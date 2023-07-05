/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://api-sandbox.yousign.app/v3";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Public Api v3
 * @version 3.0
 * @baseUrl https://api-sandbox.yousign.app/v3
 * @contact Support <contact@yousign.com>
 *
 * Build the best experience of digital signature through your own platform. Increase your conversion rates, leverage your data and reduce your costs with Yousign API.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  signatureRequests = {
    /**
     * No description
     *
     * @tags Signature Request
     * @name PostSignatureRequests
     * @summary Initiate a new signature request
     * @request POST:/signature_requests
     * @secure
     */
    postSignatureRequests: (
      data: {
        /**
         * Name of the signature request
         * @minLength 1
         * @maxLength 128
         */
        name: string;
        /** Delivery mode to notify signers. */
        delivery_mode: "none" | "email";
        /** Enable an ordered workflow, each signer will be requested to sign in a sequential order */
        ordered_signers?: boolean;
        /**
         * Enable automatic reminders for pending signers.
         * @default null
         */
        reminder_settings?: {
          interval_in_days: 1 | 2 | 7 | 14;
          /**
           * @min 1
           * @max 10
           * @example 5
           */
          max_occurrences: number;
        } | null;
        /**
         * tz database format
         * @example "Europe/Paris"
         */
        timezone?: string;
        /**
         * A custom note added to emails sent to signers.
         * @maxLength 500
         * @example "Please sign these documents as soon as possible."
         */
        email_custom_note?: string;
        /**
         * Due date of the signature request (yyyy-mm-dd). Default to 6 month after the activation.
         * @format date
         * @pattern ^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$
         */
        expiration_date?: string;
        /**
         * Create a signature request from an existing template. This parameter is not available in Sandbox.
         * @format uuid
         * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
         * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
         */
        template_id?: string;
        /**
         * Store a custom id that will be added to webhooks & appended to redirect urls.
         * @maxLength 255
         * @pattern ^[\w\-@.%+]+$
         */
        external_id?: string | null;
        /**
         * Use a specific branding to customize the signature experience.
         * @format uuid
         * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
         * @example "3a93d3b5-fb3b-4abf-9e70-26315b33506b"
         */
        branding_id?: string | null;
        /**
         * Use a specific Custom Experience to customize the signature experience.
         * @format uuid
         * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
         * @example "3a93d3b5-fb3b-4abf-9e70-26315b33506b"
         */
        custom_experience_id?: string | null;
        /**
         * You can directly attach orphan documents to the signature request.
         * @deprecated
         * @maxItems 5
         * @uniqueItems true
         */
        documents?: string[];
        /**
         * Can only be used if you add documents at the same time.
         * @deprecated
         */
        signers?: (
          | {
              /** create new signer */
              info: {
                /**
                 * @minLength 1
                 * @maxLength 255
                 */
                first_name: string;
                /**
                 * @minLength 1
                 * @maxLength 255
                 */
                last_name: string;
                /**
                 * @format email
                 * @minLength 1
                 */
                email: string;
                /**
                 * E.164 format. Becomes mandatory if `signature_authentication_mode` requires a phone number.
                 * @minLength 1
                 */
                phone_number?: string | null;
                locale: any;
              };
              fields?: any[];
              /** @default "electronic_signature" */
              signature_level:
                | "electronic_signature"
                | "advanced_electronic_signature"
                | "electronic_signature_with_qualified_certificate"
                | "qualified_electronic_signature_mode_1";
              /** @default null */
              signature_authentication_mode?: null | "otp_email" | "otp_sms" | "no_otp";
              redirect_urls?: {
                /**
                 * @minLength 1
                 * @maxLength 255
                 */
                success?: string | null;
                /**
                 * @minLength 1
                 * @maxLength 255
                 */
                error?: string | null;
              };
              custom_text?: {
                /**
                 * @minLength 1
                 * @maxLength 150
                 */
                request_subject?: string | null;
                /**
                 * @minLength 1
                 * @maxLength 500
                 */
                request_body?: string | null;
                /**
                 * @minLength 1
                 * @maxLength 150
                 */
                reminder_subject?: string | null;
                /**
                 * @minLength 1
                 * @maxLength 500
                 */
                reminder_body?: string | null;
              };
            }
          | {
              /**
               * Create signer from an existing user
               * @format uuid
               * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
               * @example "8b6ed2f3-244f-487a-baa1-bbe4f51c8744"
               */
              user_id: string;
              fields?: any[];
              /** @default "electronic_signature" */
              signature_level:
                | "electronic_signature"
                | "advanced_electronic_signature"
                | "electronic_signature_with_qualified_certificate"
                | "qualified_electronic_signature_mode_1";
              /** @default null */
              signature_authentication_mode?: null | "otp_email" | "otp_sms" | "no_otp";
              redirect_urls?: {
                /**
                 * @minLength 1
                 * @maxLength 255
                 */
                success?: string | null;
                /**
                 * @minLength 1
                 * @maxLength 255
                 */
                error?: string | null;
              };
              custom_text?: {
                /**
                 * @minLength 1
                 * @maxLength 150
                 */
                request_subject?: string | null;
                /**
                 * @minLength 1
                 * @maxLength 500
                 */
                request_body?: string | null;
                /**
                 * @minLength 1
                 * @maxLength 150
                 */
                reminder_subject?: string | null;
                /**
                 * @minLength 1
                 * @maxLength 500
                 */
                reminder_body?: string | null;
              };
            }
          | {
              /**
               * Create signer from an existing contact
               * @format uuid
               * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
               * @example "ddecfb85-8a45-4254-b940-6171b8df0a90"
               */
              contact_id: string;
              fields?: any[];
              /** @default "electronic_signature" */
              signature_level:
                | "electronic_signature"
                | "advanced_electronic_signature"
                | "electronic_signature_with_qualified_certificate"
                | "qualified_electronic_signature_mode_1";
              /** @default null */
              signature_authentication_mode?: null | "otp_email" | "otp_sms" | "no_otp";
              redirect_urls?: {
                /**
                 * @minLength 1
                 * @maxLength 255
                 */
                success?: string | null;
                /**
                 * @minLength 1
                 * @maxLength 255
                 */
                error?: string | null;
              };
              custom_text?: {
                /**
                 * @minLength 1
                 * @maxLength 150
                 */
                request_subject?: string | null;
                /**
                 * @minLength 1
                 * @maxLength 500
                 */
                request_body?: string | null;
                /**
                 * @minLength 1
                 * @maxLength 150
                 */
                reminder_subject?: string | null;
                /**
                 * @minLength 1
                 * @maxLength 500
                 */
                reminder_body?: string | null;
              };
            }
          | ({
              /** create new signer */
              info: {
                /**
                 * @minLength 1
                 * @maxLength 255
                 */
                first_name: string;
                /**
                 * @minLength 1
                 * @maxLength 255
                 */
                last_name: string;
                /**
                 * @format email
                 * @minLength 1
                 */
                email: string;
                /**
                 * E.164 format. Becomes mandatory if `signature_authentication_mode` requires a phone number.
                 * @minLength 1
                 */
                phone_number?: string | null;
                locale: any;
              };
              fields?: any[];
              /** @default "electronic_signature" */
              signature_level:
                | "electronic_signature"
                | "advanced_electronic_signature"
                | "electronic_signature_with_qualified_certificate"
                | "qualified_electronic_signature_mode_1";
              /** @default null */
              signature_authentication_mode?: null | "otp_email" | "otp_sms" | "no_otp";
              redirect_urls?: {
                /**
                 * @minLength 1
                 * @maxLength 255
                 */
                success?: string | null;
                /**
                 * @minLength 1
                 * @maxLength 255
                 */
                error?: string | null;
              };
              custom_text?: {
                /**
                 * @minLength 1
                 * @maxLength 150
                 */
                request_subject?: string | null;
                /**
                 * @minLength 1
                 * @maxLength 500
                 */
                request_body?: string | null;
                /**
                 * @minLength 1
                 * @maxLength 150
                 */
                reminder_subject?: string | null;
                /**
                 * @minLength 1
                 * @maxLength 500
                 */
                reminder_body?: string | null;
              };
            } & {
              /**
               * Create signer from an existing user
               * @format uuid
               * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
               * @example "8b6ed2f3-244f-487a-baa1-bbe4f51c8744"
               */
              user_id: string;
              fields?: any[];
              /** @default "electronic_signature" */
              signature_level:
                | "electronic_signature"
                | "advanced_electronic_signature"
                | "electronic_signature_with_qualified_certificate"
                | "qualified_electronic_signature_mode_1";
              /** @default null */
              signature_authentication_mode?: null | "otp_email" | "otp_sms" | "no_otp";
              redirect_urls?: {
                /**
                 * @minLength 1
                 * @maxLength 255
                 */
                success?: string | null;
                /**
                 * @minLength 1
                 * @maxLength 255
                 */
                error?: string | null;
              };
              custom_text?: {
                /**
                 * @minLength 1
                 * @maxLength 150
                 */
                request_subject?: string | null;
                /**
                 * @minLength 1
                 * @maxLength 500
                 */
                request_body?: string | null;
                /**
                 * @minLength 1
                 * @maxLength 150
                 */
                reminder_subject?: string | null;
                /**
                 * @minLength 1
                 * @maxLength 500
                 */
                reminder_body?: string | null;
              };
            } & {
              /**
               * Create signer from an existing contact
               * @format uuid
               * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
               * @example "ddecfb85-8a45-4254-b940-6171b8df0a90"
               */
              contact_id: string;
              fields?: any[];
              /** @default "electronic_signature" */
              signature_level:
                | "electronic_signature"
                | "advanced_electronic_signature"
                | "electronic_signature_with_qualified_certificate"
                | "qualified_electronic_signature_mode_1";
              /** @default null */
              signature_authentication_mode?: null | "otp_email" | "otp_sms" | "no_otp";
              redirect_urls?: {
                /**
                 * @minLength 1
                 * @maxLength 255
                 */
                success?: string | null;
                /**
                 * @minLength 1
                 * @maxLength 255
                 */
                error?: string | null;
              };
              custom_text?: {
                /**
                 * @minLength 1
                 * @maxLength 150
                 */
                request_subject?: string | null;
                /**
                 * @minLength 1
                 * @maxLength 500
                 */
                request_body?: string | null;
                /**
                 * @minLength 1
                 * @maxLength 150
                 */
                reminder_subject?: string | null;
                /**
                 * @minLength 1
                 * @maxLength 500
                 */
                reminder_body?: string | null;
              };
            })
        )[];
        /**
         * Scope the signature request to a specific workspace
         * @format uuid
         * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
         * @example "89120884-d29a-4b1a-ac7b-a9e73a872795"
         */
        workspace_id?: string | null;
        /**
         * Define the locale for the generated audit trail.
         * @example "en"
         */
        audit_trail_locale?: "en" | "fr" | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @minLength 1
           * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
           * @example "89120884-d29a-4b1a-ac7b-a9e73a872795"
           */
          id: string;
          status: "draft" | "ongoing" | "done" | "deleted" | "expired" | "canceled" | "approval" | "rejected";
          /**
           * @minLength 1
           * @maxLength 128
           * @example "signature request name"
           */
          name: string;
          delivery_mode: "email" | "none";
          /**
           * @format date-time
           * @minLength 1
           * @example "2024-01-18T22:59:00+00:00"
           */
          created_at: string;
          /** Enable an ordered workflow, each signer will be requested to sign in a sequential order */
          ordered_signers: boolean;
          reminder_settings: {
            interval_in_days: 1 | 2 | 7 | 14;
            /**
             * @min 1
             * @max 10
             */
            max_occurrences: number;
          } | null;
          /** @example "Europe/Paris" */
          timezone: string;
          /** @example "Please sign these documents as soon as possible." */
          email_custom_note: string | null;
          /**
           * @format date-time
           * @example "2024-01-18T22:59:00+00:00"
           */
          expiration_date: string;
          source:
            | "app"
            | "public_api"
            | "connector_hubspot_api"
            | "connector_salesforce_api"
            | "connector_google_api"
            | "connector_zapier_api";
          signers: {
            id: string;
            status:
              | "initiated"
              | "notified"
              | "verified"
              | "processing"
              | "consent_given"
              | "signed"
              | "aborted"
              | "error";
          }[];
          approvers?: {
            id: string;
            status: "initiated" | "notified" | "approved" | "rejected";
          }[];
          documents: {
            id: string;
            nature: "attachment" | "signable_document";
          }[];
          sender: {
            id?: string;
            email?: string;
          } | null;
          /** @example "An_external-ID" */
          external_id: string | null;
          /**
           * @deprecated
           * @format uuid
           * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
           * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
           */
          branding_id: string | null;
          /**
           * @format uuid
           * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
           * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
           */
          custom_experience_id: string | null;
          /**
           * @format uuid
           * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
           * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
           */
          workspace_id?: string;
          /** @example "en" */
          audit_trail_locale: "en" | "fr";
        },
        void
      >({
        path: `/signature_requests`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Signature Request
     * @name GetSignatureRequests
     * @summary List all Signature Requests
     * @request GET:/signature_requests
     * @secure
     */
    getSignatureRequests: (
      query?: {
        /** Filter by status */
        status?: "draft" | "ongoing" | "done" | "deleted" | "expired" | "canceled" | "approval" | "rejected";
        /**
         * Filter by external_id
         * @pattern ^[\w\-@.%+]+$
         * @example "an_external_id"
         */
        external_id?: string;
        /** Filter by source */
        "source[]"?: ("app" | "public_api")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          meta?: any;
          data?: any[];
        },
        void
      >({
        path: `/signature_requests`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Signature Request
     * @name GetSignatureRequestsSignatureRequestId
     * @summary Fetch a signature request
     * @request GET:/signature_requests/{signatureRequestId}
     * @secure
     */
    getSignatureRequestsSignatureRequestId: (signatureRequestId: any, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/signature_requests/${signatureRequestId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Signature Request
     * @name PatchSignatureRequestsSignatureRequestId
     * @summary Update a Signature Request
     * @request PATCH:/signature_requests/{signatureRequestId}
     * @secure
     */
    patchSignatureRequestsSignatureRequestId: (
      signatureRequestId: any,
      data: {
        /**
         * @minLength 1
         * @maxLength 128
         */
        name?: string;
        /** Delivery mode to notify signers. */
        delivery_mode?: "none" | "email";
        /** Enable an ordered workflow, each signer will be requested to sign in a sequential order */
        ordered_signers?: boolean;
        reminder_settings?: {
          interval_in_days: 1 | 2 | 7 | 14;
          /**
           * @min 1
           * @max 10
           * @example 5
           */
          max_occurrences: number;
        } | null;
        /**
         * tz database format
         * @example "Europe/Paris"
         */
        timezone?: string;
        /**
         * @maxLength 500
         * @example "Please sign these documents as soon as possible."
         */
        email_custom_note?: string | null;
        /**
         * Due date of the signature request (yyyy-mm-dd).
         * @format date
         * @pattern ^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$
         */
        expiration_date?: string;
        /**
         * @maxLength 255
         * @pattern ^[\w\-@.%+]+$
         */
        external_id?: string | null;
        /**
         * @format uuid
         * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
         * @example "3a93d3b5-fb3b-4abf-9e70-26315b33506b"
         */
        branding_id?: string | null;
        /**
         * Use a specific Custom Experience to customize the signature experience.
         * @format uuid
         * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
         * @example "3a93d3b5-fb3b-4abf-9e70-26315b33506b"
         */
        custom_experience_id?: string | null;
        /**
         * Transfer the Signature Request into a given Workspace.
         * @format uuid
         * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
         * @example "3a93d3b5-fb3b-4abf-9e70-26315b33506b"
         */
        workspace_id?: string | null;
        /**
         * Define the locale for the generated audit trail.
         * @example "en"
         */
        audit_trail_locale?: "en" | "fr" | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/signature_requests/${signatureRequestId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a signature request (in draft status)
     *
     * @tags Signature Request
     * @name DeleteSignatureRequestsSignatureRequestId
     * @summary Delete a signature request
     * @request DELETE:/signature_requests/{signatureRequestId}
     * @secure
     */
    deleteSignatureRequestsSignatureRequestId: (signatureRequestId: any, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/signature_requests/${signatureRequestId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Signature Request
     * @name PostSignatureRequestsSignatureRequestIdSignatures
     * @summary Activate a signature request
     * @request POST:/signature_requests/{signatureRequestId}/activate
     * @secure
     */
    postSignatureRequestsSignatureRequestIdSignatures: (signatureRequestId: string, params: RequestParams = {}) =>
      this.request<
        {
          /**
           * @minLength 1
           * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
           * @example "89120884-d29a-4b1a-ac7b-a9e73a872795"
           */
          id: string;
          status: "draft" | "ongoing" | "done" | "deleted" | "expired" | "canceled" | "approval" | "rejected";
          /**
           * @minLength 1
           * @maxLength 128
           * @example "signature request name"
           */
          name: string;
          delivery_mode: "email" | "none";
          /**
           * @format date-time
           * @minLength 1
           * @example "2024-01-18T22:59:00+00:00"
           */
          created_at: string;
          /** Enable an ordered workflow, each signer will be requested to sign in a sequential order */
          ordered_signers: boolean;
          reminder_settings: {
            interval_in_days: 1 | 2 | 7 | 14;
            /**
             * @min 1
             * @max 10
             */
            max_occurrences: number;
          } | null;
          /** @example "Europe/Paris" */
          timezone: string;
          /** @example "Please sign these documents as soon as possible." */
          email_custom_note: string | null;
          /**
           * @format date-time
           * @example "2024-01-18T22:59:00+00:00"
           */
          expiration_date: string;
          /**
           * @minItems 1
           * @uniqueItems true
           */
          signers: {
            /**
             * @format uuid
             * @minLength 1
             */
            id: string;
            /** @minLength 1 */
            status:
              | "initiated"
              | "notified"
              | "verified"
              | "processing"
              | "consent_given"
              | "signed"
              | "aborted"
              | "error";
            /**
             * @format uri
             * @minLength 1
             */
            signature_link: string | null;
            /**
             * @format date-time
             * @example "2024-01-18T22:59:00+00:00"
             */
            signature_link_expiration_date: string | null;
          }[];
          /** @uniqueItems true */
          approvers?: {
            /**
             * @format uuid
             * @minLength 1
             */
            id: string;
            /** @minLength 1 */
            status: "initiated" | "notified" | "approved" | "rejected";
            /**
             * @format uri
             * @minLength 1
             */
            approval_link: string | null;
            /**
             * @format date-time
             * @example "2024-01-18T22:59:00+00:00"
             */
            approval_link_expiration_date: string | null;
          }[];
          documents: {
            id: string;
            nature: string;
          }[];
          /**
           * @maxLength 255
           * @pattern ^[\w\-@.%+]+$
           */
          external_id: string | null;
          /**
           * @format uuid
           * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
           * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
           */
          branding_id: string | null;
          /**
           * @format uuid
           * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
           * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
           */
          custom_experience_id: string | null;
          /** @example "en" */
          audit_trail_locale: "en" | "fr";
        },
        void
      >({
        path: `/signature_requests/${signatureRequestId}/activate`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Signature Request
     * @name PostSignatureRequestsSignatureRequestIdCancel
     * @summary Cancel a Signature Request
     * @request POST:/signature_requests/{signatureRequestId}/cancel
     * @secure
     */
    postSignatureRequestsSignatureRequestIdCancel: (
      signatureRequestId: string,
      data: {
        reason: "contractualization_aborted" | "errors_in_document" | "other";
        /** @maxLength 500 */
        custom_note: string | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/signature_requests/${signatureRequestId}/cancel`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Signature Request
     * @name PostSignatureRequestsSignatureRequestIdReactivate
     * @summary Reactivate an expired signature request
     * @request POST:/signature_requests/{signatureRequestId}/reactivate
     * @secure
     */
    postSignatureRequestsSignatureRequestIdReactivate: (
      signatureRequestId: string,
      data: {
        /**
         * Due date of the signature request (yyyy-mm-dd). Default to 6 month after the activation.
         * @format date
         * @pattern ^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$
         */
        expiration_date: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/signature_requests/${signatureRequestId}/reactivate`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name PostSignatureRequestsSignatureRequestIdDocuments
     * @summary Add Document to a Signature Request
     * @request POST:/signature_requests/{signatureRequestId}/documents
     * @secure
     */
    postSignatureRequestsSignatureRequestIdDocuments: (
      signatureRequestId: string,
      data: any,
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/signature_requests/${signatureRequestId}/documents`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name GetSignatureRequestsSignatureRequestIdDocuments
     * @summary List Signature Request's documents
     * @request GET:/signature_requests/{signatureRequestId}/documents
     * @secure
     */
    getSignatureRequestsSignatureRequestIdDocuments: (
      signatureRequestId: string,
      query?: {
        /** Filter by nature */
        nature?: "attachment" | "signable_document";
      },
      params: RequestParams = {},
    ) =>
      this.request<any[], void>({
        path: `/signature_requests/${signatureRequestId}/documents`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name GetSignatureRequestsSignatureRequestIdDocumentsDownload
     * @summary Download Signature Request's documents
     * @request GET:/signature_requests/{signatureRequestId}/documents/download
     * @secure
     */
    getSignatureRequestsSignatureRequestIdDocumentsDownload: (
      signatureRequestId: string,
      query?: {
        /** Specify documents version to download, "completed" is only available when the signature request status is "done". */
        version?: "current" | "completed";
        /** Force zip archive download */
        archive?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, void>({
        path: `/signature_requests/${signatureRequestId}/documents/download`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name GetSignatureRequestsSignatureRequestIdDocumentsDocumentId
     * @summary Get a Document
     * @request GET:/signature_requests/{signatureRequestId}/documents/{documentId}
     * @secure
     */
    getSignatureRequestsSignatureRequestIdDocumentsDocumentId: (
      documentId: any,
      signatureRequestId: string,
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/signature_requests/${signatureRequestId}/documents/${documentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name DeleteSignatureRequestsSignatureRequestIdDocumentsDocumentId
     * @summary Delete a Document
     * @request DELETE:/signature_requests/{signatureRequestId}/documents/{documentId}
     * @secure
     */
    deleteSignatureRequestsSignatureRequestIdDocumentsDocumentId: (
      documentId: any,
      signatureRequestId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/signature_requests/${signatureRequestId}/documents/${documentId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name PatchSignatureRequestsSignatureRequestIdDocumentsDocumentId
     * @summary Update a Document
     * @request PATCH:/signature_requests/{signatureRequestId}/documents/{documentId}
     * @secure
     */
    patchSignatureRequestsSignatureRequestIdDocumentsDocumentId: (
      documentId: any,
      signatureRequestId: string,
      data: {
        nature?: "attachment" | "signable_document";
        /**
         * Insert just after the position of the specified document id
         * @format uuid
         * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
         * @example "8b6ed2f3-244f-487a-baa1-bbe4f51c8744"
         */
        insert_after_id?: string | null;
        /**
         * The password required to unlock the document if it is protected
         * @example "MyPa$$word"
         */
        password?: string;
        initials?: null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/signature_requests/${signatureRequestId}/documents/${documentId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name GetSignatureRequestsSignatureRequestIdDocumentsDocumentsIdDownload
     * @summary Download a single Signature Request's Document
     * @request GET:/signature_requests/{signatureRequestId}/documents/{documentId}/download
     * @secure
     */
    getSignatureRequestsSignatureRequestIdDocumentsDocumentsIdDownload: (
      documentId: any,
      signatureRequestId: string,
      params: RequestParams = {},
    ) =>
      this.request<File, void>({
        path: `/signature_requests/${signatureRequestId}/documents/${documentId}/download`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name PostSignatureRequestsSignatureRequestIdDocumentsDocumentIdReplace
     * @summary Replace a Document in a Signature Request
     * @request POST:/signature_requests/{signatureRequestId}/documents/{documentId}/replace
     * @secure
     */
    postSignatureRequestsSignatureRequestIdDocumentsDocumentIdReplace: (
      documentId: any,
      signatureRequestId: string,
      data: {
        /** @format binary */
        file: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/signature_requests/${signatureRequestId}/documents/${documentId}/replace`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Signer
     * @name PostSignatureRequestsSignatureRequestIdSigners
     * @summary Create a new Signer
     * @request POST:/signature_requests/{signatureRequestId}/signers
     * @secure
     */
    postSignatureRequestsSignatureRequestIdSigners: (
      signatureRequestId: string,
      data:
        | {
            info: {
              /**
               * @minLength 1
               * @maxLength 255
               */
              first_name: string;
              /**
               * @minLength 1
               * @maxLength 255
               */
              last_name: string;
              /**
               * @format email
               * @minLength 1
               */
              email: string;
              /**
               * E.164 format. Becomes mandatory if `signature_authentication_mode` requires a phone number.
               * @minLength 1
               */
              phone_number?: string | null;
              locale: any;
            };
            fields?: (
              | {
                  /**
                   * @format uuid
                   * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
                   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
                   */
                  document_id: string;
                  type: "signature";
                  /**
                   * Default value is 37
                   * @min 37
                   * @max 32767
                   */
                  height?: number;
                  /**
                   * Default value is 85
                   * @min 85
                   * @max 32767
                   */
                  width?: number;
                  /** @min 1 */
                  page: number;
                  /**
                   * @min 0
                   * @max 32767
                   */
                  x: number;
                  /**
                   * @min 0
                   * @max 32767
                   */
                  y: number;
                }
              | {
                  /**
                   * @format uuid
                   * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
                   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
                   */
                  document_id: string;
                  type: "mention";
                  /**
                   * If not set, the width is automatically calculated with the mention length
                   * @min 24
                   */
                  width?: number;
                  /** @min 1 */
                  page: number;
                  /**
                   * @min 0
                   * @max 32767
                   */
                  x: number;
                  /**
                   * @min 0
                   * @max 32767
                   */
                  y: number;
                  mention: string;
                }
              | {
                  /**
                   * @format uuid
                   * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
                   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
                   */
                  document_id: string;
                  type: "text";
                  /**
                   * If not set, the width is automatically calculated with the max_length value
                   * @min 24
                   * @example 90
                   */
                  width?: number;
                  /**
                   * The height must be 24 or a multiple of 15 greater than 24. If height is provided, max_length must be less than or equal to the maximum number of characters based on the width and height of the text field.
                   * @min 24
                   * @example 150
                   */
                  height?: number;
                  /** @min 1 */
                  page: number;
                  /**
                   * @min 0
                   * @max 32767
                   */
                  x: number;
                  /**
                   * @min 0
                   * @max 32767
                   */
                  y: number;
                  /**
                   * @min 1
                   * @max 32767
                   */
                  max_length: number;
                  /**
                   * @maxLength 255
                   * @example "Where is Brian ?"
                   */
                  question: string;
                  /** @example "Give Brian's location" */
                  instruction?: string | null;
                  optional: boolean;
                }
              | {
                  /**
                   * @format uuid
                   * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
                   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
                   */
                  document_id: string;
                  type: "checkbox";
                  /** @min 1 */
                  page: number;
                  /**
                   * @min 0
                   * @max 32767
                   */
                  x: number;
                  /**
                   * @min 0
                   * @max 32767
                   */
                  y: number;
                  /**
                   * The omission of size parameter is considered as deprecated. The size determines both the width and height of the checkbox.
                   * @min 8
                   * @max 30
                   */
                  size?: number;
                  optional: boolean;
                  /** @example "Checkbox 1" */
                  name?: string | null;
                  checked: boolean;
                }
              | {
                  /**
                   * @format uuid
                   * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
                   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
                   */
                  document_id: string;
                  type: "radio_group";
                  /** @min 1 */
                  page: number;
                  optional: boolean;
                  radios: {
                    /**
                     * @min 0
                     * @max 32767
                     */
                    x: number;
                    /**
                     * @min 0
                     * @max 32767
                     */
                    y: number;
                    /**
                     * The omission of size parameter is considered as deprecated. The size determines both the width and height of the checkbox.
                     * @min 8
                     * @max 30
                     */
                    size?: number;
                  }[];
                }
            )[];
            /**
             * Insert just after the position of the specified signer id
             * @format uuid
             * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
             * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
             */
            insert_after_id?: string | null;
            signature_level:
              | "electronic_signature"
              | "advanced_electronic_signature"
              | "electronic_signature_with_qualified_certificate"
              | "qualified_electronic_signature_mode_1";
            signature_authentication_mode?: "otp_email" | "otp_sms" | "no_otp" | null;
            redirect_urls?: {
              /**
               * @minLength 1
               * @maxLength 255
               */
              success?: string | null;
              /**
               * @minLength 1
               * @maxLength 255
               */
              error?: string | null;
            };
            custom_text?: {
              /**
               * @minLength 1
               * @maxLength 150
               */
              request_subject?: string | null;
              /**
               * @minLength 1
               * @maxLength 500
               */
              request_body?: string | null;
              /**
               * @minLength 1
               * @maxLength 150
               */
              reminder_subject?: string | null;
              /**
               * @minLength 1
               * @maxLength 500
               */
              reminder_body?: string | null;
            };
            delivery_mode?: any;
          }
        | {
            /**
             * Create signer from an existing user
             * @format uuid
             * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
             * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
             */
            user_id: string;
            fields?: any[];
            /**
             * Insert just after the position of the specified signer id
             * @format uuid
             * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
             * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
             */
            insert_after_id?: string | null;
            signature_level:
              | "electronic_signature"
              | "advanced_electronic_signature"
              | "electronic_signature_with_qualified_certificate"
              | "qualified_electronic_signature_mode_1";
            signature_authentication_mode?: "otp_email" | "otp_sms" | "no_otp" | null;
            redirect_urls?: {
              /**
               * @minLength 1
               * @maxLength 255
               */
              success?: string | null;
              /**
               * @minLength 1
               * @maxLength 255
               */
              error?: string | null;
            };
            custom_text?: {
              /**
               * @minLength 1
               * @maxLength 150
               */
              request_subject?: string | null;
              /**
               * @minLength 1
               * @maxLength 500
               */
              request_body?: string | null;
              /**
               * @minLength 1
               * @maxLength 150
               */
              reminder_subject?: string | null;
              /**
               * @minLength 1
               * @maxLength 500
               */
              reminder_body?: string | null;
            };
            delivery_mode?: any;
          }
        | {
            /**
             * Create signer from an existing contact
             * @format uuid
             * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
             * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
             */
            contact_id: string;
            fields?: any[];
            /**
             * Insert just after the position of the specified signer id
             * @format uuid
             * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
             * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
             */
            insert_after_id?: string | null;
            signature_level:
              | "electronic_signature"
              | "advanced_electronic_signature"
              | "electronic_signature_with_qualified_certificate"
              | "qualified_electronic_signature_mode_1";
            signature_authentication_mode?: "otp_email" | "otp_sms" | "no_otp" | null;
            redirect_urls?: {
              /**
               * @minLength 1
               * @maxLength 255
               */
              success?: string | null;
              /**
               * @minLength 1
               * @maxLength 255
               */
              error?: string | null;
            };
            custom_text?: {
              /**
               * @minLength 1
               * @maxLength 150
               */
              request_subject?: string | null;
              /**
               * @minLength 1
               * @maxLength 500
               */
              request_body?: string | null;
              /**
               * @minLength 1
               * @maxLength 150
               */
              reminder_subject?: string | null;
              /**
               * @minLength 1
               * @maxLength 500
               */
              reminder_body?: string | null;
            };
            delivery_mode?: any;
          },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format uuid
           * @minLength 1
           */
          id: string;
          info: {
            /** @minLength 1 */
            first_name: string;
            /** @minLength 1 */
            last_name: string;
            /**
             * @format email
             * @minLength 1
             */
            email: string;
            /**
             * E.164 format. Becomes mandatory if `signature_authentication_mode` requires a phone number.
             * @minLength 1
             */
            phone_number: string | null;
            locale: any;
          };
          /** @minLength 1 */
          status:
            | "initiated"
            | "notified"
            | "verified"
            | "processing"
            | "consent_given"
            | "signed"
            | "aborted"
            | "error";
          fields: (
            | {
                /**
                 * @format uuid
                 * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
                 * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
                 */
                id: string;
                /**
                 * @format uuid
                 * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
                 * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
                 */
                document_id: string;
                type: "signature";
                /**
                 * @min 37
                 * @max 32767
                 */
                height: number;
                /**
                 * @min 85
                 * @max 32767
                 */
                width: number;
                /** @min 1 */
                page: number;
                /**
                 * @min 0
                 * @max 32767
                 */
                x: number;
                /**
                 * @min 0
                 * @max 32767
                 */
                y: number;
              }
            | {
                /**
                 * @format uuid
                 * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
                 * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
                 */
                id: string;
                /**
                 * @format uuid
                 * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
                 * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
                 */
                document_id: string;
                type: "text";
                /**
                 * If not set, the width is automatically calculated with the max_length value
                 * @min 24
                 * @example 90
                 */
                width: number;
                /**
                 * The height must be 24 or a multiple of 15 greater than 24. If height is provided, max_length must be less than or equal to the maximum number of characters based on the width and height of the text field.
                 * @min 24
                 * @example 150
                 */
                height: number;
                /** @min 1 */
                page: number;
                /**
                 * @min 0
                 * @max 32767
                 */
                x: number;
                /**
                 * @min 0
                 * @max 32767
                 */
                y: number;
                /**
                 * @maxLength 255
                 * @example "Where is Brian ?"
                 */
                question: string;
                /** @example "Give Brian's location" */
                instruction: string | null;
                optional: boolean;
                /** @example "Brian is in the kitchen !" */
                answer: string | null;
                /**
                 * @min 1
                 * @max 32767
                 */
                max_length: number;
              }
            | {
                /**
                 * @format uuid
                 * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
                 * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
                 */
                id: string;
                /**
                 * @format uuid
                 * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
                 * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
                 */
                document_id: string;
                type: "mention";
                /**
                 * @min 24
                 * @max 24
                 */
                height: number;
                /** @min 24 */
                width: number;
                /** @min 1 */
                page: number;
                /**
                 * @min 0
                 * @max 32767
                 */
                x: number;
                /**
                 * @min 0
                 * @max 32767
                 */
                y: number;
                mention: string;
              }
            | {
                /**
                 * @format uuid
                 * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
                 * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
                 */
                id: string;
                /**
                 * @format uuid
                 * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
                 * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
                 */
                document_id: string;
                type: "checkbox";
                /**
                 * Checkbox name
                 * @minLength 1
                 * @maxLength 128
                 * @example "Checkbox name"
                 */
                name: string | null;
                /** Signer has checked the checkbox */
                checked: boolean;
                /** @min 1 */
                page: number;
                optional: boolean;
                /**
                 * @min 0
                 * @max 32767
                 */
                x: number;
                /**
                 * @min 0
                 * @max 32767
                 */
                y: number;
                /**
                 * The size determines both the width and height of the checkbox.
                 * @min 8
                 * @max 30
                 */
                size?: number;
              }
            | {
                /**
                 * @format uuid
                 * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
                 * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
                 */
                id: string;
                /**
                 * @format uuid
                 * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
                 * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
                 */
                document_id: string;
                type: "radio_group";
                /** @min 1 */
                page: number;
                /** Does the Signer has to select one of the radio buttons from this group? */
                optional: boolean;
                radios: {
                  /**
                   * @min 0
                   * @max 32767
                   */
                  x: number;
                  /**
                   * @min 0
                   * @max 32767
                   */
                  y: number;
                  /**
                   * The size determines both the width and height of the checkbox.
                   * @min 8
                   * @max 30
                   */
                  size: number;
                }[];
              }
          )[];
          /** @default "electronic_signature" */
          signature_level:
            | "electronic_signature"
            | "advanced_electronic_signature"
            | "electronic_signature_with_qualified_certificate"
            | "qualified_electronic_signature_mode_1";
          /** @default null */
          signature_authentication_mode: null | "otp_email" | "otp_sms" | "no_otp";
          /**
           * @format uri
           * @minLength 1
           */
          signature_link: string | null;
          /**
           * @format date-time
           * @example "2024-01-18T22:59:00+00:00"
           */
          signature_link_expiration_date: string | null;
          /** @minLength 1 */
          signature_image_preview: string | null;
          redirect_urls: {
            /**
             * @minLength 1
             * @example "https://example.com/success"
             */
            success: string | null;
            /**
             * @minLength 1
             * @example "https://example.com/error"
             */
            error: string | null;
          };
          custom_text: {
            /**
             * @minLength 1
             * @maxLength 150
             */
            request_subject: string | null;
            /**
             * @minLength 1
             * @maxLength 500
             */
            request_body: string | null;
            /**
             * @minLength 1
             * @maxLength 150
             */
            reminder_subject: string | null;
            /**
             * @minLength 1
             * @maxLength 500
             */
            reminder_body: string | null;
          };
          delivery_mode: "email" | "none" | null;
        },
        void
      >({
        path: `/signature_requests/${signatureRequestId}/signers`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Signer
     * @name GetSignatureRequestsSignatureRequestIdSigners
     * @summary List Signature Request's Signers
     * @request GET:/signature_requests/{signatureRequestId}/signers
     * @secure
     */
    getSignatureRequestsSignatureRequestIdSigners: (signatureRequestId: string, params: RequestParams = {}) =>
      this.request<any[], void>({
        path: `/signature_requests/${signatureRequestId}/signers`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Signer
     * @name GetSignersSignersId
     * @summary Get a Signer
     * @request GET:/signature_requests/{signatureRequestId}/signers/{signerId}
     * @secure
     */
    getSignersSignersId: (signerId: any, signatureRequestId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/signature_requests/${signatureRequestId}/signers/${signerId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Signer
     * @name PatchSignatureRequestsSignatureRequestIdSignersSignerId
     * @summary Update a Signer
     * @request PATCH:/signature_requests/{signatureRequestId}/signers/{signerId}
     * @secure
     */
    patchSignatureRequestsSignatureRequestIdSignersSignerId: (
      signerId: any,
      signatureRequestId: string,
      data: {
        info?: {
          /**
           * @minLength 1
           * @maxLength 255
           */
          first_name?: string;
          /**
           * @minLength 1
           * @maxLength 255
           */
          last_name?: string;
          /**
           * @format email
           * @minLength 1
           */
          email?: string;
          /**
           * E.164 format
           * @minLength 1
           */
          phone_number?: string;
          locale?: any;
        } | null;
        /**
         * @format uuid
         * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
         * @example "8b6ed2f3-244f-487a-baa1-bbe4f51c8744"
         */
        insert_after_id?: string | null;
        /** @default "electronic_signature" */
        signature_level?:
          | "electronic_signature"
          | "advanced_electronic_signature"
          | "electronic_signature_with_qualified_certificate"
          | "qualified_electronic_signature_mode_1";
        signature_authentication_mode?: "otp_email" | "otp_sms" | "no_otp" | null;
        redirect_urls?: {
          /**
           * @minLength 1
           * @maxLength 255
           */
          success?: string | null;
          /**
           * @minLength 1
           * @maxLength 255
           */
          error?: string | null;
        };
        custom_text?: {
          /**
           * @minLength 1
           * @maxLength 150
           */
          request_subject?: string | null;
          /**
           * @minLength 1
           * @maxLength 500
           */
          request_body?: string | null;
          /**
           * @minLength 1
           * @maxLength 150
           */
          reminder_subject?: string | null;
          /**
           * @minLength 1
           * @maxLength 500
           */
          reminder_body?: string | null;
        };
        /** Override the delivery mode of the Signature Request for this Signer */
        delivery_mode?: "email" | "none" | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/signature_requests/${signatureRequestId}/signers/${signerId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Signer
     * @name DeleteSignatureRequestsSignatureRequestIdSignersSignerId
     * @summary Delete a Signer
     * @request DELETE:/signature_requests/{signatureRequestId}/signers/{signerId}
     * @secure
     */
    deleteSignatureRequestsSignatureRequestIdSignersSignerId: (
      signerId: any,
      signatureRequestId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/signature_requests/${signatureRequestId}/signers/${signerId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Signature Request
     * @name PostSignatureRequestsSignatureRequestIdSignersSignerIdSendReminder
     * @summary Send manual reminder to a Signer
     * @request POST:/signature_requests/{signatureRequestId}/signers/{signerId}/send_reminder
     * @secure
     */
    postSignatureRequestsSignatureRequestIdSignersSignerIdSendReminder: (
      signatureRequestId: string,
      signerId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/signature_requests/${signatureRequestId}/signers/${signerId}/send_reminder`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Signer
     * @name GetSignersSignerIdAuditTrailsDownload
     * @summary Download audit trail PDF
     * @request GET:/signature_requests/{signatureRequestId}/signers/{signerId}/audit_trails/download
     * @secure
     */
    getSignersSignerIdAuditTrailsDownload: (signatureRequestId: string, signerId: string, params: RequestParams = {}) =>
      this.request<File, void>({
        path: `/signature_requests/${signatureRequestId}/signers/${signerId}/audit_trails/download`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Signer
     * @name GetSignatureRequestsSignatureRequestIdSignersSignerIdAuditTrails
     * @summary Get signer audit trail
     * @request GET:/signature_requests/{signatureRequestId}/signers/{signerId}/audit_trails
     * @secure
     */
    getSignatureRequestsSignatureRequestIdSignersSignerIdAuditTrails: (
      signatureRequestId: string,
      signerId: string,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          version: number;
          signature_request: object;
          sender: object;
          signer: object;
          /**
           * @minItems 1
           * @uniqueItems true
           */
          documents: any[];
          organization: object;
          authentication: object;
          electronic_signature_level?: object;
        },
        void
      >({
        path: `/signature_requests/${signatureRequestId}/signers/${signerId}/audit_trails`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Approver
     * @name PostSignatureRequestsSignatureRequestIdApprovers
     * @summary Create a new approver
     * @request POST:/signature_requests/{signatureRequestId}/approvers
     * @secure
     */
    postSignatureRequestsSignatureRequestIdApprovers: (
      signatureRequestId: string,
      data:
        | {
            info: {
              /**
               * @minLength 1
               * @maxLength 255
               */
              first_name: string;
              /**
               * @minLength 1
               * @maxLength 255
               */
              last_name: string;
              /**
               * @minLength 1
               * @maxLength 255
               */
              email: string;
              /**
               * E.164 format.
               * @minLength 1
               */
              phone_number?: string | null;
              locale: any;
            };
          }
        | {
            /**
             * @format uuid
             * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
             * @example "8b6ed2f3-244f-487a-baa1-bbe4f51c8744"
             */
            user_id: string;
          }
        | {
            /**
             * @format uuid
             * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
             * @example "8b6ed2f3-244f-487a-baa1-bbe4f51c8744"
             */
            contact_id: string;
          }
        | {
            /**
             * @format uuid
             * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
             * @example "8b6ed2f3-244f-487a-baa1-bbe4f51c8744"
             */
            signer_id: string;
          },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format uuid
           * @minLength 1
           * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
           * @example "8b6ed2f3-244f-487a-baa1-bbe4f51c8744"
           */
          id: string;
          status: "initiated" | "notified" | "approved" | "rejected";
          info: {
            /** @minLength 1 */
            first_name: string;
            /** @minLength 1 */
            last_name: string;
            /**
             * @format email
             * @minLength 1
             */
            email: string;
            /**
             * E.164 format.
             * @minLength 1
             */
            phone_number: string | null;
            locale: any;
          };
          /**
           * @format uri
           * @minLength 1
           */
          approval_link?: string | null;
          /**
           * @format date-time
           * @example "2024-01-18T22:59:00+00:00"
           */
          approval_link_expiration_date?: string | null;
        },
        void
      >({
        path: `/signature_requests/${signatureRequestId}/approvers`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Approver
     * @name GetSignatureRequestsSignatureRequestIdApproversApproverId
     * @summary Get an Approver
     * @request GET:/signature_requests/{signatureRequestId}/approvers/{approverId}
     * @secure
     */
    getSignatureRequestsSignatureRequestIdApproversApproverId: (
      approverId: any,
      signatureRequestId: string,
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/signature_requests/${signatureRequestId}/approvers/${approverId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Approver
     * @name DeleteSignatureRequestsSignatureRequestIdApproversApproverId
     * @summary Delete an Approver
     * @request DELETE:/signature_requests/{signatureRequestId}/approvers/{approverId}
     * @secure
     */
    deleteSignatureRequestsSignatureRequestIdApproversApproverId: (
      approverId: any,
      signatureRequestId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/signature_requests/${signatureRequestId}/approvers/${approverId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Approver
     * @name PatchSignatureRequestsSignatureRequestIdApproversApproverId
     * @summary Update an Approver
     * @request PATCH:/signature_requests/{signatureRequestId}/approvers/{approverId}
     * @secure
     */
    patchSignatureRequestsSignatureRequestIdApproversApproverId: (
      approverId: any,
      signatureRequestId: string,
      data: {
        info?: {
          /**
           * @minLength 1
           * @maxLength 255
           */
          first_name?: string;
          /**
           * @minLength 1
           * @maxLength 255
           */
          last_name?: string;
          /**
           * @format email
           * @minLength 1
           */
          email?: string;
          /**
           * E.164 format
           * @minLength 1
           */
          phone_number?: string;
          /** @minLength 1 */
          locale?: "en" | "fr" | "de" | "it" | "nl" | "es" | "pl";
        } | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/signature_requests/${signatureRequestId}/approvers/${approverId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Follower
     * @name PostSignatureRequestsSignatureRequestIdFollowers
     * @summary Create new followers
     * @request POST:/signature_requests/{signatureRequestId}/followers
     * @secure
     */
    postSignatureRequestsSignatureRequestIdFollowers: (
      signatureRequestId: string,
      data: {
        /**
         * @format email
         * @example "john.doe@example.com"
         */
        email: string;
        locale: any;
      }[],
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format email
           * @example "john.doe@example.com"
           */
          email: string;
          locale: any;
        }[],
        void
      >({
        path: `/signature_requests/${signatureRequestId}/followers`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Signature Request
     * @name GetSignatureRequestsSignatureRequestIdAuditTrailsDownload
     * @summary Download signature request audit trails
     * @request GET:/signature_requests/{signatureRequestId}/audit_trails/download
     * @secure
     */
    getSignatureRequestsSignatureRequestIdAuditTrailsDownload: (
      signatureRequestId: string,
      params: RequestParams = {},
    ) =>
      this.request<File, void>({
        path: `/signature_requests/${signatureRequestId}/audit_trails/download`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  customExperiences = {
    /**
     * No description
     *
     * @tags Custom Experience
     * @name PostCustomExperience
     * @summary Create a Custom Experience
     * @request POST:/custom_experiences
     * @secure
     */
    postCustomExperience: (
      data: {
        name: string;
        /** @default false */
        landing_page_disabled?: boolean | null;
        /** @default false */
        side_panel_disabled?: boolean | null;
        background_color?: string | null;
        button_color?: string | null;
        text_color?: string | null;
        text_button_color?: string | null;
        disabled_notifications?:
          | (
              | "approver.expiration_date_reminder"
              | "approver.canceled"
              | "approver.expiration_date_updated"
              | "follower.approved"
              | "follower.canceled"
              | "follower.completed"
              | "follower.expired"
              | "follower.rejected"
              | "follower.signed"
              | "sender.approved"
              | "sender.canceled"
              | "sender.completed"
              | "sender.rejected"
              | "sender.signed"
              | "signer.expiration_date_reminder"
              | "signer.canceled"
              | "signer.completed"
              | "signer.signed"
              | "signer.expiration_date_updated"
              | "signer.signature_requested"
            )[]
          | null;
        /** @default false */
        email_logo_disabled?: boolean | null;
        /** @default false */
        email_header_text_disabled?: boolean | null;
        /** @default false */
        email_footer_signature_disabled?: boolean | null;
        /** @default false */
        email_expiration_text_disabled?: boolean | null;
        redirect_urls?: {
          success: string;
          error: string;
        } | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @format uuid */
          id: string;
          name?: string;
          landing_page_disabled: boolean;
          side_panel_disabled: boolean;
          background_color: string | null;
          button_color: string | null;
          text_color: string | null;
          text_button_color: string | null;
          disabled_notifications: any[];
          email_logo_disabled: boolean;
          email_header_text_disabled: boolean;
          email_footer_signature_disabled: boolean;
          email_expiration_text_disabled: boolean;
          redirect_urls: {
            success: string | null;
            error: string | null;
          };
          /**
           * @format uri
           * @example "https://yousign.com/custom_experience/89120884-d29a-4b1a-ac7b-a9e73a872795/logo"
           */
          logo: string | null;
          /**
           * Custom Experience Source
           * @example "app"
           */
          source: "app" | "public_api" | null;
          /** @format date-time */
          created_at: string;
        },
        void
      >({
        path: `/custom_experiences`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Custom Experience
     * @name GetCustomExperiences
     * @summary List Custom Experiences
     * @request GET:/custom_experiences
     * @secure
     */
    getCustomExperiences: (params: RequestParams = {}) =>
      this.request<
        {
          meta?: any;
          data?: any[];
        },
        void
      >({
        path: `/custom_experiences`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Custom Experience
     * @name DeleteCustomExperience
     * @summary Delete a Custom Experience
     * @request DELETE:/custom_experiences/{customExperienceId}
     * @secure
     */
    deleteCustomExperience: (customExperienceId: any, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/custom_experiences/${customExperienceId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Custom Experience
     * @name PatchCustomExperiencesCustomExperienceId
     * @summary Update a Custom Experience
     * @request PATCH:/custom_experiences/{customExperienceId}
     * @secure
     */
    patchCustomExperiencesCustomExperienceId: (
      customExperienceId: any,
      data: {
        name?: string;
        /** @default false */
        landing_page_disabled?: boolean | null;
        /** @default false */
        side_panel_disabled?: boolean | null;
        background_color?: string | null;
        button_color?: string | null;
        text_color?: string | null;
        text_button_color?: string | null;
        disabled_notifications?: any[] | null;
        /** @default false */
        email_logo_disabled?: boolean | null;
        /** @default false */
        email_header_text_disabled?: boolean | null;
        /** @default false */
        email_footer_signature_disabled?: boolean | null;
        /** @default false */
        email_expiration_text_disabled?: boolean | null;
        redirect_urls?: {
          success: string;
          error: string;
        } | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/custom_experiences/${customExperienceId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Custom Experience
     * @name GetCustomExperiencesCustomExperienceId
     * @summary Get a given Custom Experience
     * @request GET:/custom_experiences/{customExperienceId}
     * @secure
     */
    getCustomExperiencesCustomExperienceId: (customExperienceId: any, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/custom_experiences/${customExperienceId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Custom Experience
     * @name PatchCustomExperienceLogo
     * @summary Update a Custom Experience Logo
     * @request POST:/custom_experiences/{customExperienceId}/logo
     * @secure
     */
    patchCustomExperienceLogo: (
      customExperienceId: any,
      data: {
        /**
         * @format binary
         * @example "Binary file"
         */
        file: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/custom_experiences/${customExperienceId}/logo`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Custom Experience
     * @name DeleteCustomExperienceLogo
     * @summary Delete a Custom Experience Logo
     * @request DELETE:/custom_experiences/{customExperienceId}/logo
     * @secure
     */
    deleteCustomExperienceLogo: (customExperienceId: any, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/custom_experiences/${customExperienceId}/logo`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  electronicSeals = {
    /**
     * No description
     *
     * @tags Electronic Seal
     * @name PostElectronicSeals
     * @summary Create an Electronic Seal
     * @request POST:/electronic_seals
     * @secure
     */
    postElectronicSeals: (
      data: {
        /**
         * @format uuid
         * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
         * @example "160473f9-156f-4583-848c-cbc3dec49b4a"
         */
        document_id: string;
        /**
         * @format uuid
         * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
         * @example "333fa90a-a629-4708-8fe9-160dcb055a9b"
         */
        image_id?: string | null;
        /**
         * Store a custom id that will be added to webhooks
         * @maxLength 255
         * @pattern ^[\w\-@.%+]+$
         * @example "externalId-123"
         */
        external_id?: string | null;
        /** @default false */
        timestamp?: boolean;
        fields: (
          | {
              /** @example "seal" */
              type: "seal" | "read_only_text";
              /**
               * @min 1
               * @max 32767
               * @example 200
               */
              height: number;
              /**
               * @min 1
               * @max 32767
               * @example 250
               */
              width: number;
              /**
               * @min 1
               * @max 32767
               * @example 1
               */
              page: number;
              /**
               * @min 0
               * @max 32767
               * @example 0
               */
              x: number;
              /**
               * @min 0
               * @max 32767
               * @example 0
               */
              y: number;
              /**
               * @maxLength 200
               * @pattern ^(?!\s)[0-9A-Za-zĄÀÁÂÃÄÅÇĆÈÉÊËĘÌÍÎÏŁÑŃÒÓÔÕÖŚÙÚÛÜÝŹŻąàáâãäåæçćèéêëęìíîïłñńòóôõöśùúûüýÿźżß`\'()\- ]+(?<!\s)$
               */
              reason?: string | null;
            }
          | {
              /** @example "read_only_text" */
              type: "read_only_text";
              /**
               * @min 1
               * @max 32767
               * @example 200
               */
              height: number;
              /**
               * @min 1
               * @max 32767
               * @example 250
               */
              width: number;
              /**
               * @min 1
               * @max 32767
               * @example 1
               */
              page: number;
              /**
               * @min 0
               * @max 32767
               * @example 0
               */
              x: number;
              /**
               * @min 0
               * @max 32767
               * @example 0
               */
              y: number;
              /** @maxLength 80 */
              text?: string;
            }
          | ({
              /** @example "seal" */
              type: "seal" | "read_only_text";
              /**
               * @min 1
               * @max 32767
               * @example 200
               */
              height: number;
              /**
               * @min 1
               * @max 32767
               * @example 250
               */
              width: number;
              /**
               * @min 1
               * @max 32767
               * @example 1
               */
              page: number;
              /**
               * @min 0
               * @max 32767
               * @example 0
               */
              x: number;
              /**
               * @min 0
               * @max 32767
               * @example 0
               */
              y: number;
              /**
               * @maxLength 200
               * @pattern ^(?!\s)[0-9A-Za-zĄÀÁÂÃÄÅÇĆÈÉÊËĘÌÍÎÏŁÑŃÒÓÔÕÖŚÙÚÛÜÝŹŻąàáâãäåæçćèéêëęìíîïłñńòóôõöśùúûüýÿźżß`\'()\- ]+(?<!\s)$
               */
              reason?: string | null;
            } & {
              /** @example "read_only_text" */
              type: "read_only_text";
              /**
               * @min 1
               * @max 32767
               * @example 200
               */
              height: number;
              /**
               * @min 1
               * @max 32767
               * @example 250
               */
              width: number;
              /**
               * @min 1
               * @max 32767
               * @example 1
               */
              page: number;
              /**
               * @min 0
               * @max 32767
               * @example 0
               */
              x: number;
              /**
               * @min 0
               * @max 32767
               * @example 0
               */
              y: number;
              /** @maxLength 80 */
              text?: string;
            })
        )[];
        signature_level?: "electronic_signature" | "advanced_electronic_signature" | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format uuid
           * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
           * @example "1365283d-0ba5-4a08-9a58-9818ef428320"
           */
          id: string;
          /** @example "pending" */
          status: "pending" | "processing" | "done" | "error";
          /**
           * @format date-time
           * @example "2024-01-18T22:59:00+00:00"
           */
          created_at: string;
          /**
           * @format uuid
           * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
           * @example "37646975-7e73-41f1-be7f-f4d85d181d03"
           */
          document_id: string;
          timestamp: boolean;
          /**
           * @format uuid
           * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
           * @example "6c82bd7a-d7f7-45e0-82f4-b92222567346"
           */
          image_id: string | null;
          /**
           * Store a custom id that will be added to webhooks
           * @maxLength 255
           * @pattern ^[\w\-@.%+]+$
           * @example "externalId-123"
           */
          external_id: string | null;
          /** @example "electronic_signature" */
          signature_level: "electronic_signature" | "advanced_electronic_signature";
        },
        void
      >({
        path: `/electronic_seals`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Electronic Seal
     * @name GetElectronicSeal
     * @summary Get an Electronic Seal
     * @request GET:/electronic_seals/{electronicSealId}
     * @secure
     */
    getElectronicSeal: (electronicSealId: any, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/electronic_seals/${electronicSealId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get electronic seal audit trail
     *
     * @tags Electronic Seal
     * @name GetElectronicSealAuditTrail
     * @summary Get an Electronic Seal Audit Trail
     * @request GET:/electronic_seals/{electronicSealId}/audit_trails
     * @secure
     */
    getElectronicSealAuditTrail: (electronicSealId: any, params: RequestParams = {}) =>
      this.request<
        {
          version: number;
          classification: string;
          organization: object;
          seal: object;
          document: object;
        },
        void
      >({
        path: `/electronic_seals/${electronicSealId}/audit_trails`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Electronic Seal
     * @name DownloadElectronicSealAuditTrail
     * @summary Download an Electronic Seal Audit Trail
     * @request GET:/electronic_seals/{electronicSealId}/audit_trails/download
     * @secure
     */
    downloadElectronicSealAuditTrail: (electronicSealId: any, params: RequestParams = {}) =>
      this.request<File, void>({
        path: `/electronic_seals/${electronicSealId}/audit_trails/download`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  electronicSealDocuments = {
    /**
     * No description
     *
     * @tags Electronic Seal
     * @name UploadElectronicSealDocument
     * @summary Upload an Electronic Seal Document
     * @request POST:/electronic_seal_documents
     * @secure
     */
    uploadElectronicSealDocument: (
      data: {
        /**
         * PDF file
         * @format binary
         */
        file: File;
        /** @example "MyPa$$word" */
        password?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format uuid
           * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
           * @example "1365283d-0ba5-4a08-9a58-9818ef428320"
           */
          id: string;
          /**
           * @format date-time
           * @example "2024-01-18T22:59:00+00:00"
           */
          created_at: string;
        },
        void
      >({
        path: `/electronic_seal_documents`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Electronic Seal
     * @name DownloadElectronicSealDocument
     * @summary Download an Electronic Seal Document
     * @request GET:/electronic_seal_documents/{electronicSealDocumentId}/download
     * @secure
     */
    downloadElectronicSealDocument: (electronicSealDocumentId: any, params: RequestParams = {}) =>
      this.request<File, void>({
        path: `/electronic_seal_documents/${electronicSealDocumentId}/download`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  electronicSealImages = {
    /**
     * @description Upload electronic seal image
     *
     * @tags Electronic Seal
     * @name UploadElectronicSealImage
     * @summary Upload electronic seal image
     * @request POST:/electronic_seal_images
     * @secure
     */
    uploadElectronicSealImage: (
      data: {
        /**
         * Seal image
         * @format binary
         */
        file: File;
        /** @example "My seal image" */
        name: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format uuid
           * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
           * @example "1365283d-0ba5-4a08-9a58-9818ef428320"
           */
          id: string;
          /** @example "My seal image" */
          name: string;
          /**
           * @format date-time
           * @example "2024-01-18T22:59:00+00:00"
           */
          created_at: string;
        },
        void
      >({
        path: `/electronic_seal_images`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),
  };
  webhooks = {
    /**
     * No description
     *
     * @tags Webhook
     * @name PostWebhooksSubscriptions
     * @summary Create a new Webhook subscription
     * @request POST:/webhooks
     * @secure
     */
    postWebhooksSubscriptions: (
      data: {
        /**
         * Https target URL of the webhook
         * @maxLength 255
         */
        endpoint: string;
        /**
         * Short description of the webhook
         * @maxLength 128
         * @example "Lorem Ipsum"
         */
        description: string | null;
        /** @example true */
        sandbox: boolean;
        /** Specific events */
        subscribed_events:
          | (
              | "signature_request.done"
              | "signature_request.activated"
              | "signature_request.reminder_executed"
              | "signature_request.expired"
              | "signature_request.approved"
              | "signer.done"
              | "signer.notified"
              | "signer.link_opened"
              | "signer.identification_blocked"
              | "signer.sender_contacted"
              | "signer.error"
              | "contact.created"
              | "approver.notified"
              | "approver.approved"
              | "approver.rejected"
              | "electronic_seal.error"
              | "electronic_seal.done"
            )[]
          | "*"[];
        /** Autogenerated 32 bytes key */
        secret_key?: string | null;
        /** Specific scopes */
        scopes: ("app" | "public_api" | "connector_salesforce_api" | "connector_hubspot_api")[] | "*"[];
        /** If a Webhook request fails for any reason, Yousign will retry the request 8 times using a back-off mechanism after: 2, 6, 30, 60, 300, 1080, 1440, 2880 min */
        auto_retry: boolean;
        /** Is the webhook enabled ? */
        enabled: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format uuid
           * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
           * @example "89120884-d29a-4b1a-ac7b-a9e73a872795"
           */
          id: string;
          /**
           * Https target URL of the webhook
           * @maxLength 255
           */
          endpoint: string;
          /**
           * Short description of the webhook
           * @maxLength 128
           * @example "Lorem Ipsum"
           */
          description: string | null;
          /** @example false */
          sandbox: boolean;
          /** Specific events */
          subscribed_events:
            | (
                | "signature_request.done"
                | "signature_request.activated"
                | "signature_request.reminder_executed"
                | "signature_request.expired"
                | "signature_request.approved"
                | "signer.done"
                | "signer.notified"
                | "signer.link_opened"
                | "signer.identification_blocked"
                | "signer.sender_contacted"
                | "signer.error"
                | "contact.created"
                | "approver.notified"
                | "approver.approved"
                | "approver.rejected"
                | "electronic_seal.error"
                | "electronic_seal.done"
              )[]
            | "*"[];
          /** Autogenerated 32 bytes key */
          secret_key: string;
          /** Specific scopes */
          scopes: ("app" | "public_api" | "connector_salesforce_api" | "connector_hubspot_api")[] | "*"[];
          /** If a Webhook request fails for any reason, Yousign will retry the request 8 times using a back-off mechanism after: 2, 6, 30, 60, 300, 1080, 1440, 2880 min */
          auto_retry: boolean;
          /** Is the webhook enabled ? */
          enabled: boolean;
          /**
           * @format date-time
           * @example "2024-01-18T22:59:00+00:00"
           */
          created_at: string;
          /**
           * @format date-time
           * @example "2024-01-18T22:59:00+00:00"
           */
          updated_at: string | null;
        },
        void | object
      >({
        path: `/webhooks`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Webhook
     * @name GetWebhooks
     * @summary List all Webhook subscriptions
     * @request GET:/webhooks
     * @secure
     */
    getWebhooks: (params: RequestParams = {}) =>
      this.request<any[], void | object>({
        path: `/webhooks`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Webhook
     * @name GetWebhooksWebhookId
     * @summary Get a Webhook subscription
     * @request GET:/webhooks/{webhookId}
     * @secure
     */
    getWebhooksWebhookId: (webhookId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/webhooks/${webhookId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Webhook
     * @name DeleteWebhooksWebhookId
     * @summary Delete a Webhook subscription
     * @request DELETE:/webhooks/{webhookId}
     * @secure
     */
    deleteWebhooksWebhookId: (webhookId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/webhooks/${webhookId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Webhook
     * @name PatchWebhooksWebhookId
     * @summary Update a Webhook subscription
     * @request PATCH:/webhooks/{webhookId}
     * @secure
     */
    patchWebhooksWebhookId: (
      webhookId: string,
      data: {
        /**
         * Https target URL of the webhook
         * @maxLength 255
         */
        endpoint?: string;
        /**
         * Short description of the webhook
         * @maxLength 128
         * @example "Lorem Ipsum"
         */
        description?: string | null;
        /** @example true */
        sandbox?: boolean;
        /** Specific events */
        subscribed_events?:
          | (
              | "signature_request.done"
              | "signature_request.activated"
              | "signature_request.reminder_executed"
              | "signature_request.expired"
              | "signature_request.approved"
              | "signer.done"
              | "signer.notified"
              | "signer.link_opened"
              | "signer.identification_blocked"
              | "signer.sender_contacted"
              | "signer.error"
              | "contact.created"
              | "approver.notified"
              | "approver.approved"
              | "approver.rejected"
              | "electronic_seal.error"
              | "electronic_seal.done"
            )[]
          | "*"[];
        /** Autogenerated 32 bytes key */
        secret_key?: string | null;
        /** Specific scopes */
        scopes?: ("app" | "public_api" | "connector_salesforce_api" | "connector_hubspot_api")[] | "*"[];
        /** If a Webhook request fails for any reason, Yousign will retry the request 8 times using a back-off mechanism after: 2, 6, 30, 60, 300, 1080, 1440, 2880 min */
        auto_retry?: boolean;
        /** Is the webhook enabled ? */
        enabled?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/webhooks/${webhookId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  contacts = {
    /**
     * No description
     *
     * @tags Contact
     * @name PostContact
     * @summary Create a contact
     * @request POST:/contacts
     * @secure
     */
    postContact: (
      data: {
        /**
         * @minLength 1
         * @maxLength 255
         * @example "John"
         */
        first_name: string;
        /**
         * @minLength 1
         * @maxLength 255
         * @example "Doe"
         */
        last_name: string;
        /**
         * @format email
         * @example "john.doe@example.com"
         */
        email: string;
        locale: any;
        /**
         * E.164 format
         * @minLength 1
         */
        phone_number?: string;
        /**
         * @minLength 1
         * @maxLength 255
         * @example "Yousign SAS"
         */
        company_name?: string;
        /**
         * @minLength 1
         * @maxLength 255
         * @example "Developer"
         */
        job_title?: string;
        /**
         * @minLength 1
         * @maxLength 255
         * @example "34 Rue Malfilatre"
         */
        address_line_1?: string;
        /**
         * @minLength 1
         * @maxLength 255
         * @example "1st floor"
         */
        address_line_2?: string;
        /**
         * @minLength 1
         * @maxLength 255
         * @example "Caen"
         */
        address_city?: string;
        /**
         * @minLength 1
         * @maxLength 255
         * @example "14000"
         */
        address_postal_code?: string;
        /**
         * @minLength 1
         * @maxLength 255
         * @example "France"
         */
        address_country?: string;
        /**
         * @format uuid
         * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
         * @example "69120884-d29a-4b1a-ac7b-a9e73a872795"
         */
        workspace_id?: string | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @format uuid */
          id: string;
          first_name: string;
          last_name: string;
          /** @format email */
          email: string;
          locale: string;
          /** E.164 format */
          phone_number: string | null;
          company_name: string | null;
          job_title: string | null;
          address_line_1: string | null;
          address_line_2: string | null;
          address_city: string | null;
          address_postal_code: string | null;
          address_country: string | null;
          /**
           * @format uuid
           * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
           * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
           */
          workspace_id?: string | null;
        },
        void
      >({
        path: `/contacts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contact
     * @name GetContacts
     * @summary List all Contacts
     * @request GET:/contacts
     * @secure
     */
    getContacts: (params: RequestParams = {}) =>
      this.request<
        {
          meta?: any;
          data?: any[];
        },
        void
      >({
        path: `/contacts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contact
     * @name GetContactContactId
     * @summary Get a Contact
     * @request GET:/contacts/{contactId}
     * @secure
     */
    getContactContactId: (contactId: any, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/contacts/${contactId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contact
     * @name DeleteContactsContactId
     * @summary Delete a Contact
     * @request DELETE:/contacts/{contactId}
     * @secure
     */
    deleteContactsContactId: (contactId: any, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/contacts/${contactId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  consumptions = {
    /**
     * @description Get signatures consumption by source
     *
     * @tags Consumption
     * @name GetConsumptions
     * @summary Get consumptions
     * @request GET:/consumptions
     * @secure
     */
    getConsumptions: (
      query: {
        /**
         * The "from" date must not be more than 1 year in the past
         * @format date
         * @pattern ^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$
         * @example "2022-12-10"
         */
        from: string;
        /** The "to" date must be more recent than the "from" date */
        to: any;
        authentication_key?: any;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          app: {
            /** @min 0 */
            electronic_signature: number;
            /** @min 0 */
            advanced_electronic_signature: number;
            /** @min 0 */
            advanced_electronic_signature_with_qualified_certificate: number;
          };
          api: {
            /** @min 0 */
            electronic_signature: number;
            /** @min 0 */
            advanced_electronic_signature: number;
            /** @min 0 */
            advanced_electronic_signature_with_qualified_certificate: number;
            /** @min 0 */
            electronic_seal?: number;
          };
          connector: {
            /** @min 0 */
            electronic_signature: number;
            /** @min 0 */
            advanced_electronic_signature: number;
            /** @min 0 */
            advanced_electronic_signature_with_qualified_certificate: number;
          };
        },
        void
      >({
        path: `/consumptions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a binary .csv file containing all the consumption data of the underlying signatures
     *
     * @tags Consumption
     * @name GetConsumptionsExport
     * @summary Export consumption data
     * @request GET:/consumptions/export
     * @secure
     */
    getConsumptionsExport: (
      query: {
        /** The "from" date must not be more than 1 year in the past */
        from: any;
        /** The "to" date must be more recent than the "from" date */
        to: any;
        authentication_key?: any;
      },
      params: RequestParams = {},
    ) =>
      this.request<string, void>({
        path: `/consumptions/export`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  workspaces = {
    /**
     * No description
     *
     * @tags Workspace
     * @name GetWorkspaces
     * @summary List all Workspaces
     * @request GET:/workspaces
     * @secure
     */
    getWorkspaces: (params: RequestParams = {}) =>
      this.request<
        {
          meta?: any;
          data?: {
            /**
             * @format uuid
             * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
             * @example "89120884-d29a-4b1a-ac7b-a9e73a872795"
             */
            id: string;
            name: string;
            /** @format date-time */
            created_at: string;
            /** @format date-time */
            updated_at: string;
            users: {
              /**
               * @format uuid
               * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
               * @example "89120884-d29a-4b1a-ac7b-a9e73a872795"
               */
              id?: string;
            };
          }[];
        },
        void
      >({
        path: `/workspaces`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags User
     * @name GetUsers
     * @summary List all Users
     * @request GET:/users
     * @secure
     */
    getUsers: (
      query?: {
        /** After cursor (pagination) */
        after?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Cursor based pagination */
          meta?: {
            /** @minLength 1 */
            next_cursor: string | null;
          };
          data?: {
            /**
             * @format uuid
             * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
             * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
             */
            id: string;
            first_name: string;
            last_name: string;
            /** @format email */
            email: string;
            /** E.164 format */
            phone_number: string;
            locale: string;
            avatar: string | null;
            job_title: string | null;
            is_active: boolean;
            role: "owner" | "admin" | "member";
            workspaces?: {
              /**
               * @format uuid
               * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
               * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
               */
              id: string;
            }[];
          }[];
        },
        | {
            type: string;
            detail: string;
          }
        | {
            detail: string;
          }
      >({
        path: `/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  documents = {
    /**
     * No description
     *
     * @tags Document
     * @name PostDocuments
     * @summary Upload a Document
     * @request POST:/documents
     * @deprecated
     * @secure
     */
    postDocuments: (
      data: {
        /**
         * Binary file
         * @format binary
         */
        file: File;
        nature: "attachment" | "signable_document";
        /** @example "MyPa$$word" */
        password?: string;
        initials?: {
          /** Initials alignment on the document */
          alignment: "left" | "right" | "center";
          /**
           * y-axis position on the document
           * @min 0
           * @example 10
           */
          y: number;
        } | null;
        parse_anchors?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @format uuid
           * @pattern ^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$
           * @example "89120884-d29a-4b1a-ac7b-a9e73a872796"
           */
          id: string;
          /**
           * @minLength 1
           * @maxLength 255
           */
          filename: string;
          nature: "attachment" | "signable_document";
          /** @example "application/pdf" */
          content_type: string;
          /** Sha256 checksum */
          sha256: string;
          is_protected: boolean;
          is_signed: boolean;
          /**
           * @format date-time
           * @example "2024-01-18T22:59:00+00:00"
           */
          created_at: string;
          /**
           * Number of pages for signable document
           * @min 1
           */
          total_pages: number | null;
          /** If protected by password and not yet unlocked */
          is_locked: boolean;
          initials: {
            /** Initials alignment on the document */
            alignment: "left" | "center" | "right";
            /**
             *  y-axis position on the document
             * @min 0
             */
            y: number;
          } | null;
          /** Number of parsed anchors from the document. */
          total_anchors: number;
        },
        void
      >({
        path: `/documents`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),
  };
}
