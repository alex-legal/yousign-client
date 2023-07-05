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

export interface ConfigEmailTemplate {
  /** Reference or email of recipients */
  to: (
    | "@members"
    | "@members.auto"
    | "@members.pending"
    | "@members.processing"
    | "@members.done"
    | "@members.refused"
    | "@member"
    | "@creator"
    | "@subscribers"
    | "@subscribers.groupName1"
    | "@subscribers.groupName2"
  )[];
  /** Subject of the mail */
  subject: string;
  /** Object of the mail */
  message: string;
  /**
   * Modify the from name
   * @default "Yousign"
   */
  fromName?: string;
}

export interface OrganizationOutput {
  /**
   * Organization ID
   * @pattern ^/organizations/[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$
   * @example "/organizations/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  id?: string;
  /** Organization name */
  name?: string;
  /** Custom URL for the Organization (internal usage only, should not be used) */
  url?: string;
  /**
   * Date of creation
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  createdAt?: string;
  /**
   * Date of last update
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  updatedAt?: string;
  /** Internal usage, should not be used */
  fSso?: boolean;
  /** Internal usage, should not be used */
  maxUsers?: number;
  subscriptions?: string[];
  /** Internal usage, should not be used */
  autoCollection?: boolean;
  /** Internal usage, should not be used */
  vatNumber?: string;
  billingAddress?: OrganizationBillingAddress;
  /** Internal usage, should not be used */
  inAppSupport?: boolean;
  /** Internal usage, should not be used */
  inAppUpdates?: string;
  /** Internal usage, should not be used */
  fileTemplate?: boolean;
  /** Internal usage, should not be used */
  fArchive?: boolean;
  /** Internal usage, should not be used */
  fUserPermissions?: boolean;
  /** Internal usage, should not be used */
  fProcedureTemplate?: boolean;
  /** Internal usage, should not be used */
  fProcedureReminderAuto?: boolean;
  /** Internal usage, should not be used */
  fApi?: boolean;
  /** Internal usage, should not be used */
  fCheckdocument?: boolean;
  /** Internal usage, should not be used */
  fProcedureCreate?: boolean;
  /** Internal usage, should not be used */
  fSignatureUi?: boolean;
  /** Internal usage, should not be used */
  fServerStamp?: boolean;
  /** Internal usage, should not be used */
  fOperationLevelNone?: boolean;
  /** Internal usage, should not be used */
  fConsentProcess?: boolean;
  /** Internal usage, should not be used */
  fOperationLevelAdvanced?: boolean;
  /** Internal usage, should not be used */
  fOperationCustomModeEmail?: boolean;
  /** Internal usage, should not be used */
  fDynamicFields?: boolean;
  /** Defined if the organization enable the related files */
  fProcedureRelatedFiles?: boolean;
  /** Internal usage, should not be used */
  samlIdentityProvider?: string;
  /** Pattern of the password policy for the organization */
  passwordPolicyPattern?: string;
  /** Description for the password policy */
  passwordPolicyDescription?: string;
  /** Internal usage, should not be used */
  userActivation?: boolean;
  /** Internal usage, should not be used */
  fProcedureTemplatePermissions?: boolean;
}

export interface OrganizationBillingAddress {
  /** @example "Jones" */
  firstName?: string;
  /** @example "Indiana" */
  lastName?: string;
  /** @example "test@test.com" */
  email?: string;
  company?: string;
  /** @example "+33102030405" */
  phone?: string;
  /** @example "3 rue du test" */
  line1?: string;
  /** @example "Paris" */
  city?: string;
  /** @example "FR" */
  country?: string;
  /** @example "75000" */
  zip?: string;
}

export interface WorkspaceOutput {
  /**
   * Object's ID
   * @pattern ^/workspaces/[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$
   * @example "/workspaces/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  id?: string;
  /** Workspace name */
  name?: string;
  config?: WorkspaceConfig;
  /**
   * Date of creation
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  createdAt?: string;
  /**
   * Date of last update
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  updatedAt?: string;
  emailProcedureFromName?: string;
  contactFieldVisibility?: string[];
  slug?: string;
  hasCustomLogo?: boolean;
}

export interface WorkspaceConfig {
  authenticationModes?: ("sms" | "inwebo")[];
  procedure?: WorkspaceConfigProcedure;
  email?: WorkspaceConfigEmail;
}

export interface WorkspaceConfigProcedure {
  authenticationModes?: ("sms" | "inwebo")[];
}

export interface WorkspaceConfigEmail {
  "procedure.started"?: ConfigEmailTemplate[];
  "procedure.finished"?: ConfigEmailTemplate[];
  "procedure.refused"?: ConfigEmailTemplate[];
  "procedure.expired"?: ConfigEmailTemplate[];
  "procedure.deleted"?: ConfigEmailTemplate[];
  "member.started"?: ConfigEmailTemplate[];
  "member.finished"?: ConfigEmailTemplate[];
  "comment.created"?: ConfigEmailTemplate[];
}

export interface UserInput {
  /**
   * User's firstname
   * @example "Jones"
   */
  firstname: string;
  /**
   * User's lastname
   * @example "Indiana"
   */
  lastname: string;
  /**
   * User's email address (This field is allowed only during creation)
   * @example "test@test.com"
   */
  email: string;
  /** User's job title */
  title?: string;
  /** User's phone number (mobiles and landline telephones are supported). Phone number must be formatted to E164 (https://en.wikipedia.org/wiki/E.164) which includes the symbol '+' and the country code. For example : +33612131315. All countries are supported. */
  phone?: string;
  /** @example "ROLE_ADMIN" */
  permission?: "ROLE_ADMIN" | "ROLE_MANAGER" | "ROLE_SIGNER";
  /**
   * User's UserGroup
   * @pattern ^/user_groups/[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$
   * @example "/user_groups/4f3ef3ac-d234-4abf-8dc9-4c7f37d34402"
   */
  group?: string;
  config?: object;
  /**
   * ID of file image
   * @pattern ^/files/[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$
   * @example "/files/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  defaultSignImage?: string;
  /** Defines if the notifications are enable ou disable for entities */
  notifications?: {
    procedure?: boolean;
  };
}

export interface UserOutput {
  /**
   * Object's ID
   * @pattern ^/users/[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$
   * @example "/users/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  id?: string;
  /**
   * User's firstname
   * @example "Jones"
   */
  firstname: string;
  /**
   * User's lastname
   * @example "Indiana"
   */
  lastname: string;
  /**
   * User's email address
   * @example "test@test.com"
   */
  email: string;
  /** User's title */
  title?: string;
  /**
   * User's phone number (mobiles and landline telephones are supported). Phone number must be formatted to E164 (https://en.wikipedia.org/wiki/E.164) which includes the symbol '+' and the country code. For example : +33612131315. All countries are supported.
   * @example "+33102030405"
   */
  phone?: string;
  /**
   * User's status
   * @example "activated"
   */
  status?: "not_activated" | "activated";
  /**
   * ID of the organization the user belongs to
   * @example "/organizations/b7599d85-4076-4752-94fb-8fbe10147e60"
   */
  organization?: string;
  /** List of workspaces to which the user is connected and has access */
  workspaces?: UserWorkspaceOutput[];
  permission?: string;
  group?: UserGroup;
  /**
   * Date of creation
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  createdAt?: string;
  /**
   * Date of last update
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  updatedAt?: string;
  /** Defines if the User is deleted or not */
  deleted?: boolean;
  config?: object;
  /**
   * Internal usage, should not be used
   * @example "/inwebo_user_requests/b7599d85-4076-4752-94fb-8fbe10147e60"
   */
  inweboUserRequest?: string;
  /** ID of SAML */
  samlNameId?: string;
  /**
   * ID of the default sign image.
   * @example "/files/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  defaultSignImage?: string;
  /**
   * Defines if the notifications are enable ou disable for entities
   * @example "{
   *   "procedure": true
   * }"
   */
  notifications?: {
    procedure?: boolean;
  };
  /** Defines if the fast signature is available for the user on the Yousign application */
  fastSign?: boolean;
  /** User's full name */
  fullName?: string;
}

export interface InweboUserRequest {
  /**
   * Id of the object
   * @pattern ^/inwebo_user_requests/[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$
   * @example "/inwebo_user_requests/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  id?: string;
}

export interface UserWorkspaceOutput {
  /**
   * Object's ID
   * @pattern ^/workspaces/[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$
   * @example "/workspaces/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  id?: string;
  /** Workspace name */
  name?: string;
}

export interface UserGroup {
  /**
   * Id of the object
   * @pattern ^/user_groups/[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$
   * @example "/user_groups/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  id?: string;
  /** Name of the UserGroup */
  name: string;
  /** Permissions of UserGroup */
  permissions?: (
    | "procedure_write"
    | "procedure_template_write"
    | "procedure_create_from_template"
    | "sign"
    | "workspace"
    | "user"
    | "api_key"
    | "contact"
    | "procedure_custom_field"
    | "signature_ui"
    | "server_stamp"
    | "certificate"
    | "archive"
    | "organization"
    | "contact_custom_field"
  )[];
}

export interface FileInput {
  /** Name of the file */
  name?: string;
  /** Type of the file */
  type?: "signable" | "attachment";
  /** Password for protected PDF file */
  password?: string;
  /** Description of the file */
  description?: string;
  /** Metadata of the file */
  metadata?: {
    key1?: string;
    key2?: number;
  };
  /** Content in base 64 of the file */
  content?: string;
  /**
   * Id of the procedure
   * @pattern ^/procedures/[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$
   * @example "/procedures/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  procedure?: string;
  /**
   * @format int32
   * @default 0
   */
  position?: number;
}

export interface FileOutput {
  /**
   * Id of the object
   * @pattern ^/files/[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$
   * @example "/files/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  id?: string;
  /** Name of the file */
  name?: string;
  /** Type of file */
  type?: "signable" | "sign_image" | "attachment";
  /**
   * Type of content
   * @example "application/pdf"
   */
  contentType?: string;
  /** Description of the file */
  description?: string;
  /**
   * Date of creation
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  createdAt?: string;
  /**
   * Date of last update
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  updatedAt?: string;
  /** Metadata of the file */
  metadata?: {
    key1?: string;
    key2?: number;
  };
  /**
   * Id of workspace
   * @pattern ^/workspaces/[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$
   * @example "/workspaces/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  workspace?: string;
  /**
   * Id of creator
   * @pattern ^/users/[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$
   * @example "/users/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  creator?: string;
  /**
   * File hash
   * @example "23203f9264161714cdb8d2f474b9b641e6a735f8cea4098c40a3cab8743bd749"
   */
  sha256?: string;
  /**
   * @format int32
   * @default 0
   */
  position?: number;
}

export interface ProcedureInput {
  /** Name of procedure */
  name?: string;
  /** Description of procedure */
  description?: string;
  /**
   * Expiration date. The procedure will be out of usage after this date.
   * @format date
   */
  expiresAt?: string;
  /** Defines if the procedure is a template (if true). A template could be used by a procedure to get all properties of the template. Check parent parameter for more information. */
  template?: boolean;
  /** Defines an order for the procedure process. If true, position of each member will be used to define the validation workflow. */
  ordered?: boolean;
  /** Metadata of the file (do not forget to replace key1 and key2 by your own custom values) */
  metadata?: {
    key1?: string;
    key2?: number;
  };
  config?: ProcedureConfig;
  /** List of members, REQUIRED if start field is true. */
  members?: MemberInput[];
  /**
   * Defines if the procedure has been started. If false, the procedure status will be draft.
   * @default true
   */
  start?: boolean;
  /**
   * Defines if the files of the procedure must be archived (Organization should be allowed)
   * @default false
   */
  archive?: boolean;
}

export interface ProcedureDuplicateInput {
  /**
   * Defines if the new procedure should be started after the duplication
   * @default false
   * @example true
   */
  start?: boolean;
  /**
   * Override the parent value for this property and defines if the new procedure should be a template or not
   * @example false
   */
  template?: boolean;
}

export interface ProcedureConfig {
  email?: ProcedureConfigEmail;
  reminders?: ProcedureConfigReminder[];
  webhook?: ProcedureConfigWebhook;
}

export interface ProcedureConfigWebhook {
  "procedure.started"?: ConfigWebhookTemplate[];
  "procedure.finished"?: ConfigWebhookTemplate[];
  "procedure.refused"?: ConfigWebhookTemplate[];
  "procedure.expired"?: ConfigWebhookTemplate[];
  "procedure.deleted"?: ConfigWebhookTemplate[];
  "procedure.error"?: ConfigWebhookTemplate[];
  "member.started"?: ConfigWebhookTemplate[];
  "member.finished"?: ConfigWebhookTemplate[];
  "comment.created"?: ConfigWebhookTemplate[];
}

export interface ProcedureConfigReminder {
  /**
   * Number of days between each reminder. The date of the creation of the procedure is used to define the date of the reminder. For example, if you set 2 and the procedure is created at 2017-01-01T15:03:01, the first reminder will be sent at 2017-01-03T15:03:01.
   * @format int32
   * @min 1
   * @default 1
   */
  interval: number;
  /**
   * Limit of reminders sent.
   * @format int32
   * @min 1
   * @max 90
   * @default 5
   */
  limit?: number;
  config?: ProcedureConfigReminderConfig;
}

export interface ProcedureConfigEmail {
  "procedure.started"?: ConfigEmailTemplate[];
  "procedure.finished"?: ConfigEmailTemplate[];
  "procedure.refused"?: ConfigEmailTemplate[];
  "procedure.expired"?: ConfigEmailTemplate[];
  "procedure.deleted"?: ConfigEmailTemplate[];
  "member.started"?: ConfigEmailTemplate[];
  "member.finished"?: ConfigEmailTemplate[];
  "comment.created"?: ConfigEmailTemplate[];
}

export interface ProcedureConfigReminderConfig {
  email?: ProcedureConfigReminderConfigEmail;
}

export interface ProcedureConfigReminderConfigEmail {
  "reminder.executed"?: ConfigEmailTemplate[];
}

export interface ProcedureOutput {
  /**
   * Id of the object
   * @pattern ^/procedures/[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$
   * @example "/procedures/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  id?: string;
  /** Name of procedure */
  name?: string;
  /** Description of procedure */
  description?: string;
  /**
   * Date of creation
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  createdAt?: string;
  /**
   * Date of last update
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  updatedAt?: string;
  /**
   * Expiration date. The procedure will be out of usage after this date.
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  expiresAt?: string;
  /** Status of the procedure */
  status?: "draft" | "active" | "finished" | "expired" | "refused" | "error";
  /**
   * Id of creator of the object
   * @pattern ^/users/[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$
   * @example "/users/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  creator?: string;
  /** The creator's first name */
  creatorFirstName?: string;
  /** The creator's last name */
  creatorLastName?: string;
  /**
   * Id of workspace creator of the object
   * @pattern ^/workspaces/[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$
   * @example "/workspaces/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  workspace?: string;
  /** Defines if the procedure is a template (if true). A template could be used by a procedure to get all properties of the template. Check parent parameter for more information. */
  template?: boolean;
  /** Defines an order for the procedure process. If true, position of each member will be used to define the validation workflow. */
  ordered?: boolean;
  /**
   * Id of a procedure template used to get all properties of the template in the new procedure. If you set other properties, they will be replaced. If you don’t set other properties, all properties will be cloned.
   * @example "/procedures/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  parent?: string;
  /** Metadata of the procedure */
  metadata?: {
    key1?: string;
    key2?: number;
  };
  config?: ProcedureConfig;
  members?: MemberOutput[];
  /** List of files used in the procedure. */
  files?: FileOutput[];
  /** Defines if related files are available. */
  relatedFilesEnable?: boolean;
  /**
   * Defines if the files of the procedure must be archived (Workspace should be allowed)
   * @default false
   */
  archive?: boolean;
}

export interface ProcedureRemindInput {
  config?: ProcedureRemindConfig;
}

export interface ProcedureRemindConfig {
  email?: ProcedureRemindConfigEmail;
}

export interface ProcedureRemindConfigEmail {
  "reminder.executed"?: ConfigEmailTemplate[];
}

export interface ConfigWebhookTemplate {
  /** Url to call */
  url: string;
  /**
   * Http request type
   * @default "GET"
   */
  method?: "GET" | "POST" | "PUT" | "PATCH";
  /**
   * Http request headers
   * @example {"X-Yousign-Custom-Header":"Test value"}
   */
  headers?: object;
}

export interface MemberInput {
  /**
   * ID of the user in your companies. Informations about the member will be duplicate (first name, last name, email and phone number).
   *
   * Required if none of fields above are specified.
   * @example "/users/81f46049-150f-497c-9514-2510b635be0e"
   */
  user?: string;
  /**
   * Type of a member. "signer" to sign documents (legally) and "validator" to validate documents.
   * @default "signer"
   * @example "signer"
   */
  type?: "signer" | "validator";
  /**
   * Firstname of an external member. Required if user field is blank
   * @example "jones"
   */
  firstname?: string;
  /**
   * Lastname of an external member. Required if user field is blank
   * @example "Indiana"
   */
  lastname?: string;
  /**
   * Email of an external member. Required if user field is blank
   * @example "test@test.com"
   */
  email?: string;
  /**
   * Phone of an external member. Required if user field is blank
   * @example "+33102030405"
   */
  phone?: string;
  /**
   * If the procedure have the boolean "ordered" at true, you can define position of the order to invite your members to sign.
   * Only the first member will be invited to sign.
   *
   * When the first member have signed, the second will be invited, etc...
   * @format int32
   * @example 1
   */
  position?: number;
  fileObjects?: FileObjectInput[];
  /**
   * Procedure id reference
   * @example "/procedures/81f46049-150f-497c-9514-2510b635be0e"
   */
  procedure?: string;
  operationLevel?: "none" | "custom";
  operationCustomModes?: ("sms" | "inwebo" | "email")[];
  operationModeSmsConfig?: OperationModeSmsConfiguration;
}

export interface MemberOutput {
  /**
   * Id of the object
   * @pattern ^/members/[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$
   * @example "/members/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  id?: string;
  /**
   * Internal user associated with the member. In this case, informations about the member will be informations of the user (first name, last name, phone number and email).
   * @pattern ^/users/[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$
   * @example "/users/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  user?: string;
  /**
   * Type of a member. "signer" to sign documents (legally) and "validator" to validate documents.
   * @default "signer"
   */
  type?: "signer" | "validator";
  /** Firstname of an external member. */
  firstname?: string;
  /** Lastname of an external member. */
  lastname?: string;
  /**
   * Email of an external member.
   * @example "test@test.com"
   */
  email?: string;
  /**
   * Phone of an external member.
   * @example "+33102030405"
   */
  phone?: string;
  /**
   * Position of the member if ordered is set to true. Example with two members, the first one could have a position set to 1, the second one set to 2. In this case, when the procedure starts, only the first member will be notified and could validate the documents. The second one could not validate the documents, he will be notified when the first signer is notified.
   * @format int32
   */
  position?: number;
  /**
   * Date of creation
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  createdAt?: string;
  /**
   * Date of last update
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  updatedAt?: string;
  /** @example "pending" */
  status?: "pending" | "processing" | "done" | "refused" | "error";
  fileObjects?: FileObjectOutput[];
  /** Comment of a member when he refuses a signature */
  comment?: string;
  /**
   * Procedure id reference
   * @example "/procedures/81f46049-150f-497c-9514-2510b635be0e"
   */
  procedure?: string;
  /** @example "custom" */
  operationLevel?: "none" | "custom";
  operationCustomModes?: ("sms" | "inwebo" | "email")[];
  operationModeSmsConfig?: OperationModeSmsConfiguration;
}

export interface OperationModeSmsConfiguration {
  /**
   * Content of your custom sms message. Should contains the substring `{{code}}`
   * @example "Hello, your code for signature is {{code}}."
   */
  content: string;
}

export interface FileObjectInput {
  /** File id reference */
  file: string;
  /**
   * Page of the visible signature. This property is ignored if fieldName is set.
   * If you want a visible signature, you must set page, position and fieldName.
   * @format int32
   */
  page?: number;
  /**
   * Coordinates of the signature image to set. Format is : "llx,lly,urx,ury". llx=left lower x coordinate, lly=left lower y coordinate, urx=upper right x coordinate, ury = upper right y coordinate. To get easily coordinates, you could use this tool : http://placeit.yousign.fr
   * @pattern /^\d+(,\d+){3}$/
   * @example "400,700,500,800"
   */
  position?: string;
  /** [type=signature] Name of the signature field existing in the document, it will be not used on the signature image. */
  fieldName?: string;
  /**
   * [type=signature] Text associated above the signature image.
   *
   * You can use some variable inside : {{date.en}} {{date.fr}} {{time}} that it will be parsed to show the date of the signature.
   */
  mention?: string;
  /**
   * [type=signature] Text associated below the signature image. (internal usage only, should not be used).
   *
   * You can use some variable inside : {{date.en}} {{date.fr}} {{time}} that it will be parsed to show the date of the signature.
   */
  mention2?: string;
  /** Member id reference */
  member?: string;
  /**
   * [type=signature] The reason they are signing the agreement
   * @default "Signed by Yousign"
   */
  reason?: string;
  /**
   * The type of the file object
   * @default "signature"
   */
  type?: "signature" | "text";
  /**
   * [type=text] Indicate if the member must fill or not the field
   * @default false
   */
  contentRequired?: boolean;
  /**
   * [type=text] The content of the field. Could be used for placeholder
   * @maxLength 255
   */
  content?: string;
  /**
   * [type=text] The font familly used to render the TextField. Currently only the default value will be used.
   * @default "raleway"
   */
  fontFamily?: "raleway";
  /**
   * [type=text] The font size used to render the field. Currently only the default value will be used.
   * @format int32
   * @min 6
   * @max 20
   * @default 12
   */
  fontSize?: number;
  /**
   * [type=text] The font color used to render the field.
   * @pattern ^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$
   * @example "0,0,0"
   */
  fontColor?: string;
}

export interface FileObjectOutput {
  /**
   * Id of the object
   * @pattern ^/file_objects/[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$
   * @example "/file_objects/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  id?: string;
  file: FileOutput;
  /**
   * Page of the visible signature. This property is ignored if fieldName is set. If you want a visible signature, you must set page, position and fieldName.
   * @format int32
   */
  page?: number;
  /**
   * Coordinates of the signature image to set. Format is : “llx,lly,urx,ury”. llx=left lower x coordinate, lly=left lower y coordinate, urx=upper right x coordinate, ury = upper right y coordinate. To get easily coordinates, you could use this tool : http://placeit.yousign.fr
   * @pattern /^\d+(,\d+){3}$/
   * @example "400,700,500,800"
   */
  position?: string;
  /** [type=signature] Name of the signature field existing in the document */
  fieldName?: string;
  /**
   * [type=signature] Text associated above the signature image.
   *
   * You can use some variable inside : {{date.en}} {{date.fr}} {{time}} that it will be parsed to show the date of the signature.
   * @example "Read and approuved"
   */
  mention?: string;
  /**
   * [type=signature] Text associated below the signature image. (internal usage only, should not be used).
   *
   * You can use some variable inside : {{date.en}} {{date.fr}} {{time}} that it will be parsed to show the date of the signature.
   */
  "mention2 (internal)"?: string;
  /**
   * Date of creation
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  createdAt?: string;
  /**
   * Date of last update
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  updatedAt?: string;
  /**
   * Date of signature or validation
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  executedAt?: string;
  /**
   * [type=signature] The reason they are signing the agreement
   * @default "Signed by Firstname Lastname"
   */
  reason?: string;
  /**
   * The type of the file object
   * @default "signature"
   */
  type?: "signature" | "text";
  /**
   * [type=text] Indicate if the member must fill or not the field
   * @default false
   */
  contentRequired?: boolean;
  /**
   * [type=text] The content of the field. Could be used for placeholder
   * @maxLength 255
   */
  content?: string;
  /**
   * [type=text] The font familly used to render the TextField. Currently only the default value will be used.
   * @default "raleway"
   */
  fontFamily?: "raleway";
  /**
   * [type=text] The font size used to render the field. Currently only the default value will be used.
   * @format int32
   * @min 6
   * @max 20
   * @default 12
   */
  fontSize?: number;
  /**
   * [type=text] The font color used to render the field.
   * @pattern ^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$
   * @example "0,0,0"
   */
  fontColor?: string;
}

export interface FileObjectInputWithoutFileReference {
  /**
   * Page of the visible signature. This property is ignored if fieldName is set.
   * If you want a visible signature, you must set page, position and fieldName.
   * @format int32
   */
  page?: number;
  /**
   * Coordinates of the signature image to set. Format is : "llx,lly,urx,ury". llx=left lower x coordinate, lly=left lower y coordinate, urx=upper right x coordinate, ury = upper right y coordinate. To get easily coordinates, you could use this tool : http://placeit.yousign.fr
   * @pattern /^\d+(,\d+){3}$/
   * @example "400,700,500,800"
   */
  position?: string;
  /** Name of the signature field existing in the document, it will be not used on the signature image. */
  fieldName?: string;
  /**
   * Text associated above the signature image.
   *
   * You can use some variable inside : {{date.en}} {{date.fr}} {{time}} that it will be parsed to show the date of the signature.
   */
  mention?: string;
  /**
   * Text associated below the signature image.
   *
   * You can use some variable inside : {{date.en}} {{date.fr}} {{time}} that it will be parsed to show the date of the signature.
   */
  mention2?: string;
  /**
   * The reason they are signing the agreement
   * @default "Signed by Yousign"
   */
  reason?: string;
}

export interface FileObjectOutputWithoutFileReference {
  /**
   * Id of the object
   * @pattern ^/file_objects/[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$
   * @example "/file_objects/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  id?: string;
  /**
   * Page of the visible signature. This property is ignored if fieldName is set. If you want a visible signature, you must set page, position and fieldName.
   * @format int32
   */
  page?: number;
  /**
   * Coordinates of the signature image to set. Format is : “llx,lly,urx,ury”. llx=left lower x coordinate, lly=left lower y coordinate, urx=upper right x coordinate, ury = upper right y coordinate. To get easily coordinates, you could use this tool : http://placeit.yousign.fr
   * @pattern /^\d+(,\d+){3}$/
   * @example "400,700,500,800"
   */
  position?: string;
  /** Name of the signature field existing in the document */
  fieldName?: string;
  /**
   * Text associated above the signature image.
   *
   * You can use some variable inside : {{date.en}} {{date.fr}} {{time}} that it will be parsed to show the date of the signature.
   * @example "Read and approuved"
   */
  mention?: string;
  /**
   * Text associated below the signature image.
   *
   * You can use some variable inside : {{date.en}} {{date.fr}} {{time}} that it will be parsed to show the date of the signature.
   */
  "mention2 (internal)"?: string;
  /**
   * Date of creation
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  createdAt?: string;
  /**
   * Date of last update
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  updatedAt?: string;
  /**
   * Date of signature or validation
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  executedAt?: string;
  /**
   * The reason they are signing the agreement
   * @default "Signed by Yousign"
   */
  reason?: string;
}

export interface OperationOutput {
  /** Id of operation */
  id?: string;
  /**
   * Date of creation
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  createdAt?: string;
  /**
   * Last date of update
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  updatedAt?: string;
  authentication?: AuthenticationInweboOutput;
  /** Mode of authentication */
  mode?: "sms" | "inwebo" | "email";
  /** Status of operation */
  status?: "pending" | "done" | "error";
  /** Type of operation */
  type?: "accept" | "refuse";
  /** Metadata of the operation */
  metadata?: {
    key1?: string;
    key2?: number;
  };
}

export interface OperationInput {
  /** Type of operation */
  type: "accept" | "refuse";
  /** Mode of authentication */
  mode: "sms" | "inwebo" | "email";
  /** @default false */
  allMembers?: boolean;
  /** @example "/members/548922ec-b94f-476a-93e9-d7f73c35a92c" */
  members?: string[];
  /** Status of operation */
  status?: "pending" | "done" | "error";
  comment?: string;
  /** Metadata of the operation */
  metadata?: {
    key1?: string;
    key2?: number;
  };
}

export interface AuthenticationInweboOutput {
  /**
   * id of authentication
   * @pattern ^/authentications/inwebo/[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$
   * @example "/authentications/inwebo/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  id?: string;
  /** Status of authentication */
  status?: "waiting" | "refused" | "timeout" | "ok";
  /** Type of authentication */
  type?: string;
}

export interface AuthenticationSmsOutput {
  /**
   * id of authentication
   * @pattern ^/authentications/sms/[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$
   * @example "/authentications/sms/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  id?: string;
  /** Status of authentication */
  status?: "active" | "expired" | "used" | "reached";
  /** Type of authentication */
  type?: string;
}

export interface AuthenticationEmailOutput {
  /**
   * id of authentication
   * @pattern ^/authentications/email/[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$
   * @example "/authentications/email/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  id?: string;
  /** Status of authentication */
  status?: "active" | "expired" | "used" | "reached";
  /** Type of authentication */
  type?: string;
}

export interface ConsentProcessOutput {
  /**
   * Id of object
   * @pattern ^/consent_processes/[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$
   * @example "/consent_processes/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  id?: string;
  /** Type of operation */
  type?: "text" | "checkbox";
  /** Description of consent Process */
  description?: string;
  /**
   * Consent process is required
   * @default true
   */
  required?: boolean;
  /**
   * Position of consent process
   * @example 1
   */
  position?: number;
  /**
   * Expected value for consent process value
   * @example "My value"
   */
  expectedValue?: string;
  /**
   * List of members attached to consent process
   * @example ["/members/9d1ede2b-5687-4440-bdc8-dd0bc64f664f"]
   */
  members: string[];
  /**
   * File attached to consent process
   * @example "/files/9d1ede2b-5687-4440-bdc8-dd0bc64f664f"
   */
  file?: string;
}

export interface ConsentProcessInput {
  /** Type of operation */
  type: "text" | "checkbox";
  /** Description of consent Process */
  description?: string;
  /**
   * Consent process is required
   * @default true
   */
  required?: boolean;
  /** Position of consent process */
  position?: number;
  /**
   * Expected value for consent process value
   * @example "My value"
   */
  expectedValue?: string;
  /**
   * List of members attached to consent process
   * @example ["/members/9d1ede2b-5687-4440-bdc8-dd0bc64f664f"]
   */
  members: string[];
  /**
   * File attached to consent process
   * @example "/files/9d1ede2b-5687-4440-bdc8-dd0bc64f664f"
   */
  file?: string;
}

export interface ConsentProcessValueInput {
  /**
   * Consent process attached to concent process value
   * @example "/consent_processes/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  consentProcess: string;
  /**
   * Member attached to concent process value
   * @example "/members/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  member: string;
  /**
   * Value of concent process value
   * @example "My value"
   */
  value?: string;
}

export interface ConsentProcessValueOutput {
  /**
   * id of object
   * @example "/consent_process_values/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  id?: string;
  /**
   * Consent process attached to concent process value
   * @example "/consent_processes/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  consentProcess: string;
  /**
   * Member attached to concent process value
   * @example "/members/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  member: string;
  /**
   * Value of concent process value
   * @example "My value"
   */
  value?: string;
  /**
   * Date of creation
   * @format date-time
   * @example "2018-10-30T16:10:00+01:00"
   */
  createdAt?: string;
}

export interface SignatureUiInput {
  /**
   * Signature UI's name
   * @example "yousign-ui-website-contracts"
   */
  name: string;
  /**
   * Signature UI's description
   * @example "Used for quotation and contracts with partners on our website."
   */
  description?: string;
  /**
   * Toggle header bar of the app view
   * @default true
   * @example true
   */
  enableHeaderBar?: boolean;
  /**
   * Toggle "Sign as" band on the top of the app view
   * @default true
   * @example true
   */
  enableHeaderBarSignAs?: boolean;
  /**
   * Toggle sidebar of the app view
   * @default true
   * @example true
   */
  enableSidebar?: boolean;
  /**
   * Toggle list of members in the procedure
   * @default true
   * @example true
   */
  enableMemberList?: boolean;
  /**
   * Toggle list of documents in the procedure
   * @default true
   * @example true
   */
  enableDocumentList?: boolean;
  /**
   * Toggle downloads buttons for documents
   * @default true
   * @example true
   */
  enableDocumentDownload?: boolean;
  /**
   * Toggle activity feed
   * @default true
   * @example true
   */
  enableActivities?: boolean;
  /**
   * True for use a popup to enter the SMS code, false for use a fullscreen view.
   * @default false
   * @example true
   */
  authenticationPopup?: boolean;
  /**
   * Default value for zoom of the PDF viewer. Default value is the adapted to the resolution of your screen.
   * @min 1
   * @max 500
   */
  defaultZoom?: number;
  /**
   * Base64 of your logo
   * @example "data:image/png;base64,iVBORw[...]"
   */
  logo?: string;
  /** Allow sign images types available for signature. The first type of the list will be selected as default for the signer. */
  signImageTypesAvailable?: ("name" | "draw" | "custom")[];
  /** Default selected language of the interface. Must be present in "languages" field. */
  defaultLanguage?: string;
  /** Array of allowed languages, use country code */
  languages?: string[];
  labels?: SignatureUiLabelInputIncluded[];
  /**
   * List of fonts to load on the view. (Loaded via Google fonts)
   * @example "Roboto"
   */
  fonts?: string[];
  /** CSS for customize the view */
  style?: string;
  /** Redirection when a Procedure is refused */
  redirectCancel?: {
    /** URL of redirect */
    url?: string;
    /**
     * Target of the redirection
     * @default "_top"
     */
    target?: "_top" | "_blank" | "_parent" | "_self";
    /**
     * Don't redirect the user directly, send to our detail of the procedure view. But invite the user to click on a button for use this redirection.
     * @default true
     * @example true
     */
    auto?: boolean;
  };
  /** Redirect when the Member gets an error on the procedure of the signature */
  redirectError?: {
    /** URL of redirect */
    url: string;
    /** Target of the redirection */
    target?: "_top" | "_blank" | "_parent" | "_self";
    /**
     * Don't redirect the user directly, send to our detail of the procedure view. But invite the user to click on a button for use this redirection.
     * @default true
     * @example true
     */
    auto?: boolean;
  };
  /** Redirect when the Member has successfully signed the procedure */
  redirectSuccess?: {
    /** URL of redirect */
    url?: string;
    /** Target of the redirection */
    target?: "_top" | "_blank" | "_parent" | "_self";
    /**
     * Don't redirect the user directly, send to our detail of the procedure view. But invite the user to click on a button for use this redirection.
     * @default true
     * @example true
     */
    auto?: boolean;
  };
}

export interface SignatureUiLabelInput {
  /** Name of the label. If the name is not used in the view, nothing will appear. */
  name: string;
  /**
   * Translation of the label per language
   * @example "{"en": "Label en", "fr": "Label fr"}"
   */
  languages?: object;
  /** Associated Signature UI's ID */
  signatureUi?: string;
}

export interface SignatureUiLabelInputIncluded {
  /** Name of the label. If the name is not used in the view, nothing will appear. */
  name: string;
  /**
   * Translation of the label per language
   * @example "{"en": "Label en", "fr": "Label fr"}"
   */
  languages?: object;
}

export interface SignatureUiLabelOutput {
  /** Resource's ID */
  id?: string;
  /** Name of the label. If the name is not used in the view, nothing will appear. */
  name?: string;
  /**
   * Translation of the label per language
   * @example "{"en": "Label en", "fr": "Label fr"}"
   */
  languages?: object;
  /** Associated signature UI's ID */
  signatureUi?: string;
  /** Creator's ID */
  creator?: string;
  /**
   * Date of creation
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  createdAt?: string;
  /**
   * Date of last update
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  updatedAt?: string;
}

export interface SignatureUiOutput {
  /** Resource's ID */
  id?: string;
  /** Resource's name */
  name: string;
  description?: string;
  /**
   * Toggle header bar of the app view
   * @default true
   * @example true
   */
  enableHeaderBar?: boolean;
  /**
   * Toggle "Sign as" band on the top of the app view
   * @default true
   * @example true
   */
  enableHeaderBarSignAs?: boolean;
  /**
   * Toggle sidebar of the app view
   * @default true
   * @example true
   */
  enableSidebar?: boolean;
  /**
   * Toggle list of members in the procedure
   * @default true
   * @example true
   */
  enableMemberList?: boolean;
  /**
   * Toggle list of documents in the procedure
   * @default true
   * @example true
   */
  enableDocumentList?: boolean;
  /**
   * Toggle downloads buttons for documents
   * @default true
   * @example true
   */
  enableDocumentDownload?: boolean;
  /**
   * Toggle activity feed
   * @default true
   * @example true
   */
  enableActivities?: boolean;
  /**
   * True for use a popup for enter the SMS code, false for use a fullscreen view.
   * @default false
   * @example true
   */
  authenticationPopup?: boolean;
  /** Default value for zoom of the PDF viewer. Default value is the adapted to the resolution of your screen. */
  defaultZoom?: number;
  /**
   * Base64 of your logo
   * @example "data:image/png;base64,iVBORw[...]"
   */
  logo?: string;
  /** Allow sign images types available for signature. */
  signImageTypesAvailable?: ("name" | "draw" | "custom")[];
  /** Default language of the view. Must be in "languages" field. */
  defaultLanguage?: string;
  /** Array of allowed languages, use country code */
  languages?: string[];
  labels?: SignatureUiLabelOutput[];
  /**
   * List of fonts to load on the view. (Loaded via google fonts)
   * @example "Roboto"
   */
  fonts?: string[];
  /** CSS for customize the view */
  style?: string;
  /** Redirection when a procedure is refused */
  redirectCancel?: {
    /** Url of redirect */
    url?: string;
    /**
     * target of the redirection
     * @default "_top"
     */
    target?: "_top" | "_blank" | "_parent" | "_self";
    /**
     * Don't redirect the user directly, send to our detail of the procedure view. But invite the user to click on a button for use this redirection.
     * @example false
     */
    auto?: boolean;
  };
  /** Redirect when the member get an error of the signature of the procedure */
  redirectError?: {
    /** Url of redirect */
    url: string;
    /** target of the redirection */
    target?: "_top" | "_blank" | "_parent" | "_self";
    /**
     * Don't redirect the user directly, send to our detail of the procedure view. But invite the user to click on a button for use this redirection.
     * @default false
     */
    auto?: boolean;
  };
  /** Redirect when the member have successfully signed the procedure */
  redirectSuccess?: {
    /** Url of redirect */
    url?: string;
    /** Target of the redirection */
    target?: "_top" | "_blank" | "_parent" | "_self";
    /**
     * Don't redirect the user directly, send to our detail of the procedure view. But invite the user to click on a button for use this redirection.
     * @default false
     */
    auto?: boolean;
  };
  /** Creator's ID */
  creator?: string;
  /** Associated Workspace's ID */
  workspace?: string;
  /**
   * Date of creation
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  createdAt?: string;
  /**
   * Date of last update
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  updatedAt?: string;
}

export interface SignatureUiInputUpdate {
  /** Resource's name */
  name: string;
  /** Signature UI's description */
  description?: string;
  /**
   * Toggle header bar of the app view
   * @default true
   */
  enableHeaderBar?: boolean;
  /**
   * Toggle "Sign as" band on the top of the app view
   * @default true
   */
  enableHeaderBarSignAs?: boolean;
  /**
   * Toggle sidebar of the app view
   * @default true
   */
  enableSidebar?: boolean;
  /**
   * Toggle list of members in the procedure
   * @default true
   */
  enableMemberList?: boolean;
  /**
   * Toggle list of documents in the procedure
   * @default true
   */
  enableDocumentList?: boolean;
  /**
   * Toggle downloads buttons for documents
   * @default true
   */
  enableDocumentDownload?: boolean;
  /**
   * Toggle activity feed
   * @default true
   */
  enableActivities?: boolean;
  /**
   * True for use a popup for enter the SMS code, false for use a fullscreen view.
   * @default false
   */
  authenticationPopup?: boolean;
  /** Default zoom of the pdf viewer. Default is the adapted to the resolution of your screen. */
  defaultZoom?: number;
  /** Base64 of your logo */
  logo?: string;
  /** Allow sign images types available for signature. */
  signImageTypesAvailable?: ("name" | "draw" | "custom")[];
  /** Default language of the view. Must be in "languages" field. */
  defaultLanguage?: string;
  /** Array of allowed languages, use country code */
  languages?: string[];
  /**
   * List of fonts to load on the view. (Loaded via google fonts)
   * @example "Roboto"
   */
  fonts?: string[];
  /** CSS for customize the view */
  style?: string;
  /** Redirection when a procedure is refused */
  redirectCancel?: {
    /** Url of redirect */
    url?: string;
    /**
     * target of the redirection
     * @default "_top"
     */
    target?: "_top" | "_blank" | "_parent" | "_self";
    /**
     * Don't redirect the user directly, send to our detail of the procedure view. But invite the user to click on a button for use this redirection.
     * @example false
     */
    auto?: boolean;
  };
  /** Redirect when the member get an error of the signature of the procedure */
  redirectError?: {
    /** Url of redirect */
    url: string;
    /** target of the redirection */
    target?: "_top" | "_blank" | "_parent" | "_self";
    /**
     * Don't redirect the user directly, send to our detail of the procedure view. But invite the user to click on a button for use this redirection.
     * @default false
     */
    auto?: boolean;
  };
  /** Redirect when the member have successfully signed the procedure */
  redirectSuccess?: {
    /** Url of redirect */
    url?: string;
    /** Target of the redirection */
    target?: "_top" | "_blank" | "_parent" | "_self";
    /**
     * Don't redirect the user directly, send to our detail of the procedure view. But invite the user to click on a button for use this redirection.
     * @default false
     */
    auto?: boolean;
  };
}

export interface ServerStampInput {
  /**
   * Resource file uri
   * @example "/files/1eb8923e-0558-4f0e-823e-294b422a28e2"
   */
  file: string;
  /**
   * Resource certificate uri (please contact support for more informations)
   * @example "/certificates/5025dee5-8c16-444e-8147-a008d87156b2"
   */
  certificate?: string;
  config?: ServerStampConfig;
  fileObjects: FileObjectInputWithoutFileReference[];
  /**
   * Image signature in base 64
   * @example "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7..."
   */
  signImage?: string;
}

export interface ServerStampOutput {
  /**
   * Resource server stamp uri
   * @example "/server_stamps/0c73955f-e4c8-4975-9a8c-ad0bc3dde689"
   */
  id: string;
  /**
   * Resource file uri
   * @example "/files/1eb8923e-0558-4f0e-823e-294b422a28e2"
   */
  file: string;
  /**
   * Resource certificate uri (please contact support for more informations)
   * @example "/certificates/5025dee5-8c16-444e-8147-a008d87156b2"
   */
  certificate: string;
  config?: ServerStampConfig[];
  fileObjects: FileObjectOutputWithoutFileReference[];
  /**
   * Date of creation
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  createdAt: string;
  /**
   * Date of last update
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  updatedAt: string;
  /**
   * Date of end
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  finishedAt: string;
  status: "pending" | "processing" | "done";
  /**
   * Resource workspace uri
   * @example "/workspaces/3df0b580-adfe-43a9-859c-d724bcfc240b"
   */
  workspace: string;
}

export interface ServerStampConfig {
  webhook?: ServerStampConfigWebhook;
}

export interface ServerStampConfigWebhook {
  "server_stamp.finished"?: ConfigWebhookTemplate[];
  "server_stamp.error"?: ConfigWebhookTemplate[];
}

export interface CheckDocumentIdentitiesInput {
  /** Content in base 64 of the document to check */
  file: string;
  /** List of firstnames to check on document */
  firstNames?: string[];
  /** Birth name to check on document */
  birthName?: string;
  /**
   * Birth date to check on document
   * @format date
   */
  birthDate?: string;
}

export interface CheckDocumentIdentitiesOutput {
  /**
   * Id of the object
   * @pattern ^/check-document/identities/[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$
   * @example "/check-document/identities/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  id?: string;
  /**
   * Date of creation
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  createdAt?: string;
  /**
   * Date of last update
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  updatedAt?: string;
  /** List of firstnames to check on document */
  firstNames?: string[];
  /** Birth name to check on document */
  birthName?: string;
  /**
   * Birth date to check on document
   * @format date
   */
  birthDate?: string;
  /**
   * workspace creator of the object
   * @example "/workspaces/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  workspace?: string;
  /**
   * Creator of the object
   * @example "/users/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  creator?: string;
  /** Type of document */
  documentType?: "ID_CARD" | "PASSPORT";
  /** Extracted firstnames on the document */
  extractedFirstNames?: string[];
  /** Extracted birth name on the document */
  extractedBirthName?: string;
  /**
   * Extracted birth date on the document
   * @format date
   */
  extractedBirthDate?: string;
  /** Extracted gender on the document */
  extractedGender?: string;
  /**
   * Extracted issuance date on the document
   * @format date
   */
  extractedIssuanceDate?: string;
  /**
   * Extracted expiration date on the document
   * @format date
   */
  extractedExpirationDate?: string;
  /** Extracted MRZ on the document */
  extractedMrz?: string[];
  /** Defines if one firstname sent in the input is valid */
  firstNameValid?: boolean;
  /** Defines if birth name sent in the input is valid */
  birthNameValid?: boolean;
  /** Defines if MRZ sent in the input is valid */
  mrzValid?: boolean;
  /** Defines if the document is expired */
  expired?: boolean;
  /** Defines if the document is valid */
  valid?: boolean;
}

export interface CheckDocumentBankAccountsInput {
  /** Content in base 64 of the document to check */
  file: string;
  /** Firstname to check on document */
  firstName?: string;
  /** Birth name to check on document */
  birthName?: string;
  /** Lastname to check on document */
  lastName?: string;
  /** Company name to check on document */
  companyName?: string;
  /** Iban text to check on document */
  iban?: string;
}

export interface CheckDocumentBankAccountsOutput {
  /**
   * Id of the object
   * @pattern ^/check-document/[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$
   * @example "/check-document/bank_accounts/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  id?: string;
  /**
   * Date of creation
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  createdAt?: string;
  /**
   * Date of last update
   * @format date-time
   * @example "2020-11-10T14:51:00+01:00"
   */
  updatedAt?: string;
  /** Firstname to check on document */
  firstName?: string;
  /** Birth name to check on document */
  birthName?: string;
  /** Lastname to check on document */
  lastName?: string;
  /** Iban to check on document */
  iban?: string;
  /** Company name to check on document */
  companyName?: string;
  /**
   * Type of document
   * @example "RIB"
   */
  documentType?: "RIB";
  /**
   * Workspace creator of the object
   * @example "/workspaces/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  workspace?: string;
  /**
   * Creator of the object
   * @example "/users/9d1ede2b-5687-4440-bdc8-dd0bc64f668c"
   */
  creator?: string;
  /** Extracted iban on the document */
  extractedIban?: string;
  /** Defines if one firstname sent in the input is valid */
  firstNameValid?: boolean;
  /** Defines if birth name sent in the input is valid */
  birthNameValid?: boolean;
  /** Defines if lastname sent in the input is valid */
  lastNameValid?: boolean;
  /** Defines if company name sent in the input is valid */
  companyNameValid?: boolean;
  /** Defines if iban sent in the input is valid */
  ibanValid?: boolean;
}

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
  public baseUrl: string = "https://api.yousign.com";
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
 * @title Yousign API Swagger
 * @version 2.1
 * @baseUrl https://api.yousign.com
 * @contact our technical support <support@yousign.fr>
 *
 * For your information, the Yousign API documentation is available at https://dev.yousign.com/
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  organizations = {
    /**
     * No description
     *
     * @tags Organizations
     * @name OrganizationsList
     * @summary List all Organizations
     * @request GET:/organizations
     */
    organizationsList: (params: RequestParams = {}) =>
      this.request<OrganizationOutput[], any>({
        path: `/organizations`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  workspaces = {
    /**
     * No description
     *
     * @tags Workspaces
     * @name WorkspacesList
     * @summary List all Workspaces
     * @request GET:/workspaces
     */
    workspacesList: (params: RequestParams = {}) =>
      this.request<WorkspaceOutput[], any>({
        path: `/workspaces`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags Users
     * @name UsersList
     * @summary List all Users
     * @request GET:/users
     */
    usersList: (params: RequestParams = {}) =>
      this.request<UserOutput[], any>({
        path: `/users`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersCreate
     * @summary Create a new User on Yousign application
     * @request POST:/users
     */
    usersCreate: (body: UserInput, params: RequestParams = {}) =>
      this.request<UserOutput, any>({
        path: `/users`,
        method: "POST",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersDetail
     * @summary Find a User by ID
     * @request GET:/users/{id}
     */
    usersDetail: (id: string, params: RequestParams = {}) =>
      this.request<UserOutput, any>({
        path: `/users/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersUpdate
     * @summary Update a User
     * @request PUT:/users/{id}
     */
    usersUpdate: (id: string, body: UserInput, params: RequestParams = {}) =>
      this.request<UserOutput, any>({
        path: `/users/${id}`,
        method: "PUT",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersDelete
     * @summary Delete a User
     * @request DELETE:/users/{id}
     */
    usersDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  userGroups = {
    /**
     * No description
     *
     * @tags User Groups
     * @name UserGroupsList
     * @summary Get User Group list
     * @request GET:/user_groups
     */
    userGroupsList: (params: RequestParams = {}) =>
      this.request<UserGroup[], any>({
        path: `/user_groups`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User Groups
     * @name UserGroupsDetail
     * @summary Find a User Group by ID
     * @request GET:/user_groups/{id}
     */
    userGroupsDetail: (id: string, params: RequestParams = {}) =>
      this.request<UserGroup, any>({
        path: `/user_groups/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  files = {
    /**
     * @description Used to upload a file in base64 on our platform
     *
     * @tags Files
     * @name FilesCreate
     * @summary Create a new File
     * @request POST:/files
     */
    filesCreate: (body: FileInput, params: RequestParams = {}) =>
      this.request<FileOutput, any>({
        path: `/files`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all the information regarding the File but without its content (for performance issue).
     *
     * @tags Files
     * @name FilesDetail
     * @summary Find a File by ID
     * @request GET:/files/{id}
     */
    filesDetail: (id: string, params: RequestParams = {}) =>
      this.request<FileOutput, any>({
        path: `/files/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to get the base64 content of a file
     *
     * @tags Files
     * @name DownloadDetail
     * @summary Download a File
     * @request GET:/files/{id}/download
     */
    downloadDetail: (id: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/files/${id}/download`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Duplicate a file. It will be create a clone of this file, with a new ID.
     *
     * @tags Files
     * @name DuplicateCreate
     * @summary Duplicate a File
     * @request POST:/files/{id}/duplicate
     */
    duplicateCreate: (id: string, params: RequestParams = {}) =>
      this.request<FileOutput, any>({
        path: `/files/${id}/duplicate`,
        method: "POST",
        format: "json",
        ...params,
      }),
  };
  procedures = {
    /**
     * No description
     *
     * @tags Procedures
     * @name ProceduresList
     * @summary Get Procedure list
     * @request GET:/procedures
     */
    proceduresList: (
      query?: {
        /** Return Procedure list based on the status for each Procedure */
        status?: "active" | "finished" | "expired" | "refused" | "draft";
        /**
         * Used to get Procedure template list
         * @default false
         */
        template?: boolean;
        /**
         * Get Procedure list for given members (paraph mode)
         * @example "/members/f8311c9b-7b37-46d4-b28e-0c40d44b2f95"
         */
        members?: string[];
        /**
         * Number of items per page for the pagination
         * @example "20"
         */
        itemsPerPage?: string;
        /**
         * Enable the pagination
         * @example true
         */
        pagination?: boolean;
        /**
         * Page of the pagination
         * @format int32
         * @example 2
         */
        page?: number;
        /**
         * Filter by name (contains)
         * @example "test"
         */
        name?: string;
        /**
         * Filter by member firstname (contains)
         * @example "test"
         */
        "members.firstname"?: string;
        /**
         * Filter by member lastname (contains)
         * @example "test"
         */
        "members.lastname"?: string;
        /**
         * Filter by member phone (contains)
         * @example "+33102030405"
         */
        "members.phone"?: string;
        /**
         * Filter by member email (contains)
         * @example "test@test.fr"
         */
        "members.email"?: string;
        /**
         * Filter by file name (contains)
         * @example "test"
         */
        "files.name"?: string;
        /**
         * Filter by creation date
         *
         * createdAt[after]=2017-09-18
         * createdAt[before]=2017-09-18
         * createdAt[strictly_after]=2017-09-18
         * createdAt[strictly_before]=2017-09-18
         */
        createdAt?: string[];
        /**
         * Filter by update date
         *
         * updatedAt[after]=2017-09-18
         * updatedAt[before]=2017-09-18
         * updatedAt[strictly_after]=2017-09-18
         * updatedAt[strictly_before]=2017-09-18
         */
        updatedAt?: string[];
        /**
         * Filter by expire date
         *
         * expiresAt[after]=2017-09-18
         * expiresAt[before]=2017-09-18
         * expiresAt[strictly_after]=2017-09-18
         * expiresAt[strictly_before]=2017-09-18
         */
        expiresAt?: string[];
        /**
         * Order by createdAt
         *
         * order[createdAt]=asc
         * order[createdAt]=desc
         */
        "order[createdAt]"?: "asc" | "desc";
      },
      params: RequestParams = {},
    ) =>
      this.request<ProcedureOutput[], any>({
        path: `/procedures`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Procedures
     * @name ProceduresCreate
     * @summary Create a new Procedure
     * @request POST:/procedures
     */
    proceduresCreate: (body: ProcedureInput, params: RequestParams = {}) =>
      this.request<ProcedureOutput, void>({
        path: `/procedures`,
        method: "POST",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Procedures
     * @name ProceduresDetail
     * @summary Find a Procedure by ID
     * @request GET:/procedures/{id}
     */
    proceduresDetail: (id: string, params: RequestParams = {}) =>
      this.request<ProcedureOutput, void>({
        path: `/procedures/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Procedures
     * @name ProceduresUpdate
     * @summary Update a Procedure
     * @request PUT:/procedures/{id}
     */
    proceduresUpdate: (id: string, body: ProcedureInput, params: RequestParams = {}) =>
      this.request<ProcedureOutput, void>({
        path: `/procedures/${id}`,
        method: "PUT",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Procedures
     * @name ProceduresDelete
     * @summary Delete a Procedure
     * @request DELETE:/procedures/{id}
     */
    proceduresDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/procedures/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Procedures
     * @name DuplicateCreate
     * @summary Duplicate a Procedure
     * @request POST:/procedures/{id}/duplicate
     */
    duplicateCreate: (id: string, body: ProcedureDuplicateInput, params: RequestParams = {}) =>
      this.request<ProcedureOutput, void>({
        path: `/procedures/${id}/duplicate`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Procedures
     * @name RemindCreate
     * @summary Remind a Procedure
     * @request POST:/procedures/{id}/remind
     */
    remindCreate: (id: string, body: ProcedureRemindInput, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/procedures/${id}/remind`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Get a Procedure proof file
     *
     * @tags Procedures
     * @name ProofDetail
     * @summary Get a Procedure proof file
     * @request GET:/procedures/{id}/proof
     */
    proofDetail: (id: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/procedures/${id}/proof`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  export = {
    /**
     * No description
     *
     * @tags Procedures
     * @name ProceduresList
     * @summary Export Procedure list
     * @request GET:/export/procedures
     */
    proceduresList: (
      query?: {
        /** Return Procedure list based on the status for each Procedure */
        status?: "active" | "finished" | "expired" | "refused" | "draft";
        /**
         * Filter by name (contains)
         * @example "test"
         */
        name?: string;
        /**
         * Filter by member firstname (contains)
         * @example "test"
         */
        "members.firstname"?: string;
        /**
         * Filter by member lastname (contains)
         * @example "test"
         */
        "members.lastname"?: string;
        /**
         * Filter by member phone (contains)
         * @example "+33102030405"
         */
        "members.phone"?: string;
        /**
         * Filter by member email (contains)
         * @example "test@test.fr"
         */
        "members.email"?: string;
        /**
         * Filter by file name (contains)
         * @example "test"
         */
        "files.name"?: string;
        /**
         * Filter by creation date
         *
         * createdAt[after]=2017-09-18
         * createdAt[before]=2017-09-18
         * createdAt[strictly_after]=2017-09-18
         * createdAt[strictly_before]=2017-09-18
         */
        createdAt?: string[];
        /**
         * Filter by update date
         *
         * updatedAt[after]=2017-09-18
         * updatedAt[before]=2017-09-18
         * updatedAt[strictly_after]=2017-09-18
         * updatedAt[strictly_before]=2017-09-18
         */
        updatedAt?: string[];
        /**
         * Filter by expire date
         *
         * expiresAt[after]=2017-09-18
         * expiresAt[before]=2017-09-18
         * expiresAt[strictly_after]=2017-09-18
         * expiresAt[strictly_before]=2017-09-18
         */
        expiresAt?: string[];
        /** Order by attribut */
        "order[createdAt]"?: "asc" | "desc";
      },
      params: RequestParams = {},
    ) =>
      this.request<string, any>({
        path: `/export/procedures`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  members = {
    /**
     * @description Create a new member
     *
     * @tags Members
     * @name MembersCreate
     * @summary Create a new Member
     * @request POST:/members
     */
    membersCreate: (body: MemberInput, params: RequestParams = {}) =>
      this.request<MemberOutput, any>({
        path: `/members`,
        method: "POST",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * @description Edit a member
     *
     * @tags Members
     * @name MembersUpdate
     * @summary Edit a Member
     * @request PUT:/members/{id}
     */
    membersUpdate: (id: string, body: MemberInput, params: RequestParams = {}) =>
      this.request<MemberOutput, any>({
        path: `/members/${id}`,
        method: "PUT",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a member
     *
     * @tags Members
     * @name MembersDelete
     * @summary Delete a Member
     * @request DELETE:/members/{id}
     */
    membersDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/members/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Get a proof file of a member
     *
     * @tags Members
     * @name ProofDetail
     * @summary Get a proof file of a Member
     * @request GET:/members/{id}/proof
     */
    proofDetail: (id: string, params: RequestParams = {}) =>
      this.request<string, void>({
        path: `/members/${id}/proof`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  fileObjects = {
    /**
     * @description Create a new fileObject
     *
     * @tags File Objects
     * @name FileObjectsCreate
     * @summary Create a new File Object
     * @request POST:/file_objects
     */
    fileObjectsCreate: (body: FileObjectInput, params: RequestParams = {}) =>
      this.request<FileObjectOutput, any>({
        path: `/file_objects`,
        method: "POST",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a File Object
     *
     * @tags File Objects
     * @name FileObjectsDetail
     * @summary Find a File Object by ID
     * @request GET:/file_objects/{id}
     */
    fileObjectsDetail: (id: string, params: RequestParams = {}) =>
      this.request<FileObjectOutput, any>({
        path: `/file_objects/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Update a File Object
     *
     * @tags File Objects
     * @name FileObjectsUpdate
     * @summary Update a File Object
     * @request PUT:/file_objects/{id}
     */
    fileObjectsUpdate: (id: string, body: FileObjectInput, params: RequestParams = {}) =>
      this.request<FileObjectOutput, any>({
        path: `/file_objects/${id}`,
        method: "PUT",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a File Object
     *
     * @tags File Objects
     * @name FileObjectsDelete
     * @summary Delete a File Object
     * @request DELETE:/file_objects/{id}
     */
    fileObjectsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/file_objects/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  operations = {
    /**
     * No description
     *
     * @tags Operations
     * @name OperationsCreate
     * @summary Create a new Operation
     * @request POST:/operations
     */
    operationsCreate: (body: OperationInput, params: RequestParams = {}) =>
      this.request<OperationOutput, any>({
        path: `/operations`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Operations
     * @name OperationsDetail
     * @summary Find an Operation by ID
     * @request GET:/operations/{id}
     */
    operationsDetail: (id: string, params: RequestParams = {}) =>
      this.request<OperationOutput, any>({
        path: `/operations/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  authentications = {
    /**
     * No description
     *
     * @tags Authentications
     * @name InweboDetail
     * @summary Get an Authentication
     * @request GET:/authentications/inwebo/{id}
     */
    inweboDetail: (id: string, params: RequestParams = {}) =>
      this.request<AuthenticationInweboOutput, any>({
        path: `/authentications/inwebo/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentications
     * @name InweboUpdate
     * @summary Update an inwebo Authentication
     * @request PUT:/authentications/inwebo/{id}
     */
    inweboUpdate: (
      id: string,
      body: {
        /** Image of signature (base 64) */
        signImage?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AuthenticationInweboOutput, any>({
        path: `/authentications/inwebo/${id}`,
        method: "PUT",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentications
     * @name GetAuthentications
     * @summary Find an Authentication by ID
     * @request GET:/authentications/sms/{id}
     */
    getAuthentications: (id: string, params: RequestParams = {}) =>
      this.request<AuthenticationSmsOutput, any>({
        path: `/authentications/sms/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentications
     * @name PutAuthentications
     * @summary Update an SMS Authentication
     * @request PUT:/authentications/sms/{id}
     */
    putAuthentications: (
      id: string,
      body: {
        /** Code sms received by user */
        code: string;
        /** Image of signature (base 64) */
        signImage?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        AuthenticationSmsOutput,
        {
          /** Description of error */
          detail?: string;
        }
      >({
        path: `/authentications/sms/${id}`,
        method: "PUT",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentications
     * @name EmailDetail
     * @summary Find an Authentication by ID
     * @request GET:/authentications/email/{id}
     */
    emailDetail: (id: string, params: RequestParams = {}) =>
      this.request<AuthenticationEmailOutput, any>({
        path: `/authentications/email/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentications
     * @name EmailUpdate
     * @summary Update an Email Authentication
     * @request PUT:/authentications/email/{id}
     */
    emailUpdate: (
      id: string,
      body: {
        /** Code sms received by user */
        code: string;
        /** Image of signature (base 64) */
        signImage?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        AuthenticationEmailOutput,
        {
          /** Description of error */
          detail?: string;
        }
      >({
        path: `/authentications/email/${id}`,
        method: "PUT",
        body: body,
        format: "json",
        ...params,
      }),
  };
  consentProcesses = {
    /**
     * No description
     *
     * @tags Consent Processes
     * @name ConsentProcessesList
     * @summary Get list of Consent Processes
     * @request GET:/consent_processes
     */
    consentProcessesList: (
      query?: {
        /**
         * id of member (required for anonymous)
         * @example "/members/17625df4-4ee7-498e-822d-3637c91b6f40"
         */
        member?: string;
        /**
         * id of procedure (required if the member attribut is not set)
         * @example "/procedures/17625df4-4ee7-498e-822d-3637c91b6f40"
         */
        procedure?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ConsentProcessOutput[], any>({
        path: `/consent_processes`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Consent Processes
     * @name ConsentProcessesCreate
     * @summary Create a new Consent Process
     * @request POST:/consent_processes
     */
    consentProcessesCreate: (body: ConsentProcessInput, params: RequestParams = {}) =>
      this.request<ConsentProcessOutput, any>({
        path: `/consent_processes`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Consent Processes
     * @name ConsentProcessesDetail
     * @summary Get a Consent Process
     * @request GET:/consent_processes/{id}
     */
    consentProcessesDetail: (
      id: string,
      query?: {
        /**
         * id of member (required for anonymous)
         * @example "/members/17625df4-4ee7-498e-822d-3637c91b6f40"
         */
        member?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ConsentProcessOutput, any>({
        path: `/consent_processes/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Consent Processes
     * @name ConsentProcessesUpdate
     * @summary Update a Consent Process
     * @request PUT:/consent_processes/{id}
     */
    consentProcessesUpdate: (id: string, body: ConsentProcessInput, params: RequestParams = {}) =>
      this.request<ConsentProcessOutput, any>({
        path: `/consent_processes/${id}`,
        method: "PUT",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Consent Processes
     * @name ConsentProcessesDelete
     * @summary Delete a Consent Process
     * @request DELETE:/consent_processes/{id}
     */
    consentProcessesDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/consent_processes/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  consentProcessValues = {
    /**
     * No description
     *
     * @tags Consent Processes
     * @name ConsentProcessValuesDetail
     * @summary Get a Consent Process Value
     * @request GET:/consent_process_values/{id}
     */
    consentProcessValuesDetail: (
      id: string,
      query?: {
        /**
         * id of member (required for anonymous)
         * @example "/members/17625df4-4ee7-498e-822d-3637c91b6f40"
         */
        member?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ConsentProcessValueOutput, any>({
        path: `/consent_process_values/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Consent Processes
     * @name ConsentProcessValuesList
     * @summary Get list of Consent Process Value
     * @request GET:/consent_process_values
     */
    consentProcessValuesList: (
      query: {
        /**
         * id of member
         * @example "/members/17625df4-4ee7-498e-822d-3637c91b6f40"
         */
        member: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ConsentProcessValueOutput, any>({
        path: `/consent_process_values`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Consent Processes
     * @name ConsentProcessValuesCreate
     * @summary Create a new Consent Process Value
     * @request POST:/consent_process_values
     */
    consentProcessValuesCreate: (body: ConsentProcessValueInput, params: RequestParams = {}) =>
      this.request<ConsentProcessValueOutput, any>({
        path: `/consent_process_values`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  signatureUis = {
    /**
     * No description
     *
     * @tags Signature UIs
     * @name SignatureUisList
     * @summary Get Signature UI list
     * @request GET:/signature_uis
     */
    signatureUisList: (params: RequestParams = {}) =>
      this.request<SignatureUiOutput[], any>({
        path: `/signature_uis`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Here is the url format to build on your side to get a custom signature interface with your settings : https://webapp.yousign.com/procedure/sign?members=~2Fmembers~2F__MEMBER_ID__&signatureUi=~2Fsignature_uis~2F__SIGNATURE_UI_ID__
     *
     * @tags Signature UIs
     * @name SignatureUisCreate
     * @summary Create a new Signature UI
     * @request POST:/signature_uis
     */
    signatureUisCreate: (body: SignatureUiInput, params: RequestParams = {}) =>
      this.request<SignatureUiOutput, any>({
        path: `/signature_uis`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Signature UIs
     * @name SignatureUisDetail
     * @summary Find a Signature UI by ID
     * @request GET:/signature_uis/{id}
     */
    signatureUisDetail: (
      id: string,
      query?: {
        /**
         * id of a signature ui
         * @example "/signature_uis/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
         */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SignatureUiOutput, any>({
        path: `/signature_uis/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Signature UIs
     * @name SignatureUisUpdate
     * @summary Update a Signature UI
     * @request PUT:/signature_uis/{id}
     */
    signatureUisUpdate: (
      id: string,
      query?: {
        /**
         * id of signature ui to update
         * @example "/signature_uis/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
         */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SignatureUiInputUpdate, any>({
        path: `/signature_uis/${id}`,
        method: "PUT",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Signature UIs
     * @name SignatureUisDelete
     * @summary Delete a Signature UI
     * @request DELETE:/signature_uis/{id}
     */
    signatureUisDelete: (
      id: string,
      query?: {
        /**
         * Id of the signature ui
         * @example "/signature_uis/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
         */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/signature_uis/${id}`,
        method: "DELETE",
        query: query,
        ...params,
      }),
  };
  signatureUiLabels = {
    /**
     * @description Only usefull if you use a filter with name or signatureUI
     *
     * @tags Signature UIs
     * @name SignatureUiLabelsList
     * @summary Get Signature UI Labels
     * @request GET:/signature_ui_labels
     */
    signatureUiLabelsList: (
      query?: {
        /** Filtering on name of signature ui labels */
        name?: string;
        /** Filtering on id of signature ui resource */
        signatureUi?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SignatureUiLabelOutput[], any>({
        path: `/signature_ui_labels`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Signature UIs
     * @name SignatureUiLabelsCreate
     * @summary Create a new Signature UI Label
     * @request POST:/signature_ui_labels
     */
    signatureUiLabelsCreate: (body: SignatureUiLabelInput, params: RequestParams = {}) =>
      this.request<SignatureUiLabelOutput, any>({
        path: `/signature_ui_labels`,
        method: "POST",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Signature UIs
     * @name SignatureUiLabelsDetail
     * @summary Find a Signature UI Label by ID
     * @request GET:/signature_ui_labels/{id}
     */
    signatureUiLabelsDetail: (
      id: string,
      query?: {
        /**
         * id of signature ui label
         * @example "/signature_ui_labels/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
         */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SignatureUiLabelOutput, any>({
        path: `/signature_ui_labels/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Signature UIs
     * @name SignatureUiLabelsUpdate
     * @summary Update a Signature UI Label
     * @request PUT:/signature_ui_labels/{id}
     */
    signatureUiLabelsUpdate: (
      id: string,
      body: SignatureUiLabelInput,
      query?: {
        /**
         * Id of signature ui labels
         * @example "/signature_ui_labels/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
         */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SignatureUiLabelOutput, any>({
        path: `/signature_ui_labels/${id}`,
        method: "PUT",
        query: query,
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Signature UIs
     * @name SignatureUiLabelsDelete
     * @summary Delete a Signature UI Label
     * @request DELETE:/signature_ui_labels/{id}
     */
    signatureUiLabelsDelete: (
      id: string,
      query?: {
        /**
         * Id of signature ui label
         * @example "/signature_ui_labels/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
         */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/signature_ui_labels/${id}`,
        method: "DELETE",
        query: query,
        ...params,
      }),
  };
  serverStamps = {
    /**
     * No description
     *
     * @tags Server Stamps
     * @name ServerStampsCreate
     * @summary Create a Server Stamp
     * @request POST:/server_stamps
     */
    serverStampsCreate: (body: ServerStampInput, params: RequestParams = {}) =>
      this.request<ServerStampOutput, void>({
        path: `/server_stamps`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Server Stamps
     * @name ServerStampsDetail
     * @summary Find a Server Stamp by ID
     * @request GET:/server_stamps/{id}
     */
    serverStampsDetail: (id: string, params: RequestParams = {}) =>
      this.request<ServerStampOutput, void>({
        path: `/server_stamps/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  checkDocument = {
    /**
     * No description
     *
     * @tags Check Documents
     * @name IdentitiesCreate
     * @summary Verify an identity document (passport, id cards)
     * @request POST:/check-document/identities
     */
    identitiesCreate: (body: CheckDocumentIdentitiesInput, params: RequestParams = {}) =>
      this.request<CheckDocumentIdentitiesOutput, any>({
        path: `/check-document/identities`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Check Documents
     * @name IdentitiesDetail
     * @summary Get informations about an identity document (passport, id cards)
     * @request GET:/check-document/identities/{id}
     */
    identitiesDetail: (id: string, params: RequestParams = {}) =>
      this.request<CheckDocumentIdentitiesOutput, any>({
        path: `/check-document/identities/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Check Documents
     * @name BankAccountsCreate
     * @summary Verify a bank document (RIB)
     * @request POST:/check-document/bank_accounts
     */
    bankAccountsCreate: (body: CheckDocumentBankAccountsInput, params: RequestParams = {}) =>
      this.request<CheckDocumentBankAccountsOutput, void>({
        path: `/check-document/bank_accounts`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Check Documents
     * @name BankAccountsDetail
     * @summary Get informations about a bank document (RIB)
     * @request GET:/check-document/bank_accounts/{id}
     */
    bankAccountsDetail: (id: string, params: RequestParams = {}) =>
      this.request<CheckDocumentBankAccountsOutput, any>({
        path: `/check-document/bank_accounts/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
