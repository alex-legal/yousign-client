/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** FontFamily */
export enum FontFamily {
  Inconsolata = "Inconsolata",
  OpenSans = "Open Sans",
  Lato = "Lato",
  Raleway = "Raleway",
  Merriweather = "Merriweather",
  EBGaramond = "EB Garamond",
  ComicNeue = "Comic Neue",
  Monaco = "Monaco",
  Helvetica = "Helvetica",
  Courier = "Courier",
  TimesRoman = "Times Roman",
}

/**
 * Status of the Watchlist Verification.
 * @example "verified"
 */
export enum WatchlistStatus {
  Pending = "pending",
  Verified = "verified",
  Failed = "failed",
}

/**
 * Status of the Identity Video Verification
 * @example "verified"
 */
export enum IdentityVideoStatus {
  Pending = "pending",
  Verified = "verified",
  Failed = "failed",
  Inconclusive = "inconclusive",
}

/**
 * Status of the Identity Document Verification
 * @example "verified"
 */
export enum IdentityDocumentStatus {
  Pending = "pending",
  Verified = "verified",
  Failed = "failed",
  Inconclusive = "inconclusive",
}

/**
 * Status of the Bank Account Verification.
 * @example "verified"
 */
export enum BankAccountStatus {
  Pending = "pending",
  Verified = "verified",
  Failed = "failed",
  Inconclusive = "inconclusive",
}

/**
 * Status of the Bank Account Connection Verification.
 * @example "verified"
 */
export enum BankAccountConnectionStatus {
  Pending = "pending",
  Verified = "verified",
  Failed = "failed",
  Inconclusive = "inconclusive",
}

/** Manageable Role */
export enum ManageableRole {
  Admin = "admin",
  Member = "member",
}

/**
 * User Status
 * @minLength 1
 */
export enum UserStatus {
  Invited = "invited",
  SignedUp = "signed_up",
  Verified = "verified",
  Completed = "completed",
}

/** User Role */
export enum UserRole {
  Owner = "owner",
  Admin = "admin",
  Member = "member",
}

/** Override the delivery mode of the Signature Request for this Signer */
export enum SignerDeliveryMode {
  Email = "email",
  None = "none",
}

/**
 * Archiving
 * Once the signature request completed, archive its documents in a secure digital safe
 * @deprecated
 */
export enum Archiving {
  Archive = "archive",
  ArchiveY = "archive_y",
}

/** @example "en" */
export enum AuditTrailLocale {
  De = "de",
  En = "en",
  Es = "es",
  Fr = "fr",
  It = "it",
  Pt = "pt",
}

export enum SignatureRequestStatus {
  Draft = "draft",
  Ongoing = "ongoing",
  Done = "done",
  Deleted = "deleted",
  Expired = "expired",
  Canceled = "canceled",
  Approval = "approval",
  Rejected = "rejected",
  Declined = "declined",
}

export enum LegacyIdDocumentVerificationStatus {
  Pending = "pending",
  Approved = "approved",
  Declined = "declined",
  Inconclusive = "inconclusive",
}

/**
 * LogoLayout
 * Determines the display layout of the logo. Possible values are:
 * - `round`: Displays the logo in a circular format.
 * - `original`: Displays the logo in its original shape.
 * @example "round"
 */
export enum LogoLayout {
  Round = "round",
  Original = "original",
}

/**
 * Custom Experience Source
 * @example "app"
 */
export enum CustomExperienceSource {
  App = "app",
  PublicApi = "public_api",
}

/** @example "approver.canceled" */
export enum CustomExperienceDisabledNotificationsType {
  ApproverExpirationDateReminder = "approver.expiration_date_reminder",
  ApproverCanceled = "approver.canceled",
  ApproverExpirationDateUpdated = "approver.expiration_date_updated",
  FollowerApproved = "follower.approved",
  FollowerCanceled = "follower.canceled",
  FollowerCompleted = "follower.completed",
  FollowerExpired = "follower.expired",
  FollowerRejected = "follower.rejected",
  FollowerActivated = "follower.activated",
  FollowerSigned = "follower.signed",
  SenderApproved = "sender.approved",
  SenderCanceled = "sender.canceled",
  SenderCompleted = "sender.completed",
  SenderRejected = "sender.rejected",
  SenderSigned = "sender.signed",
  SignerExpirationDateReminder = "signer.expiration_date_reminder",
  SignerCanceled = "signer.canceled",
  SignerCompleted = "signer.completed",
  SignerSigned = "signer.signed",
  SignerExpirationDateUpdated = "signer.expiration_date_updated",
  SignerSignatureRequested = "signer.signature_requested",
}

/**
 * Locale
 * Locale settings used for communication.
 * @minLength 1
 */
export enum Locale {
  En = "en",
  Fr = "fr",
  De = "de",
  It = "it",
  Nl = "nl",
  Es = "es",
  Pl = "pl",
}

export enum LegacyBankAccountVerificationStatus {
  Pending = "pending",
  Approved = "approved",
  Declined = "declined",
  Inconclusive = "inconclusive",
}

export interface UploadArchivedFile {
  /**
   * File to be uploaded
   * @format binary
   */
  file: File;
  /**
   * @format uuid
   * @example "69120884-d29a-4b1a-ac7b-a9e73a872795"
   */
  workspace_id?: string | null;
  /** @pattern ^(true|false)?$ */
  archive_y?: string | null;
  /** Tags for the file */
  tags?: string[] | null;
  /**
   * Expiration date of the file
   * @pattern ^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]) ([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$
   * @example "2024-06-24 09:26:44"
   */
  expired_at?: string | null;
}

/**
 * ArchivedFile
 * ArchivedFile
 */
export interface ArchivedFile {
  /**
   * @format uuid
   * @minLength 1
   * @example "21ac9d25-e24d-4564-b964-d67eed561ca9"
   */
  id: string;
  /**
   * Sha256 checksum
   * @minLength 64
   * @maxLength 64
   * @example "6ecf29381314217530c02c64a97050a0a6a0944bb974b6b417588277e289aef0"
   */
  sha256: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  filename: string;
  /**
   * Creation date of the file
   * @format date-time
   * @example "2024-01-18T22:59:00Z"
   */
  created_at: string;
  /**
   * Expiration date of the file
   * @format date-time
   * @example "2025-01-18T22:59:00Z"
   */
  expired_at: string | null;
  /** @example "application/pdf" */
  content_type: string;
  /**
   * @min 1
   * @example 123456
   */
  size: number;
  /** Identifier that allows to save the file in an additional storage. */
  archive_y_identifier: string | null;
  /** Tags for the file */
  tags: string[] | null;
  /**
   * @format uuid
   * @minLength 1
   * @example "528e2077-d0c1-4506-acd9-fac35a9cb7b4"
   */
  workspace_id: string;
}

/**
 * The unique identifier for a resource.
 * @format uuid
 * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
 */
export type UUID = string;

/** Cursor based pagination */
export interface Pagination {
  /** @minLength 1 */
  next_cursor: string | null;
}

/** BankAccountVerification */
export interface LegacyBankAccountVerification {
  /** The unique identifier for a resource. */
  id: UUID;
  status: LegacyBankAccountVerificationStatus;
  /**
   * List of response codes.
   * @example [1604,1611]
   */
  status_codes: number[];
}

export interface LegacyCreateBankAccountVerification {
  /**
   * Please provide the holder first name, exactly as it appears on the bank account document.
   * Please match it exactly, with the same characters, same case.
   * One exception: if the document mentions an honorary title, please don't provide it as part of the name.
   * The field can not be submitted if field "legal_entity_name" is provided.
   * @minLength 1
   * @maxLength 255
   * @example "John"
   */
  first_name?: HumanName;
  /**
   * Please provide the holder last name, exactly as it appears on the bank account document.
   * Please match it exactly, with the same characters, same case.
   * One exception: if the document mentions an honorary title, please don't provide it as part of the name.
   * The field can not be submitted if field "legal_entity_name" is provided.
   * @minLength 1
   * @maxLength 255
   * @example "Doe"
   */
  last_name?: HumanName;
  /**
   * Binary file
   * @format binary
   */
  file: File;
  /** International Bank Account Number (IBAN) */
  iban?: IBAN;
  /** Business Identifier Codes (BIC) */
  bic?: BIC;
  /**
   * Please provide the legal entity name, exactly as it appears on the bank account document.
   * Please match it exactly, with the same characters, same case.
   * The field can not be submitted if fields "first_name" and "last_name" are provided.
   * @minLength 1
   * @maxLength 255
   * @example "Foundation Teaming"
   */
  legal_entity_name?: HumanName;
}

/** BankAccountVerification */
export interface LegacyBankAccountVerificationCreated {
  /** The unique identifier for a resource. */
  id: UUID;
}

/**
 * International Bank Account Number (IBAN)
 * @minLength 14
 * @maxLength 34
 * @pattern ^([A-Z]{2}[ \-]?[0-9]{2})(?=(?:[ \-]?[A-Z0-9]){9,30}$)((?:[ \-]?[A-Z0-9]{3,5}){2,7})([ \-]?[A-Z0-9]{1,3})?$
 * @example "FR7610278030060001478474080"
 */
export type NullableIBAN = string | null;

/**
 * Business Identifier Codes (BIC)
 * @minLength 8
 * @maxLength 11
 * @pattern ^[A-Z]{6,6}[A-Z2-9][A-NP-Z0-9]([A-Z0-9]{3,3}){0,1}$
 * @example "CMCIFR2A"
 */
export type NullableBIC = string | null;

/**
 * @format date
 * @example "2022-12-10"
 */
export type DateYMD = string;

export interface Consumption {
  app: ConsumptionApp;
  api: ConsumptionApi;
  connector: ConsumptionApp;
}

export interface AddonConsumption {
  name:
    | "electronic_signature"
    | "advanced_electronic_signature"
    | "qualified_electronic_signature_identity_verification"
    | "qualified_electronic_signature_saved_identity"
    | "electronic_seal"
    | "advanced_electronic_seal"
    | "archiving";
  /**
   * Beginning of the addon subscription
   * @format date-time
   * @example "2020-05-18T07:25:36Z"
   */
  start_at: string;
  /**
   * End of the addon subscription
   * @format date-time
   * @example "2020-05-18T07:25:36Z"
   */
  end_at: string;
  /** @min 0 */
  quota: number;
  /** @min 0 */
  consumed: number;
  /**
   * Only available for qualified_electronic_signature_identity_verification and qualified_electronic_signature_saved_identity addons
   * @min 0
   */
  provisioned?: number;
}

/** Cursor based pagination */
export interface PaginationWithUpdatedAt {
  /** @minLength 1 */
  next_cursor: string | null;
  /**
   * @format date-time
   * @example "2024-01-18T22:59:00Z"
   */
  updated_at: string;
}

export interface DetailedConsumption {
  source: "app" | "api" | "connector";
  type:
    | "invited_signers"
    | "electronic_seals"
    | "identification_attempts"
    | "archiving";
  /** Only set when type is either `invited_signer`, `electronic_seals`, `identification_attempts`. */
  level?: "simple" | "advanced" | "qualified";
  /** Only set if type is identification_attempts. */
  identification_mode?: "identity_verification" | "saved_identity";
  /**
   * Only set if breakdown is set on workspaces.
   * @format uuid
   * @minLength 1
   * @example "8b6ed2f3-244f-487a-baa1-bbe4f51c8744"
   */
  workspace_id?: string;
  /**
   * Count of items or file size in case of archiving.
   * @min 1
   */
  value: number;
}

/** Contact */
export interface Contact {
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
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  workspace_id?: string | null;
}

export interface CreateContact {
  /**
   * @minLength 1
   * @maxLength 255
   * @example "John"
   */
  first_name: HumanName;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Doe"
   */
  last_name: HumanName;
  /**
   * @format email
   * @example "john.doe@example.com"
   */
  email: string;
  /** Locale settings used for communication. */
  locale: Locale;
  /**
   * E.164 format
   * @minLength 1
   * @example "+41446667700"
   */
  phone_number?: string;
  /**
   * This property cannot start or end with whitespace, does not allow HTML tags, URL or email.
   * @minLength 1
   * @maxLength 255
   * @example "Yousign SAS"
   */
  company_name?: string;
  /**
   * This property cannot start or end with whitespace, does not allow HTML tags, URL or email.
   * @minLength 1
   * @maxLength 255
   * @example "Developer"
   */
  job_title?: string;
  /**
   * This property cannot start or end with whitespace, does not allow HTML tags, URL or email.
   * @minLength 1
   * @maxLength 255
   * @example "34 Rue Malfilatre"
   */
  address_line_1?: string;
  /**
   * This property cannot start or end with whitespace, does not allow HTML tags, URL or email.
   * @minLength 1
   * @maxLength 255
   * @example "1st floor"
   */
  address_line_2?: string;
  /**
   * This property cannot start or end with whitespace, does not allow HTML tags, URL or email.
   * @minLength 1
   * @maxLength 255
   * @example "Caen"
   */
  address_city?: string;
  /**
   * This property cannot start or end with whitespace, does not allow HTML tags, URL or email.
   * @minLength 1
   * @maxLength 255
   * @example "14000"
   */
  address_postal_code?: string;
  /**
   * This property cannot start or end with whitespace, does not allow HTML tags, URL or email.
   * @minLength 1
   * @maxLength 255
   * @example "France"
   */
  address_country?: string;
  /**
   * @format uuid
   * @example "69120884-d29a-4b1a-ac7b-a9e73a872795"
   */
  workspace_id?: string | null;
}

export interface UpdateContact {
  /**
   * @minLength 1
   * @maxLength 255
   * @example "John"
   */
  first_name?: HumanName;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Doe"
   */
  last_name?: HumanName;
  /**
   * @format email
   * @example "john.doe@example.com"
   */
  email?: string;
  /** Locale settings used for communication. */
  locale?: Locale;
  /**
   * E.164 format
   * @minLength 1
   * @example "+41446667700"
   */
  phone_number?: string | null;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Yousign SAS"
   */
  company_name?: string | null;
  /**
   * This property cannot start or end with whitespace, does not allow HTML tags, URL or email.
   * @minLength 1
   * @maxLength 255
   * @example "Developer"
   */
  job_title?: string | null;
  /**
   * This property cannot start or end with whitespace, does not allow HTML tags, URL or email.
   * @minLength 1
   * @maxLength 255
   * @example "34 Rue Malfilatre"
   */
  address_line_1?: string | null;
  /**
   * This property cannot start or end with whitespace, does not allow HTML tags, URL or email.
   * @minLength 1
   * @maxLength 255
   * @example "1st floor"
   */
  address_line_2?: string | null;
  /**
   * This property cannot start or end with whitespace, does not allow HTML tags, URL or email.
   * @minLength 1
   * @maxLength 255
   * @example "Caen"
   */
  address_city?: string | null;
  /**
   * This property cannot start or end with whitespace, does not allow HTML tags, URL or email.
   * @minLength 1
   * @maxLength 255
   * @example "14000"
   */
  address_postal_code?: string | null;
  /**
   * This property cannot start or end with whitespace, does not allow HTML tags, URL or email.
   * @minLength 1
   * @maxLength 255
   * @example "France"
   */
  address_country?: string | null;
  /**
   * @format uuid
   * @example "69120884-d29a-4b1a-ac7b-a9e73a872795"
   */
  workspace_id?: string | null;
}

export interface CustomExperience {
  /** @format uuid */
  id: string;
  name?: string;
  landing_page_disabled: boolean;
  side_panel_disabled: boolean;
  background_color: string | null;
  button_color: string | null;
  text_color: string | null;
  text_button_color: string | null;
  disabled_notifications: CustomExperienceDisabledNotificationsType[];
  email_logo_disabled: boolean;
  email_header_text_disabled: boolean;
  email_footer_signature_disabled: boolean;
  email_expiration_text_disabled: boolean;
  recipients_activity_disabled: boolean;
  download_documents_disabled: boolean;
  redirect_urls: CustomExperienceRedirectUrls;
  /**
   * @format uri
   * @example "https://yousign.com/custom_experience/89120884-d29a-4b1a-ac7b-a9e73a872795/logo"
   */
  logo: string | null;
  /** Custom Experience Source */
  source: CustomExperienceSource;
  /**
   * @format date-time
   * @example "2024-01-18T22:59:00Z"
   */
  created_at: string;
}

export interface CreateCustomExperience {
  /**
   * This property cannot start or end with whitespace, does not allow HTML tags, URL or email.
   * @minLength 1
   * @maxLength 255
   */
  name: string;
  /** @default false */
  landing_page_disabled?: boolean | null;
  /** @default false */
  side_panel_disabled?: boolean | null;
  /**
   * Hexadecimal color value
   * @pattern ^(#[a-f0-9]{3}$)|(#[a-f0-9]{6}$)
   * @example "#ff0011"
   */
  background_color?: string | null;
  /**
   * Hexadecimal color value
   * @pattern ^(#[a-f0-9]{3}$)|(#[a-f0-9]{6}$)
   * @example "#ff0011"
   */
  button_color?: string | null;
  /**
   * Hexadecimal color value
   * @pattern ^(#[a-f0-9]{3}$)|(#[a-f0-9]{6}$)
   * @example "#ff0011"
   */
  text_color?: string | null;
  /**
   * Hexadecimal color value
   * @pattern ^(#[a-f0-9]{3}$)|(#[a-f0-9]{6}$)
   * @example "#ff0011"
   */
  text_button_color?: string | null;
  disabled_notifications?: CustomExperienceDisabledNotificationsType[] | null;
  /** @default false */
  email_logo_disabled?: boolean | null;
  /** @default false */
  email_header_text_disabled?: boolean | null;
  /** @default false */
  email_footer_signature_disabled?: boolean | null;
  /** @default false */
  email_expiration_text_disabled?: boolean | null;
  /** @default true */
  recipients_activity_disabled?: boolean | null;
  /**
   * If false, signers won't be able to download documents before signing.
   * @default false
   */
  download_documents_disabled?: boolean | null;
  redirect_urls?: CreateCustomExperienceRedirectUrls;
  /**
   * Determines the display layout of the logo. Possible values are:
   * - `round`: Displays the logo in a circular format.
   * - `original`: Displays the logo in its original shape.
   */
  logo_layout?: LogoLayout;
}

export interface UpdateCustomExperience {
  name?: string;
  landing_page_disabled?: boolean | null;
  side_panel_disabled?: boolean | null;
  /**
   * Hexadecimal color value
   * @pattern ^(#[a-f0-9]{3}$)|(#[a-f0-9]{6}$)
   * @example "#ff0011"
   */
  background_color?: string | null;
  /**
   * Hexadecimal color value
   * @pattern ^(#[a-f0-9]{3}$)|(#[a-f0-9]{6}$)
   * @example "#ff0011"
   */
  button_color?: string | null;
  /**
   * Hexadecimal color value
   * @pattern ^(#[a-f0-9]{3}$)|(#[a-f0-9]{6}$)
   * @example "#ff0011"
   */
  text_color?: string | null;
  /**
   * Hexadecimal color value
   * @pattern ^(#[a-f0-9]{3}$)|(#[a-f0-9]{6}$)
   * @example "#ff0011"
   */
  text_button_color?: string | null;
  disabled_notifications?: CustomExperienceDisabledNotificationsType[] | null;
  email_logo_disabled?: boolean | null;
  email_header_text_disabled?: boolean | null;
  email_footer_signature_disabled?: boolean | null;
  email_expiration_text_disabled?: boolean | null;
  recipients_activity_disabled?: boolean | null;
  /** If false, signers won't be able to download documents before signing. */
  download_documents_disabled?: boolean | null;
  redirect_urls?: UpdateCustomExperienceRedirectUrls;
  /**
   * Determines the display layout of the logo. Possible values are:
   * - `round`: Displays the logo in a circular format.
   * - `original`: Displays the logo in its original shape.
   */
  logo_layout?: LogoLayout;
}

export interface CreateDocumentFromMultipart {
  /**
   * Binary file
   * @format binary
   */
  file: File;
  nature: "attachment" | "signable_document";
  /**
   * Insert just after the position of the specified document id
   * @format uuid
   * @example "8b6ed2f3-244f-487a-baa1-bbe4f51c8744"
   */
  insert_after_id?: string;
  /** @example "MyPa$$word" */
  password?: string;
  /**
   * The document name. If not set, will use the uploaded document name. This value should contain any characters except "\", "/" and can\'t start and finish with a space.
   * @minLength 1
   * @maxLength 128
   * @pattern ^(?!\s)[^\/\\]+(?<!\s)$
   * @example "file1"
   */
  name?: string;
  initials?: InitialsArea;
  parse_anchors?: boolean;
}

/**
 * Document
 * Document to attach to a Signature Request
 */
export interface Document {
  /**
   * @format uuid
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
   * @example "2024-01-18T22:59:00Z"
   */
  created_at: string;
  /**
   * Number of pages for signable document
   * @min 1
   */
  total_pages: number | null;
  /** If protected by password and not yet unlocked */
  is_locked: boolean;
  initials: DocumentInitials;
  /** Number of parsed anchors from the document. */
  total_anchors: number;
}

export interface CreateElectronicSealDocument {
  /**
   * Binary file. Accepted formats: PDF.
   * @format binary
   */
  file: File;
  /**
   * The password required to unlock the document if it is protected.
   * @example "MyPa$$word"
   */
  password?: string;
}

export type CreateElectronicSealDocumentFromJson =
  | FromElectronicSealDocument
  | FromSignatureRequestDocument;

export interface ElectronicSealDocument {
  /**
   * @format uuid
   * @example "1365283d-0ba5-4a08-9a58-9818ef428320"
   */
  id: string;
  /** @min 1 */
  total_pages: number;
  /**
   * @format date-time
   * @example "2024-01-18T22:59:00Z"
   */
  created_at: string;
}

export interface ElectronicSealImage {
  /**
   * @format uuid
   * @example "1365283d-0ba5-4a08-9a58-9818ef428320"
   */
  id: string;
  /** @example "My seal image" */
  name: string;
  /**
   * @format date-time
   * @example "2024-01-18T22:59:00Z"
   */
  created_at: string;
}

export interface UploadElectronicSealImage {
  /**
   * Seal Image to be displayed on a sealed Document. Accepted formats: PNG/JPG/GIF, max 500 Ko.
   * @format binary
   */
  file: File;
  /**
   * Name of the Seal Image.
   * @example "My seal image"
   */
  name: string;
}

/** CreateElectronicSealPayload */
export interface CreateElectronicSealPayload {
  /**
   * Specify which Electronic Seal Document to use for creating an Electronic Seal.
   * @format uuid
   * @example "160473f9-156f-4583-848c-cbc3dec49b4a"
   */
  document_id: string;
  /**
   * Specify which Electronic Seal Image to use for creating an Electronic Seal.
   * @format uuid
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
  /** Fields you want to add to your Document. At least one Seal Field is mandatory. */
  fields: CreateElectronicSealPayloadFieldsInner[];
  /** Level of Electronic Seal for your Document */
  signature_level?:
    | "electronic_signature"
    | "advanced_electronic_signature"
    | null;
  /**
   * Specify which certificate to use for creating an Electronic Seal (only available for advanced_electronic_signature level).
   * @format uuid
   * @example "a3d84df7-b45e-4321-ae9e-7f5397acb225"
   */
  certificate_id?: string | null;
}

/** ElectronicSeal */
export interface ElectronicSeal {
  /**
   * @format uuid
   * @example "1365283d-0ba5-4a08-9a58-9818ef428320"
   */
  id: string;
  /** @example "pending" */
  status: "pending" | "processing" | "done" | "error";
  /**
   * @format date-time
   * @example "2024-01-18T22:59:00Z"
   */
  created_at: string;
  /**
   * @format uuid
   * @example "37646975-7e73-41f1-be7f-f4d85d181d03"
   */
  document_id: string;
  timestamp: boolean;
  /**
   * @format uuid
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
}

export interface ElectronicSealAuditTrail {
  version: number;
  classification: string;
  organization: object;
  seal: object;
  document: object;
}

/** IdDocumentVerification */
export interface LegacyIdDocumentVerification {
  /** The unique identifier for a resource. */
  id: UUID;
  status: LegacyIdDocumentVerificationStatus;
  /**
   * List of response codes.
   * @example [1706,1707]
   */
  status_codes: number[];
}

/** Create an ID Document verification with names */
export interface LegacyCreateIdDocumentVerification {
  /**
   * Please provide the holder first name, exactly as it appears on the ID document.
   * Please match it exactly, with the same characters, same case.
   * One exception: if the document mentions an honorary title, please don't provide it as part of the name.
   * @minLength 1
   * @maxLength 255
   * @example "John"
   */
  first_name: HumanName;
  /**
   * Please provide the holder last name, exactly as it appears on the ID document birth name.
   * Please match it exactly, with the same characters, same case.
   * One exception: if the document mentions an honorary title, please don't provide it as part of the name.
   * @minLength 1
   * @maxLength 255
   * @example "Doe"
   */
  last_name: HumanName;
  /**
   * The document type to verify
   * @example "id_card"
   */
  document_type?:
    | "id_card"
    | "passport"
    | "residence_permit"
    | "driver_license"
    | "ita_ts_cns";
  /**
   * Binary file
   * @format binary
   */
  file: File;
  /**
   * Binary file
   * @format binary
   */
  additional_file?: File;
}

/** Create an ID Document verification without names */
export interface LegacyCreateIdDocumentVerificationWithoutName {
  /**
   * The document type to verify
   * @example "id_card"
   */
  document_type?:
    | "id_card"
    | "passport"
    | "residence_permit"
    | "driver_license"
    | "ita_ts_cns";
  /**
   * Binary file
   * @format binary
   */
  file: File;
  /**
   * Binary file
   * @format binary
   */
  additional_file?: File;
}

/** IdDocumentVerification */
export interface LegacyIdDocumentVerificationCreated {
  /** The unique identifier for a resource. */
  id: UUID;
}

/** Label */
export interface Label {
  /**
   * Unique identifier of the Label.
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  id: string;
  /**
   * Name of the Label.
   * @minLength 1
   * @maxLength 128
   * @example "Contracts"
   */
  name: string;
  /**
   * Creation date of the Label.
   * @format date-time
   * @example "2025-02-12T23:59:59Z"
   */
  created_at: string;
}

/** A Label object */
export interface CreateLabel {
  /**
   * Name of the Label.
   * Name of the Label. Each Label name must be unique within the organization.
   * @minLength 1
   * @maxLength 128
   * @example "Contracts"
   */
  name: string;
}

/** A Label object */
export interface UpdateLabel {
  /**
   * The name of your Label
   * Name of the Label. Each Label name must be unique within the organization.
   * @minLength 1
   * @maxLength 128
   * @example "Contracts"
   */
  name: string;
}

/** SignatureRequest */
export interface SignatureRequestInList {
  /**
   * @minLength 1
   * @example "89120884-d29a-4b1a-ac7b-a9e73a872795"
   */
  id: string;
  status: SignatureRequestStatus;
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
   * @example "2024-01-18T22:59:00Z"
   */
  created_at: string;
  /** Enable an ordered workflow, each Signer will be requested to sign in a sequential order */
  ordered_signers: boolean;
  /** Enable an ordered workflow, each Approver will be requested to approve in a sequential order */
  ordered_approvers: boolean;
  reminder_settings: SignatureRequestInListReminderSettings;
  /** Time zone of the dates and times displayed in emails, the Signature Request expiration date, and the PDF Audit Trail. Format: tz database. Default is set to Europe/Paris. */
  timezone: SignatureRequestTimeZone;
  /**
   * @deprecated
   * @example "Please sign these documents as soon as possible."
   */
  email_custom_note: string | null;
  /**
   * @format date-time
   * @example "2024-01-18T22:59:00Z"
   */
  expiration_date: string;
  source:
    | "app"
    | "public_api"
    | "hubspot_integration"
    | "connector_salesforce_api"
    | "connector_google_api"
    | "connector_zapier_api";
  signers: SignatureRequestInListSignersInner[];
  approvers?: SignatureRequestInListApproversInner[];
  /** Labels associated to the Signature Request */
  labels?: SignatureRequestLabel[];
  documents: SignatureRequestInListDocumentsInner[];
  sender: SignatureRequestInListSender;
  /** @example "An_external-ID" */
  external_id: string | null;
  /**
   * @deprecated
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  branding_id: string | null;
  /**
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  custom_experience_id: string | null;
  /** @example true */
  signers_allowed_to_decline: boolean;
  /**
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  workspace_id?: string;
  audit_trail_locale: AuditTrailLocale;
  /**
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  bulk_send_batch_id: string | null;
}

export interface CreateSignatureRequest {
  /**
   * Name of the signature request
   * @minLength 1
   * @maxLength 128
   */
  name: string;
  /** Delivery mode to notify signers. */
  delivery_mode: "none" | "email";
  /**
   * Enable an ordered workflow, each signer will be requested to sign in a sequential order
   * @example true
   */
  ordered_signers?: boolean;
  /**
   * When enabled, Approvers are requested to approve sequentially.
   * Each Approver will be invited to approve only once the previous one has completed their approval.
   * @example true
   */
  ordered_approvers?: boolean;
  /** Enable automatic reminders for pending signers. */
  reminder_settings?: CreateSignatureRequestReminderSettings;
  /** Time zone of the dates and times displayed in emails, the Signature Request expiration date, and the PDF Audit Trail. Format: tz database. Default is set to Europe/Paris. */
  timezone?: SignatureRequestTimeZone;
  /**
   * A custom note added to emails sent to signers.
   * @deprecated
   * @maxLength 500
   * @example "Please sign these documents as soon as possible."
   */
  email_custom_note?: string | null;
  /**
   * Due date of the Signature Request (yyyy-mm-dd). Defaults to 6 months after initiation.
   * The date cannot be in the past and cannot be more than one year after initiation.
   * @format date
   * @pattern ^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$
   */
  expiration_date?: string;
  /**
   * Create a signature request from an existing template.
   * @format uuid
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
   * @deprecated
   * @format uuid
   * @example "3a93d3b5-fb3b-4abf-9e70-26315b33506b"
   */
  branding_id?: string | null;
  /**
   * Use a specific Custom Experience to customize the signature experience.
   * @format uuid
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
  signers?: CreateSignatureRequestSignersInner[];
  /**
   * Scope the signature request to a specific workspace. If template_id is filled and Template is already linked to a Workspace, keep this field to null ; the created Signature Request will be scoped to Template's Workspace.
   * @format uuid
   * @example "89120884-d29a-4b1a-ac7b-a9e73a872795"
   */
  workspace_id?: string | null;
  /** Define the locale for the generated audit trail. */
  audit_trail_locale?: AuditTrailLocale | null;
  /**
   * Allowing signers to decline to sign.
   * @default false
   * @example true
   */
  signers_allowed_to_decline?: boolean;
  email_notification?: SignatureRequestEmailNotification;
  /** When creating a signature request from a template, all substituting data for placeholders defined in the given template. */
  template_placeholders?: CreateSignatureRequestTemplatePlaceholders;
  /** Once the signature request completed, archive its documents in a secure digital safe */
  archiving?: Archiving;
  /**
   * List of Labels to associate with the Signature Request. Labels are identified by their ID.
   * @maxItems 50
   * @example ["3a93d3b5-fb3b-4abf-9e70-26315b33506b","89120884-d29a-4b1a-ac7b-a9e73a872795"]
   */
  labels?: string[];
}

/** SignatureRequest */
export interface SignatureRequest {
  /**
   * @minLength 1
   * @example "89120884-d29a-4b1a-ac7b-a9e73a872795"
   */
  id: string;
  status: SignatureRequestStatus;
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
   * @example "2024-01-18T22:59:00Z"
   */
  created_at: string;
  /** Enable an ordered workflow, each Signer will be requested to sign in a sequential order */
  ordered_signers: boolean;
  /** Enable an ordered workflow, each Approver will be requested to approve in a sequential order */
  ordered_approvers: boolean;
  reminder_settings: SignatureRequestInListReminderSettings;
  /** Time zone of the dates and times displayed in emails, the Signature Request expiration date, and the PDF Audit Trail. Format: tz database. Default is set to Europe/Paris. */
  timezone: SignatureRequestTimeZone;
  /**
   * @deprecated
   * @maxLength 500
   * @example "Please sign these documents as soon as possible."
   */
  email_custom_note: string | null;
  /**
   * @format date-time
   * @example "2024-01-18T22:59:00Z"
   */
  expiration_date: string;
  source:
    | "app"
    | "public_api"
    | "hubspot_integration"
    | "connector_salesforce_api"
    | "connector_google_api"
    | "connector_zapier_api";
  signers: SignatureRequestInListSignersInner[];
  approvers?: SignatureRequestInListApproversInner[];
  /** Labels associated to the Signature Request */
  labels?: SignatureRequestLabel[];
  documents: SignatureRequestInListDocumentsInner[];
  sender: SignatureRequestInListSender;
  /** @example "An_external-ID" */
  external_id: string | null;
  /**
   * @deprecated
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  branding_id: string | null;
  /**
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  custom_experience_id: string | null;
  /** @example true */
  signers_allowed_to_decline: boolean;
  /**
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  workspace_id?: string;
  audit_trail_locale: AuditTrailLocale;
  email_notification: SignatureRequestEmailNotification;
  /**
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  bulk_send_batch_id: string | null;
  decline_information?: SignatureRequestDeclineInformation;
}

export interface UpdateSignatureRequest {
  /**
   * @minLength 1
   * @maxLength 128
   */
  name?: string;
  /** Delivery mode to notify signers. */
  delivery_mode?: "none" | "email";
  /**
   * Enable an ordered workflow, each signer will be requested to sign in a sequential order
   * @example true
   */
  ordered_signers?: boolean;
  /**
   * When enabled, Approvers are requested to approve sequentially.
   * Each Approver will be invited to approve only once the previous one has completed their approval.
   * @example true
   */
  ordered_approvers?: boolean;
  reminder_settings?: UpdateSignatureRequestReminderSettings;
  /** Time zone of the dates and times displayed in emails, the Signature Request expiration date, and the PDF Audit Trail. Format: tz database. Default is set to Europe/Paris. */
  timezone?: SignatureRequestTimeZone;
  /**
   * @deprecated
   * @maxLength 500
   * @example "Please sign these documents as soon as possible."
   */
  email_custom_note?: string | null;
  /**
   * Due date of the Signature Request (yyyy-mm-dd).
   * The date cannot be in the past and cannot be more than one year after initiation.
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
   * @deprecated
   * @format uuid
   * @example "3a93d3b5-fb3b-4abf-9e70-26315b33506b"
   */
  branding_id?: string | null;
  /**
   * Use a specific Custom Experience to customize the signature experience.
   * @format uuid
   * @example "3a93d3b5-fb3b-4abf-9e70-26315b33506b"
   */
  custom_experience_id?: string | null;
  /**
   * Allowing signers to decline to sign.
   * @default false
   * @example true
   */
  signers_allowed_to_decline?: boolean;
  /**
   * Transfer the Signature Request into a given Workspace.
   * @format uuid
   * @example "3a93d3b5-fb3b-4abf-9e70-26315b33506b"
   */
  workspace_id?: string | null;
  /** Define the locale for the generated audit trail. */
  audit_trail_locale?: AuditTrailLocale | null;
  email_notification?: SignatureRequestEmailNotification;
  /**
   * List of Labels to associate with the Signature Request. Labels are identified by their ID.
   * @maxItems 50
   * @example ["3a93d3b5-fb3b-4abf-9e70-26315b33506b","89120884-d29a-4b1a-ac7b-a9e73a872795"]
   */
  labels?: string[];
}

export interface ActivateSignatureRequest {
  /**
   * The Id of the User that should be considered as the Signature Request sender.
   * They must be part of the Workspace of the Signature Request and be active.
   * Mandatory with `sender_type: "user"`, must be omitted otherwise.
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  sender_id?: string;
}

/** SignatureRequestActivated */
export interface SignatureRequestActivated {
  /**
   * @minLength 1
   * @example "89120884-d29a-4b1a-ac7b-a9e73a872795"
   */
  id: string;
  status: "ongoing" | "approval";
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
   * @example "2024-01-18T22:59:00Z"
   */
  created_at: string;
  /**
   * Enable an ordered workflow, each Signer will be requested to sign in a sequential order
   * @example true
   */
  ordered_signers: boolean;
  /**
   * Enable an ordered workflow, each Approver will be requested to approve in a sequential order
   * @example true
   */
  ordered_approvers: boolean;
  reminder_settings: SignatureRequestInListReminderSettings;
  /** Time zone of the dates and times displayed in emails, the Signature Request expiration date, and the PDF Audit Trail. Format: tz database. Default is set to Europe/Paris. */
  timezone: SignatureRequestTimeZone;
  /**
   * @deprecated
   * @example "Please sign these documents as soon as possible."
   */
  email_custom_note: string | null;
  /**
   * @format date-time
   * @example "2024-01-18T22:59:00Z"
   */
  expiration_date: string;
  /**
   * @minItems 1
   * @uniqueItems true
   */
  signers: EmbeddedSignerWithSignatureLink[];
  /** @uniqueItems true */
  approvers?: ApproverToNotify[];
  /** Labels associated to the Signature Request */
  labels?: SignatureRequestLabel[];
  documents: SignatureRequestActivatedDocumentsInner[];
  /**
   * @maxLength 255
   * @pattern ^[\w\-@.%+]+$
   */
  external_id: string | null;
  /**
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  branding_id: string | null;
  /**
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  custom_experience_id: string | null;
  audit_trail_locale: AuditTrailLocale;
}

export type CreateApprover = (
  | NewApproverFromScratch
  | NewApproverFromExistingUser
  | NewApproverFromExistingContact
  | NewApproverFromExistingSigner
) & {
  /** Custom Text */
  custom_text?: CustomText;
  /**
   * ID of the Approver that this Approver follows in the approval sequence.
   * They will only be asked to approve once that previous Approver has approved.
   * Only applicable when `ordered_approvers` is enabled for the Signature Request.
   * @format uuid
   * @example "8b6ed2f3-244f-487a-baa1-bbe4f51c8744"
   */
  insert_after_id?: string | null;
};

/**
 * Approver
 * Approver
 */
export interface Approver {
  /**
   * @format uuid
   * @minLength 1
   * @example "8b6ed2f3-244f-487a-baa1-bbe4f51c8744"
   */
  id: string;
  status: "initiated" | "notified" | "approved" | "rejected";
  info: ApproverInfo;
  /**
   * @format uri
   * @minLength 1
   */
  approval_link?: string | null;
  /**
   * @format date-time
   * @example "2024-01-18T22:59:00Z"
   */
  approval_link_expiration_date?: string | null;
  /** Custom Text */
  custom_text: CustomText;
}

export interface UpdateApprover {
  info?: UpdateApproverInfo;
  /** Custom Text */
  custom_text?: CustomText;
  /**
   * ID of the Approver that this Approver follows in the approval sequence.
   * They will only be asked to approve once that previous Approver has approved.
   * Only applicable when `ordered_approvers` is enabled for the Signature Request.
   * @format uuid
   * @example "8b6ed2f3-244f-487a-baa1-bbe4f51c8744"
   */
  insert_after_id?: string | null;
}

/** Signer Consent Request attached to a Signature Request */
export interface SignerConsentRequest {
  /**
   * Unique identifier of the Signer Consent Request
   * @format uuid
   * @example "69df8404-40d3-4686-887b-5678f46a0d9a"
   */
  id: string;
  /**
   * Type of the Signer Consent Request
   * @example "checkbox"
   */
  type: "checkbox" | "text_to_copy";
  /** Settings relative to Signer Consent Request's type */
  settings: SignerConsentRequestSettings;
  /**
   * Define if the Signer Consent Request is optional for Signers
   * @example false
   */
  optional: boolean;
  /**
   * Ids of Signers to request a consent
   * @minItems 1
   * @example ["71517741-a4a8-4f25-8496-6e9c6d2b7791","0c42e1ae-1cac-457b-9a09-5fda5f735bd8"]
   */
  signer_ids: string[];
  /**
   * The Document id to which it is linked.
   * @format uuid
   * @example "9658867a-d2f3-46f0-9bce-36c45f42644e"
   */
  document_id: string | null;
}

/** CreateSignerConsentRequest */
export interface CreateSignerConsentRequest {
  /**
   * Type of the Signer Consent Request
   * @example "checkbox"
   */
  type: "checkbox" | "text_to_copy";
  /** Settings relative to Signer Consent Request's type */
  settings: CreateSignerConsentRequestSettings;
  /**
   * Define if the Signer Consent Request is optional for Signers
   * @example false
   */
  optional: boolean;
  /**
   * Ids of Signers to request a consent
   * @minItems 1
   * @example ["71517741-a4a8-4f25-8496-6e9c6d2b7791","0c42e1ae-1cac-457b-9a09-5fda5f735bd8"]
   */
  signer_ids: string[];
  /**
   * Insert just after the position of the specified Signer Consent Request id
   * @format uuid
   * @example null
   */
  insert_after_id?: string | null;
  /**
   * Link the Signer Consent Request to a given Document by its id.
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  document_id?: string | null;
}

/** UpdateSignerConsentRequest */
export interface UpdateSignerConsentRequest {
  /** Settings relative to Signer Consent Request's type */
  settings?: CreateSignerConsentRequestSettings;
  /**
   * Define if the Signer Consent Request is optional for Signers
   * @example false
   */
  optional?: boolean;
  /**
   * Insert just after the position of the specified Signer Consent Request id
   * @format uuid
   * @example null
   */
  insert_after_id?: string | null;
  /**
   * Link the Signer Consent Request to a given Document by its id.
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  document_id?: string | null;
}

/** Signer Document Request attached to a Signature Request */
export interface SignerDocumentRequest {
  /**
   * Unique identifier of the Signer Document Request
   * @format uuid
   * @example "69df8404-40d3-4686-887b-5678f46a0d9a"
   */
  id: string;
  /**
   * Title of the document request
   * @minLength 1
   * @maxLength 255
   * @example "Proof of address"
   */
  title: string;
  /** Define if the document request is optional for the Signers */
  optional: boolean;
  /** Ids of Signers to request a document */
  signer_ids: string[];
}

/**
 * CreateSignerDocumentRequest
 * @example {"title":"Proof of address","optional":true,"signer_ids":["29f6049b-9c9d-4d1d-893c-be24e7d98d13","7d938814-5492-4c02-806e-69c8fc1254ff"]}
 */
export interface CreateSignerDocumentRequest {
  /**
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  optional: boolean;
  /** @minItems 1 */
  signer_ids: string[];
}

export interface CreateDocumentFromJson {
  /**
   * Id of the Electronic Seal Document. The Electronic Seal must be done to use its Electronic Seal Document.
   * @format uuid
   * @example "672a5a0b-ac65-407e-9da9-d34402bae974"
   */
  electronic_seal_document_id: string;
  /**
   * @minLength 1
   * @maxLength 128
   * @pattern ^(?!\s)[0-9A-Za-zĄÀÁÂÃÄÅÇĆÈÉÊËĘÌÍÎÏŁÑŃÒÓÔÕÖŚÙÚÛÜÝŹŻąàáâãäåæçćèéêëęìíîïłñńòóôõöśùúûüýÿźżß`\'()\- ]+(?<!\s)$
   * @example "file1"
   */
  name?: string | null;
  /** @example "signable_document" */
  nature: "attachment" | "signable_document";
  /**
   * Insert just after the position of the specified Document id.
   * @format uuid
   * @example "8b6ed2f3-244f-487a-baa1-bbe4f51c8744"
   */
  insert_after_id?: string | null;
  /**
   * If true, the system will parse the document exclusively for Signature-type Smart Anchors and automatically generate the required fields.
   * @default false
   * @example true
   */
  parse_anchors?: boolean | null;
}

export interface UpdateDocument {
  /** Files in JPEG, JPG, and PNG format can only be of attachment nature. */
  nature?: "attachment" | "signable_document";
  /**
   * Insert just after the position of the specified document id
   * @format uuid
   * @example "8b6ed2f3-244f-487a-baa1-bbe4f51c8744"
   */
  insert_after_id?: string | null;
  /**
   * The password required to unlock the document if it is protected
   * @example "MyPa$$word"
   */
  password?: string;
  /**
   * The new name to be assigned to the document. This value should contain any characters except "\", "/" and can\'t start and finish with a space.
   * @minLength 1
   * @maxLength 128
   * @pattern ^(?!\s)[^\/\\]+(?<!\s)$
   * @example "file1"
   */
  name?: string;
  initials?: InitialsArea;
}

/** Signature */
export interface FieldSignature {
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  id: string;
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  document_id: string;
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  signer_id: string;
  type: "signature";
  /**
   * @format int32
   * @min 37
   * @max 1000
   */
  height: number;
  /**
   * @format int32
   * @min 85
   * @max 2000
   */
  width: number;
  /**
   * @format int32
   * @min 1
   */
  page: number;
  /**
   * @format int32
   * @min 0
   * @max 32767
   */
  x: number;
  /**
   * @format int32
   * @min 0
   * @max 32767
   */
  y: number;
  /** @maxLength 150 */
  reason: HumanName | null;
}

/** Text */
export interface FieldText {
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  id: string;
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  document_id: string;
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  signer_id: string;
  type: "text";
  /**
   * If not set, the width is automatically calculated with the max_length value
   * @format int32
   * @min 24
   * @example 90
   */
  width: number;
  /**
   * The height must be calculated using the formula: "height = number_of_lines \* font_size \* line_height", where the line height is always set to 1.5.
   * @format int32
   * @min 1
   * @example 150
   */
  height: number;
  /**
   * @format int32
   * @min 1
   */
  page: number;
  /**
   * @format int32
   * @min 0
   * @max 32767
   */
  x: number;
  /**
   * @format int32
   * @min 0
   * @max 32767
   */
  y: number;
  /**
   * @maxLength 255
   * @example "What is your job title?"
   */
  question: string;
  /** @example "Your position in the company" */
  instruction: string | null;
  optional: boolean;
  /** @example "Software Engineer" */
  answer: string | null;
  /**
   * @min 1
   * @max 32767
   */
  max_length: number;
  font: Font;
  /**
   * @minLength 1
   * @maxLength 128
   */
  name?: string | null;
  /**
   * @minLength 1
   * @maxLength 32767
   */
  default_value?: string | null;
  read_only?: boolean;
}

/** Mention */
export interface FieldMention {
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  id: string;
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  document_id: string;
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  signer_id: string;
  type: "mention";
  /**
   * The height must be calculated using the formula: "height = number_of_lines \* font_size \* line_height", where the line height is always set to 1.5.
   * @format int32
   * @min 1
   */
  height: number;
  /**
   * @format int32
   * @min 24
   */
  width: number;
  /**
   * @format int32
   * @min 1
   */
  page: number;
  /**
   * @format int32
   * @min 0
   * @max 32767
   */
  x: number;
  /**
   * @format int32
   * @min 0
   * @max 32767
   */
  y: number;
  mention: string;
  font: Font;
  /**
   * Name of the Field.
   * @minLength 1
   * @maxLength 128
   * @example "Mention 1"
   */
  name?: string | null;
}

/** Checkbox */
export interface FieldCheckbox {
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  id: string;
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  document_id: string;
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  signer_id: string;
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
  /**
   * @format int32
   * @min 1
   */
  page: number;
  optional: boolean;
  /**
   * @format int32
   * @min 0
   * @max 32767
   */
  x: number;
  /**
   * @format int32
   * @min 0
   * @max 32767
   */
  y: number;
  /**
   * The size determines both the width and height of the checkbox.
   * @format int32
   * @min 8
   * @max 240
   */
  size?: number;
}

/** RadioGroup */
export interface FieldRadioButtonGroup {
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  id: string;
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  document_id: string;
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  signer_id: string;
  type: "radio_group";
  /**
   * @format int32
   * @min 1
   */
  page: number;
  /** Does the Signer has to select one of the radio buttons from this group? */
  optional: boolean;
  /**
   * @minLength 1
   * @maxLength 128
   */
  name: string | null;
  radios: FieldRadioButtonGroupRadiosInner[];
}

/** ReadOnlyText */
export interface FieldReadOnlyText {
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  id: string;
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  document_id: string;
  type: "read_only_text";
  /**
   * The height must be calculated using the formula: "height = number_of_lines \* font_size \* line_height", where the line height is always set to 1.5.
   * @format int32
   * @min 1
   * @example 150
   */
  height: number;
  /**
   * If not set, the width is automatically calculated with the max_length value
   * @format int32
   * @min 24
   * @example 90
   */
  width: number;
  /**
   * @format int32
   * @min 1
   */
  page: number;
  /**
   * @format int32
   * @min 0
   * @max 32767
   */
  x: number;
  /**
   * @format int32
   * @min 0
   * @max 32767
   */
  y: number;
  /**
   * This property holds the content displayed in the read-only text field.
   * @maxLength 5000
   * @example "Please, read the whole document before to sign it."
   */
  text: string;
  font: Font;
}

export type CreateField =
  | Signature
  | Mention
  | Text
  | Checkbox
  | RadioGroup
  | ReadOnlyText;

export type UpdateField =
  | Signature1
  | Mention1
  | Text1
  | Checkbox1
  | RadioGroup1
  | ReadOnlyText1;

export interface FieldAnswer {
  /**
   * The answer value for a text field. Can be null if the field is not required.
   * The selected radio name in a radio group.
   */
  value: FieldAnswerValue;
}

export interface Follower {
  /**
   * @format email
   * @example "john.doe@example.com"
   */
  email: string;
  /** Locale settings used for communication. */
  locale: Locale;
  /**
   * @format uri
   * @minLength 1
   */
  follower_link: string | null;
}

/** A list of Follower objects to be added to the signature request. */
export type CreateFollowers = CreateFollowersInner[];

export interface SignatureRequestLabel {
  /**
   * Unique identifier of the Label.
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  id: string;
  /**
   * Name of the Label.
   * @minLength 1
   * @maxLength 128
   * @example "Contracts"
   */
  name: string;
}

/**
 * Signature Request Metadata
 * Metadata allows you to attach extra information to your Signature Requests.
 * This field must contain JSON data (key / value), with 10 nodes maximum.
 * Each node key can have 30 characters maximum.
 * Each node value can contain a string (limited to 255 characters), a boolean, an integer or a float.
 * HTML content is not allowed.
 */
export interface Metadata {
  data?: Record<string, MetadataDataValue>;
}

/**
 * Signer
 * Signer
 */
export interface Signer {
  /**
   * @format uuid
   * @minLength 1
   */
  id: string;
  info: SignerInfo;
  /** @minLength 1 */
  status:
    | "initiated"
    | "declined"
    | "notified"
    | "verified"
    | "processing"
    | "consent_given"
    | "signed"
    | "aborted"
    | "error";
  fields: SignerFieldsInner[] | null;
  /** @default "electronic_signature" */
  signature_level:
    | "electronic_signature"
    | "advanced_electronic_signature"
    | "qualified_electronic_signature";
  signature_authentication_mode: "otp_email" | "otp_sms" | "no_otp" | null;
  /**
   * @format uri
   * @minLength 1
   */
  signature_link: string | null;
  /**
   * @format date-time
   * @example "2024-01-18T22:59:00Z"
   */
  signature_link_expiration_date: string | null;
  /** @minLength 1 */
  signature_image_preview: string | null;
  redirect_urls: SignerRedirectUrls;
  /** Custom Text */
  custom_text: CustomText;
  delivery_mode: "email" | "none" | null;
  /**
   * @minLength 1
   * @maxLength 255
   */
  identification_attestation_id: string | null;
  sms_notification: SmsNotification;
  email_notification: EmailNotification;
  pre_identity_verification_required: boolean;
}

export type CreateSigner =
  | NewSignerFromScratch
  | NewSignerFromExistingUser
  | NewSignerFromExistingContact;

export interface UpdateSigner {
  info?: UpdateSignerInfo;
  /**
   * @format uuid
   * @example "8b6ed2f3-244f-487a-baa1-bbe4f51c8744"
   */
  insert_after_id?: string | null;
  /** @default "electronic_signature" */
  signature_level?:
    | "electronic_signature"
    | "advanced_electronic_signature"
    | "qualified_electronic_signature";
  signature_authentication_mode?: "otp_email" | "otp_sms" | "no_otp" | null;
  redirect_urls?: NewSignerFromScratchRedirectUrls;
  custom_text?: NewSignerFromScratchCustomText;
  /** Override the delivery mode of the Signature Request for this Signer */
  delivery_mode?: SignerDeliveryMode;
  /**
   * @minLength 1
   * @maxLength 255
   */
  identification_attestation_id?: string | null;
  email_notification?: EmailNotification1;
  /** Defines the way the Signer's Identity Documents will be uploaded for Verification. If set to `true`, `signature_level`should be equal to `advanced_electronic_signature` and `delivery_mode` set to `none`. */
  pre_identity_verification_required?: boolean;
}

/** @example {"sender":{"id":"3409ab3f-9295-4a69-9923-e9d32d9533d6","type":"User","email":"johnny.wallyday@example.com","last_name":"Wallyday","first_name":"Johnny","ip_address":"172.18.0.1","phone_number":"+447123456789"},"signer":{"id":"44e4b0f8-55c9-48a9-803f-d89957525270","last_name":"Wallyday","first_name":"Johnny","ip_address":"172.18.0.1","phone_number":"+447123456789","email_address":"johnny.wallyday@example.com","consent_given_at":"2021-07-05T12:21:42+00:00","signature_process_completed_at":"2021-07-05T12:21:43+00:00"},"version":5,"documents":[{"id":"a9534a42-bbc1-4355-b270-58f315eda779","name":"sample.pdf","mime_type":"application/pdf","signatures":[{"hash":"4396f6a9f0554928f7bcc8e645a6441cb432c1606137ac8f3a735aef83946974","reason":"Signed by Johnny Wallyday","certificate":{"dn":"CN=Yousign, C=FR, O=Yousign, OU=794513986, serialNumber=2019-02-15 10:07:35:938","oid":"1.2.250.1.302.1.7.1.0","hash":"69570e2d5cc2b352b2249ba32b16195722099a89aa35de71ee1e745f771d66c5","content":"-----BEGIN CERTIFICATE-----\nMIIF8DCCA9igAwIBAgIIdfWiF8OAJo0wDQYJKoZIhvcNAQELBQAwfzEkMCIGA1UE\nAwwbWU9VU0lHTiBTQVMgLSBTSUdOMiBURVNUIENBMRIwEAYDVQQLDAk3OTQ1MTM5\nODYxFDASBgNVBAoMC1lPVVNJR04gU0FTMQ0wCwYDVQQHDARDQUVOMREwDwYDVQQI\nDAhDQUxWQURPUzELMAkGA1UEBhMCRlIwHhcNMTkwMjE1MDg1NzM2WhcNMjIwMjE0\nMDkwNzAwWjBnMRAwDgYDVQQDDAdZb3VzaWduMSAwHgYDVQQFExcyMDE5LTAyLTE1\nIDEwOjA3OjM1OjkzODESMBAGA1UECwwJNzk0NTEzOTg2MRAwDgYDVQQKDAdZb3Vz\naWduMQswCQYDVQQGEwJGUjCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEB\nAIWI+w9xQ9uSt4Lb/l14Yu8yRvCWer06bzm5RFvqgZRiD2Cq2Vx8LNzi0pGCxBdI\nQ9nlWcxCAh67Lp/OygCKpUN2DnNiIiORK5b283VKASlGMy5frVOCKiq2YCz0vA6k\npIqzBP7DKV/CsZ3EqP0uw9C12EH3PrBJGQq4WOZI1Q5Fs2JAhOwfq/wq2orG424y\n0A9+smh8J3DjwSCoMQZrdHd/obK3w8AaTGI535dqWIZ0wKTZBZ7xahGAPGXo9cy9\nUXFtazxWGIcu5uYjRLtlUyialcUgB0db1eyOzFoRJCsaE6s7QgBhQUUfDkXs1UIp\nD0BfB/K2kPxGENm2Uk6WAfcCAwEAAaOCAYYwggGCMAwGA1UdEwEB/wQCMAAwHwYD\nVR0jBBgwFoAUzmRTx3jf2iI16mJGhB48l67NzPUwSwYDVR0gBEQwQjBABgoqgXoB\ngi4BBwEAMDIwMAYIKwYBBQUHAgEWJGh0dHA6Ly95b3VzaWduLmZyL2ZyL3B1Ymxp\nYy9kb2N1bWVudDAgBgNVHSUEGTAXBgorBgEEAYI3CgMMBgkqhkiG9y8BAQUwgbIG\nA1UdHwSBqjCBpzA1oDOgMYYvaHR0cDovL3RtcC55b3VzaWduLmZyL2NybC95b3Vz\naWduc2Fzc2lnbjJjYS5jcmwwNqA0oDKGMGh0dHA6Ly90bXAyLnlvdXNpZ24uZnIv\nY3JsL3lvdXNpZ25zYXNzaWduMmNhLmNybDA2oDSgMoYwaHR0cDovL3RtcDMueW91\nc2lnbi5mci9jcmwveW91c2lnbnNhc3NpZ24yY2EuY3JsMB0GA1UdDgQWBBTgXAE8\nONE89UOu8TjrtBH9cbd92jAOBgNVHQ8BAf8EBAMCBkAwDQYJKoZIhvcNAQELBQAD\nggIBAAF+VPpcphjyoU8RvQO14ojWV51wJxsx5ShsvtXPsQ7dBws8XmthuTyyYxtM\nE3dldkJsaQt8vK7/AUURwO7YX7PHVlwIqm2kpNThZ4+sEib3SOivP8vpfIP3mD0+\nIFREI/8adIWYyiYzp1xjuuAoZ6lyg2JsOQ/67nyS+y7sUQ++GfQulb5yjkMytmYs\nPJ0uyjnNAI/+hy4okIY7qgHFZaDGBSqdGU28NZcCEeBLwjcH4ET2Q1LvJ7nkKQMM\ncxw+TXdy7cgIAjdfCymjJ701s43JKI01NFrNZ0I20jTOuh2qB4Kf8fQFwmutTnRM\nP4ZglXsXZkyL9snUWwMSAP9QP13fPD6EDTTshyijvwHb6zbrFg3U7J0m/Sjmqp2A\nzD+pj777dQ2jg0zTJ3WLOosE1/tt60ygK3HhiVnnyM8sdjTrZ6ca9++TgnRthKss\nR35c/1Be3RJtYnar2yn3bA2pklLcjnV8Q3ZSks4ll7XnEI9V8EQSNHkmno7k+asl\nWeQ8eC82fkwCwzXMLBTt1kN+0qXfpvVoSITPSVlOvdCsFCRSC3JMYHUY6c9oUUlV\nCCEBWxe/Vm8R+AG4i3zk9wIoLDLW2eeOx1G61QFtIlgJPbKRLiDZhaGZq1PN8T2o\nD/1S7m9PMISw1hrWHpJM+gZpRLsfRp5EH3ieRFzt24fpIosf\n-----END CERTIFICATE-----\n-----BEGIN CERTIFICATE-----\nMIIGnDCCBISgAwIBAgIIfVpT4jgxW6cwDQYJKoZIhvcNAQELBQAwfzEkMCIGA1UE\nAwwbWU9VU0lHTiBTQVMgLSBST09UMiBURVNUIENBMRIwEAYDVQQLDAk3OTQ1MTM5\nODYxFDASBgNVBAoMC1lPVVNJR04gU0FTMQ0wCwYDVQQHDARDQUVOMREwDwYDVQQI\nDAhDQUxWQURPUzELMAkGA1UEBhMCRlIwHhcNMTYwMTI3MTYyODExWhcNMjYwMTI3\nMTYyODExWjB/MSQwIgYDVQQDDBtZT1VTSUdOIFNBUyAtIFNJR04yIFRFU1QgQ0Ex\nEjAQBgNVBAsMCTc5NDUxMzk4NjEUMBIGA1UECgwLWU9VU0lHTiBTQVMxDTALBgNV\nBAcMBENBRU4xETAPBgNVBAgMCENBTFZBRE9TMQswCQYDVQQGEwJGUjCCAiIwDQYJ\nKoZIhvcNAQEBBQADggIPADCCAgoCggIBALUsirI2GYG9qu3U2S4V4JI0V9ohNP3W\nEpssSBcepPBV4UPtwAbFGvJqtGO/0nNZO0J7UwUb0sZBnedFl96tRQff3PECyO9k\n1B1/8rK1TbLPQPhTYWlrvX69wHXJFPxf/JkL4l4Lp6nFS80SYlaRj2RHHJ8HDj8S\nP1oULnhW2f2i8AlJwFe34eLJbWgeI5D7UAo59GMQ6bO4aVMaaDWvXsKOn8qmCUwF\ngtQNOqtYyLgURr4qivbjsZEv5H4Ee+wR5J+U6wd9dpIoTV2g1mExNlKVoj9qX9rh\n4al4G80fKNUT8bVnzxmdkDZzuzKm+rNIN6Fnc5CTHu2IcMHcuvKMRvsSJ+0fiz1E\nb/xsKO18Aiy5XOEQFqDrXRKC5AMmF/zB9Fh1Xe7Bi6IQo15NOjOCHLiBTARsMBJ8\nRWTuTv89qnL1lECogFusbptDG4Gu7Y7M13V8gOoGAxBs6uALjoseFZcnLQlIjZCV\nL0xyhrXFCLFnv4gy2+xY1bJNueD3cLFkzaxiCJ4WKesmRIfc6vHaQNl5NpU+9tFb\nU6o01c3fjZUdIh/MR3GFIXNpPsilhl///5aT5h2L98Gmb2q7tqSbFqm5z17MG3uS\ne4zCt+UD7MI8oCF2CELo79xMjtmqEwIf0IU8MxaLaLSZ0J164ZyHwvfIewgBp8XF\nqLn0jrZNiocXAgMBAAGjggEaMIIBFjAPBgNVHRMBAf8EBTADAQH/MB8GA1UdIwQY\nMBaAFGXEFaTuRlW+zr11R8A0QEYcGvuRMIGyBgNVHR8EgaowgacwNaAzoDGGL2h0\ndHA6Ly90bXAueW91c2lnbi5mci9jcmwveW91c2lnbnNhc3Jvb3QyY2EuY3JsMDag\nNKAyhjBodHRwOi8vdG1wMi55b3VzaWduLmZyL2NybC95b3VzaWduc2Fzcm9vdDJj\nYS5jcmwwNqA0oDKGMGh0dHA6Ly90bXAzLnlvdXNpZ24uZnIvY3JsL3lvdXNpZ25z\nYXNyb290MmNhLmNybDAdBgNVHQ4EFgQUzmRTx3jf2iI16mJGhB48l67NzPUwDgYD\nVR0PAQH/BAQDAgEGMA0GCSqGSIb3DQEBCwUAA4ICAQBZ8ru8LEQ1qzQqG/Rx420f\ncN4YNM1cXV+DwpWOw46Oh9U7BG1i/wYPy6uEZvj/n+nm/MkbajrzTViZnKMRs7Wy\nCWBqvAfl4gcbWvrRzdVwsbd3UbsxD5UD1CkJYl5/4gPvCae6YVCF9WtnH2lSy/Gv\n5bbIfyXF++iNQn+lLe59EhA3WinTql/yk/SPUNVn4/IZ0UWrw1IPS3kmnIal1mk7\npL45n5G51qAHpSbAoTsCeRBJZ6jr38n+FimZahnBZTu4+XycDVicrydpsopQiTt8\nry+mP1b9Nd4eoHR4/F/82w1rNfAM0NJKL8w3qr8lMdxsbANMvW0ixgjRnBpuRRB4\n5iUA5Mb2DbiYJARBoruYqYGya317Gcvtk4w0O48CXR+HPXygHh/63De1JdOUjSc2\nHagr6jp7NKbn/XmWBjWuoG9J9d9sC5U/mgjw5Xjf9jKGuUGz46EtlzzpojVB7fJA\nE2Ye0kOuLANpoTFAI4EJe5nTJz0HsFG3nDshsD9Mb1/kUBSGUDWijL5f0LDqf562\nkTioMpkK7ivZxQksF8+bMId5sUNrDVA/6lhn8tD5gzGacSU7IMfIH3EUKcI1NoWm\nhV+aI8EbXP6251cF74y/tejTUQLdOQ9ut3PsxYmTTDqr8RPI6UZeh2yibzSmgGwU\nfylsTiF/gVGm5cpWCrULCw==\n-----END CERTIFICATE-----\n-----BEGIN CERTIFICATE-----\nMIIGnDCCBISgAwIBAgIIT0TY3eM9ut0wDQYJKoZIhvcNAQELBQAwfzEkMCIGA1UE\nAwwbWU9VU0lHTiBTQVMgLSBST09UMiBURVNUIENBMRIwEAYDVQQLDAk3OTQ1MTM5\nODYxFDASBgNVBAoMC1lPVVNJR04gU0FTMQ0wCwYDVQQHDARDQUVOMREwDwYDVQQI\nDAhDQUxWQURPUzELMAkGA1UEBhMCRlIwHhcNMTYwMTI3MTYyNjE2WhcNMzYwMTI3\nMTYyNjE2WjB/MSQwIgYDVQQDDBtZT1VTSUdOIFNBUyAtIFJPT1QyIFRFU1QgQ0Ex\nEjAQBgNVBAsMCTc5NDUxMzk4NjEUMBIGA1UECgwLWU9VU0lHTiBTQVMxDTALBgNV\nBAcMBENBRU4xETAPBgNVBAgMCENBTFZBRE9TMQswCQYDVQQGEwJGUjCCAiIwDQYJ\nKoZIhvcNAQEBBQADggIPADCCAgoCggIBALXMHUFwSacaI5TjtMRw4kJ9o1ve/IZo\noj+2HOpW3iqs74cmsYjpHbJD0UAdh3SpdlLFK1/WBf0uEbzn6z7gRfUkEAo5EnHs\nM1iTfCXWDtA+xd9X4h2UAVEdXRzglvOvT275fjI1uj9Zi4Rz95drhlGkZVCDIMuv\n7fazkT868grWSfGSUc2C8d9+kOL4pCKuSanOc/nwD61F+oQ6KeEMtmpbr57Yy+qY\ntaF6ieKiDGn0aDj3yImnA9YqfFlX4mCyn+LmiqrXyEn0Z5iYLbO0wXkyPqhcO9c9\ngS1Y8Y/1AEvxnaLlV3eG402ZYUS6tT27o+tpdCAIx+3zMhNsPI9wXUjlVr/8ts+/\nuOUUCUWoBK3J6R1zG3urCdnuor8xAaWK/OHtvg8rXoXEfi8ujWV3EbiwIwiUHVh4\nrJIE1vhsVPW/sTM9yEjRFks0swyoX6QupEuaZLV4DbmcEbmZ2XIH5Cw2c1qwUTk2\n8vQzKHszLdRb9scnjd3yHsef5ZAHS9hUoFIfG+MzINGm3U6v4exspSw/EshSavVj\nR+gL0l+sdK4L6xe++K++Gpp5xn5cZUJeg4YtdgGju7lMdGpJVVwl0Y8UAEJt9xgC\nMvGctrkoaUuBjOhrGQQITDMsNrtgi28s7rUB6k+yxcaGBBp2PyAIsIe0e1wKGm1N\nHjGtqY0IV1tFAgMBAAGjggEaMIIBFjAPBgNVHRMBAf8EBTADAQH/MB8GA1UdIwQY\nMBaAFGXEFaTuRlW+zr11R8A0QEYcGvuRMIGyBgNVHR8EgaowgacwNaAzoDGGL2h0\ndHA6Ly90bXAueW91c2lnbi5mci9jcmwveW91c2lnbnNhc3Jvb3QyY2EuY3JsMDag\nNKAyhjBodHRwOi8vdG1wMi55b3VzaWduLmZyL2NybC95b3VzaWduc2Fzcm9vdDJj\nYS5jcmwwNqA0oDKGMGh0dHA6Ly90bXAzLnlvdXNpZ24uZnIvY3JsL3lvdXNpZ25z\nYXNyb290MmNhLmNybDAdBgNVHQ4EFgQUZcQVpO5GVb7OvXVHwDRARhwa+5EwDgYD\nVR0PAQH/BAQDAgEGMA0GCSqGSIb3DQEBCwUAA4ICAQCuxOXQDSYF0RpYQWonRDlU\nZ64IaGJ5buU4tGzf7rAgIQdXbO/VjjfF9UsjnLopNwWkuSJvINm21obYHcoSwvpz\nlwS/3uJCLxaw5q4SVJ4x5rajh/2qtFzcThSh48rcXcqoxAmc6BzQuIOm9cFUD2Ri\nqUJmg5O+CoLuE1b4i+CsCFL3AoWnBHFZ4YtInQBFIRBhMNPICvYOCF6jjgmMxkWU\nM8SEp7FSFfsy/oPI1dt+k9JjHCXhtWO9ndLvvwvLcjqRO3ItiF9IazsNcNLhaIMA\nlvYiQ+jLpckAuTxj7XHQyJSEofTMPr+ZSgQwUc337MJyxPhTDkch5cQBfnC20Usk\nyjdwwaeiwnNMhESwgDa4Oqw5IOmq+VmqtR+9F9yxACrpyph593F1zYwv7ikik5dI\nIYACb2fKLQrcnCfhm0k1Nt9UXoc9mQzFUK0DWJNLeGJo0rfRQh5ZqhcBG2U0KZFQ\nRtQQEf3zXJxQJGlCn1UMZMJswAzfhMTdGPNzyDI2u+9Q8WT7M2f59Idiae2m79uG\nuStRwN7Vnrpa399YXixOpNTz6d0NFBOAq1Nfwy5cnQDCnT9JkrKidrFKyA21b67m\nSfJIpMSPfFbt3g0h7JPWK7OC4Ydydh92e7/IUhtkudKMoazlwSJ7484dE7NyTpol\n62H0sW/1gmFzE6/QmCUR+w==\n-----END CERTIFICATE-----","generated_at":"2019-02-15T09:07:36+00:00"}}],"initial_hash":"8decc8571946d4cd70a024949e033a2a2a54377fe9f1c1b944c20f9ee11a9e51","initial_storage_id":"fdad7bcf-73d5-4a73-945d-ba7b738c530b"}],"organization":{"id":"d89a0f7b-bd3f-494d-ab61-71b69f24a3d9","name":"Universalt Music"},"authentication":{"mode":"sms","message":"eSIGNATURE: 791994 is your security code to confirm the signature of your documents.","validated_at":"2021-07-05T12:21:40+00:00"},"signature_request":{"id":"4d164217-60e7-4733-b56c-65ad637eadce","name":"My new request","sent_at":"2021-07-05T12:21:21+00:00","expired_at":"2022-01-05T22:59:00+00:00"},"electronic_signature_level":{"level":"Simple electronic signature"}} */
export interface SignerAuditTrail {
  version: number;
  signature_request: object;
  sender: object;
  signer: object;
  /**
   * @minItems 1
   * @uniqueItems true
   */
  documents: object[];
  organization: object;
  authentication: object;
  electronic_signature_level?: object;
}

/** Signer Document */
export interface SignerDocument {
  /**
   * Unique identifier of the signer document
   * @format uuid
   * @example "69df8404-40d3-4686-887b-5678f46a0d9a"
   */
  id: string;
  /**
   * Title of the document request
   * @minLength 1
   * @maxLength 255
   * @example "Proof of address"
   */
  title: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  filename: string | null;
}

export interface SignerIdentityVerification {
  /**
   * Type of document you are looking to verify. Only passports, id and resident permits are accepted.
   * @example "id_card"
   */
  type: "id_card" | "passport" | "residence_permit";
  /**
   * Front of the identity document file to verify.
   * Accepted formats: PNG, JPEG, JPG, PDF.
   * Max size: 10 MB. Max resolution: 20 mpx.
   * @format binary
   */
  recto: File;
  /**
   * Back of the identity document file to verify.
   * Accepted formats: PNG, JPEG, JPG, PDF.
   * Max size: 10 MB. Max resolution: 20 mpx.
   * @format binary
   */
  verso?: File;
}

export interface SignerSign {
  /**
   * One-Time Password (OTP) sent to the Signer
   * @pattern ^[0-9]{6}$
   * @example "231457"
   */
  otp?: string | null;
  ip_address: SignerSIPAddress;
  /**
   * Signer's consent date
   * @format date-time
   * @example "2024-01-18T22:00:00Z"
   */
  consent_given_at: string;
}

export interface SignerSignWithUploadedSignatureImage {
  /**
   * One-Time Password (OTP) sent to the Signer
   * @pattern ^[0-9]{6}$
   * @example "231457"
   */
  otp?: string;
  ip_address: SignerSIPAddress;
  /**
   * Signer's consent date
   * @format date-time
   * @example "2024-01-18T22:00:00Z"
   */
  consent_given_at: string;
  /**
   * Image to use as signature
   * @format binary
   */
  signature_image: File;
}

/** Template */
export interface Template {
  /**
   * @format uuid
   * @example "89120884-d29a-4b1a-ac7b-a9e73a872795"
   */
  id: string;
  name: string;
  description: string | null;
  status: "draft" | "active";
  /**
   * @format date-time
   * @example "2024-01-18T22:59:00Z"
   */
  created_at: string;
  /**
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  workspace_id?: string | null;
}

/** User */
export interface User {
  /**
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  id: string;
  /** @example "John" */
  first_name: string | null;
  /** @example "Doe" */
  last_name: string | null;
  /**
   * @format email
   * @example "email@example.com"
   */
  email: string;
  /**
   * E.164 format
   * @example "+447123456789"
   */
  phone_number: string | null;
  /** @example "en" */
  locale: string;
  /** @example "https://example.com/users/123456/avatar" */
  avatar: string | null;
  /** @example "Worker" */
  job_title: string | null;
  is_active: boolean;
  /**
   * @format date-time
   * @example "2024-01-18T22:59:00Z"
   */
  created_at: string;
  role: UserRole;
  workspaces: UserWorkspacesInner[];
  status: UserStatus;
  /**
   * The application used to create the `User`
   * @example "public_api"
   */
  source: "app" | "public_api";
}

/** A User object */
export interface CreateUser {
  /**
   * User's email address
   * The email address must not match any existing User's email.
   * @format email
   * @example "john.doe@example.com"
   */
  email: string;
  /**
   * User's role
   * Role assigned to the User in the Organization.
   */
  role: "admin" | "member";
  /** Locale settings used for communication. */
  locale: Locale;
  /**
   * User's Workspace
   * The new User must be associated with at least one Workspace in the Organization.
   * @minItems 1
   * @uniqueItems true
   */
  workspaces: UUID[];
  /**
   * First name
   * User's first name
   * @minLength 1
   * @maxLength 255
   * @example "John"
   */
  first_name?: HumanName | null;
  /**
   * Last name
   * User's last name
   * @minLength 1
   * @maxLength 255
   * @example "Doe"
   */
  last_name?: HumanName | null;
  /**
   * User's phone number
   * E.164 format
   * @minLength 1
   * @example "+41446667700"
   */
  phone_number?: string | null;
  /**
   * User's job title
   * This property cannot start or end with whitespace, does not allow HTML tags, URL or email.
   * @minLength 1
   * @maxLength 255
   * @example "Employee"
   */
  job_title?: string | null;
}

/** Invitation */
export interface UserInvitation {
  /**
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  id: string;
  /**
   * @format email
   * @example "email@example.com"
   */
  email: string;
  role: ManageableRole;
  workspaces: UserWorkspacesInner[];
  /**
   * @format date-time
   * @example "2024-01-18T22:59:00Z"
   */
  expired_at: string;
  /**
   * @format date-time
   * @example "2024-01-18T22:59:00Z"
   */
  created_at: string;
}

export interface UpdateUser {
  /** New role assigned to the User. It can be `member` or `admin`. */
  role?: "admin" | "member";
  /** If `true`, the User will be activated; if `false`, the User will be suspended. */
  active?: boolean;
}

/** BankAccountConnectionMeta */
export interface BankAccountConnectionMeta {
  /** The unique identifier for a resource. */
  id: UUID;
  /**
   * The Workspace ID in which the verification has been created.
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  workspace_id: string;
  /**
   * Creation date of the Bank Account Connection Verification.
   * @format date-time
   * @example "2025-02-12T23:59:59Z"
   */
  created_at: string;
  /**
   * Update date of the Bank Account Connection Verification.
   * @format date-time
   * @example "2025-02-12T23:59:59Z"
   */
  updated_at: string;
  /** Status of the Bank Account Connection Verification. */
  status: BankAccountConnectionStatus;
  /**
   * List of status codes. Indicates the cause when the status is pending, verified, failed or inconclusive.
   * @example ["BACV_1100"]
   */
  status_codes?: string[];
  /**
   * Indicates if the personal data extracted from the Bank Account Connection has been anonymized.
   * If set to `true`, the personal data has been anonymized and most fields will be NULL.
   */
  data_anonymized: boolean;
}

/** A Bank Account Connection object */
export interface InitiateBankAccountConnection {
  /**
   * Redirection URL
   * The URL to redirect the person back to your application or website after the Bank Account Connection flow is completed.
   * @format uri
   * @minLength 1
   * @maxLength 2000
   * @example "https://www.redirectionurl.com"
   */
  redirection_url: string;
  /**
   * Workspace ID
   * Scopes the verification to a specific workspace.
   * Defaults to the default workspace if not specified.
   * @format uuid
   * @example "07398450-a634-4209-9253-c367d8d9914f"
   */
  workspace_id?: string | null;
  /**
   * Country Code
   * The country for the Bank Account Connection flow.
   * Only banks from that country will be offered in the flow
   * @default "FR"
   * @example "GB"
   */
  country_code?:
    | "AT"
    | "BE"
    | "CZ"
    | "DE"
    | "DK"
    | "EE"
    | "ES"
    | "FI"
    | "FR"
    | "GB"
    | "IE"
    | "IT"
    | "LT"
    | "LV"
    | "NL"
    | "NO"
    | "PL"
    | "PT"
    | "SE"
    | null;
  /**
   * Locale
   * The locale for the Bank Account Connection flow.
   * @default "fr"
   * @example "en"
   */
  locale?:
    | "cs"
    | "da"
    | "de"
    | "en"
    | "es"
    | "et"
    | "fi"
    | "fr"
    | "it"
    | "lt"
    | "lv"
    | "no"
    | "nl"
    | "pl"
    | "pt"
    | "sv"
    | null;
}

/** A Bank Account Connection with Legal Person object */
export interface InitiateBankAccountConnectionWithLegalPerson {
  /**
   * Redirection URL
   * The URL to redirect the person back to your application or website after the Bank Account Connection flow is completed.
   * @format uri
   * @minLength 1
   * @maxLength 2000
   * @example "https://www.redirectionurl.com"
   */
  redirection_url: string;
  /**
   * Workspace ID
   * Scopes the verification to a specific workspace.
   * Defaults to the default workspace if not specified.
   * @format uuid
   * @example "07398450-a634-4209-9253-c367d8d9914f"
   */
  workspace_id?: string | null;
  /**
   * Country code
   * The country for the Bank Account Connection flow.
   * Only banks from that country will be offered in the flow
   * @default "FR"
   * @example "GB"
   */
  country_code?:
    | "AT"
    | "BE"
    | "DE"
    | "ES"
    | "FR"
    | "GB"
    | "IE"
    | "IT"
    | "NL"
    | "PL"
    | "PT"
    | "SE"
    | null;
  /**
   * Locale
   * The locale for the Bank Account Connection flow.
   * @default "fr"
   * @example "en"
   */
  locale?:
    | "cs"
    | "da"
    | "de"
    | "en"
    | "es"
    | "et"
    | "fi"
    | "fr"
    | "it"
    | "lt"
    | "lv"
    | "no"
    | "nl"
    | "pl"
    | "pt"
    | "sv"
    | null;
  /** Must be set to TRUE to indicate this is a legal person verification */
  is_legal_person: boolean;
}

/** BankAccountConnectionFull */
export type BankAccountConnectionFull = BankAccountConnectionMeta & {
  data: BankAccountConnectionFullAllOfData;
};

/** BankAccountLookupMeta */
export interface BankAccountLookupMeta {
  /** The unique identifier for a resource. */
  id: UUID;
  /**
   * The Workspace ID in which the verification has been created.
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  workspace_id: string;
  /**
   * Creation date of the Bank Account Lookup Verification.
   * @format date-time
   * @example "2025-07-23T18:22:00Z"
   */
  created_at: string;
  /**
   * Update date of the Bank Account Lookup Verification.
   * @format date-time
   * @example "2025-07-23T18:22:00Z"
   */
  updated_at: string;
  /**
   * Status of the Bank Account Lookup Verification.
   * @example "verified"
   */
  status: "pending" | "verified" | "failed" | "inconclusive";
  /**
   * List of status codes. Indicates the cause when the status is `failed` or `inconclusive`.
   * @example ["BALV_1101"]
   */
  status_codes: string[];
}

/** Initiate a new Bank Account Lookup Verification with natural person */
export interface InitiateBankAccountLookupWithNaturalPerson {
  /**
   * The International Bank Account Number (IBAN) to verify.
   * The IBAN must be a valid IBAN starting with "FR".
   * The IBAN must belong to a bank that is a member of the SEPAmail DIAMOND network.
   * @example "FR7630006000011234567890189"
   */
  iban: string;
  /** Information about the natural person who owns the bank account */
  natural_person?: InitiateBankAccountLookupWithNaturalPersonNaturalPerson;
  /**
   * Scopes the verification to a specific workspace.
   * Defaults to the default workspace if not specified.
   * @format uuid
   * @example "9412b83b-b4b9-4a94-97b5-2b43dfa4cde3"
   */
  workspace_id?: string | null;
}

/** Initiate a new Bank Account Lookup Verification with legal person */
export interface InitiateBankAccountLookupWithLegalPerson {
  /**
   * The International Bank Account Number (IBAN) to verify.
   * The IBAN must be a valid IBAN starting with "FR".
   * The IBAN must belong to a bank that is a member of the SEPAmail DIAMOND network.
   * @example "FR7630006000011234567890189"
   */
  iban: string;
  /** Information about the legal person (company) that owns the bank account */
  legal_person?: InitiateBankAccountLookupWithLegalPersonLegalPerson;
  /**
   * Scopes the verification to a specific workspace.
   * Defaults to the default workspace if not specified.
   * @format uuid
   * @example "9412b83b-b4b9-4a94-97b5-2b43dfa4cde3"
   */
  workspace_id?: string | null;
}

/** BankAccountMeta */
export interface BankAccountMeta {
  /** The unique identifier for a resource. */
  id: UUID;
  /**
   * The Workspace ID in which the verification has been created.
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  workspace_id?: string;
  /**
   * Creation date of the Bank Account Verification.
   * @format date-time
   * @example "2025-02-12T23:59:59Z"
   */
  created_at: string;
  /**
   * Update date of the Bank Account Verification.
   * @format date-time
   * @example "2025-02-12T23:59:59Z"
   */
  updated_at: string;
  /** Status of the Bank Account Verification. */
  status: BankAccountStatus;
  /**
   * List of status codes. Indicates the cause when the status is `failed` or `inconclusive`.
   * @example ["BAV_1604","BAV_1611"]
   */
  status_codes: string[];
  /**
   * Indicates if the personal data extracted from the document has been anonymized.
   * If set to `true`, the personal data has been anonymized and most fields will be NULL.
   */
  data_anonymized: boolean;
}

/** Initiate Bank Account Verification */
export interface InitiateBankAccount {
  /**
   * The file containing the bank account details.
   * Accepted formats: PNG, JPEG, JPG, PDF.
   * Max size: 10 MB. Max resolution: 20 mpx.
   * @format binary
   */
  file: File;
  /** International Bank Account Number (IBAN) */
  iban?: IBAN;
  /** Business Identifier Codes (BIC) */
  bic?: BIC;
  /**
   * Scopes the verification to a specific workspace.
   * Defaults to the default workspace if not specified.
   * @format uuid
   * @example "9412b83b-b4b9-4a94-97b5-2b43dfa4cde3"
   */
  workspace_id?: string | null;
}

/** Initiate Bank Account Verification with legal person */
export interface InitiateBankAccountWithLegalPerson {
  /**
   * The file containing the bank account details.
   * Accepted formats: PNG, JPEG, JPG, PDF.
   * Max size: 10 MB. Max resolution: 20 mpx.
   * @format binary
   */
  file: File;
  /** International Bank Account Number (IBAN) */
  iban?: IBAN;
  /** Business Identifier Codes (BIC) */
  bic?: BIC;
  /** The field can not be submitted if field "natural_person" is provided. */
  legal_person: InitiateBankAccountWithLegalPersonLegalPerson;
  /**
   * Scopes the verification to a specific workspace.
   * Defaults to the default workspace if not specified.
   * @format uuid
   * @example "9412b83b-b4b9-4a94-97b5-2b43dfa4cde3"
   */
  workspace_id?: string | null;
}

/** Initiate Bank Account Verification with natural person */
export interface InitiateBankAccountWithNaturalPerson {
  /**
   * The file containing the bank account details.
   * Accepted formats: PNG, JPEG, JPG, PDF.
   * Max size: 10 MB. Max resolution: 20 mpx.
   * @format binary
   */
  file: File;
  /** International Bank Account Number (IBAN) */
  iban?: IBAN;
  /** Business Identifier Codes (BIC) */
  bic?: BIC;
  /** The field can not be submitted if field "legal_person" is provided. */
  natural_person: InitiateBankAccountWithNaturalPersonNaturalPerson;
  /**
   * Scopes the verification to a specific workspace.
   * Defaults to the default workspace if not specified.
   * @format uuid
   * @example "9412b83b-b4b9-4a94-97b5-2b43dfa4cde3"
   */
  workspace_id?: string | null;
}

/** BankAccountFull */
export type BankAccountFull = BankAccountMeta & {
  data: BankAccountFullAllOfData;
};

/** CompanyMeta */
export interface CompanyMeta {
  /** The unique identifier for a resource. */
  id: UUID;
  /**
   * The Workspace ID in which the verification has been created.
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  workspace_id: string;
  /**
   * Creation date of the Company Verification.
   * @format date-time
   * @example "2023-01-01T12:00:00Z"
   */
  created_at: string;
  /**
   * Update date of the Company Verification.
   * @format date-time
   * @example "2023-01-01T12:00:00Z"
   */
  updated_at: string;
  /**
   * Status of the Company Verification.
   * @example "verified"
   */
  status: "pending" | "verified" | "failed" | "inconclusive";
  /**
   * Indicates if the company data has been anonymized.
   * If set to `true`, all fields in the `data` field are set to NULL.
   * @example false
   */
  data_anonymized?: boolean;
}

/** Initiate Company Verification from company number */
export interface InitiateCompanyFromJson {
  /**
   * Please provide the exact company number depending on the country format.
   * For any doubt, consult the Company Verification guide.
   * @minLength 1
   * @example "794513986"
   */
  company_number: string;
  /**
   * Defines the country where the company is registered.
   * @minLength 2
   * @maxLength 2
   * @example "FR"
   */
  country_code: "FR" | "GB" | "BE" | "CH" | "NL";
  /**
   * Scopes the verification to a specific workspace.
   * Defaults to the default workspace if not specified.
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  workspace_id?: string | null;
}

/** Initiate Company Verification from Kbis */
export interface InitiateCompanyFromFile {
  /**
   * The file containing the company details mostly known as Kbis.
   * Accepted formats: PDF.
   * Max size: 10 MB.
   * @format binary
   * @example "Binary file"
   */
  file: File;
  /**
   * @minLength 2
   * @maxLength 2
   * @example "FR"
   */
  country_code: "FR";
  /**
   * Scopes the verification to a specific workspace.
   * Defaults to the default workspace if not specified.
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  workspace_id?: string | null;
}

/** CompanyFull */
export type CompanyFull = CompanyMeta & {
  data: CompanyFullAllOfData;
};

/** IdentityDocumentMeta */
export interface IdentityDocumentMeta {
  /** The unique identifier for a resource. */
  id: UUID;
  /**
   * The Workspace ID in which the verification has been created.
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  workspace_id: string;
  /**
   * Creation date of the Identity Document Verification.
   * @format date-time
   * @example "2024-01-18T22:59:00Z"
   */
  created_at: string;
  /**
   * Update date of the Identity Document Verification.
   * @format date-time
   * @example "2024-01-18T22:59:00Z"
   */
  updated_at: string;
  /** Status of the Identity Document Verification */
  status: IdentityDocumentStatus;
  /**
   * List of status codes. Indicates the cause when the status is `failed` or `inconclusive`.
   * @example ["IDDV_1706","IDDV_1707"]
   */
  status_codes: string[];
  /**
   * Indicates if the personal data extracted from the document has been anonymized.
   * If set to `true`, the personal data has been anonymized and most fields will be NULL.
   * @example false
   */
  data_anonymized: boolean;
}

/** Initiate an Identity Document Verification with names */
export interface InitiateIdentityDocument {
  /**
   * Please provide the holder first name, exactly as it appears on the ID document.
   * Please match it exactly, with the same characters, same case.
   * One exception: if the document mentions an honorary title, please don't provide it as part of the name.
   * @minLength 1
   * @maxLength 255
   * @example "John"
   */
  first_name: HumanName;
  /**
   * Please provide the holder last name, exactly as it appears on the ID document birth name.
   * Please match it exactly, with the same characters, same case.
   * One exception: if the document mentions an honorary title, please don't provide it as part of the name.
   * @minLength 1
   * @maxLength 255
   * @example "Doe"
   */
  last_name: HumanName;
  /**
   * The document type to verify
   * @example "id_card"
   */
  type?:
    | "id_card"
    | "passport"
    | "residence_permit"
    | "driver_license"
    | "ita_ts_cns";
  /**
   * The identity document file to verify.
   * Accepted formats: PNG, JPEG, JPG, PDF.
   * Max size: 10 MB. Max resolution: 20 mpx.
   * @format binary
   */
  file: File;
  /**
   * Additional document file, such as the back side of an identity card.
   * Accepted formats: PNG, JPEG, JPG, PDF.
   * Max size: 10 MB. Max resolution: 20 mpx.
   * @format binary
   */
  additional_file?: File;
  /**
   * Scopes the verification to a specific workspace.
   * Defaults to the default workspace if not specified.
   * @format uuid
   * @example "9412b83b-b4b9-4a94-97b5-2b43dfa4cde3"
   */
  workspace_id?: string | null;
}

/** Initiate an Identity Document Verification without names */
export interface InitiateIdentityDocumentWithoutName {
  /**
   * The document type to verify
   * @example "id_card"
   */
  type?:
    | "id_card"
    | "passport"
    | "residence_permit"
    | "driver_license"
    | "ita_ts_cns";
  /**
   * The identity document file to verify.
   * Accepted formats: PNG, JPEG, JPG, PDF.
   * Max size: 10 MB. Max resolution: 20 mpx.
   * @format binary
   */
  file: File;
  /**
   * Additional document file, such as the back side of an identity card.
   * Accepted formats: PNG, JPEG, JPG, PDF.
   * Max size: 10 MB. Max resolution: 20 mpx.
   * @format binary
   */
  additional_file?: File;
  /**
   * Scopes the verification to a specific workspace.
   * Defaults to the default workspace if not specified.
   * @format uuid
   * @example "9412b83b-b4b9-4a94-97b5-2b43dfa4cde3"
   */
  workspace_id?: string | null;
}

/** IdentityDocumentFull */
export type IdentityDocumentFull = IdentityDocumentMeta & {
  data: IdentityDocumentFullAllOfData;
};

/** IdentityVideoMeta */
export interface IdentityVideoMeta {
  /** The unique identifier for a resource. */
  id: UUID;
  /**
   * The Workspace ID in which the verification has been created.
   * @format uuid
   * @example "9412b83b-b4b9-4a94-97b5-2b43dfa4cde3"
   */
  workspace_id: string;
  /**
   * Creation date of the Identity Video Verification.
   * @format date-time
   * @example "2024-01-18T22:59:00Z"
   */
  created_at: string;
  /**
   * Update date of the Identity Video Verification.
   * @format date-time
   * @example "2024-01-18T22:59:00Z"
   */
  updated_at: string;
  /** Status of the Identity Video Verification */
  status: IdentityVideoStatus;
  /**
   * List of status codes. Indicates the cause when the status is `failed` or `inconclusive`.
   * @example ["IDVV_1112"]
   */
  status_codes: string[];
  /**
   * Indicates if the personal data extracted has been anonymized.
   * If set to `true`, the personal data has been anonymized and most fields will be NULL.
   * @example false
   */
  data_anonymized: boolean;
  /**
   * Indicates if face recognition was enabled during the verification process.
   * @example false
   */
  face_recognition: boolean;
}

/** Initiate Identity Video Verification */
export interface InitiateIdentityVideo {
  /**
   * The first name provided must match exactly as it appears on the ID document, as a consistency check will be performed. If multiple given names are listed on the document, you must provide only one of them.
   * @minLength 1
   * @maxLength 255
   * @example "John"
   */
  first_name: HumanName;
  /**
   * The last name provided must match exactly as it appears on the ID document, as a consistency check will be performed. If both a birth name and a usage name are listed on the document, you must provide one of them, but not both.
   * @minLength 1
   * @maxLength 255
   * @example "Doe"
   */
  last_name: HumanName;
  /**
   * The URL to redirect the person back to your application or website after the identity verification flow is complete.
   * @format uri
   * @minLength 1
   * @maxLength 2000
   * @example "https://www.redirectionurl.com"
   */
  redirection_url: string;
  /**
   * Enable face recognition step in the identity verification flow.
   * @default false
   * @example false
   */
  face_recognition?: boolean;
  /**
   * Scopes the verification to a specific workspace.
   * Defaults to the default workspace if not specified.
   * @format uuid
   * @example "9412b83b-b4b9-4a94-97b5-2b43dfa4cde3"
   */
  workspace_id?: string | null;
}

/** IdentityVideoFull */
export type IdentityVideoFull = IdentityVideoMeta & {
  /**
   * The URL of the verification page that the user used to begin the verification process.
   * @format uri
   * @minLength 1
   * @example "https://id.ubble.ai/2f3e833c-6cf8-4c39-9004-cfb0e048ef63"
   */
  verification_url: string | null;
  data: IdentityVideoFullAllOfData;
};

/** ProofOfAddressMeta */
export interface ProofOfAddressMeta {
  /** The unique identifier for a resource. */
  id: UUID;
  /**
   * The Workspace ID in which the Proof of Address Verification has been created.
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  workspace_id: string;
  /**
   * Creation date of the Proof of Address Verification.
   * @format date-time
   * @example "2025-02-12T23:59:59Z"
   */
  created_at: string;
  /**
   * Update date of the Proof of Address Verification.
   * @format date-time
   * @example "2025-02-12T23:59:59Z"
   */
  updated_at: string;
  /**
   * Status of the verification
   * @example "failed"
   */
  status: "pending" | "verified" | "failed" | "inconclusive";
  /**
   * List of status codes. Indicates the cause when the status is `failed` or `inconclusive`.
   * @example ["POAV_1611","POAV_1612"]
   */
  status_codes: string[];
  /**
   * Indicates if the data related to the ProofOfAddress Verification has been anonymized.
   * If set to `true`, the data are removed and most fields will be NULL.
   * @example false
   */
  data_anonymized: boolean;
}

/** Create Proof of Address Verification */
export interface InitiateProofOfAddress {
  /**
   * The proof of address document.
   * Accepted formats: PNG, JPEG, JPG, PDF.
   * Max size: 10 MB. Max resolution: 20 mpx.
   * @format binary
   */
  file: File;
  natural_person?: InitiateProofOfAddressNaturalPerson;
  /**
   * Scopes the verification to a specific workspace.
   * Defaults to the default workspace if not specified.
   * @format uuid
   * @example "9412b83b-b4b9-4a94-97b5-2b43dfa4cde3"
   */
  workspace_id?: string | null;
}

/** ProofOfAddressFull */
export type ProofOfAddressFull = ProofOfAddressMeta & {
  data: ProofOfAddressFullAllOfData;
};

/** WatchlistMeta */
export interface WatchlistMeta {
  /** The unique identifier for a resource. */
  id: UUID;
  /**
   * The Workspace ID in which the verification has been created.
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  workspace_id: string;
  /**
   * Creation date of the Watchlist Verification.
   * @format date-time
   * @example "2025-02-12T23:59:59Z"
   */
  created_at: string;
  /**
   * Update date of the Watchlist Verification.
   * @format date-time
   * @example "2025-02-12T23:59:59Z"
   */
  updated_at: string;
  /** Status of the Watchlist Verification. */
  status: WatchlistStatus;
  /**
   * Indicates if the data related to the Watchlist Verification has been anonymized.
   * If set to `true`, the data are removed and most fields will be NULL.
   * @example false
   */
  data_anonymized: boolean;
}

/** Initiate Watchlist Verification */
export interface InitiateWatchlist {
  /**
   * Scopes the verification to a specific workspace.
   * Defaults to the default workspace if not specified.
   * @format uuid
   * @example "9412b83b-b4b9-4a94-97b5-2b43dfa4cde3"
   */
  workspace_id?: string | null;
  /** Information about the person to check */
  natural_person: InitiateWatchlistNaturalPerson;
}

/** WatchlistFull */
export type WatchlistFull = WatchlistMeta & {
  /** Verification result data */
  data: WatchlistFullAllOfData;
};

/** WebhookSubscription Response */
export interface WebhookSubscription {
  /**
   * @format uuid
   * @example "89120884-d29a-4b1a-ac7b-a9e73a872795"
   */
  id: string;
  /**
   * Https target URL of the webhook
   * @format uri
   * @maxLength 255
   * @example "https://example.com/my-endpoint"
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
  /** Choose between a wildcard symbol to select all Workspaces or specify a list of specific Workspace UUIDs. */
  subscribed_events: WebhookSubscriptionSubscribedEvents;
  /** Autogenerated 32 bytes key */
  secret_key: string;
  scopes: WebhookSubscriptionScopes;
  workspaces: WebhookSubscriptionWorkspaces;
  /** If a Webhook request fails for any reason, Yousign will retry the request 8 times using a back-off mechanism after: 2, 6, 30, 60, 300, 1080, 1440, 2880 min */
  auto_retry: boolean;
  /** Is the webhook enabled? */
  enabled: boolean;
  /**
   * @format date-time
   * @example "2024-01-18T22:59:00Z"
   */
  created_at: string;
  /**
   * @format date-time
   * @example "2024-01-18T22:59:00Z"
   */
  updated_at: string | null;
}

/** CreateWebhookSubscription Request Body */
export interface CreateWebhookSubscription {
  /**
   * Https target URL of the webhook
   * @format uri
   * @maxLength 255
   * @example "https://example.com/my-endpoint"
   */
  endpoint: string;
  /**
   * Short description of the webhook. This property cannot start or end with whitespace, does not allow HTML tags, URL or email.
   * @maxLength 128
   * @example "Lorem Ipsum"
   */
  description: string | null;
  /** @example true */
  sandbox: boolean;
  /** Choose between a wildcard symbol to select all subscribed events or specify a list of specific subscribed events. */
  subscribed_events: CreateWebhookSubscriptionSubscribedEvents;
  /**
   * Autogenerated 32 bytes key
   * @minLength 32
   * @maxLength 32
   */
  secret_key?: string | null;
  /** Choose between a wildcard symbol to select all scopes or specify a list of specific scopes. */
  scopes: CreateWebhookSubscriptionScopes;
  /** Choose between a wildcard symbol to select all Workspaces or specify a list of specific Workspace UUIDs. The association of specific Workspaces with Webhook is temporarily restricted in the sandbox environment, only the value wildcard ("*") for Workspaces is allowed in this context. */
  workspaces?: CreateWebhookSubscriptionWorkspaces;
  /** If a Webhook request fails for any reason, Yousign will retry the request 8 times using a back-off mechanism after: 2, 6, 30, 60, 300, 1080, 1440, 2880 min */
  auto_retry: boolean;
  /** Choose whether the webhook is enabled or not. */
  enabled: boolean;
}

/** UpdateWebhookSubscription Request Body */
export interface UpdateWebhookSubscription {
  /**
   * Https target URL of the webhook
   * @format uri
   * @maxLength 255
   * @example "https://example.com/my-endpoint"
   */
  endpoint?: string;
  /**
   * Short description of the webhook. This property cannot start or end with whitespace, does not allow HTML tags, URL or email.
   * @maxLength 128
   * @example "Lorem Ipsum"
   */
  description?: string | null;
  /** @example true */
  sandbox?: boolean;
  /** Choose between a wildcard symbol to select all subscribed events or specify a list of specific subscribed events. */
  subscribed_events?: CreateWebhookSubscriptionSubscribedEvents;
  /**
   * Autogenerated 32 bytes key
   * @minLength 32
   * @maxLength 32
   */
  secret_key?: string | null;
  /** Choose between a wildcard symbol to select all scopes or specify a list of specific scopes. */
  scopes?: CreateWebhookSubscriptionScopes;
  /** Choose between a wildcard symbol to select all Workspaces or specify a list of specific Workspace UUIDs. The association of specific Workspaces with Webhook is temporarily restricted in the sandbox environment, only the value wildcard ("*") for Workspaces is allowed in this context. */
  workspaces?: CreateWebhookSubscriptionWorkspaces;
  /** If a Webhook request fails for any reason, Yousign will retry the request 8 times using a back-off mechanism after: 2, 6, 30, 60, 300, 1080, 1440, 2880 min */
  auto_retry?: boolean;
  /** Choose whether the webhook is enabled or not. */
  enabled?: boolean;
}

/** Workspace */
export interface Workspace {
  /**
   * @format uuid
   * @example "89120884-d29a-4b1a-ac7b-a9e73a872795"
   */
  id: string;
  name: string;
  external_name: string | null;
  default: boolean;
  /**
   * @format date-time
   * @example "2024-01-18T22:59:00Z"
   */
  created_at: string;
  /**
   * @format date-time
   * @example "2024-01-18T22:59:00Z"
   */
  updated_at: string;
  /** @format date-time */
  deleted_at: string | null;
  users: WorkspaceUsersInner[];
}

export interface CreateWorkspace {
  /**
   * @maxLength 200
   * @example "Sales"
   */
  name: string;
  /**
   * @maxLength 200
   * @example "UK Sales"
   */
  external_name?: string | null;
}

export interface MarkWorkspaceAsDefault {
  /**
   * The workspace you want to mark as the default one
   * @format uuid
   */
  workspace_id: string;
}

export interface DeleteWorkspace {
  /**
   * The target workspace where resources are migrated in.
   * @format uuid
   */
  workspace_id: string;
}

export interface UpdateWorkspace {
  /**
   * @maxLength 200
   * @example "Sales"
   */
  name?: string;
  /**
   * @maxLength 200
   * @example "UK Sales"
   */
  external_name?: string | null;
}

/** @pattern ^(?!\s)[0-9A-Za-zĄÀÁÂÃÄÅÇĆÈÉÊËĘÌÍÎÏŁÑŃÒÓÔÕÖŚÙÚÛÜÝŹŻąàáâãäåæçćèéêëęìíîïłñńòóôõöśùúûüýÿźżßĀāĂăĈĉĊċČčĎďĐđĒēĔĕĖėĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŽžſøØÆȘșȚț`\'()\- ]+(?<!\s)$ */
export type HumanName = string;

/**
 * International Bank Account Number (IBAN)
 * @minLength 14
 * @maxLength 34
 * @pattern ^([A-Z]{2}[ \-]?[0-9]{2})(?=(?:[ \-]?[A-Z0-9]){9,30}$)((?:[ \-]?[A-Z0-9]{3,5}){2,7})([ \-]?[A-Z0-9]{1,3})?$
 * @example "FR7610278030060001478474080"
 */
export type IBAN = string;

/**
 * Business Identifier Codes (BIC)
 * @minLength 8
 * @maxLength 11
 * @pattern ^[A-Z]{6,6}[A-Z2-9][A-NP-Z0-9]([A-Z0-9]{3,3}){0,1}$
 * @example "CMCIFR2A"
 */
export type BIC = string;

/** InitialsArea */
export interface InitialsArea {
  /** Alignment of the Initials on the document. The `left`, `right` and `center` options are aligned on top of the page by default. */
  alignment:
    | "left"
    | "right"
    | "center"
    | "top-left"
    | "top-right"
    | "top-center"
    | "bottom-left"
    | "bottom-right"
    | "bottom-center";
  /**
   * Offset of the initials from the edge of the page (in pixels). The offset is from the top or bottom of the page, depending on what has been defined in the `alignment` attribute.
   * @min 0
   * @example 10
   */
  y: number;
}

/** Seal */
export interface CreateElectronicSealFieldSealPayload {
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
  /** @maxLength 200 */
  reason?: HumanName | null;
}

/** Read Only Text */
export interface CreateElectronicSealFieldReadOnlyTextPayload {
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

/**
 * Time zone of the dates and times displayed in emails, the Signature Request expiration date, and the PDF Audit Trail. Format: tz database. Default is set to Europe/Paris.
 * @default "Europe/Paris"
 * @example "Europe/Paris"
 */
export type SignatureRequestTimeZone = string;

/**
 * From Scratch
 * Create a signer from info
 */
export interface SignatureRequestSignerFromInfoInput {
  /** create new signer */
  info: SignatureRequestSignerFromInfoInputInfo;
  fields?: FieldsInput[];
  /** @default "electronic_signature" */
  signature_level:
    | "electronic_signature"
    | "advanced_electronic_signature"
    | "qualified_electronic_signature";
  signature_authentication_mode?: "otp_email" | "otp_sms" | "no_otp" | null;
  redirect_urls?: SignatureRequestSignerFromInfoInputRedirectUrls;
  custom_text?: SignatureRequestSignerFromInfoInputCustomText;
  /** Defines the way the Signer's Identity Documents will be uploaded for Verification. If set to `true`, `signature_level`should be equal to `advanced_electronic_signature` and `delivery_mode` set to `none`. */
  pre_identity_verification_required?: boolean;
}

/**
 * From Existing User
 * Create a signer from a user
 */
export interface SignatureRequestSignerFromUserIdInput {
  /**
   * Create signer from an existing user
   * @format uuid
   * @example "8b6ed2f3-244f-487a-baa1-bbe4f51c8744"
   */
  user_id: string;
  fields?: FieldsInput[];
  /** @default "electronic_signature" */
  signature_level:
    | "electronic_signature"
    | "advanced_electronic_signature"
    | "qualified_electronic_signature";
  signature_authentication_mode?: "otp_email" | "otp_sms" | "no_otp" | null;
  redirect_urls?: SignatureRequestSignerFromInfoInputRedirectUrls;
  custom_text?: SignatureRequestSignerFromInfoInputCustomText;
  /** Defines the way the Signer's Identity Documents will be uploaded for Verification. If set to `true`, `signature_level`should be equal to `advanced_electronic_signature` and `delivery_mode` set to `none`. */
  pre_identity_verification_required?: boolean;
}

/**
 * From Existing Contact
 * Create signer from a contact
 */
export interface SignatureRequestSignerFromContactIdInput {
  /**
   * Create signer from an existing contact
   * @format uuid
   * @example "ddecfb85-8a45-4254-b940-6171b8df0a90"
   */
  contact_id: string;
  fields?: FieldsInput[];
  /** @default "electronic_signature" */
  signature_level:
    | "electronic_signature"
    | "advanced_electronic_signature"
    | "qualified_electronic_signature";
  signature_authentication_mode?: "otp_email" | "otp_sms" | "no_otp" | null;
  redirect_urls?: SignatureRequestSignerFromInfoInputRedirectUrls;
  custom_text?: SignatureRequestSignerFromInfoInputCustomText;
  /** Defines the way the Signer's Identity Documents will be uploaded for Verification. If set to `true`, `signature_level`should be equal to `advanced_electronic_signature` and `delivery_mode` set to `none`. */
  pre_identity_verification_required?: boolean;
}

/** SignatureRequest_EmailNotification */
export type SignatureRequestEmailNotification = {
  sender?: SignatureRequestEmailNotificationSender;
  /**
   * @deprecated
   * @maxLength 2000
   * @example "Please sign these documents as soon as possible."
   */
  custom_note?: string | null;
  custom_text?: SignatureRequestEmailNotificationCustomText;
};

/**
 * From Scratch
 * Create a placeholder signer substitute from info
 */
export interface SignatureRequestPlaceholderSignerSubstituteFromInfoInput {
  /**
   * @minLength 1
   * @maxLength 64
   * @example "Employee"
   */
  label: string;
  /** Create new signer */
  info: SignatureRequestPlaceholderSignerSubstituteFromInfoInputInfo;
  /** @default "electronic_signature" */
  signature_level?:
    | "electronic_signature"
    | "advanced_electronic_signature"
    | "qualified_electronic_signature";
  signature_authentication_mode?: "otp_email" | "otp_sms" | "no_otp" | null;
  redirect_urls?: NewSignerFromScratchRedirectUrls;
  custom_text?: SignatureRequestSignerFromInfoInputCustomText;
  /** Override the delivery mode of the Signature Request for this Signer */
  delivery_mode?: SignerDeliveryMode;
}

/**
 * From Existing User
 * Create a placeholder signer substitute from a user
 */
export interface SignatureRequestPlaceholderSignerSubstituteFromUserIdInput {
  /**
   * @minLength 1
   * @maxLength 64
   * @example "Employee"
   */
  label: string;
  /**
   * Create signer from an existing user
   * @format uuid
   * @example "8b6ed2f3-244f-487a-baa1-bbe4f51c8744"
   */
  user_id: string;
  /** @default "electronic_signature" */
  signature_level?:
    | "electronic_signature"
    | "advanced_electronic_signature"
    | "qualified_electronic_signature";
  signature_authentication_mode?: "otp_email" | "otp_sms" | "no_otp" | null;
  redirect_urls?: NewSignerFromScratchRedirectUrls;
  custom_text?: SignatureRequestSignerFromInfoInputCustomText;
  /** Override the delivery mode of the Signature Request for this Signer */
  delivery_mode?: SignerDeliveryMode;
}

/**
 * From Existing Contact
 * Create a placeholder signer substitute from a contact
 */
export interface SignatureRequestPlaceholderSignerSubstituteFromContactIdInput {
  /**
   * @minLength 1
   * @maxLength 64
   * @example "Employee"
   */
  label: string;
  /**
   * Create signer from an existing contact
   * @format uuid
   * @example "ddecfb85-8a45-4254-b940-6171b8df0a90"
   */
  contact_id: string;
  /** @default "electronic_signature" */
  signature_level?:
    | "electronic_signature"
    | "advanced_electronic_signature"
    | "qualified_electronic_signature";
  signature_authentication_mode?: "otp_email" | "otp_sms" | "no_otp" | null;
  redirect_urls?: NewSignerFromScratchRedirectUrls;
  custom_text?: SignatureRequestSignerFromInfoInputCustomText;
  /** Override the delivery mode of the Signature Request for this Signer */
  delivery_mode?: SignerDeliveryMode;
}

/** Create a placeholder read_only_text field substitute */
export interface SignatureRequestPlaceholderReadOnlyTextFieldSubstituteInput {
  /**
   * @minLength 1
   * @maxLength 64
   * @example "Employee"
   */
  label: string;
  /**
   * @minLength 1
   * @maxLength 5000
   * @example "This is my read_only_text"
   */
  text: string;
}

export interface EmbeddedSignerWithSignatureLink {
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
   * @example "2024-01-18T22:59:00Z"
   */
  signature_link_expiration_date: string | null;
}

export interface ApproverToNotify {
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
   * @example "2024-01-18T22:59:00Z"
   */
  approval_link_expiration_date: string | null;
}

/** Custom Text */
export interface CustomText {
  /**
   * @minLength 1
   * @maxLength 150
   */
  request_subject: string | null;
  /**
   * @minLength 1
   * @maxLength 2000
   */
  request_body: string | null;
  /**
   * @minLength 1
   * @maxLength 150
   */
  reminder_subject: string | null;
  /**
   * @minLength 1
   * @maxLength 2000
   */
  reminder_body: string | null;
}

/**
 * Font
 * @example {"family":"Inconsolata","color":"#F53D1E","size":12,"variants":{"bold":true,"italic":false}}
 */
export interface Font {
  family: FontFamily;
  /** @pattern ^#([a-f0-9]{6}|[A-F0-9]{6})$ */
  color: string;
  /**
   * @min 7
   * @max 96
   */
  size: number;
  variants: FontVariants;
}

/**
 * Font
 * If set, **width** and **height** properties become required. Otherwise, if not set or null, the default font will be used.
 * @example {"family":"Inconsolata","color":"#F53D1E","size":12,"variants":{"bold":true,"italic":false}}
 */
export type CreateFieldFont = {
  family: FontFamily;
  /**
   * @default "#000000"
   * @pattern ^#([a-f0-9]{6}|[A-F0-9]{6})$
   */
  color: string;
  /**
   * @min 7
   * @max 96
   * @default 12
   */
  size: number;
  variants: FontVariants;
} | null;

/**
 * Font
 * If set, **width** and **height** properties become required. Otherwise, if not set the font will not be changed, and if set to null the default font will be used.
 * @example {"family":"Inconsolata","color":"#F53D1E","size":12,"variants":{"bold":true,"italic":false}}
 */
export type UpdateFieldFont = {
  family: FontFamily;
  /**
   * @default "#000000"
   * @pattern ^#([a-f0-9]{6}|[A-F0-9]{6})$
   */
  color: string;
  /**
   * @min 8
   * @max 22
   * @default 12
   */
  size: number;
  variants: FontVariants;
} | null;

/** SMS Notification */
export interface SmsNotification {
  otp_message: OtpMessage;
}

/** Email Notification */
export interface EmailNotification {
  /**
   * Disabled email notifications
   * List of disabled email notifications
   */
  disabled: (
    | "signer.signature_request_canceled_due_to_an_error.signer_who_has_not_signed"
    | "signer.signature_request_canceled_due_to_an_error.signer_who_has_already_signed"
    | "signer.signature_request_canceled_by_sender.signer_who_has_not_signed"
    | "signer.signature_request_canceled_by_sender.signer_who_has_already_signed"
    | "signer.signature_request_done.signature_request_contains_one_signer"
    | "signer.signature_request_done.signature_request_contains_multiple_signers"
    | "signer.signature_request_with_multiple_signers_signed.signed_by_a_signer"
    | "signer.signature_request_updated.new_expiration_date"
    | "signer.signature_request_updated_by_sender.new_signer_details"
    | "signer.signature_request_signature_requested.first_notification"
    | "signer.signature_request_signature_requested.reminder_to_sign"
  )[];
}

export type FieldsInput =
  | Signature2
  | Mention2
  | Text2
  | Checkbox2
  | RadioGroup2;

/** SMS Notification */
export type SmsNotification1 = {
  otp_message: OTPMessage;
} | null;

/** Email Notification */
export type EmailNotification1 = {
  /** Disabled Email Notification */
  disabled: (
    | "signer.signature_request_canceled_due_to_an_error.signer_who_has_not_signed"
    | "signer.signature_request_canceled_due_to_an_error.signer_who_has_already_signed"
    | "signer.signature_request_canceled_by_sender.signer_who_has_not_signed"
    | "signer.signature_request_canceled_by_sender.signer_who_has_already_signed"
    | "signer.signature_request_done.signature_request_contains_one_signer"
    | "signer.signature_request_done.signature_request_contains_multiple_signers"
    | "signer.signature_request_with_multiple_signers_signed.signed_by_a_signer"
    | "signer.signature_request_updated.new_expiration_date"
    | "signer.signature_request_updated_by_sender.new_signer_details"
    | "signer.signature_request_signature_requested.first_notification"
    | "signer.signature_request_signature_requested.reminder_to_sign"
  )[];
} | null;

/**
 * IdentityVideoDocument
 * Includes all information that has been extracted from the document, as well as the best images of the document.
 */
export type IdentityVideoDocument = {
  /**
   * Full name of the document holder as it appears on the identity document
   * @maxLength 510
   * @example "David Vincent"
   */
  full_name: string | null;
  /**
   * Date of birth on the document
   * @format date
   * @example "2024-01-18"
   */
  born_on: string | null;
  /** Type of document. */
  type: "driver_license" | "id_card" | "passport" | "residence_permit" | null;
  /**
   * @format ISO 3166-1 alpha-2
   * @pattern ^[A-Z]{2}$
   * @example "US"
   */
  issuing_country_code: string | null;
};

/**
 * All Events
 * Allows you to subscribe to all events at once.
 */
export type WebhookWildcardSubscribedEvent = "*"[];

/**
 * Specific Webhook Events
 * List of specific webhook events to subscribe to.
 */
export type WebhookSubscribedEvents = (
  | "signature_request.declined"
  | "signature_request.canceled"
  | "signature_request.done"
  | "signature_request.activated"
  | "signature_request.reminder_executed"
  | "signature_request.expired"
  | "signature_request.approved"
  | "signature_request.deleted"
  | "signature_request.permanently_deleted"
  | "signature_request.reactivated"
  | "signer.declined"
  | "signer.done"
  | "signer.notified"
  | "signer.link_opened"
  | "signer.identification_failed"
  | "signer.identification_succeeded"
  | "signer.identification_blocked"
  | "signer.sender_contacted"
  | "signer.error"
  | "contact.created"
  | "approver.notified"
  | "approver.approved"
  | "approver.rejected"
  | "electronic_seal.error"
  | "electronic_seal.done"
  | "user.completed"
  | "verification.identity_video.done"
  | "verification.bank_account.done"
  | "verification.bank_account_connection.done"
  | "verification.bank_account_lookup.done"
  | "verification.identity_document.done"
  | "verification.company.done"
  | "verification.watchlist.done"
  | "verification.proof_of_address.done"
)[];

/**
 * All Scopes
 * Wildcard scope to subscribe to all scopes.
 */
export type WebhookWildcardScope = "*"[];

/**
 * Specific Scopes
 * One or multiple specific scopes to subscribe.
 */
export type WebhookScopes = ("app" | "public_api" | "connector_zapier_api")[];

/**
 * All Workspaces
 * Allows you to select all Workspaces.
 */
export type WebhookWildcardWorkspace = "*"[];

/**
 * Workspace UUIDs
 * List of Workspace UUIDs.
 */
export type WebhookWorkspaces = UUID[];

/** SignatureRequest_Sender */
export interface SignatureRequestEmailNotificationSender {
  type?: "organization" | "workspace" | "custom" | "user";
  /**
   * To use in association with sender type custom to precise the name
   * @minLength 1
   */
  custom_name?: string | null;
}

/** FontVariants */
export interface FontVariants {
  /** @default false */
  italic: boolean;
  /** @default false */
  bold: boolean;
}

/** OTP Message */
export interface OtpMessage {
  /**
   * Custom text contained is the one-time password SMS sent to the Signer. This feature is available from SCALE plan, and disabled by default. Please contact [customer support](https://yousign.app/auth/workspace/help) to request an activation.
   * @minLength 1
   */
  custom_text: string | null;
}

export type GetBankAccountVerifications200ResponseDataInner =
  LegacyBankAccountVerification & {
    /**
     * @format date-time
     * @example "2024-01-18T22:59:00Z"
     */
    created_at: string;
    /**
     * @format date-time
     * @example "2024-01-18T22:59:00Z"
     */
    updated_at: string;
  };

export interface GetBankAccountVerifications200Response {
  /** Cursor based pagination */
  meta?: Pagination;
  data?: GetBankAccountVerifications200ResponseDataInner[];
}

export interface GetBankAccountVerificationsBankAccountVerificationId200ResponseAllOfExtractedFromDocument {
  /** International Bank Account Number (IBAN) */
  iban: NullableIBAN;
  /** Business Identifier Codes (BIC) */
  bic: NullableBIC;
}

export type GetBankAccountVerificationsBankAccountVerificationId200Response =
  LegacyBankAccountVerification & {
    extracted_from_document: GetBankAccountVerificationsBankAccountVerificationId200ResponseAllOfExtractedFromDocument;
    /**
     * Indicates if the personal data extracted from the document has been anonymized.
     * If set to `true`, the personal data has been anonymized and the `extracted_from_document` fields will be NULL.
     */
    personal_data_anonymized: boolean;
  };

export interface GetConsumptionAddon200Response {
  data: AddonConsumption[];
}

export interface GetConsumptionDetail200Response {
  /** Cursor based pagination */
  meta?: PaginationWithUpdatedAt;
  data?: DetailedConsumption[];
}

export interface GetContacts200Response {
  /** Cursor based pagination */
  meta?: Pagination;
  data?: Contact[];
}

export interface GetCustomExperiences200Response {
  /** Cursor based pagination */
  meta?: Pagination;
  data?: CustomExperience[];
}

/** Upload a file */
export interface PatchCustomExperienceLogoRequest {
  /**
   * @format binary
   * @example "Binary file"
   */
  file: File;
}

export interface ListElectronicSealImages200Response {
  /** Cursor based pagination */
  meta?: Pagination;
  data?: ElectronicSealImage[];
}

export type GetIdDocumentVerifications200ResponseDataInner =
  LegacyIdDocumentVerification & {
    /**
     * @format date-time
     * @example "2024-01-18T22:59:00Z"
     */
    created_at: string;
    /**
     * @format date-time
     * @example "2024-01-18T22:59:00Z"
     */
    updated_at: string;
  };

export interface GetIdDocumentVerifications200Response {
  /** Cursor based pagination */
  meta?: Pagination;
  data?: GetIdDocumentVerifications200ResponseDataInner[];
}

export type CreateIdDocumentVerificationRequest =
  | LegacyCreateIdDocumentVerification
  | LegacyCreateIdDocumentVerificationWithoutName;

/** Machine Readable Zone content */
export interface GetIdDocumentVerification200ResponseAllOfExtractedFromDocumentMrz {
  /**
   * MRZ line 1
   * @example "IDFRASIAGRA<<<<<<<<<<<<<<<<<<<133039"
   */
  line1: string | null;
  /**
   * MRZ line 2
   * @example "1002133008071GREGOIRE<<REMY8110228M4"
   */
  line2: string | null;
  /**
   * MRZ line 3
   * @example "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"
   */
  line3: string | null;
}

export interface GetIdDocumentVerification200ResponseAllOfExtractedFromDocument {
  /**
   * The holder first name
   * @example "John"
   */
  first_name: string | null;
  /**
   * The holder birth name
   * @example "Doe"
   */
  birth_name: string | null;
  /**
   * The holder last name
   * @example "Doe"
   */
  last_name: string | null;
  /**
   * Birth date on the document
   * @format date
   * @pattern ^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$
   * @example "2024-01-18"
   */
  birth_date: string | null;
  /**
   * The holder birth place
   * @example "Paris"
   */
  birth_place: string | null;
  /**
   * The holder gender. "m" Masculine, "f" Feminine, "x" Non defined.
   * @example "f"
   */
  gender: "f" | "m" | "x" | null;
  /**
   * The holder postal address
   * @example "13 RUE SAINT MARCELIN
   * MARSEILLE 10E (13)"
   */
  postal_address: string | null;
  /**
   * The document type
   * @example "id_card"
   */
  document_type:
    | "id_card"
    | "passport"
    | "residence_permit"
    | "driver_license"
    | "ita_ts_cns"
    | null;
  /**
   * Issuance country code (2 upper case letters)
   * @format ISO 3166-1 alpha-2
   * @pattern ^[A-Za-z]{2}$
   * @example "US"
   */
  document_issuing_country: string | null;
  /**
   * Document issuance date
   * @format date
   * @pattern ^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$
   * @example "2024-01-18"
   */
  document_issuing_date: string | null;
  /**
   * Document legal expiration date
   * @format date
   * @pattern ^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$
   * @example "2024-01-18"
   */
  document_expiration_date: string | null;
  /**
   * Document identifier number (may contain letters)
   * @example "X4RTBPFW4"
   */
  document_number: string | null;
  /** Machine Readable Zone content */
  mrz: GetIdDocumentVerification200ResponseAllOfExtractedFromDocumentMrz;
}

export type GetIdDocumentVerification200Response =
  LegacyIdDocumentVerification & {
    extracted_from_document: GetIdDocumentVerification200ResponseAllOfExtractedFromDocument;
    /**
     * Indicates if the personal data extracted from the document has been anonymized.
     * If set to `true`, the personal data has been anonymized and the `extracted_from_document` fields will be NULL.
     */
    personal_data_anonymized: boolean;
  };

export interface GetLabels200Response {
  /** Cursor based pagination */
  meta?: Pagination;
  data?: Label[];
}

export interface GetSignatureRequests200Response {
  /** Cursor based pagination */
  meta?: Pagination;
  data?: SignatureRequestInList[];
}

export interface PostSignatureRequestsSignatureRequestIdCancelRequest {
  reason: "contractualization_aborted" | "errors_in_document" | "other";
  /** @maxLength 500 */
  custom_note?: string | null;
}

export interface GetSignatureRequestsSignatureRequestIdSignerConsentRequests200Response {
  data?: SignerConsentRequest[];
}

export interface GetSignatureRequestsSignatureRequestIdSignerDocumentRequests200Response {
  data?: SignerDocumentRequest[];
}

export type GetSignatureRequestsSignatureRequestIdDocumentsDocumentIdFields200ResponseDataInner =

    | FieldSignature
    | FieldText
    | FieldMention
    | FieldCheckbox
    | FieldRadioButtonGroup
    | FieldReadOnlyText;

export interface GetSignatureRequestsSignatureRequestIdDocumentsDocumentIdFields200Response {
  /** Cursor based pagination */
  meta?: Pagination;
  data?: GetSignatureRequestsSignatureRequestIdDocumentsDocumentIdFields200ResponseDataInner[];
}

export interface PostSignatureRequestsSignatureRequestIdDocumentsDocumentIdReplaceRequest {
  /**
   * Accepted formats: PDF, DOCX, JPEG, JPG and PNG. All files are converted to PDF upon upload.
   * If the Document nature is signable_document, only PDF or DOCX file formats are allowed.
   * @format binary
   */
  file: File;
  /**
   * The document name. If not set, will use the uploaded document name. This value should contain any characters except "\", "/" and can\'t start and finish with a space.
   * @minLength 1
   * @maxLength 128
   * @pattern ^(?!\s)[^\/\\]+(?<!\s)$
   * @example "file1"
   */
  name?: string;
}

/** A list of Followers added to the Signature Request. */
export interface GetSignatureRequestsSignatureRequestIdFollowers200Response {
  data?: Follower[];
}

export interface GetSignatureRequestsIdLabels200Response {
  /** Cursor based pagination */
  meta?: Pagination;
  data?: SignatureRequestLabel[];
}

export interface PostSignatureRequestsSignatureRequestIdReactivateRequest {
  /**
   * Due date of the Signature Request (yyyy-mm-dd).
   * The date cannot be in the past and cannot be more than one year after initiation.
   * @format date
   * @pattern ^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$
   */
  expiration_date: string;
}

export interface GetSignatureRequestsSignatureRequestIdSignersSignerIdDocuments200Response {
  /** Cursor based pagination */
  meta?: Pagination;
  data?: SignerDocument[];
}

export interface GetTemplates200Response {
  /** Cursor based pagination */
  meta?: Pagination;
  data?: Template[];
}

export interface GetUsers200Response {
  /** Cursor based pagination */
  meta?: Pagination;
  data?: User[];
}

export interface GetInvitations200Response {
  /** Cursor based pagination */
  meta?: Pagination;
  data?: UserInvitation[];
}

export interface GetVerificationsBankAccountConnections200Response {
  /** Cursor based pagination */
  meta?: Pagination;
  data?: BankAccountConnectionMeta[];
}

export type PostVerificationsBankAccountConnectionsRequest =
  | InitiateBankAccountConnection
  | InitiateBankAccountConnectionWithLegalPerson;

export interface GetVerificationsBankAccountLookups200Response {
  /** Cursor based pagination */
  meta?: Pagination;
  data?: BankAccountLookupMeta[];
}

export type PostVerificationsBankAccountLookupsRequest =
  | InitiateBankAccountLookupWithNaturalPerson
  | InitiateBankAccountLookupWithLegalPerson;

export interface GetVerificationsBankAccounts200Response {
  /** Cursor based pagination */
  meta?: Pagination;
  data?: BankAccountMeta[];
}

export type PostVerificationsBankAccountsRequest =
  | InitiateBankAccount
  | InitiateBankAccountWithLegalPerson
  | InitiateBankAccountWithNaturalPerson;

export interface GetVerificationsCompanies200Response {
  /** Cursor based pagination */
  meta?: Pagination;
  data?: CompanyMeta[];
}

export interface GetVerificationsIdentityDocuments200Response {
  /** Cursor based pagination */
  meta?: Pagination;
  data?: IdentityDocumentMeta[];
}

export type PostVerificationsIdentityDocumentsRequest =
  | InitiateIdentityDocument
  | InitiateIdentityDocumentWithoutName;

export interface GetVerificationsIdentityVideos200Response {
  /** Cursor based pagination */
  meta?: Pagination;
  data?: IdentityVideoMeta[];
}

export interface GetVerificationsProofsOfAddress200Response {
  /** Cursor based pagination */
  meta?: Pagination;
  data?: ProofOfAddressMeta[];
}

export interface GetVerificationsWatchlists200Response {
  /** Cursor based pagination */
  meta?: Pagination;
  data?: WatchlistMeta[];
}

export interface GetWorkspaces200Response {
  /** Cursor based pagination */
  meta?: Pagination;
  data?: Workspace[];
}

export interface ConsumptionAppQualifiedElectronicSignatureIdentificationModeIdentityVerification {
  /** @min 0 */
  succeeded: number;
  /** @min 0 */
  rejected: number;
}

export interface ConsumptionAppQualifiedElectronicSignatureIdentificationMode {
  identity_verification: ConsumptionAppQualifiedElectronicSignatureIdentificationModeIdentityVerification;
  /** @min 0 */
  saved_identity: number;
}

export interface ConsumptionApp {
  /** @min 0 */
  electronic_signature: number;
  /** @min 0 */
  advanced_electronic_signature: number;
  /** @min 0 */
  advanced_electronic_signature_with_qualified_certificate: number;
  qualified_electronic_signature_identification_mode: ConsumptionAppQualifiedElectronicSignatureIdentificationMode;
}

export interface ConsumptionApi {
  /** @min 0 */
  electronic_signature: number;
  /** @min 0 */
  advanced_electronic_signature: number;
  /** @min 0 */
  advanced_electronic_signature_with_qualified_certificate: number;
  /** @min 0 */
  electronic_seal?: number;
  /** @min 0 */
  advanced_electronic_seal?: number;
  qualified_electronic_signature_identification_mode: ConsumptionAppQualifiedElectronicSignatureIdentificationMode;
}

export interface CustomExperienceRedirectUrls {
  /**
   * @format uri
   * @example "https://example.com/success"
   */
  success: string | null;
  /**
   * @format uri
   * @example "https://example.com/error"
   */
  error: string | null;
  /**
   * @format uri
   * @example "https://example.com/decline"
   */
  decline: string | null;
}

export type CreateCustomExperienceRedirectUrls = {
  /**
   * @format uri
   * @minLength 1
   * @maxLength 255
   * @example "https://example.com/success"
   */
  success?: string | null;
  /**
   * @format uri
   * @minLength 1
   * @maxLength 255
   * @example "https://example.com/error"
   */
  error?: string | null;
  /**
   * @format uri
   * @minLength 1
   * @maxLength 255
   * @example "https://example.com/decline"
   */
  decline?: string | null;
};

export type UpdateCustomExperienceRedirectUrls = {
  /**
   * @format uri
   * @minLength 1
   * @maxLength 255
   * @example "https://example.com/success"
   */
  success: string | null;
  /**
   * @format uri
   * @minLength 1
   * @maxLength 255
   * @example "https://example.com/error"
   */
  error: string | null;
  /**
   * @format uri
   * @minLength 1
   * @maxLength 255
   * @example "https://example.com/decline"
   */
  decline: string | null;
};

export interface DocumentInitialsPerPageInner {
  /**
   * Page number.
   * @min 1
   */
  page: number;
  /**
   * Y-axis position of the initials on the page.
   * @min 0
   */
  y: number;
}

export type DocumentInitials = {
  /** Alignment of the initials on the document’s pages. */
  alignment: "left" | "center" | "right";
  /**
   * Y-axis position of the initials on the first page of the document.
   * @min 0
   */
  y: number;
  per_page: DocumentInitialsPerPageInner[];
} | null;

/**
 * From Electronic Seal Document
 * Create an Electronic Seal Document from a previously sealed document.
 */
export interface FromElectronicSealDocument {
  /**
   * Id of the Electronic Seal Document. The Electronic Seal must be done to use its Electronic Seal Document.
   * @format uuid
   * @example "672a5a0b-ac65-407e-9da9-d34402bae974"
   */
  electronic_seal_document_id: string;
}

/**
 * From Signature Request Document
 * Create an Electronic Seal Document from a Signature Request Document already signed.
 */
export interface FromSignatureRequestDocument {
  /**
   * Id of the Signature Request Document, the Signature Request must be Done.
   * @format uuid
   * @example "672a5a0b-ac65-407e-9da9-d34402bae974"
   */
  signature_request_document_id: string;
}

export type CreateElectronicSealPayloadFieldsInner =
  | CreateElectronicSealFieldSealPayload
  | CreateElectronicSealFieldReadOnlyTextPayload;

export type SignatureRequestInListReminderSettings = {
  /** @format int32 */
  interval_in_days: 1 | 2 | 7 | 14;
  /**
   * @format int32
   * @min 1
   * @max 10
   */
  max_occurrences: number;
} | null;

export interface SignatureRequestInListSignersInner {
  id: string;
  status:
    | "initiated"
    | "declined"
    | "notified"
    | "verified"
    | "processing"
    | "consent_given"
    | "signed"
    | "aborted"
    | "error";
}

export interface SignatureRequestInListApproversInner {
  id: string;
  status: "initiated" | "notified" | "approved" | "rejected";
}

export interface SignatureRequestInListDocumentsInner {
  id: string;
  nature: "attachment" | "signable_document";
}

export type SignatureRequestInListSender = {
  id?: string;
  email?: string;
} | null;

/** Enable automatic reminders for pending signers. */
export type CreateSignatureRequestReminderSettings = {
  /** @format int32 */
  interval_in_days: 1 | 2 | 7 | 14;
  /**
   * @format int32
   * @min 1
   * @max 10
   * @example 5
   */
  max_occurrences: number;
} | null;

/** Create signers */
export type CreateSignatureRequestSignersInner =
  | SignatureRequestSignerFromInfoInput
  | SignatureRequestSignerFromUserIdInput
  | SignatureRequestSignerFromContactIdInput;

export type CreateSignatureRequestTemplatePlaceholdersSignersInner =
  | SignatureRequestPlaceholderSignerSubstituteFromInfoInput
  | SignatureRequestPlaceholderSignerSubstituteFromUserIdInput
  | SignatureRequestPlaceholderSignerSubstituteFromContactIdInput;

/** When creating a signature request from a template, all substituting data for placeholders defined in the given template. */
export type CreateSignatureRequestTemplatePlaceholders = {
  /** Substituting data for placeholder signers. */
  signers?: CreateSignatureRequestTemplatePlaceholdersSignersInner[];
  /** Substituting data for placeholder read_only_text fields. */
  read_only_text_fields?: SignatureRequestPlaceholderReadOnlyTextFieldSubstituteInput[];
} | null;

export interface SignatureRequestEmailNotificationSender {
  type: "organization" | "workspace" | "user" | "custom";
  custom_name: string | null;
}

export interface SignatureRequestEmailNotification {
  sender: SignatureRequestEmailNotificationSender;
  /**
   * @maxLength 2000
   * @example "Please sign these documents as soon as possible."
   */
  custom_note: string | null;
}

export type SignatureRequestDeclineInformation = {
  /**
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  signer_id?: string;
  reason?: string;
  /**
   * @format date-time
   * @example "2024-01-18T22:59:00Z"
   */
  declined_at?: string;
} | null;

export type UpdateSignatureRequestReminderSettings = {
  /** @format int32 */
  interval_in_days: 1 | 2 | 7 | 14;
  /**
   * @format int32
   * @min 1
   * @max 10
   * @example 5
   */
  max_occurrences: number;
} | null;

export interface SignatureRequestActivatedDocumentsInner {
  id: string;
  nature: string;
}

export interface NewApproverFromScratchInfo {
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
   * @example "+41446667700"
   */
  phone_number?: string | null;
  /** Locale settings used for communication. */
  locale: Locale;
}

/**
 * New Approver From Scratch
 * Create a new Approver from scratch.
 */
export interface NewApproverFromScratch {
  info: NewApproverFromScratchInfo;
}

/**
 * New Approver From Existing User
 * Create a new Approver from an existing User.
 */
export interface NewApproverFromExistingUser {
  /**
   * @format uuid
   * @example "8b6ed2f3-244f-487a-baa1-bbe4f51c8744"
   */
  user_id: string;
}

/**
 * New Approver From Existing Contact
 * Create a new Approver from an existing Contact.
 */
export interface NewApproverFromExistingContact {
  /**
   * @format uuid
   * @example "8b6ed2f3-244f-487a-baa1-bbe4f51c8744"
   */
  contact_id: string;
}

/**
 * New Approver From Existing Signer
 * Create a new Approver from an existing Signer.
 */
export interface NewApproverFromExistingSigner {
  /**
   * @format uuid
   * @example "8b6ed2f3-244f-487a-baa1-bbe4f51c8744"
   */
  signer_id: string;
}

export interface ApproverInfo {
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
  /** Locale settings used for communication. */
  locale: Locale;
}

export type UpdateApproverInfo = {
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
   * @example "+41446667700"
   */
  phone_number?: string;
  /** Locale settings used for communication. */
  locale?: Locale;
} | null;

/** Settings relative to Signer Consent Request's type */
export interface SignerConsentRequestSettings {
  /**
   * Text associated to the checkbox or text_to_copy
   * @minLength 1
   * @maxLength 1000
   * @example "I agree with..."
   */
  text: string;
}

/** Settings relative to Signer Consent Request's type */
export interface CreateSignerConsentRequestSettings {
  /**
   * Text associated to the checkbox or the text_to_copy.
   * This property cannot start or end with whitespace, does not allow html tags or email.
   * This property cannot contain url for text_to_copy type.
   * @minLength 1
   * @maxLength 1000
   * @example "I agree with..."
   */
  text: string;
}

export interface FieldRadioButtonGroupRadiosInner {
  /**
   * Radio button's name.
   * @minLength 1
   * @maxLength 128
   */
  name: string | null;
  /**
   * @format int32
   * @min 0
   * @max 32767
   */
  x: number;
  /**
   * @format int32
   * @min 0
   * @max 32767
   */
  y: number;
  /**
   * The size determines both the width and height of the radio button.
   * @format int32
   * @min 8
   * @max 240
   */
  size: number;
  /** Signer has checked the radio button. */
  checked: boolean;
}

/** Signature */
export interface Signature {
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  signer_id: string;
  type: "signature";
  /**
   * @min 1
   * @example 1
   */
  page: number;
  /**
   * @min 0
   * @max 32767
   * @example 200
   */
  x: number;
  /**
   * @min 0
   * @max 32767
   * @example 400
   */
  y: number;
  /**
   * Default value is 37
   * @min 37
   * @max 1000
   * @example 37
   */
  height?: number;
  /**
   * Default value is 85
   * @min 85
   * @max 2000
   * @example 150
   */
  width?: number;
  /**
   * Provide extra context to explain why the Document is being signed. Once the Document is signed, the custom reason is stored in the Audit Trail and is included in the signature certificate.
   * The default value is: "Signed by [Signer first name] [Signer last name]".
   * @maxLength 150
   * @example "Signed by John Doe"
   */
  reason?: HumanName | null;
}

/** Mention */
export interface Mention {
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  signer_id: string;
  type: "mention";
  /**
   * @min 1
   * @example 1
   */
  page: number;
  /**
   * @min 0
   * @max 32767
   * @example 200
   */
  x: number;
  /**
   * @min 0
   * @max 32767
   * @example 400
   */
  y: number;
  /**
   * If not set, the width is automatically calculated with the mention length.
   * @min 24
   * @example 250
   */
  width?: number;
  /**
   * The height must be calculated using the formula: "height = number_of_lines \* font_size \* line_height", where the line height is always set to 1.5.
   * @min 1
   * @example 150
   */
  height?: number | null;
  /**
   * Content of the Mention.
   * You can use dynamic tags when creating the Mention:
   * • `%date%` will display the current date when the Signer sign the Signature Request (eg. "24-03-2025")
   * • `%datetime%` will display the current date and time when the Signer signs the Signature Request (eg. "24-03-2025 10:30 UTC+0")
   * @minLength 1
   * @maxLength 255
   * @example "Signed on %date%"
   */
  mention: string;
  /** If set, **width** and **height** properties become required. Otherwise, if not set or null, the default font will be used. */
  font?: CreateFieldFont;
  /**
   * Name of the Field.
   * @minLength 1
   * @maxLength 128
   * @example "Mention 1"
   */
  name?: string | null;
}

/** Text */
export interface Text {
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  signer_id: string;
  type: "text";
  /**
   * @min 1
   * @example 1
   */
  page: number;
  /**
   * @min 0
   * @max 32767
   * @example 200
   */
  x: number;
  /**
   * @min 0
   * @max 32767
   * @example 400
   */
  y: number;
  /**
   * If not set, the width is automatically calculated with the max_length value
   * @min 24
   * @example 90
   */
  width?: number;
  /**
   * The height must be calculated using the formula: "height = number_of_lines \* font_size \* line_height", where the line height is always set to 1.5.
   * @min 1
   * @example 150
   */
  height?: number;
  /**
   * @min 1
   * @max 32767
   * @example 120
   */
  max_length: number;
  /**
   * If you don't want any question, you can give an empty string.
   * @maxLength 255
   * @example "What is your job title?"
   */
  question: string;
  /** @example "Your position in the company" */
  instruction?: string | null;
  /** @default false */
  optional?: boolean;
  /** If set, **width** and **height** properties become required. Otherwise, if not set or null, the default font will be used. */
  font?: CreateFieldFont;
  /**
   * Name of the Field.
   * @minLength 1
   * @maxLength 128
   * @example "Job Title"
   */
  name?: string | null;
  /**
   * If a default value is provided, the Field will be pre-filled with this value. The Signer can modify it before signing unless the Field is set to `read-only`.
   * @minLength 1
   * @maxLength 32767
   * @example "Software Engineer"
   */
  default_value?: string | null;
  /**
   * If set to `true`, the Signer cannot modify the Field and the default value (if provided) will remain unchanged.
   * @default false
   */
  read_only?: boolean;
}

/** Checkbox */
export interface Checkbox {
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  signer_id: string;
  type: "checkbox";
  /**
   * @min 1
   * @example 1
   */
  page: number;
  /**
   * @min 0
   * @max 32767
   * @example 200
   */
  x: number;
  /**
   * @min 0
   * @max 32767
   * @example 400
   */
  y: number;
  /**
   * @min 8
   * @max 240
   * @default 24
   * @example 24
   */
  size?: number;
  /** @default false */
  optional?: boolean;
  /** @example "Checkbox 1" */
  name?: string | null;
  /** @default false */
  checked?: boolean;
  /**
   * If set to `true`, the checkbox cannot be modified by the signer.
   * @default false
   */
  read_only?: boolean;
}

export interface RadioGroupRadiosInner {
  /**
   * Radio button's name
   * @minLength 1
   * @maxLength 128
   */
  name?: string | null;
  /**
   * @min 0
   * @max 32767
   * @example 200
   */
  x: number;
  /**
   * @min 0
   * @max 32767
   * @example 400
   */
  y: number;
  /**
   * @min 8
   * @max 240
   * @default 24
   * @example 24
   */
  size?: number;
  /**
   * Indicates whether the radio is initially checked (`true`) or unchecked (`false`).
   * @default false
   */
  default_checked?: boolean;
}

/** RadioGroup */
export interface RadioGroup {
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  signer_id: string;
  type: "radio_group";
  /**
   * @min 1
   * @example 1
   */
  page: number;
  /** @default false */
  optional?: boolean;
  /**
   * Radio group's name
   * @minLength 1
   * @maxLength 128
   * @example "radio_group_name_1"
   */
  name?: string | null;
  /**
   * If set to `true`, the radio button cannot be modified by the Signer.
   * @default false
   */
  read_only?: boolean;
  radios: RadioGroupRadiosInner[];
}

/** ReadOnlyText */
export interface ReadOnlyText {
  type: "read_only_text";
  /**
   * @min 1
   * @example 1
   */
  page: number;
  /**
   * @min 0
   * @max 32767
   * @example 200
   */
  x: number;
  /**
   * @min 0
   * @max 32767
   * @example 400
   */
  y: number;
  /**
   * If not set, the width is automatically calculated with the read only text length.
   * @min 24
   * @example 250
   */
  width?: number | null;
  /**
   * The height must be calculated using the formula: "height = number_of_lines \* font_size \* line_height", where the line height is always set to 1.5.
   * @min 1
   * @example 150
   */
  height?: number | null;
  /**
   * @maxLength 5000
   * @example "Order n°12345"
   */
  text: string;
  /** If set, **width** and **height** properties become required. Otherwise, if not set or null, the default font will be used. */
  font?: CreateFieldFont;
}

/** Signature */
export interface Signature1 {
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  signer_id?: string;
  /**
   * @min 1
   * @example 1
   */
  page?: number;
  /**
   * @min 0
   * @max 32767
   * @example 400
   */
  x?: number;
  /**
   * @min 0
   * @max 32767
   * @example 400
   */
  y?: number;
  /**
   * Default value is 37
   * @min 37
   * @max 1000
   * @example 50
   */
  height?: number;
  /**
   * Default value is 85
   * @min 85
   * @max 2000
   * @example 200
   */
  width?: number;
  /**
   * Provide extra context to explain why the Document is being signed. Once the Document is signed, the custom reason is stored in the Audit Trail and is included in the signature certificate.
   * The default value is: "Signed by [Signer first name] [Signer last name]".
   * @maxLength 150
   * @example "Signed by John Doe"
   */
  reason?: HumanName | null;
}

/** Mention */
export interface Mention1 {
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  signer_id?: string;
  /**
   * @min 1
   * @example 1
   */
  page?: number;
  /**
   * @min 0
   * @max 32767
   * @example 400
   */
  x?: number;
  /**
   * @min 0
   * @max 32767
   * @example 400
   */
  y?: number;
  /**
   * If not set, the width is automatically calculated with the read only text length.
   * @min 24
   * @example 200
   */
  width?: number;
  /**
   * The height must be 24 or a multiple of 15 greater than 24. If height is not provided, it will be calculated depending on the number of newlines in the read only text.
   * @min 24
   * @example 150
   */
  height?: number | null;
  /**
   * Content of the Mention.
   * You can use dynamic tags when creating the Mention:
   * • %date% will display the current date when the Signer sign the Signature Request (eg. "24-03-2025")
   * • %datetime% will display the current date and time when the Signer signs the Signature Request (eg. "24-03-2025 10:30 UTC+0")
   * @minLength 1
   * @maxLength 255
   * @example "Signed on %date%"
   */
  mention?: string;
  /** If set, **width** and **height** properties become required. Otherwise, if not set the font will not be changed, and if set to null the default font will be used. */
  font?: UpdateFieldFont;
  /**
   * Name of the Field.
   * @minLength 1
   * @maxLength 128
   * @example "Text 1"
   */
  name?: string | null;
}

/** Text */
export interface Text1 {
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  signer_id?: string;
  /**
   * @min 1
   * @example 1
   */
  page?: number;
  /**
   * @min 0
   * @max 32767
   * @example 400
   */
  x?: number;
  /**
   * @min 0
   * @max 32767
   * @example 400
   */
  y?: number;
  /**
   * If not set, the width is automatically calculated with the max_length value
   * @min 24
   * @example 200
   */
  width?: number;
  /**
   * The height must be 24 or a multiple of 15 greater than 24.
   * @min 24
   * @example 150
   */
  height?: number;
  /**
   * @min 1
   * @max 32767
   * @example 150
   */
  max_length?: number;
  /**
   * If you don't want any question, you can give an empty string.
   * @maxLength 255
   * @example "What is your job title?"
   */
  question?: string;
  /** @example "Your position in the company" */
  instruction?: string | null;
  /** @default false */
  optional?: boolean;
  /** If set, **width** and **height** properties become required. Otherwise, if not set the font will not be changed, and if set to null the default font will be used. */
  font?: UpdateFieldFont;
  /**
   * Name of the Field.
   * @minLength 1
   * @maxLength 128
   * @example "Job Title"
   */
  name?: string | null;
  /**
   * If a default value is provided, the Field will be pre-filled with this value. The Signer can modify it before signing unless the Field is set to `read-only`.
   * @minLength 1
   * @maxLength 32767
   * @example "Software Engineer"
   */
  default_value?: string | null;
  /**
   * If set to `true`, the Signer cannot modify the Field and the default value (if provided) will remain unchanged.
   * @default false
   */
  read_only?: boolean;
}

/** Checkbox */
export interface Checkbox1 {
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  signer_id?: string;
  /**
   * @min 1
   * @example 1
   */
  page?: number;
  /**
   * @min 0
   * @max 32767
   * @example 400
   */
  x?: number;
  /**
   * @min 0
   * @max 32767
   * @example 400
   */
  y?: number;
  /**
   * @min 8
   * @max 240
   * @default 24
   * @example 24
   */
  size?: number;
  /** @default false */
  optional?: boolean;
  /** @example "Checkbox 1" */
  name?: string | null;
  /** @default false */
  checked?: boolean;
  /**
   * If set to `true`, the checkbox cannot be modified by the Signer.
   * @default false
   */
  read_only?: boolean;
}

export interface RadioGroup1RadiosInner {
  /**
   * Radio button's name
   * @minLength 1
   * @maxLength 128
   * @example "My radio group"
   */
  name?: string | null;
  /**
   * @min 0
   * @max 32767
   * @example 400
   */
  x: number;
  /**
   * @min 0
   * @max 32767
   * @example 400
   */
  y: number;
  /**
   * @min 8
   * @max 240
   * @default 24
   * @example 24
   */
  size?: number;
}

/** RadioGroup */
export interface RadioGroup1 {
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  signer_id?: string;
  /**
   * @min 1
   * @example 1
   */
  page?: number;
  /** @default false */
  optional?: boolean;
  /**
   * Radio group's name
   * @minLength 1
   * @maxLength 128
   * @example "radio_group_name_1"
   */
  name?: string | null;
  /**
   * If set to `true`, the radio button cannot be modified by the Signer.
   * @default false
   */
  read_only?: boolean;
  radios?: RadioGroup1RadiosInner[];
}

/** ReadOnlyText */
export interface ReadOnlyText1 {
  /**
   * @min 1
   * @example 1
   */
  page?: number;
  /**
   * @min 0
   * @max 32767
   * @example 400
   */
  x?: number;
  /**
   * @min 0
   * @max 32767
   * @example 400
   */
  y?: number;
  /**
   * If not set, the width is automatically calculated with the mention length.
   * @min 24
   * @example 24
   */
  width?: number | null;
  /**
   * The height must be 24 or a multiple of 15 greater than 24. If height is not provided, it will be calculated depending on the number of newlines in the mention.
   * @min 24
   * @example 150
   */
  height?: number | null;
  /**
   * @maxLength 5000
   * @example "Order n°12345"
   */
  text?: string;
  /** If set, **width** and **height** properties become required. Otherwise, if not set the font will not be changed, and if set to null the default font will be used. */
  font?: UpdateFieldFont;
}

/**
 * The answer value for a text field. Can be null if the field is not required.
 * The selected radio name in a radio group.
 */
export type FieldAnswerValue = string | boolean;

export interface CreateFollowersInner {
  /**
   * @format email
   * @minLength 1
   * @example "john.doe@example.com"
   */
  email: string;
  /** Locale settings used for communication. */
  locale: Locale;
}

/** This property does not allow HTML tags. */
export type MetadataDataValue = string | number | boolean;

export interface SignerInfo {
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
  /** Locale settings used for communication. */
  locale: Locale;
}

export type SignerFieldsInner =
  | FieldSignature
  | FieldText
  | FieldMention
  | FieldCheckbox
  | FieldRadioButtonGroup;

export interface SignerRedirectUrls {
  /**
   * @format uri
   * @minLength 1
   * @example "https://example.com/success"
   */
  success: string | null;
  /**
   * @format uri
   * @minLength 1
   * @example "https://example.com/error"
   */
  error: string | null;
  /**
   * @format uri
   * @minLength 1
   * @example "https://example.com/decline"
   */
  decline: string | null;
}

export interface NewSignerFromScratchInfo {
  /**
   * @minLength 1
   * @maxLength 255
   * @example "John"
   */
  first_name: HumanName;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Doe"
   */
  last_name: HumanName;
  /**
   * @format email
   * @minLength 1
   */
  email: string;
  /**
   * E.164 format. Becomes mandatory if `signature_authentication_mode` requires a phone number.
   * @minLength 1
   * @example "+41446667700"
   */
  phone_number?: string | null;
  /** Locale settings used for communication. */
  locale: Locale;
}

export interface NewSignerFromScratchRedirectUrls {
  /**
   * @format uri
   * @minLength 1
   * @maxLength 255
   * @example "https://example.com/success"
   */
  success?: string | null;
  /**
   * @format uri
   * @minLength 1
   * @maxLength 255
   * @example "https://example.com/error"
   */
  error?: string | null;
  /**
   * @format uri
   * @minLength 1
   * @maxLength 255
   * @example "https://example.com/decline"
   */
  decline?: string | null;
}

export interface NewSignerFromScratchCustomText {
  /**
   * @minLength 1
   * @maxLength 150
   */
  request_subject?: string | null;
  /**
   * @minLength 1
   * @maxLength 2000
   */
  request_body?: string | null;
  /**
   * @minLength 1
   * @maxLength 150
   */
  reminder_subject?: string | null;
  /**
   * @minLength 1
   * @maxLength 2000
   */
  reminder_body?: string | null;
}

/**
 * New Signer From Scratch
 * Create a new signer from scratch
 */
export interface NewSignerFromScratch {
  info: NewSignerFromScratchInfo;
  /** Fields to assign to the Signer. Multiple Fields can be added simultaneously. */
  fields?: FieldsInput[];
  /**
   * Insert just after the position of the specified signer id
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  insert_after_id?: string | null;
  signature_level:
    | "electronic_signature"
    | "advanced_electronic_signature"
    | "qualified_electronic_signature";
  signature_authentication_mode?: "otp_email" | "otp_sms" | "no_otp" | null;
  redirect_urls?: NewSignerFromScratchRedirectUrls;
  custom_text?: NewSignerFromScratchCustomText;
  /** Override the delivery mode of the Signature Request for this Signer */
  delivery_mode?: SignerDeliveryMode;
  /**
   * @minLength 1
   * @maxLength 255
   */
  identification_attestation_id?: string | null;
  sms_notification?: SmsNotification1;
  email_notification?: EmailNotification1;
  /** Defines the way the Signer's Identity Documents will be uploaded for Verification. If set to `true`, `signature_level`should be equal to `advanced_electronic_signature` and `delivery_mode` set to `none`. */
  pre_identity_verification_required?: boolean;
}

/**
 * New Signer From Existing User
 * Create a new signer from an existing user
 */
export interface NewSignerFromExistingUser {
  /**
   * Create signer from an existing user
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  user_id: string;
  fields?: FieldsInput[];
  /**
   * Insert just after the position of the specified signer id
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  insert_after_id?: string | null;
  signature_level:
    | "electronic_signature"
    | "advanced_electronic_signature"
    | "qualified_electronic_signature";
  signature_authentication_mode?: "otp_email" | "otp_sms" | "no_otp" | null;
  redirect_urls?: NewSignerFromScratchRedirectUrls;
  custom_text?: NewSignerFromScratchCustomText;
  /** Override the delivery mode of the Signature Request for this Signer */
  delivery_mode?: SignerDeliveryMode;
  /**
   * @minLength 1
   * @maxLength 255
   */
  identification_attestation_id?: string | null;
  sms_notification?: SmsNotification1;
  email_notification?: EmailNotification1;
  /** Defines the way the Signer's Identity Documents will be uploaded for Verification. If set to `true`, `signature_level`should be equal to `advanced_electronic_signature` and `delivery_mode` set to `none`. */
  pre_identity_verification_required?: boolean;
}

/**
 * New Signer From Existing Contact
 * Create a new signer from an existing contact
 */
export interface NewSignerFromExistingContact {
  /**
   * Create signer from an existing contact
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  contact_id: string;
  fields?: FieldsInput[];
  /**
   * Insert just after the position of the specified signer id
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  insert_after_id?: string | null;
  signature_level:
    | "electronic_signature"
    | "advanced_electronic_signature"
    | "qualified_electronic_signature";
  signature_authentication_mode?: "otp_email" | "otp_sms" | "no_otp" | null;
  redirect_urls?: NewSignerFromScratchRedirectUrls;
  custom_text?: NewSignerFromScratchCustomText;
  /** Override the delivery mode of the Signature Request for this Signer */
  delivery_mode?: SignerDeliveryMode;
  /**
   * @minLength 1
   * @maxLength 255
   */
  identification_attestation_id?: string | null;
  sms_notification?: SmsNotification1;
  email_notification?: EmailNotification1;
  /** Defines the way the Signer's Identity Documents will be uploaded for Verification. If set to `true`, `signature_level`should be equal to `advanced_electronic_signature` and `delivery_mode` set to `none`. */
  pre_identity_verification_required?: boolean;
}

export type UpdateSignerInfo = {
  /**
   * @minLength 1
   * @maxLength 255
   * @example "John"
   */
  first_name?: HumanName;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Doe"
   */
  last_name?: HumanName;
  /**
   * @format email
   * @minLength 1
   */
  email?: string;
  /**
   * E.164 format
   * @minLength 1
   * @example "+41446667700"
   */
  phone_number?: string | null;
  /** Locale settings used for communication. */
  locale?: Locale;
};

/** Signer's IP address */
export type SignerSIPAddress = string;

export interface UserWorkspacesInner {
  /**
   * @format uuid
   * @example "9a93d3b5-fb3b-4abf-9e70-26315b33506c"
   */
  id: string;
}

export interface BankAccountConnectionFullAllOfDataParties {
  /**
   * Role
   * The role of the party in relation to the bank account
   */
  role: "holder" | "authorized_user" | "other" | "unknown";
  /**
   * Name
   * The name of the party
   * @minLength 1
   * @maxLength 255
   * @example "John Doe"
   */
  full_name: string | null;
  /**
   * Legal person name
   * The full legal name of the party
   * @minLength 1
   * @maxLength 255
   * @example "John Robert Doe"
   */
  legal_person_name: string | null;
}

export interface BankAccountConnectionFullAllOfData {
  /**
   * Account type
   * The type of the bank account (personal or business)
   */
  account_type: "personal" | "business" | null;
  account_identifiers: GetBankAccountVerificationsBankAccountVerificationId200ResponseAllOfExtractedFromDocument;
  /**
   * Bank name
   * The name of the bank
   * @minLength 1
   * @maxLength 255
   * @example "Fortuneo"
   */
  bank_name: string | null;
  parties: BankAccountConnectionFullAllOfDataParties[];
}

/** Information about the natural person who owns the bank account */
export interface InitiateBankAccountLookupWithNaturalPersonNaturalPerson {
  /**
   * First name of the person
   * @maxLength 255
   * @example "John"
   */
  first_name: string;
  /**
   * Last name of the person
   * @maxLength 255
   * @example "Doe"
   */
  last_name: string;
}

/** Information about the legal person (company) that owns the bank account */
export interface InitiateBankAccountLookupWithLegalPersonLegalPerson {
  /**
   * The company number must either be a SIREN (9 characters long) or a SIRET (14 characters long).
   * @pattern ^\d{9}(\d{5})?$
   * @example "794513986"
   */
  company_number: string;
}

/** The field can not be submitted if field "natural_person" is provided. */
export interface InitiateBankAccountWithLegalPersonLegalPerson {
  /**
   * Please provide the legal entity name, exactly as it appears on the bank account document.
   * Please match it exactly, with the same characters, same case.
   * @minLength 1
   * @maxLength 255
   * @example "Foundation Teaming"
   */
  name?: HumanName;
}

/** The field can not be submitted if field "legal_person" is provided. */
export interface InitiateBankAccountWithNaturalPersonNaturalPerson {
  /**
   * Please provide the holder first name, exactly as it appears on the bank account document.
   * Please match it exactly, with the same characters, same case.
   * One exception: if the document mentions an honorary title, please don't provide it as part of the name.
   * @minLength 1
   * @maxLength 255
   * @example "John"
   */
  first_name?: HumanName;
  /**
   * Please provide the holder last name, exactly as it appears on the bank account document.
   * Please match it exactly, with the same characters, same case.
   * One exception: if the document mentions an honorary title, please don't provide it as part of the name.
   * @minLength 1
   * @maxLength 255
   * @example "Doe"
   */
  last_name?: HumanName;
}

/** Data extracted from the provided bank account document */
export interface BankAccountFullAllOfDataExtractedFromDocument {
  /** International Bank Account Number (IBAN) */
  iban: NullableIBAN;
  /** Business Identifier Codes (BIC) */
  bic: NullableBIC;
}

export interface BankAccountFullAllOfData {
  /** Data extracted from the provided bank account document */
  extracted_from_document: BankAccountFullAllOfDataExtractedFromDocument;
}

export interface CompanyFullAllOfDataExtractedFromDocument {
  /** Company number extracted from the document. */
  company_number?: string | null;
  /**
   * Date when the document was issued.
   * @format date
   */
  issued_on?: string | null;
}

export interface CompanyFullAllOfDataCompanyInformationLegalForm {
  /**
   * Legal form code (ISO 20275).
   * @example "6CHY"
   */
  code: string | null;
  /**
   * Local legal form name.
   * @example "SAS, société par actions simplifiée"
   */
  description: string | null;
}

export interface CompanyFullAllOfDataCompanyInformationActivities {
  /**
   * Activity code.
   * @example "62.01"
   */
  code: string | null;
  /**
   * Activity name.
   * @example "Computer programming activities"
   */
  description: string | null;
  /**
   * Activity classification.
   * @example "NACE"
   */
  classification: string | null;
}

export interface CompanyFullAllOfDataCompanyInformationCommercialRegistration {
  /**
   * Indicates the location of the company's commercial register.
   * @example "CAEN"
   */
  location: string | null;
  /**
   * Indicates the company's registration date in the commercial register.
   * @format date
   * @example "2013-08-01"
   */
  registered_on: string | null;
}

export interface CompanyFullAllOfDataCompanyInformation {
  /**
   * Denomination of the company.
   * @example "YOUSIGN"
   */
  name?: string | null;
  /** Trade name of the company. */
  trade_name?: string | null;
  /**
   * The number of the company entity.
   * @example "794513986"
   */
  company_number?: string | null;
  legal_form?: CompanyFullAllOfDataCompanyInformationLegalForm;
  /**
   * Tax number of the company.
   * @example "FR61794513986"
   */
  vat_number?: string | null;
  activities?: CompanyFullAllOfDataCompanyInformationActivities[];
  /**
   * Company's creation date.
   * @format date
   * @example "2013-07-24"
   */
  founded_on?: string | null;
  /**
   * Indicates the company's cessation date if company is inactive, otherwise null.
   * @format date
   */
  ceased_on?: string | null;
  /** Indicates whether or not the company is still active. */
  active?: boolean | null;
  commercial_registration?: CompanyFullAllOfDataCompanyInformationCommercialRegistration;
  /** True if the company has at least one employee. */
  has_workforce?: boolean | null;
}

export interface CompanyFullAllOfDataHeadquarter {
  /** @example "AVENUE PIERRE BERTHELOT" */
  address_line_1: string | null;
  address_line_2: string | null;
  /** @example "14000" */
  postal_code: string | null;
  /** @example "CAEN" */
  city: string | null;
  /** @example "FR" */
  country_code: string | null;
}

export interface CompanyFullAllOfDataLegalRepresentatives {
  /**
   * The representative's role within the company.
   * @example "Président"
   */
  title: string | null;
  /** Indicates whether the representative is a natural person or a legal entity. */
  type: "natural_person" | "legal_person" | null;
  /**
   * The representative's first name in case of a natural person, otherwise null.
   * @example "John"
   */
  first_name: string | null;
  /**
   * The representative's last name in case of a natural person, otherwise null.
   * @example "Doe"
   */
  last_name: string | null;
  /**
   * The representative's birthdate in case of a natural person, otherwise null.
   * @format date
   * @example "1994-04-20"
   */
  born_on: string | null;
  /** The representative's company name in case of a legal person, otherwise null. */
  company_name: string | null;
  /** The representative's company number in case of a legal person, otherwise null. */
  company_number: string | null;
}

export interface CompanyFullAllOfData {
  extracted_from_document?: CompanyFullAllOfDataExtractedFromDocument;
  company_information?: CompanyFullAllOfDataCompanyInformation;
  headquarter?: CompanyFullAllOfDataHeadquarter;
  legal_representatives?: CompanyFullAllOfDataLegalRepresentatives[];
}

/** Information extracted from the verified identity document */
export interface IdentityDocumentFullAllOfDataExtractedFromDocument {
  /**
   * The document holder's first name as it appears on the identity document
   * @minLength 1
   * @example "John"
   */
  first_name: string | null;
  /**
   * The document holder's birth name (family name at birth)
   * @minLength 1
   * @example "Doe"
   */
  birth_name: string | null;
  /**
   * The document holder's current last name (may differ from birth name)
   * @minLength 1
   * @example "Doe"
   */
  last_name: string | null;
  /**
   * The document holder's date of birth as it appears on the document
   * @format date
   * @example "2024-01-18"
   */
  born_on: string | null;
  /**
   * The holder's place of birth as it appears on the document
   * @minLength 1
   * @example "Paris"
   */
  birth_location: string | null;
  /**
   * The holder's gender as it appears on the document. "m" for Male, "f" for Female, "x" for Non-binary or unspecified.
   * @example "f"
   */
  gender: "f" | "m" | "x" | null;
  /**
   * The holder's complete postal address as it appears on the document
   * @minLength 1
   * @example "13 RUE SAINT MARCELIN
   * MARSEILLE 10E (13)"
   */
  full_address: string | null;
  /**
   * The type of identity document that was verified
   * @example "id_card"
   */
  type:
    | "id_card"
    | "passport"
    | "residence_permit"
    | "driver_license"
    | "ita_ts_cns"
    | null;
  /**
   * The country that issued the document (ISO 3166-1 alpha-2 code)
   * @format ISO 3166-1 alpha-2
   * @pattern ^[A-Za-z]{2}$
   * @example "US"
   */
  issuing_country_code: string | null;
  /**
   * The date when the document was issued
   * @format date
   * @pattern ^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$
   * @example "2024-01-18"
   */
  issued_on: string | null;
  /**
   * The date when the document legally expires
   * @format date
   * @pattern ^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$
   * @example "2024-01-18"
   */
  expired_on: string | null;
  /**
   * Document identifier number (may contain letters)
   * @example "X4RTBPFW4"
   */
  document_number: string | null;
  /** Machine Readable Zone content */
  mrz: GetIdDocumentVerification200ResponseAllOfExtractedFromDocumentMrz;
}

export interface IdentityDocumentFullAllOfData {
  /** Information extracted from the verified identity document */
  extracted_from_document: IdentityDocumentFullAllOfDataExtractedFromDocument;
}

/** Documentary evidence captured during the verification process */
export interface IdentityVideoFullAllOfDataEvidence {
  /**
   * Temporary public link to the front image. Available for 10 minutes after the user completed the verification.
   * @format uri
   * @minLength 1
   * @example "https://storage-b.env.ubble.ai/ubble-ai/88bf48f0-ce4a-449c-9af1-f138a7e09392/ae1f813a-02cf-4ffc-bf71-d823ed74dc8d/bb603e2f-5de9-40f2-9631-8285a33c24c0/tight_crops/aaa.png?X-Amz-Date=20230327T163228Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=xxx"
   */
  document_front_image_url: string | null;
  /**
   * Temporary public link to the back image. Available for 10 minutes after the user completed the verification.
   * @format uri
   * @minLength 1
   * @example "https://storage-b.env.ubble.ai/ubble-ai/88bf48f0-ce4a-449c-9af1-f138a7e09392/ae1f813a-02cf-4ffc-bf71-d823ed74dc8d/bb603e2f-5de9-40f2-9631-8285a33c24c0/tight_crops/bbb.png?X-Amz-Date=20230327T163228Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=xxx"
   */
  document_back_image_url: string | null;
  /**
   * Temporary public link to the face image. Available for 10 minutes after the user completed the verification.
   * @format uri
   * @minLength 1
   * @example "https://storage-b.ubble.ai/11-production-ubble-ai/CKQNCMWHRPGT/idv_01jezpmz01mvn7r1n9eg596v5k/9a873da8-2395-4b05-b9a6-56644dfe2e06/9dc6948e-23b8-4405-81f2-28dccc0d9a71/face_asset_generation_0_rtc_face_0_rtc_face/face_crop_41.png?response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=h6aivdggwQIvVyGWnAEw%2F20241216%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241216T100820Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&X-Amz-Signature=xxx"
   */
  face_image_url: string | null;
}

export interface IdentityVideoFullAllOfData {
  /** Includes all information that has been extracted from the document, as well as the best images of the document. */
  extracted_from_document: IdentityVideoDocument;
  /** Documentary evidence captured during the verification process */
  evidence: IdentityVideoFullAllOfDataEvidence;
}

/** Provide the holder full address, exactly as it should appear on the proof of address document. */
export type InitiateProofOfAddressNaturalPersonAddress = {
  /**
   * The first line of the address, typically the street name and number.
   * @minLength 1
   * @maxLength 500
   * @example "Rue De Suède"
   */
  line1: string;
  /**
   * If needed, the second line of the address, typically an apartment or suite number.
   * @minLength 1
   * @maxLength 500
   * @example null
   */
  line2?: string | null;
  /**
   * The postal code of the address.
   * @minLength 1
   * @maxLength 10
   * @example "14000"
   */
  postal_code: string;
  /**
   * The city of the address.
   * @minLength 1
   * @maxLength 200
   * @example "CAEN"
   */
  city: string;
};

export interface InitiateProofOfAddressNaturalPerson {
  /**
   * Provide the holder first name, exactly as it should appear on the proof of address document.
   * Please match it exactly, with the same characters, same case.
   * One exception: if the document mentions an honorary title, please don't provide it as part of the name.
   * This field can not be submitted without field "last_name".
   * @minLength 1
   * @maxLength 255
   * @example "John"
   */
  first_name?: string | null;
  /**
   * Provide the holder last name, exactly as it should appear on the proof of address document.
   * Please match it exactly, with the same characters, same case.
   * One exception: if the document mentions an honorary title, please don't provide it as part of the name.
   * This field can not be submitted without field "first_name".
   * @minLength 1
   * @maxLength 255
   * @example "Doe"
   */
  last_name?: string | null;
  /** Provide the holder full address, exactly as it should appear on the proof of address document. */
  address?: InitiateProofOfAddressNaturalPersonAddress;
}

/** If found, the address extracted from the 2D-Doc. */
export interface ProofOfAddressFullAllOfDataExtractedFromDocument2DDocAddress {
  /**
   * The street type, name and number.
   * @minLength 1
   * @example "18 rue de Londres"
   */
  line1: string | null;
  /**
   * The postal code.
   * @minLength 1
   * @example "75008"
   */
  postal_code: string | null;
  /**
   * The city name.
   * @minLength 1
   * @example "Paris"
   */
  city: string | null;
  /**
   * @format ISO 3166-1 alpha-2
   * @minLength 1
   * @maxLength 2
   * @pattern ^[A-Za-z]{2}$
   * @example "FR"
   */
  country_code: string | null;
}

/** Data extracted from the 2D-Doc if the document has one. */
export interface ProofOfAddressFullAllOfDataExtractedFromDocument2DDoc {
  /**
   * If found, the full name extracted from the 2D-Doc.
   * @minLength 1
   * @example "John Doe"
   */
  full_name: string | null;
  /** If found, the address extracted from the 2D-Doc. */
  address: ProofOfAddressFullAllOfDataExtractedFromDocument2DDocAddress;
}

/** Data extracted from the provided proof of address document */
export interface ProofOfAddressFullAllOfDataExtractedFromDocument {
  /**
   * If found, the first name as it appeared on the document.
   * @minLength 1
   * @example "John"
   */
  first_name: string | null;
  /**
   * If found, the last name as it appeared on the document.
   * @minLength 1
   * @example "Doe"
   */
  last_name: string | null;
  /**
   * If found, the address as it appeared on the document.
   * @minLength 1
   * @example "Rue De Suède Av Pierre Berthelot 14000 CAEN"
   */
  full_address: string | null;
  /**
   * If found, the document's issuance date as it appeared on the document.
   * @format date
   * @example "2022-01-01"
   */
  issued_on: string | null;
  /** Data extracted from the 2D-Doc if the document has one. */
  "2d_doc": ProofOfAddressFullAllOfDataExtractedFromDocument2DDoc;
}

export interface ProofOfAddressFullAllOfData {
  /** Data extracted from the provided proof of address document */
  extracted_from_document: ProofOfAddressFullAllOfDataExtractedFromDocument;
}

/** Information about the person to check */
export interface InitiateWatchlistNaturalPerson {
  /**
   * First name of the person
   * @example "Emmanuel"
   */
  first_name: string;
  /**
   * Last name of the person
   * @example "Macron"
   */
  last_name: string;
  /**
   * Date of birth of the person (YYYY-MM-DD)
   * @format date
   * @example "1977-12-21"
   */
  born_on: string;
}

export interface WatchlistFullAllOfDataPoliticallyExposedPersonSources {
  /**
   * Name of the source
   * @example "Wikidata Politically Exposed Persons"
   */
  name: string | null;
  /**
   * URL of the source
   * @example "https://www.opensanctions.org/datasets/wd_peps"
   */
  url: string | null;
}

export interface WatchlistFullAllOfDataPoliticallyExposedPersonPositions {
  /**
   * Title of the political position
   * @example "Minister of Finance"
   */
  title: string | null;
  /**
   * Whether the person is currently politically exposed
   * @example false
   */
  active: boolean;
  /**
   * ISO country code where the position is held
   * @format ISO 3166-1 alpha-2
   * @example "FR"
   */
  country_code: string | null;
  /**
   * Date when the position started
   * @example "2020-01-01"
   */
  started_on: string | null;
  /**
   * Date when the position ended − null if ongoing
   * @example "2021-01-01"
   */
  ended_on: string | null;
  /** Sources of this information */
  sources: WatchlistFullAllOfDataPoliticallyExposedPersonSources[];
}

/** Information about politically exposed person status */
export interface WatchlistFullAllOfDataPoliticallyExposedPerson {
  /** Whether the person is currently politically exposed */
  active: boolean;
  positions: WatchlistFullAllOfDataPoliticallyExposedPersonPositions[];
}

export interface WatchlistFullAllOfDataSanctionsSources {
  /**
   * Name of the source
   * @example "CIA World Factbook heads of state and government"
   */
  name: string | null;
  /**
   * URL of the source
   * @example "https://www.opensanctions.org/datasets/us_cia_world_factbook"
   */
  url: string | null;
}

export interface WatchlistFullAllOfDataSanctionsRecords {
  /**
   * Description of the sanction
   * @example "Management ban"
   */
  description: string | null;
  /**
   * Authority that issued the sanction
   * @example "Commercial Court of Paris"
   */
  authority: string | null;
  /**
   * ISO country code where the sanction is applicable
   * @format ISO 3166-1 alpha-2
   * @example "FR"
   */
  country_code: string | null;
  /**
   * Whether the sanction is currently active
   * @example false
   */
  active: boolean;
  /**
   * Date when the sanction started
   * @example "2020-01-01"
   */
  started_on: string | null;
  /**
   * Date when the sanction ended − null if ongoing
   * @example "2021-01-01"
   */
  ended_on: string | null;
  /** Sources of this information */
  sources: WatchlistFullAllOfDataSanctionsSources[];
}

/** List of sanctions against the person */
export interface WatchlistFullAllOfDataSanctions {
  /** Whether the person is currently politically exposed */
  active: boolean;
  records: WatchlistFullAllOfDataSanctionsRecords[];
}

/** Verification result data */
export interface WatchlistFullAllOfData {
  /** Information about politically exposed person status */
  politically_exposed_person: WatchlistFullAllOfDataPoliticallyExposedPerson;
  /** List of sanctions against the person */
  sanctions: WatchlistFullAllOfDataSanctions;
}

/** Choose between a wildcard symbol to select all Workspaces or specify a list of specific Workspace UUIDs. */
export type WebhookSubscriptionSubscribedEvents =
  | WebhookWildcardSubscribedEvent
  | WebhookSubscribedEvents;

export type WebhookSubscriptionScopes = WebhookWildcardScope | WebhookScopes;

export type WebhookSubscriptionWorkspaces =
  | WebhookWildcardWorkspace
  | WebhookWorkspaces;

/** Choose between a wildcard symbol to select all subscribed events or specify a list of specific subscribed events. */
export type CreateWebhookSubscriptionSubscribedEvents =
  | WebhookSubscribedEvents
  | WebhookWildcardSubscribedEvent;

/** Choose between a wildcard symbol to select all scopes or specify a list of specific scopes. */
export type CreateWebhookSubscriptionScopes =
  | WebhookScopes
  | WebhookWildcardScope;

/** Choose between a wildcard symbol to select all Workspaces or specify a list of specific Workspace UUIDs. The association of specific Workspaces with Webhook is temporarily restricted in the sandbox environment, only the value wildcard ("*") for Workspaces is allowed in this context. */
export type CreateWebhookSubscriptionWorkspaces =
  | WebhookWorkspaces
  | WebhookWildcardWorkspace;

export interface WorkspaceUsersInner {
  /**
   * @format uuid
   * @example "89120884-d29a-4b1a-ac7b-a9e73a872795"
   */
  id?: string;
}

/** create new signer */
export interface SignatureRequestSignerFromInfoInputInfo {
  /**
   * @minLength 1
   * @maxLength 255
   * @example "John"
   */
  first_name: HumanName;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Doe"
   */
  last_name: HumanName;
  /**
   * @format email
   * @minLength 1
   */
  email: string;
  /**
   * E.164 format. Becomes mandatory if `signature_authentication_mode` requires a phone number.
   * @minLength 1
   * @example "+41446667700"
   */
  phone_number?: string | null;
  /** Locale settings used for communication. */
  locale: Locale;
}

export interface SignatureRequestSignerFromInfoInputRedirectUrls {
  /**
   * @format uri
   * @minLength 1
   * @maxLength 255
   * @example "https://example.com/success"
   */
  success?: string | null;
  /**
   * @format uri
   * @minLength 1
   * @maxLength 255
   * @example "https://example.com/error"
   */
  error?: string | null;
}

export interface SignatureRequestSignerFromInfoInputCustomText {
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
}

export type SignatureRequestEmailNotificationCustomText = {
  /**
   * @minLength 1
   * @maxLength 150
   */
  request_subject?: string | null;
  /**
   * @minLength 1
   * @maxLength 2000
   */
  request_body?: string | null;
  /**
   * @minLength 1
   * @maxLength 150
   */
  reminder_subject?: string | null;
  /**
   * @minLength 1
   * @maxLength 2000
   */
  reminder_body?: string | null;
};

/** Create new signer */
export interface SignatureRequestPlaceholderSignerSubstituteFromInfoInputInfo {
  /**
   * @minLength 1
   * @maxLength 255
   * @example "John"
   */
  first_name: HumanName;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Doe"
   */
  last_name: HumanName;
  /**
   * @format email
   * @minLength 1
   */
  email: string;
  /**
   * E.164 format. Becomes mandatory if `signature_authentication_mode` requires a phone number.
   * @minLength 1
   * @example "+41446667700"
   */
  phone_number?: string | null;
  /** Locale settings used for communication. */
  locale: Locale;
}

/** Signature */
export interface Signature2 {
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  document_id: string;
  type: "signature";
  /**
   * @format int32
   * @min 1
   */
  page: number;
  /**
   * @format int32
   * @min 0
   * @max 32767
   */
  x: number;
  /**
   * @format int32
   * @min 0
   * @max 32767
   */
  y: number;
  /**
   * Default value is 37
   * @format int32
   * @min 37
   * @max 1000
   */
  height?: number;
  /**
   * Default value is 85
   * @format int32
   * @min 85
   * @max 2000
   */
  width?: number;
  /**
   * Provide extra context to explain why the Document is being signed. Once the Document is signed, the custom reason is stored in the Audit Trail and is included in the signature certificate.
   * The default value is: "Signed by [Signer first name] [Signer last name]".
   * @maxLength 150
   * @example "Signed by John Doe"
   */
  reason?: HumanName | null;
}

/** Mention */
export interface Mention2 {
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  document_id: string;
  type: "mention";
  /**
   * @format int32
   * @min 1
   */
  page: number;
  /**
   * @format int32
   * @min 0
   * @max 32767
   */
  x: number;
  /**
   * @format int32
   * @min 0
   * @max 32767
   */
  y: number;
  /**
   * If not set, the width is automatically calculated with the mention length
   * @format int32
   * @min 24
   */
  width?: number;
  /**
   * The height must be 24 or a multiple of 15 greater than 24. If height is not provided, it will be calculated depending on the number of newlines in the mention
   * @format int32
   * @min 24
   * @example 150
   */
  height?: number | null;
  mention: string;
  /**
   * Name of the Field.
   * @minLength 1
   * @maxLength 128
   * @example "Job Title"
   */
  name?: string | null;
}

/** Text */
export interface Text2 {
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  document_id: string;
  type: "text";
  /**
   * @format int32
   * @min 1
   */
  page: number;
  /**
   * @format int32
   * @min 0
   * @max 32767
   */
  x: number;
  /**
   * @format int32
   * @min 0
   * @max 32767
   */
  y: number;
  /**
   * If not set, the width is automatically calculated with the max_length value
   * @format int32
   * @min 24
   * @example 90
   */
  width?: number;
  /**
   * The height must be 24 or a multiple of 15 greater than 24.
   * @format int32
   * @min 24
   * @example 150
   */
  height?: number;
  /**
   * @min 1
   * @max 32767
   */
  max_length: number;
  /**
   * @maxLength 255
   * @example "What is your job title?"
   */
  question: string;
  /** @example "Your position in the company" */
  instruction?: string | null;
  optional: boolean;
  /**
   * Name of the Field.
   * @minLength 1
   * @maxLength 128
   * @example "Job Title"
   */
  name?: string | null;
  /**
   * If a default value is provided, the Field will be pre-filled with this value. The Signer can modify it before signing unless the Field is set to `read-only`.
   * @minLength 1
   * @maxLength 32767
   * @example "Software Engineer"
   */
  default_value?: string | null;
  /**
   * If set to `true`, the Signer cannot modify the Field and the default value (if provided) will remain unchanged.
   * @default false
   */
  read_only?: boolean;
}

/** Checkbox */
export interface Checkbox2 {
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  document_id: string;
  type: "checkbox";
  /**
   * @format int32
   * @min 1
   */
  page: number;
  /**
   * @format int32
   * @min 0
   * @max 32767
   */
  x: number;
  /**
   * @format int32
   * @min 0
   * @max 32767
   */
  y: number;
  /**
   * The omission of size parameter is considered as deprecated. The size determines both the width and height of the checkbox.
   * @format int32
   * @min 8
   * @max 240
   */
  size?: number;
  optional: boolean;
  /** @example "Checkbox 1" */
  name?: string | null;
  checked: boolean;
  default_checked?: boolean;
  /**
   * If set to `true`, the checkbox cannot be modified by the signer.
   * @default false
   */
  read_only?: boolean;
}

export interface RadioGroup2RadiosInner {
  /**
   * Radio button's name
   * @minLength 1
   * @maxLength 128
   */
  name?: string | null;
  /**
   * @format int32
   * @min 0
   * @max 32767
   */
  x: number;
  /**
   * @format int32
   * @min 0
   * @max 32767
   */
  y: number;
  /**
   * The omission of size parameter is considered as deprecated. The size determines both the width and height of the checkbox.
   * @format int32
   * @min 8
   * @max 240
   */
  size?: number;
  /**
   * Indicates whether the radio is initially checked (`true`) or unchecked (`false`).
   * @default false
   */
  default_checked?: boolean;
}

/** RadioGroup */
export interface RadioGroup2 {
  /**
   * @format uuid
   * @example "9b6ed2f3-244f-487a-baa1-bbe4f51c8748"
   */
  document_id: string;
  type: "radio_group";
  /**
   * @format int32
   * @min 1
   */
  page: number;
  optional: boolean;
  /**
   * Radio group's name
   * @minLength 1
   * @maxLength 128
   * @example "radio_group_name_1"
   */
  name?: string | null;
  /**
   * If set to `true`, the radio button cannot be modified by the Signer.
   * @default false
   */
  read_only?: boolean;
  radios: RadioGroup2RadiosInner[];
}

/** OTP Message */
export interface OTPMessage {
  /**
   * Custom text contained is the one-time password SMS sent to the Signer. This feature is available from SCALE plan, and disabled by default. Please contact [customer support](https://yousign.app/auth/workspace/help) to request an activation. This value is a string composed of GSM characters supported by 7-bit encoding, must contain "{code}", the length must be less than 105 and cannot contain URL, email, phone number and IP address.
   * @minLength 1
   */
  custom_text: string;
}

/** BadRequestResponse */
export interface BadRequestResponse {
  type: string;
  detail: string;
}

/** UnauthorizedResponse */
export interface UnauthorizedResponse {
  type: string;
  detail: string;
}

/** ForbiddenResponse */
export interface ForbiddenResponse {
  type: string;
  detail: string;
}

/** NotFoundResponse */
export interface NotFoundResponse {
  type: string;
  detail: string;
}

/** MethodNotAllowed */
export interface MethodNotAllowed {
  message: string;
}

/** UnsupportedMediaTypeResponse */
export interface UnsupportedMediaTypeResponse {
  type: string;
  detail: string;
}

/** TooManyRequestsResponse */
export interface TooManyRequestsResponse {
  message: string;
}

/** InternalServerError */
export interface InternalServerError {
  /** @example "about:blank" */
  type: string;
  /** @example "Something wrong occurred." */
  detail: string;
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

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://api-sandbox.yousign.app/v3";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

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
    return `${encodedKey}=${encodeURIComponent(
      typeof value === "number" ? value : `${value}`
    )}`;
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
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key]
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) => {
      if (input instanceof FormData) {
        return input;
      }

      return Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`
        );
        return formData;
      }, new FormData());
    },
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams
  ): RequestParams {
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

  protected createAbortSignal = (
    cancelToken: CancelToken
  ): AbortSignal | undefined => {
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

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${
        queryString ? `?${queryString}` : ""
      }`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      }
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
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
 * @license proprietary (https://yousign.com/terms)
 * @baseUrl https://api-sandbox.yousign.app/v3
 * @contact Support <contact@yousign.com> (https://yousign.com/contact)
 *
 * Build the best experience of digital signature through your own platform. Increase your conversion rates, leverage your data and reduce your costs with Yousign API.
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  archives = {
    /**
     * @description Archive a file in a secure digital safe for 10 years
     *
     * @tags Archive
     * @name PostArchives
     * @summary Direct upload an archived file
     * @request POST:/archives
     * @secure
     */
    postArchives: (data: UploadArchivedFile, params: RequestParams = {}) =>
      this.request<
        ArchivedFile,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/archives`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * @description Download the archived file using the ArchivedFileId.
     *
     * @tags Archive
     * @name GetArchivesArchivedFileIdDownload
     * @summary Download archived file
     * @request GET:/archives/{archivedFileId}/download
     * @secure
     */
    getArchivesArchivedFileIdDownload: (
      archivedFileId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        File,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/archives/${archivedFileId}/download`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  bankAccountVerifications = {
    /**
     * @description Deprecated endpoint, do not use. Returns the list of all Bank Account Verifications within your organization.
     *
     * @tags Deprecated
     * @name GetBankAccountVerifications
     * @summary [DEPRECATED] List Bank Account Verifications
     * @request GET:/bank_account_verifications
     * @deprecated
     * @secure
     */
    getBankAccountVerifications: (
      query?: {
        /**
         * After cursor (pagination)
         * @minLength 1
         */
        after?: string;
        /**
         * The limit of items count to retrieve.
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
        /** Filter by status */
        status?: "pending" | "approved" | "declined" | "inconclusive";
      },
      params: RequestParams = {}
    ) =>
      this.request<
        GetBankAccountVerifications200Response,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/bank_account_verifications`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deprecated endpoint, do not use. Creates a new Bank Account Verification resource.
     *
     * @tags Deprecated
     * @name PostBankAccountVerifications
     * @summary [DEPRECATED] Initiate a new Bank Account Verification
     * @request POST:/bank_account_verifications
     * @deprecated
     * @secure
     */
    postBankAccountVerifications: (
      data: LegacyCreateBankAccountVerification,
      params: RequestParams = {}
    ) =>
      this.request<
        LegacyBankAccountVerificationCreated,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/bank_account_verifications`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * @description Deprecated endpoint, do not use. Get the detailed results of a bank account verification.
     *
     * @tags Deprecated
     * @name GetBankAccountVerificationsBankAccountVerificationId
     * @summary [DEPRECATED] Retrieve a bank account verification
     * @request GET:/bank_account_verifications/{bankAccountVerificationId}
     * @deprecated
     * @secure
     */
    getBankAccountVerificationsBankAccountVerificationId: (
      bankAccountVerificationId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        GetBankAccountVerificationsBankAccountVerificationId200Response,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/bank_account_verifications/${bankAccountVerificationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  consumptions = {
    /**
     * @description Get signatures Consumption by source
     *
     * @tags Consumption
     * @name GetConsumptions
     * @summary Get Consumptions
     * @request GET:/consumptions
     * @deprecated
     * @secure
     */
    getConsumptions: (
      query: {
        /** The "from" date must not be more than 1 year in the past */
        from: DateYMD;
        /** The "to" date must be more recent than the "from" date */
        to: DateYMD;
        /** The API authentication key to use to retrieve the data */
        authentication_key?: UUID;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        Consumption,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/consumptions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves detailed addon consumption for the current subscription period.
     *
     * @tags Consumption
     * @name GetConsumptionAddon
     * @summary Get detailed addon consumption.
     * @request GET:/consumptions/addons
     * @secure
     */
    getConsumptionAddon: (
      query?: {
        /** A list of add-ons to filter the results on. */
        addons?: (
          | "electronic_signature"
          | "advanced_electronic_signature"
          | "qualified_electronic_signature_identity_verification"
          | "qualified_electronic_signature_saved_identity"
          | "electronic_seal"
          | "advanced_electronic_seal"
          | "archiving"
        )[];
      },
      params: RequestParams = {}
    ) =>
      this.request<
        GetConsumptionAddon200Response,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/consumptions/addons`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the consumption of your organization over a specified period.
     *
     * @tags Consumption
     * @name GetConsumptionDetail
     * @summary Get detailed Consumption data
     * @request GET:/consumptions/detail
     * @secure
     */
    getConsumptionDetail: (
      query: {
        /**
         * After cursor (pagination)
         * @minLength 1
         */
        after?: string;
        /**
         * The limit of items count to retrieve.
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
        /** The starting date for data retrieval. */
        from: DateYMD;
        /** The end date for data retrieval. The `to` date must be later than the `from` date and within one year of the `from` date. */
        to: DateYMD;
        /**
         * Specifies how data is grouped. By default, it returns the total consumption for the entire organization. If set to `workspace`, the data will be grouped by Workspace.
         * @default "organization"
         */
        breakdown_type?: "organization" | "workspace";
        /** A list of Workspace IDs to filter the results. */
        workspace_ids?: UUID[];
      },
      params: RequestParams = {}
    ) =>
      this.request<
        GetConsumptionDetail200Response,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/consumptions/detail`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a binary .csv file containing all the Consumption data of the underlying signatures
     *
     * @tags Consumption
     * @name GetConsumptionsExport
     * @summary Export Consumption data
     * @request GET:/consumptions/export
     * @secure
     */
    getConsumptionsExport: (
      query: {
        /** The "from" date must not be more than 1 year in the past */
        from: DateYMD;
        /** The "to" date must be more recent than the "from" date */
        to: DateYMD;
        /** The API authentication key to use to retrieve the data */
        authentication_key?: UUID;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        UUID,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/consumptions/export`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  contacts = {
    /**
     * @description Returns the list of all the Contacts within your organization.
     *
     * @tags Contact
     * @name GetContacts
     * @summary List Contacts
     * @request GET:/contacts
     * @secure
     */
    getContacts: (
      query?: {
        /**
         * After cursor (pagination)
         * @minLength 1
         */
        after?: string;
        /**
         * The limit of items count to retrieve.
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        GetContacts200Response,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/contacts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new Contact.
     *
     * @tags Contact
     * @name PostContact
     * @summary Create a Contact
     * @request POST:/contacts
     * @secure
     */
    postContact: (data: CreateContact, params: RequestParams = {}) =>
      this.request<
        Contact,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
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
     * @description Deletes a given Contact.
     *
     * @tags Contact
     * @name DeleteContactsContactId
     * @summary Delete a Contact
     * @request DELETE:/contacts/{contactId}
     * @secure
     */
    deleteContactsContactId: (contactId: UUID, params: RequestParams = {}) =>
      this.request<
        any,
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/contacts/${contactId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Retrieves a given Contact.
     *
     * @tags Contact
     * @name GetContactsContactId
     * @summary Get a Contact
     * @request GET:/contacts/{contactId}
     * @secure
     */
    getContactsContactId: (contactId: UUID, params: RequestParams = {}) =>
      this.request<
        Contact,
        | UnauthorizedResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/contacts/${contactId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a given Contact. Any parameters not provided are left unchanged.
     *
     * @tags Contact
     * @name PatchContactsContactId
     * @summary Update a Contact
     * @request PATCH:/contacts/{contactId}
     * @secure
     */
    patchContactsContactId: (
      contactId: UUID,
      data: UpdateContact,
      params: RequestParams = {}
    ) =>
      this.request<
        Contact,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/contacts/${contactId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  customExperiences = {
    /**
     * @description Returns the list of all Custom Experiences in your Organization. You can limit the number of items returned by using pagination.
     *
     * @tags Custom Experience
     * @name GetCustomExperiences
     * @summary List Custom Experiences
     * @request GET:/custom_experiences
     * @secure
     */
    getCustomExperiences: (
      query?: {
        /**
         * After cursor (pagination)
         * @minLength 1
         */
        after?: string;
        /**
         * The limit of items count to retrieve.
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        GetCustomExperiences200Response,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/custom_experiences`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new Custom Experience.
     *
     * @tags Custom Experience
     * @name PostCustomExperience
     * @summary Create a Custom Experience
     * @request POST:/custom_experiences
     * @secure
     */
    postCustomExperience: (
      data: CreateCustomExperience,
      params: RequestParams = {}
    ) =>
      this.request<
        CustomExperience,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
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
     * @description Deletes a given Custom Experience.
     *
     * @tags Custom Experience
     * @name DeleteCustomExperience
     * @summary Delete a Custom Experience
     * @request DELETE:/custom_experiences/{customExperienceId}
     * @secure
     */
    deleteCustomExperience: (
      customExperienceId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        any,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/custom_experiences/${customExperienceId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Retrieves a given Custom Experience.
     *
     * @tags Custom Experience
     * @name GetCustomExperiencesCustomExperienceId
     * @summary Get a Custom Experience
     * @request GET:/custom_experiences/{customExperienceId}
     * @secure
     */
    getCustomExperiencesCustomExperienceId: (
      customExperienceId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        CustomExperience,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/custom_experiences/${customExperienceId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a given Custom Experience. Any parameters not provided are left unchanged.
     *
     * @tags Custom Experience
     * @name PatchCustomExperiencesCustomExperienceId
     * @summary Update a Custom Experience
     * @request PATCH:/custom_experiences/{customExperienceId}
     * @secure
     */
    patchCustomExperiencesCustomExperienceId: (
      customExperienceId: UUID,
      data: UpdateCustomExperience,
      params: RequestParams = {}
    ) =>
      this.request<
        CustomExperience,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/custom_experiences/${customExperienceId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes the logo of a Custom Experience.
     *
     * @tags Custom Experience
     * @name DeleteCustomExperienceLogo
     * @summary Delete a Custom Experience logo
     * @request DELETE:/custom_experiences/{customExperienceId}/logo
     * @secure
     */
    deleteCustomExperienceLogo: (
      customExperienceId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        any,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/custom_experiences/${customExperienceId}/logo`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Updates the logo of a given Custom Experience by uploading the image of your choice.
     *
     * @tags Custom Experience
     * @name PatchCustomExperienceLogo
     * @summary Update a Custom Experience logo
     * @request POST:/custom_experiences/{customExperienceId}/logo
     * @secure
     */
    patchCustomExperienceLogo: (
      customExperienceId: UUID,
      data: PatchCustomExperienceLogoRequest,
      params: RequestParams = {}
    ) =>
      this.request<
        CustomExperience,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/custom_experiences/${customExperienceId}/logo`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),
  };
  documents = {
    /**
     * @description Deprecated endpoint, do not use.
     *
     * @tags Deprecated
     * @name PostDocuments
     * @summary [DEPRECATED] Upload a Document
     * @request POST:/documents
     * @deprecated
     * @secure
     */
    postDocuments: (
      data: CreateDocumentFromMultipart,
      params: RequestParams = {}
    ) =>
      this.request<
        Document,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
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
  electronicSealDocuments = {
    /**
     * @description Create an Electronic Seal Document from an other one.
     *
     * @tags Electronic Seal Document
     * @name UploadElectronicSealDocument
     * @summary Create an Electronic Seal Document
     * @request POST:/electronic_seal_documents
     * @secure
     */
    uploadElectronicSealDocument: (
      data: CreateElectronicSealDocument,
      params: RequestParams = {}
    ) =>
      this.request<
        ElectronicSealDocument,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/electronic_seal_documents`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Download a given Electronic Seal Document.
     *
     * @tags Electronic Seal Document
     * @name DownloadElectronicSealDocument
     * @summary Download an Electronic Seal Document
     * @request GET:/electronic_seal_documents/{electronicSealDocumentId}/download
     * @secure
     */
    downloadElectronicSealDocument: (
      electronicSealDocumentId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        File,
        | UnauthorizedResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/electronic_seal_documents/${electronicSealDocumentId}/download`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  electronicSealImages = {
    /**
     * @description Lists Electronic Seal Images. The list is paginated and can be filtered by the `after` cursor.
     *
     * @tags Electronic Seal
     * @name ListElectronicSealImages
     * @summary List Electronic Seal Images
     * @request GET:/electronic_seal_images
     * @secure
     */
    listElectronicSealImages: (
      query?: {
        /**
         * After cursor (pagination)
         * @minLength 1
         */
        after?: string;
        /**
         * The limit of items count to retrieve.
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        ListElectronicSealImages200Response,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/electronic_seal_images`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Upload an Electronic Seal Image to use for creating an Electronic Seal (can be used for several Electronic Seals).
     *
     * @tags Electronic Seal Image
     * @name UploadElectronicSealImage
     * @summary Upload an Electronic Seal Image
     * @request POST:/electronic_seal_images
     * @secure
     */
    uploadElectronicSealImage: (
      data: UploadElectronicSealImage,
      params: RequestParams = {}
    ) =>
      this.request<
        ElectronicSealImage,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/electronic_seal_images`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a given Electronic Seal Image.
     *
     * @tags Electronic Seal Image
     * @name DeleteElectronicSealImage
     * @summary Delete an Electronic Seal Image
     * @request DELETE:/electronic_seal_images/{electronicSealImageId}
     * @secure
     */
    deleteElectronicSealImage: (
      electronicSealImageId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        any,
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/electronic_seal_images/${electronicSealImageId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Download a given Electronic Seal Image.
     *
     * @tags Electronic Seal Image
     * @name DownloadElectronicSealImage
     * @summary Download an Electronic Seal Image
     * @request GET:/electronic_seal_images/{electronicSealImageId}/download
     * @secure
     */
    downloadElectronicSealImage: (
      electronicSealImageId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        File,
        | UnauthorizedResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/electronic_seal_images/${electronicSealImageId}/download`,
        method: "GET",
        secure: true,
        format: "blob",
        ...params,
      }),
  };
  electronicSeals = {
    /**
     * @description Create a new Electronic Seal
     *
     * @tags Electronic Seal
     * @name PostElectronicSeals
     * @summary Create an Electronic Seal
     * @request POST:/electronic_seals
     * @secure
     */
    postElectronicSeals: (
      data: CreateElectronicSealPayload,
      params: RequestParams = {}
    ) =>
      this.request<
        ElectronicSeal,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
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
     * @description Retrieves a given Electronic Seal.
     *
     * @tags Electronic Seal
     * @name GetElectronicSeal
     * @summary Get an Electronic Seal
     * @request GET:/electronic_seals/{electronicSealId}
     * @secure
     */
    getElectronicSeal: (electronicSealId: UUID, params: RequestParams = {}) =>
      this.request<
        ElectronicSeal,
        | UnauthorizedResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/electronic_seals/${electronicSealId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Electronic Seal Audit Trail is only available when the Electronic Seal is "done".
     *
     * @tags Electronic Seal Audit Trail
     * @name GetElectronicSealAuditTrail
     * @summary Get an Electronic Seal Audit Trail
     * @request GET:/electronic_seals/{electronicSealId}/audit_trails
     * @secure
     */
    getElectronicSealAuditTrail: (
      electronicSealId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        ElectronicSealAuditTrail,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/electronic_seals/${electronicSealId}/audit_trails`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Electronic Seal Audit Trail is only available when the Electronic Seal is "done".
     *
     * @tags Electronic Seal Audit Trail
     * @name DownloadElectronicSealAuditTrail
     * @summary Download an Electronic Seal Audit Trail
     * @request GET:/electronic_seals/{electronicSealId}/audit_trails/download
     * @secure
     */
    downloadElectronicSealAuditTrail: (
      electronicSealId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        File,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/electronic_seals/${electronicSealId}/audit_trails/download`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  idDocumentVerifications = {
    /**
     * @description Deprecated endpoint, do not use. Returns the list of all ID Document Verifications within your organization.
     *
     * @tags Deprecated
     * @name GetIdDocumentVerifications
     * @summary [DEPRECATED] List ID Document Verifications
     * @request GET:/id_document_verifications
     * @deprecated
     * @secure
     */
    getIdDocumentVerifications: (
      query?: {
        /**
         * After cursor (pagination)
         * @minLength 1
         */
        after?: string;
        /**
         * The limit of items count to retrieve.
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
        /** Filter by status */
        status?: "pending" | "approved" | "declined" | "inconclusive";
      },
      params: RequestParams = {}
    ) =>
      this.request<
        GetIdDocumentVerifications200Response,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/id_document_verifications`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deprecated endpoint, do not use. Verify a person’s ID document by sending the file containing their ID document (ID card, passport, residence permit or driving license).
     *
     * @tags Deprecated
     * @name CreateIdDocumentVerification
     * @summary [DEPRECATED] Initiate a new ID document verification
     * @request POST:/id_document_verifications
     * @deprecated
     * @secure
     */
    createIdDocumentVerification: (
      data: CreateIdDocumentVerificationRequest,
      params: RequestParams = {}
    ) =>
      this.request<
        LegacyIdDocumentVerificationCreated,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/id_document_verifications`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * @description Deprecated endpoint, do not use. Get the detailed results of an ID document verification, including the status of the verification, the reasons in case of rejection and the data extracted from the ID document.
     *
     * @tags Deprecated
     * @name GetIdDocumentVerification
     * @summary [DEPRECATED] Retrieve an ID document verification
     * @request GET:/id_document_verifications/{idDocumentVerificationId}
     * @deprecated
     * @secure
     */
    getIdDocumentVerification: (
      idDocumentVerificationId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        GetIdDocumentVerification200Response,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/id_document_verifications/${idDocumentVerificationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  labels = {
    /**
     * @description Returns the list of all the Labels within your organization.
     *
     * @tags Label
     * @name GetLabels
     * @summary List Labels
     * @request GET:/labels
     * @secure
     */
    getLabels: (
      query?: {
        /**
         * After cursor (pagination)
         * @minLength 1
         */
        after?: string;
        /**
         * The limit of items count to retrieve.
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
        /**
         * Filter by name.
         * @example {"eq":["Miscellaneous"]}
         */
        name?: object;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        GetLabels200Response,
        | BadRequestResponse
        | UnauthorizedResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/labels`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new Label in the organization.
     *
     * @tags Label
     * @name PostLabels
     * @summary Create a new Label
     * @request POST:/labels
     * @secure
     */
    postLabels: (data: CreateLabel, params: RequestParams = {}) =>
      this.request<
        Label,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/labels`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a given Label. This will remove the Label from all Signature Requests it is associated with.
     *
     * @tags Label
     * @name DeleteLabelsId
     * @summary Delete a Label
     * @request DELETE:/labels/{labelId}
     * @secure
     */
    deleteLabelsId: (labelId: UUID, params: RequestParams = {}) =>
      this.request<
        any,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/labels/${labelId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Retrieves a given Label within your organization.
     *
     * @tags Label
     * @name GetLabelsId
     * @summary Get a Label
     * @request GET:/labels/{labelId}
     * @secure
     */
    getLabelsId: (labelId: UUID, params: RequestParams = {}) =>
      this.request<
        Label,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/labels/${labelId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a given Label. Any parameters not provided are left unchanged.
     *
     * @tags Label
     * @name PatchLabelId
     * @summary Update a Label
     * @request PATCH:/labels/{labelId}
     * @secure
     */
    patchLabelId: (
      labelId: UUID,
      data: UpdateLabel,
      params: RequestParams = {}
    ) =>
      this.request<
        Label,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/labels/${labelId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  signatureRequests = {
    /**
     * @description Returns the list of all Signatures Requests in your organization. You can limit the number of items returned by using filters and pagination. Consult our guide for more details and examples.
     *
     * @tags Signature Request
     * @name GetSignatureRequests
     * @summary List Signature Requests
     * @request GET:/signature_requests
     * @secure
     */
    getSignatureRequests: (
      query?: {
        /**
         * After cursor (pagination)
         * @minLength 1
         */
        after?: string;
        /**
         * The limit of items count to retrieve.
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
        /**
         * Filter by status.
         * @example {"eq":["draft"],"in":["draft","done"]}
         */
        status?: object;
        /**
         * Filter by date of creation.
         * @example {"between":["2025-03-02","2025-03-04"],"before":["2025-03-02"]}
         */
        created_at?: object;
        /**
         * Filter by workspace_id.
         * @example {"eq":["9b6ed2f3-244f-487a-baa1-bbe4f51c8748"]}
         */
        workspace_id?: object;
        /**
         * Filter by external_id.
         * @example {"eq":["an-external-id"]}
         */
        external_id?: object;
        /**
         * Filter by source.
         * @example {"eq":["public_api"],"in":["public_api","app"]}
         */
        source?: object;
        /** Search on name */
        q?: string;
        /**
         * Case sensitive filter by Label's name.
         * @example {"eq":["To Sign"],"in":["To Sign","Miscellaneous"]}
         */
        "label.name"?: object;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        GetSignatureRequests200Response,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new Signature Request resource.
     *
     * @tags Signature Request
     * @name PostSignatureRequests
     * @summary Initiate a new Signature Request
     * @request POST:/signature_requests
     * @secure
     */
    postSignatureRequests: (
      data: CreateSignatureRequest,
      params: RequestParams = {}
    ) =>
      this.request<
        SignatureRequest,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
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
     * @description Deletes a given Signature Request, not possible if the Signature Request is in `approval` and `ongoing` status.
     *
     * @tags Signature Request
     * @name DeleteSignatureRequestsSignatureRequestId
     * @summary Delete a Signature Request
     * @request DELETE:/signature_requests/{signatureRequestId}
     * @secure
     */
    deleteSignatureRequestsSignatureRequestId: (
      signatureRequestId: UUID,
      query?: {
        /**
         * If true it will permanently delete the Signature Request. It will no longer be retrievable.
         * @default false
         */
        permanent_delete?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        any,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Retrieves a given Signature Request.
     *
     * @tags Signature Request
     * @name GetSignatureRequestsSignatureRequestId
     * @summary Fetch a Signature Request
     * @request GET:/signature_requests/{signatureRequestId}
     * @secure
     */
    getSignatureRequestsSignatureRequestId: (
      signatureRequestId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        SignatureRequest,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a given Signature Request. Any parameters not provided are left unchanged.
     *
     * @tags Signature Request
     * @name PatchSignatureRequestsSignatureRequestId
     * @summary Update a Signature Request
     * @request PATCH:/signature_requests/{signatureRequestId}
     * @secure
     */
    patchSignatureRequestsSignatureRequestId: (
      signatureRequestId: UUID,
      data: UpdateSignatureRequest,
      params: RequestParams = {}
    ) =>
      this.request<
        SignatureRequest,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Activates a Signature request, so it is not in `draft` status anymore. If the `delivery_mode` is not `null`, activating the Signature Request will trigger the notifications to Approvers/Followers/Signers.
     *
     * @tags Signature Request
     * @name PostSignatureRequestsSignatureRequestIdActivate
     * @summary Activate a Signature Request
     * @request POST:/signature_requests/{signatureRequestId}/activate
     * @secure
     */
    postSignatureRequestsSignatureRequestIdActivate: (
      signatureRequestId: UUID,
      data: ActivateSignatureRequest,
      params: RequestParams = {}
    ) =>
      this.request<
        SignatureRequestActivated,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/activate`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Adds an Approver to a given Signature Request.
     *
     * @tags Approver
     * @name PostSignatureRequestsSignatureRequestIdApprovers
     * @summary Create a new Approver
     * @request POST:/signature_requests/{signatureRequestId}/approvers
     * @secure
     */
    postSignatureRequestsSignatureRequestIdApprovers: (
      signatureRequestId: UUID,
      data: CreateApprover,
      params: RequestParams = {}
    ) =>
      this.request<
        Approver,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
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
     * @description Deletes a given Approver from a Signature Request.
     *
     * @tags Approver
     * @name DeleteSignatureRequestsSignatureRequestIdApproversApproverId
     * @summary Delete an Approver
     * @request DELETE:/signature_requests/{signatureRequestId}/approvers/{approverId}
     * @secure
     */
    deleteSignatureRequestsSignatureRequestIdApproversApproverId: (
      signatureRequestId: UUID,
      approverId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        any,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/approvers/${approverId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Retrieves a given Approver.
     *
     * @tags Approver
     * @name GetSignatureRequestsSignatureRequestIdApproversApproverId
     * @summary Get an Approver
     * @request GET:/signature_requests/{signatureRequestId}/approvers/{approverId}
     * @secure
     */
    getSignatureRequestsSignatureRequestIdApproversApproverId: (
      signatureRequestId: UUID,
      approverId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        Approver,
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/approvers/${approverId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a given Approver. Any parameters not provided are left unchanged.
     *
     * @tags Approver
     * @name PatchSignatureRequestsSignatureRequestIdApproversApproverId
     * @summary Update an Approver
     * @request PATCH:/signature_requests/{signatureRequestId}/approvers/{approverId}
     * @secure
     */
    patchSignatureRequestsSignatureRequestIdApproversApproverId: (
      signatureRequestId: UUID,
      approverId: UUID,
      data: UpdateApprover,
      params: RequestParams = {}
    ) =>
      this.request<
        Approver,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/approvers/${approverId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Sends a reminder to a given Approver to review their Signature Request. Only possible when the Signature Request status is `approval` and the Approver status is `notified`.
     *
     * @tags Approver
     * @name PostSignatureRequestsSignatureRequestIdApproversApproverIdSendReminder
     * @summary Send manual reminder to an Approver
     * @request POST:/signature_requests/{signatureRequestId}/approvers/{approverId}/send_reminder
     * @secure
     */
    postSignatureRequestsSignatureRequestIdApproversApproverIdSendReminder: (
      signatureRequestId: UUID,
      approverId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        void,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/approvers/${approverId}/send_reminder`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description Download the PDF version of all the Audit Trails attached to a given Signature Request. Each Audit Trail is bound to a different Signer. Only possible when the Signature Request status is `done`.
     *
     * @tags Audit Trail
     * @name GetSignatureRequestsSignatureRequestIdAuditTrailsDownload
     * @summary Download Signature Request Audit Trails
     * @request GET:/signature_requests/{signatureRequestId}/audit_trails/download
     * @secure
     */
    getSignatureRequestsSignatureRequestIdAuditTrailsDownload: (
      signatureRequestId: UUID,
      query?: {
        /**
         * Download all Audit Trails merged as a single PDF file
         * @default false
         */
        merge?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        File,
        | BadRequestResponse
        | UnauthorizedResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/audit_trails/download`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Cancels a Signature Request when it is in `approval` or `ongoing` status. A canceled Signature Request cannot be reactivated.
     *
     * @tags Signature Request
     * @name PostSignatureRequestsSignatureRequestIdCancel
     * @summary Cancel a Signature Request
     * @request POST:/signature_requests/{signatureRequestId}/cancel
     * @secure
     */
    postSignatureRequestsSignatureRequestIdCancel: (
      signatureRequestId: UUID,
      data: PostSignatureRequestsSignatureRequestIdCancelRequest,
      params: RequestParams = {}
    ) =>
      this.request<
        SignatureRequest,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/cancel`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of Signer Consent Requests for a given Signature Request.
     *
     * @tags Signer Consent Request
     * @name GetSignatureRequestsSignatureRequestIdSignerConsentRequests
     * @summary List Signer Consent Requests of the Signature Request
     * @request GET:/signature_requests/{signatureRequestId}/consent_requests
     * @secure
     */
    getSignatureRequestsSignatureRequestIdSignerConsentRequests: (
      signatureRequestId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        GetSignatureRequestsSignatureRequestIdSignerConsentRequests200Response,
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/consent_requests`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Adds a Signer Consent Request to a given Signature Request. This action is only permitted when the Signature Request is a draft.
     *
     * @tags Signer Consent Request
     * @name PostSignatureRequestsSignatureRequestIdConsentRequests
     * @summary Add Signer Consent Request to a Signature Request
     * @request POST:/signature_requests/{signatureRequestId}/consent_requests
     * @secure
     */
    postSignatureRequestsSignatureRequestIdConsentRequests: (
      signatureRequestId: UUID,
      data: CreateSignerConsentRequest,
      params: RequestParams = {}
    ) =>
      this.request<
        SignerConsentRequest,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/consent_requests`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a Signer Consent Request from signature request. This action is only permitted when the Signature Request is a draft.
     *
     * @tags Signer Consent Request
     * @name DeleteSignatureRequestsSignatureRequestIdConsentRequestsConsentRequestId
     * @summary Delete a Signer Consent Request
     * @request DELETE:/signature_requests/{signatureRequestId}/consent_requests/{consentRequestId}
     * @secure
     */
    deleteSignatureRequestsSignatureRequestIdConsentRequestsConsentRequestId: (
      signatureRequestId: UUID,
      consentRequestId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        any,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/consent_requests/${consentRequestId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Updates a given Signer Consent Request. Any parameters not provided are left unchanged. This action is only permitted when the Signature Request is a draft.
     *
     * @tags Signer Consent Request
     * @name PatchSignatureRequestsSignatureRequestIdConsentRequestsConsentRequestId
     * @summary Update a Signer Consent Request
     * @request PATCH:/signature_requests/{signatureRequestId}/consent_requests/{consentRequestId}
     * @secure
     */
    patchSignatureRequestsSignatureRequestIdConsentRequestsConsentRequestId: (
      signatureRequestId: UUID,
      consentRequestId: UUID,
      data: UpdateSignerConsentRequest,
      params: RequestParams = {}
    ) =>
      this.request<
        SignerConsentRequest,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/consent_requests/${consentRequestId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Remove a Signer from a given Signer Consent Request. This action is only permitted when the Signature Request is a draft.
     *
     * @tags Signer Consent Request
     * @name DeleteSignatureRequestsSignatureRequestIdConsentRequestsConsentRequestIdSignersSignerId
     * @summary Remove a Signer from a given Signer Consent Request
     * @request DELETE:/signature_requests/{signatureRequestId}/consent_requests/{consentRequestId}/signers/{signerId}
     * @secure
     */
    deleteSignatureRequestsSignatureRequestIdConsentRequestsConsentRequestIdSignersSignerId:
      (
        signatureRequestId: UUID,
        consentRequestId: UUID,
        signerId: UUID,
        params: RequestParams = {}
      ) =>
        this.request<
          any,
          | BadRequestResponse
          | UnauthorizedResponse
          | ForbiddenResponse
          | NotFoundResponse
          | MethodNotAllowed
          | TooManyRequestsResponse
          | InternalServerError
        >({
          path: `/signature_requests/${signatureRequestId}/consent_requests/${consentRequestId}/signers/${signerId}`,
          method: "DELETE",
          secure: true,
          ...params,
        }),

    /**
     * @description Adds a Signer to a given Signer Consent Request. This action is only permitted when the Signature Request is a draft.
     *
     * @tags Signer Consent Request
     * @name PutSignatureRequestsSignatureRequestIdConsentRequestsConsentRequestIdSignersSignerId
     * @summary Adds a Signer to a given Signer Consent Request
     * @request PUT:/signature_requests/{signatureRequestId}/consent_requests/{consentRequestId}/signers/{signerId}
     * @secure
     */
    putSignatureRequestsSignatureRequestIdConsentRequestsConsentRequestIdSignersSignerId:
      (
        signatureRequestId: UUID,
        consentRequestId: UUID,
        signerId: UUID,
        params: RequestParams = {}
      ) =>
        this.request<
          void,
          | BadRequestResponse
          | UnauthorizedResponse
          | ForbiddenResponse
          | NotFoundResponse
          | MethodNotAllowed
          | TooManyRequestsResponse
          | InternalServerError
        >({
          path: `/signature_requests/${signatureRequestId}/consent_requests/${consentRequestId}/signers/${signerId}`,
          method: "PUT",
          secure: true,
          ...params,
        }),

    /**
     * @description Returns a list of Signer Document Requests for a given Signature Request.
     *
     * @tags Signer Document Request
     * @name GetSignatureRequestsSignatureRequestIdSignerDocumentRequests
     * @summary List Signer Document Requests of the Signature Request
     * @request GET:/signature_requests/{signatureRequestId}/document_requests
     * @secure
     */
    getSignatureRequestsSignatureRequestIdSignerDocumentRequests: (
      signatureRequestId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        GetSignatureRequestsSignatureRequestIdSignerDocumentRequests200Response,
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/document_requests`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Adds a Signer Document Request to a given Signature Request.
     *
     * @tags Signer Document Request
     * @name PostSignatureRequestsSignatureRequestIdDocumentRequests
     * @summary Add Signer Document Request to a Signature Request
     * @request POST:/signature_requests/{signatureRequestId}/document_requests
     * @secure
     */
    postSignatureRequestsSignatureRequestIdDocumentRequests: (
      signatureRequestId: UUID,
      data: CreateSignerDocumentRequest,
      params: RequestParams = {}
    ) =>
      this.request<
        SignerDocumentRequest,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/document_requests`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a Signer Document Request from signature request. This action is only permitted when the Signature Request is a draft.
     *
     * @tags Signer Document Request
     * @name DeleteSignatureRequestsSignatureRequestIdDocumentRequestsDocumentRequestId
     * @summary Delete a Signer Document Request
     * @request DELETE:/signature_requests/{signatureRequestId}/document_requests/{documentRequestId}
     * @secure
     */
    deleteSignatureRequestsSignatureRequestIdDocumentRequestsDocumentRequestId:
      (
        signatureRequestId: UUID,
        documentRequestId: UUID,
        params: RequestParams = {}
      ) =>
        this.request<
          any,
          | BadRequestResponse
          | UnauthorizedResponse
          | ForbiddenResponse
          | NotFoundResponse
          | MethodNotAllowed
          | TooManyRequestsResponse
          | InternalServerError
        >({
          path: `/signature_requests/${signatureRequestId}/document_requests/${documentRequestId}`,
          method: "DELETE",
          secure: true,
          ...params,
        }),

    /**
     * @description Remove a Signer to a given Signer Document Request. This action is only permitted when the Signature Request is a draft.
     *
     * @tags Signer Document Request
     * @name DeleteSignatureRequestsSignatureRequestIdDocumentRequestsDocumentRequestIdSignersSignerId
     * @summary Remove a Signer to a given Signer Document Request
     * @request DELETE:/signature_requests/{signatureRequestId}/document_requests/{documentRequestId}/signers/{signerId}
     * @secure
     */
    deleteSignatureRequestsSignatureRequestIdDocumentRequestsDocumentRequestIdSignersSignerId:
      (
        signatureRequestId: UUID,
        documentRequestId: UUID,
        signerId: UUID,
        params: RequestParams = {}
      ) =>
        this.request<
          any,
          | BadRequestResponse
          | UnauthorizedResponse
          | ForbiddenResponse
          | NotFoundResponse
          | MethodNotAllowed
          | TooManyRequestsResponse
          | InternalServerError
        >({
          path: `/signature_requests/${signatureRequestId}/document_requests/${documentRequestId}/signers/${signerId}`,
          method: "DELETE",
          secure: true,
          ...params,
        }),

    /**
     * @description Adds a Signer to a given Signer Document Request. This action is only permitted when the Signature Request is a draft.
     *
     * @tags Signer Document Request
     * @name PutSignatureRequestsSignatureRequestIdDocumentRequestsDocumentRequestIdSignersSignerId
     * @summary Adds a Signer to a given Signer Document Request
     * @request PUT:/signature_requests/{signatureRequestId}/document_requests/{documentRequestId}/signers/{signerId}
     * @secure
     */
    putSignatureRequestsSignatureRequestIdDocumentRequestsDocumentRequestIdSignersSignerId:
      (
        signatureRequestId: UUID,
        documentRequestId: UUID,
        signerId: UUID,
        params: RequestParams = {}
      ) =>
        this.request<
          SignerDocumentRequest,
          | BadRequestResponse
          | UnauthorizedResponse
          | ForbiddenResponse
          | NotFoundResponse
          | MethodNotAllowed
          | TooManyRequestsResponse
          | InternalServerError
        >({
          path: `/signature_requests/${signatureRequestId}/document_requests/${documentRequestId}/signers/${signerId}`,
          method: "PUT",
          secure: true,
          format: "json",
          ...params,
        }),

    /**
     * @description Returns a list of Documents for a given Signature Request.
     *
     * @tags Document
     * @name GetSignatureRequestsSignatureRequestIdDocuments
     * @summary List Signature Request's Documents
     * @request GET:/signature_requests/{signatureRequestId}/documents
     * @secure
     */
    getSignatureRequestsSignatureRequestIdDocuments: (
      signatureRequestId: UUID,
      query?: {
        /**
         * Filter by nature.
         * @example {"eq":["attachment"]}
         */
        nature?: object;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        Document[],
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/documents`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Add a sealed Document to a given Signature Request.
     *
     * @tags Document
     * @name PostSignatureRequestsSignatureRequestIdDocuments
     * @summary Add a sealed Document to a Signature Request
     * @request POST:/signature_requests/{signatureRequestId}/documents
     * @secure
     */
    postSignatureRequestsSignatureRequestIdDocuments: (
      signatureRequestId: UUID,
      data: CreateDocumentFromMultipart,
      params: RequestParams = {}
    ) =>
      this.request<
        Document,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/documents`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Downloads the PDF version of all Documents attached to a given Signature Request.
     *
     * @tags Document
     * @name GetSignatureRequestsSignatureRequestIdDocumentsDownload
     * @summary Download Signature Request's Documents
     * @request GET:/signature_requests/{signatureRequestId}/documents/download
     * @secure
     */
    getSignatureRequestsSignatureRequestIdDocumentsDownload: (
      signatureRequestId: UUID,
      query?: {
        /** Specify Documents version to download, `completed` is only available when the Signature Request status is `done`. */
        version?: "current" | "completed";
        /** Force zip archive download */
        archive?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        File,
        | BadRequestResponse
        | UnauthorizedResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/documents/download`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Deletes a given Document from a Signature Request.
     *
     * @tags Document
     * @name DeleteSignatureRequestsSignatureRequestIdDocumentsDocumentId
     * @summary Delete a Document
     * @request DELETE:/signature_requests/{signatureRequestId}/documents/{documentId}
     * @secure
     */
    deleteSignatureRequestsSignatureRequestIdDocumentsDocumentId: (
      signatureRequestId: UUID,
      documentId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        any,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/documents/${documentId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Retrieves a given Document.
     *
     * @tags Document
     * @name GetSignatureRequestsSignatureRequestIdDocumentsDocumentId
     * @summary Get a Document
     * @request GET:/signature_requests/{signatureRequestId}/documents/{documentId}
     * @secure
     */
    getSignatureRequestsSignatureRequestIdDocumentsDocumentId: (
      signatureRequestId: UUID,
      documentId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        Document,
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/documents/${documentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a given Document. Any parameters not provided are left unchanged.
     *
     * @tags Document
     * @name PatchSignatureRequestsSignatureRequestIdDocumentsDocumentId
     * @summary Update a Document
     * @request PATCH:/signature_requests/{signatureRequestId}/documents/{documentId}
     * @secure
     */
    patchSignatureRequestsSignatureRequestIdDocumentsDocumentId: (
      signatureRequestId: UUID,
      documentId: UUID,
      data: UpdateDocument,
      params: RequestParams = {}
    ) =>
      this.request<
        Document,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/documents/${documentId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Downloads the PDF version of a given Document.
     *
     * @tags Document
     * @name GetSignatureRequestsSignatureRequestIdDocumentsDocumentsIdDownload
     * @summary Download a single Signature Request's Document
     * @request GET:/signature_requests/{signatureRequestId}/documents/{documentId}/download
     * @secure
     */
    getSignatureRequestsSignatureRequestIdDocumentsDocumentsIdDownload: (
      signatureRequestId: UUID,
      documentId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        File,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/documents/${documentId}/download`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns a list of Fields for a given Document. You can limit the number of items returned by using filters.
     *
     * @tags Field
     * @name GetSignatureRequestsSignatureRequestIdDocumentsDocumentIdFields
     * @summary Lists the Fields of a Signature Request Document.
     * @request GET:/signature_requests/{signatureRequestId}/documents/{documentId}/fields
     * @secure
     */
    getSignatureRequestsSignatureRequestIdDocumentsDocumentIdFields: (
      signatureRequestId: UUID,
      documentId: UUID,
      query?: {
        /**
         * After cursor (pagination)
         * @minLength 1
         */
        after?: string;
        /**
         * The limit of items count to retrieve.
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
        /**
         * Filter by type.
         * @example {"eq":["text"],"in":["text","checkbox"]}
         */
        type?: object;
        /**
         * Filter by signer_id.
         * @example {"eq":["500800fc-3f91-4e86-a9c9-866809a1e3c9"]}
         */
        signer_id?: object;
        /**
         * Filter by name.
         * @example {"eq":["text 1"]}
         */
        name?: object;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        GetSignatureRequestsSignatureRequestIdDocumentsDocumentIdFields200Response,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/documents/${documentId}/fields`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Adds a Field to a given Document.
     *
     * @tags Field
     * @name PostSignatureRequestsSignatureRequestIdDocumentsDocumentIdFields
     * @summary Create a new Field on a Document
     * @request POST:/signature_requests/{signatureRequestId}/documents/{documentId}/fields
     * @secure
     */
    postSignatureRequestsSignatureRequestIdDocumentsDocumentIdFields: (
      signatureRequestId: UUID,
      documentId: UUID,
      data: CreateField,
      params: RequestParams = {}
    ) =>
      this.request<
        GetSignatureRequestsSignatureRequestIdDocumentsDocumentIdFields200ResponseDataInner,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/documents/${documentId}/fields`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a given Field from a Document.
     *
     * @tags Field
     * @name DeleteSignatureRequestsSignatureRequestIdDocumentsDocumentIdFieldsFieldId
     * @summary Delete a Field
     * @request DELETE:/signature_requests/{signatureRequestId}/documents/{documentId}/fields/{fieldId}
     * @secure
     */
    deleteSignatureRequestsSignatureRequestIdDocumentsDocumentIdFieldsFieldId: (
      signatureRequestId: UUID,
      documentId: UUID,
      fieldId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        any,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/documents/${documentId}/fields/${fieldId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Updates a given Field. Any parameters not provided are left unchanged.
     *
     * @tags Field
     * @name UpdateSignatureRequestsSignatureRequestIdDocumentsDocumentIdFieldsFieldId
     * @summary Update a Field
     * @request PATCH:/signature_requests/{signatureRequestId}/documents/{documentId}/fields/{fieldId}
     * @secure
     */
    updateSignatureRequestsSignatureRequestIdDocumentsDocumentIdFieldsFieldId: (
      signatureRequestId: UUID,
      documentId: UUID,
      fieldId: UUID,
      data: UpdateField,
      params: RequestParams = {}
    ) =>
      this.request<
        GetSignatureRequestsSignatureRequestIdDocumentsDocumentIdFields200ResponseDataInner,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/documents/${documentId}/fields/${fieldId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint can be used on ongoing Signature Requests only. It aims to fill a Field value with a Signer input collected in your custom signing interface. The Fields compatible are Text Fields, Checkboxes and Radio Groups.
     *
     * @tags Field
     * @name SignatureRequestsIdDocumentsIdFieldsIdAnswer
     * @summary Answer a Field
     * @request POST:/signature_requests/{signatureRequestId}/documents/{documentId}/fields/{fieldId}/answer
     * @secure
     */
    signatureRequestsIdDocumentsIdFieldsIdAnswer: (
      signatureRequestId: UUID,
      documentId: UUID,
      fieldId: UUID,
      data: FieldAnswer,
      params: RequestParams = {}
    ) =>
      this.request<
        any,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/documents/${documentId}/fields/${fieldId}/answer`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Replace the file of a given Document.
     *
     * @tags Document
     * @name PostSignatureRequestsSignatureRequestIdDocumentsDocumentIdReplace
     * @summary Replace a Document in a Signature Request
     * @request POST:/signature_requests/{signatureRequestId}/documents/{documentId}/replace
     * @secure
     */
    postSignatureRequestsSignatureRequestIdDocumentsDocumentIdReplace: (
      signatureRequestId: UUID,
      documentId: UUID,
      data: PostSignatureRequestsSignatureRequestIdDocumentsDocumentIdReplaceRequest,
      params: RequestParams = {}
    ) =>
      this.request<
        Document,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/documents/${documentId}/replace`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of Followers for a given Signature Request.
     *
     * @tags Follower
     * @name GetSignatureRequestsSignatureRequestIdFollowers
     * @summary List the Signature Request's Followers
     * @request GET:/signature_requests/{signatureRequestId}/followers
     * @secure
     */
    getSignatureRequestsSignatureRequestIdFollowers: (
      signatureRequestId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        GetSignatureRequestsSignatureRequestIdFollowers200Response,
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/followers`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Adds a Follower to a given Signature Request.
     *
     * @tags Follower
     * @name PostSignatureRequestsSignatureRequestIdFollowers
     * @summary Create new Followers
     * @request POST:/signature_requests/{signatureRequestId}/followers
     * @secure
     */
    postSignatureRequestsSignatureRequestIdFollowers: (
      signatureRequestId: UUID,
      data: CreateFollowers,
      params: RequestParams = {}
    ) =>
      this.request<
        Follower[],
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
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
     * @description Returns the list of Labels associated with a given Signature Request.
     *
     * @tags Label
     * @name GetSignatureRequestsIdLabels
     * @summary List Labels of a Signature Request
     * @request GET:/signature_requests/{signatureRequestId}/labels
     * @secure
     */
    getSignatureRequestsIdLabels: (
      signatureRequestId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        GetSignatureRequestsIdLabels200Response,
        | BadRequestResponse
        | UnauthorizedResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/labels`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Removes a Label from a given Signature Request.
     *
     * @tags Label
     * @name DeleteSignatureRequestsIdLabelsId
     * @summary Remove Label from a Signature Request
     * @request DELETE:/signature_requests/{signatureRequestId}/labels/{labelId}
     * @secure
     */
    deleteSignatureRequestsIdLabelsId: (
      signatureRequestId: UUID,
      labelId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        any,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/labels/${labelId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Associates a Label with a given Signature Request.
     *
     * @tags Label
     * @name PutSignatureRequestsIdLabelsId
     * @summary Associate a Label with a Signature Request
     * @request PUT:/signature_requests/{signatureRequestId}/labels/{labelId}
     * @secure
     */
    putSignatureRequestsIdLabelsId: (
      signatureRequestId: UUID,
      labelId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        any,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/labels/${labelId}`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description Deletes the Metadata of a given Signature Request.
     *
     * @tags Metadata
     * @name DeleteSignatureRequestsSignatureRequestIdMetadata
     * @summary Delete the Signature Request Metadata
     * @request DELETE:/signature_requests/{signatureRequestId}/metadata
     * @secure
     */
    deleteSignatureRequestsSignatureRequestIdMetadata: (
      signatureRequestId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        any,
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/metadata`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Retrieves the Metadata of a given Signature Request.
     *
     * @tags Metadata
     * @name GetSignatureRequestsSignatureRequestIdMetadata
     * @summary Get the Signature Request Metadata
     * @request GET:/signature_requests/{signatureRequestId}/metadata
     * @secure
     */
    getSignatureRequestsSignatureRequestIdMetadata: (
      signatureRequestId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        Metadata,
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/metadata`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Add Metadata to a given Signature Request.
     *
     * @tags Metadata
     * @name PostSignatureRequestsSignatureRequestIdMetadata
     * @summary Attach Metadata to a Signature Request
     * @request POST:/signature_requests/{signatureRequestId}/metadata
     * @secure
     */
    postSignatureRequestsSignatureRequestIdMetadata: (
      signatureRequestId: UUID,
      data: Metadata,
      params: RequestParams = {}
    ) =>
      this.request<
        Metadata,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/metadata`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates the Metadata of a given Signature Request. Any parameters not provided are left unchanged.
     *
     * @tags Metadata
     * @name PutSignatureRequestsSignatureRequestIdMetadata
     * @summary Update Metadata of a Signature Request
     * @request PUT:/signature_requests/{signatureRequestId}/metadata
     * @secure
     */
    putSignatureRequestsSignatureRequestIdMetadata: (
      signatureRequestId: UUID,
      data: Metadata,
      params: RequestParams = {}
    ) =>
      this.request<
        Metadata,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/metadata`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Reactivates a Signature Request when it is in `expired` status.
     *
     * @tags Signature Request
     * @name PostSignatureRequestsSignatureRequestIdReactivate
     * @summary Reactivate an expired Signature Request
     * @request POST:/signature_requests/{signatureRequestId}/reactivate
     * @secure
     */
    postSignatureRequestsSignatureRequestIdReactivate: (
      signatureRequestId: UUID,
      data: PostSignatureRequestsSignatureRequestIdReactivateRequest,
      params: RequestParams = {}
    ) =>
      this.request<
        SignatureRequest,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/reactivate`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of Signers for a given Signature Request.
     *
     * @tags Signer
     * @name GetSignatureRequestsSignatureRequestIdSigners
     * @summary List Signature Request's Signers
     * @request GET:/signature_requests/{signatureRequestId}/signers
     * @secure
     */
    getSignatureRequestsSignatureRequestIdSigners: (
      signatureRequestId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        Signer[],
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/signers`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Adds a Signer to a given Signature Request.
     *
     * @tags Signer
     * @name PostSignatureRequestsSignatureRequestIdSigners
     * @summary Create a new Signer
     * @request POST:/signature_requests/{signatureRequestId}/signers
     * @secure
     */
    postSignatureRequestsSignatureRequestIdSigners: (
      signatureRequestId: UUID,
      data: CreateSigner,
      params: RequestParams = {}
    ) =>
      this.request<
        Signer,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
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
     * @description Deletes a given Signer from a Signature Request.
     *
     * @tags Signer
     * @name DeleteSignatureRequestsSignatureRequestIdSignersSignerId
     * @summary Delete a Signer
     * @request DELETE:/signature_requests/{signatureRequestId}/signers/{signerId}
     * @secure
     */
    deleteSignatureRequestsSignatureRequestIdSignersSignerId: (
      signatureRequestId: UUID,
      signerId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        any,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/signers/${signerId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Retrieves a given Signer.
     *
     * @tags Signer
     * @name GetSignersSignersId
     * @summary Get a Signer
     * @request GET:/signature_requests/{signatureRequestId}/signers/{signerId}
     * @secure
     */
    getSignersSignersId: (
      signatureRequestId: UUID,
      signerId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        Signer,
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/signers/${signerId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a given Signer. Any parameters not provided are left unchanged.
     *
     * @tags Signer
     * @name PatchSignatureRequestsSignatureRequestIdSignersSignerId
     * @summary Update a Signer
     * @request PATCH:/signature_requests/{signatureRequestId}/signers/{signerId}
     * @secure
     */
    patchSignatureRequestsSignatureRequestIdSignersSignerId: (
      signatureRequestId: UUID,
      signerId: UUID,
      data: UpdateSigner,
      params: RequestParams = {}
    ) =>
      this.request<
        Signer,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/signers/${signerId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves the JSON version of the Audit Trail attached to a given Signer. Only possible when Signer status is `signed`.
     *
     * @tags Audit Trail
     * @name GetSignatureRequestsSignatureRequestIdSignersSignerIdAuditTrails
     * @summary Get Signer Audit Trail
     * @request GET:/signature_requests/{signatureRequestId}/signers/{signerId}/audit_trails
     * @secure
     */
    getSignatureRequestsSignatureRequestIdSignersSignerIdAuditTrails: (
      signatureRequestId: UUID,
      signerId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        SignerAuditTrail,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/signers/${signerId}/audit_trails`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Download the PDF version of the Audit Trail attached to a given Signer. Only possible when Signer status is `signed`.
     *
     * @tags Audit Trail
     * @name GetSignersSignerIdAuditTrailsDownload
     * @summary Download Audit Trail PDF
     * @request GET:/signature_requests/{signatureRequestId}/signers/{signerId}/audit_trails/download
     * @secure
     */
    getSignersSignerIdAuditTrailsDownload: (
      signatureRequestId: UUID,
      signerId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        File,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/signers/${signerId}/audit_trails/download`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Deletes all documents uploaded by a given Signer for a specific Signature Request. Deletion is only possible when Signer status is `signed`.
     *
     * @tags Signer Document Request
     * @name DeleteSignatureRequestsSignatureRequestIdSignersSignerIdDocuments
     * @summary Delete the Documents uploaded by a Signer
     * @request DELETE:/signature_requests/{signatureRequestId}/signers/{signerId}/documents
     * @secure
     */
    deleteSignatureRequestsSignatureRequestIdSignersSignerIdDocuments: (
      signatureRequestId: UUID,
      signerId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        any,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/signers/${signerId}/documents`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns a list of Documents uploaded by a given Signer. Only possible when Signer status is `signed`.
     *
     * @tags Signer Document Request
     * @name GetSignatureRequestsSignatureRequestIdSignersSignerIdDocuments
     * @summary List the Signer Documents of a Signer
     * @request GET:/signature_requests/{signatureRequestId}/signers/{signerId}/documents
     * @secure
     */
    getSignatureRequestsSignatureRequestIdSignersSignerIdDocuments: (
      signatureRequestId: UUID,
      signerId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        GetSignatureRequestsSignatureRequestIdSignersSignerIdDocuments200Response,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/signers/${signerId}/documents`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Downloads a Document uploaded by a given Signer. Only possible when Signer status is `signed`.
     *
     * @tags Signer Document Request
     * @name GetSignatureRequestsSignatureRequestIdSignersSignerIdDocumentsSignerDocumentId
     * @summary Download a Signer Document
     * @request GET:/signature_requests/{signatureRequestId}/signers/{signerId}/documents/{signerDocumentId}/download
     * @secure
     */
    getSignatureRequestsSignatureRequestIdSignersSignerIdDocumentsSignerDocumentId:
      (
        signatureRequestId: UUID,
        signerId: UUID,
        signerDocumentId: UUID,
        params: RequestParams = {}
      ) =>
        this.request<
          File,
          | BadRequestResponse
          | UnauthorizedResponse
          | ForbiddenResponse
          | NotFoundResponse
          | MethodNotAllowed
          | TooManyRequestsResponse
          | InternalServerError
        >({
          path: `/signature_requests/${signatureRequestId}/signers/${signerId}/documents/${signerDocumentId}/download`,
          method: "GET",
          secure: true,
          ...params,
        }),

    /**
     * @description Verifying an identity document for a Signer to know if their document is valid before enabling them to sign using Advanced Electronic Signature.
     *
     * @tags Signer
     * @name PostSignatureRequestsIdSignersIdIdentityVerification
     * @summary Pre-verify an identity document
     * @request POST:/signature_requests/{signatureRequestId}/signers/{signerId}/identity_verification
     * @secure
     */
    postSignatureRequestsIdSignersIdIdentityVerification: (
      signatureRequestId: UUID,
      signerId: UUID,
      data: SignerIdentityVerification,
      params: RequestParams = {}
    ) =>
      this.request<
        any,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/signers/${signerId}/identity_verification`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description Send a One-Time Password (OTP) to a given Signer. Use this endpoint only if you use your own signing flow.
     *
     * @tags Signer
     * @name PostSignatureRequestsSignatureRequestIdSignersSignerIdSendOtp
     * @summary Send a One-Time Password (OTP) to a Signer
     * @request POST:/signature_requests/{signatureRequestId}/signers/{signerId}/send_otp
     * @secure
     */
    postSignatureRequestsSignatureRequestIdSignersSignerIdSendOtp: (
      signatureRequestId: UUID,
      signerId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        any,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/signers/${signerId}/send_otp`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description Sends a reminder to a given signer to complete their Signature Request. Only possible when the Signature Request status is `ongoing` and the Signer status is `notified`.
     *
     * @tags Signer
     * @name PostSignatureRequestsSignatureRequestIdSignersSignerIdSendReminder
     * @summary Send manual reminder to a Signer
     * @request POST:/signature_requests/{signatureRequestId}/signers/{signerId}/send_reminder
     * @secure
     */
    postSignatureRequestsSignatureRequestIdSignersSignerIdSendReminder: (
      signatureRequestId: UUID,
      signerId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        void,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/signers/${signerId}/send_reminder`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description Sign a Signature Request on behalf of a given Signer.
     *
     * @tags Signer
     * @name PostSignatureRequestsSignatureRequestIdSignersSignerIdSign
     * @summary Sign a Signature Request
     * @request POST:/signature_requests/{signatureRequestId}/signers/{signerId}/sign
     * @secure
     */
    postSignatureRequestsSignatureRequestIdSignersSignerIdSign: (
      signatureRequestId: UUID,
      signerId: UUID,
      data: SignerSign,
      params: RequestParams = {}
    ) =>
      this.request<
        any,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/signers/${signerId}/sign`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Unblock a Signer during a Qualified Electronic Signature in cases where a mismatch was previously detected between the sender-provided first and/or last name and the information on the Signer's ID document.
     *
     * @tags Signer
     * @name PostSignatureRequestsIdSignersIdUnblockIdentification
     * @summary Unblock Signer after an identity mismatch
     * @request POST:/signature_requests/{signatureRequestId}/signers/{signerId}/unblock_identification
     * @secure
     */
    postSignatureRequestsIdSignersIdUnblockIdentification: (
      signatureRequestId: UUID,
      signerId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        any,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/signature_requests/${signatureRequestId}/signers/${signerId}/unblock_identification`,
        method: "POST",
        secure: true,
        ...params,
      }),
  };
  templates = {
    /**
     * @description Returns the list of all Templates within your Organization.
     *
     * @tags Template
     * @name GetTemplates
     * @summary List Templates
     * @request GET:/templates
     * @secure
     */
    getTemplates: (
      query?: {
        /**
         * After cursor (pagination)
         * @minLength 1
         */
        after?: string;
        /**
         * The limit of items count to retrieve.
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        GetTemplates200Response,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/templates`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * @description Returns the list of all the Users within your Organization.
     *
     * @tags User
     * @name GetUsers
     * @summary List Users
     * @request GET:/users
     * @secure
     */
    getUsers: (
      query?: {
        /**
         * After cursor (pagination)
         * @minLength 1
         */
        after?: string;
        /**
         * The limit of items count to retrieve.
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
        /**
         * Filter by email.
         * @example {"eq":["user@example.com"]}
         */
        email?: object;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        GetUsers200Response,
        | BadRequestResponse
        | UnauthorizedResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new application User and sends them an invitation email.
     *
     * @tags User
     * @name PostUsers
     * @summary Create a new User
     * @request POST:/users
     * @secure
     */
    postUsers: (data: CreateUser, params: RequestParams = {}) =>
      this.request<
        User,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the list of all the Users Invitations within your Organization.
     *
     * @tags User Invitation
     * @name GetInvitations
     * @summary List User Invitations
     * @request GET:/users/invitations
     * @secure
     */
    getInvitations: (
      query?: {
        /**
         * After cursor (pagination)
         * @minLength 1
         */
        after?: string;
        /**
         * The limit of items count to retrieve.
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
        /**
         * Filter by email.
         * @example {"eq":["user@example.com"]}
         */
        email?: object;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        GetInvitations200Response,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/users/invitations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a given User Invitation.
     *
     * @tags User Invitation
     * @name GetUsersInvitationInvitationId
     * @summary Get an Invitation
     * @request GET:/users/invitations/{invitationId}
     * @secure
     */
    getUsersInvitationInvitationId: (
      invitationId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        UserInvitation,
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/users/invitations/${invitationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a given User and its Invitation, only possible when the User is in `invited` status.
     *
     * @tags User
     * @name DeleteUsersUserId
     * @summary Delete a User
     * @request DELETE:/users/{userId}
     * @secure
     */
    deleteUsersUserId: (userId: UUID, params: RequestParams = {}) =>
      this.request<
        any,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/users/${userId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Retrieves a given User within your Organization.
     *
     * @tags User
     * @name GetUsersUserId
     * @summary Get a User
     * @request GET:/users/{userId}
     * @secure
     */
    getUsersUserId: (userId: UUID, params: RequestParams = {}) =>
      this.request<
        User,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/users/${userId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a given User. Any parameters not provided are left unchanged.
     *
     * @tags User
     * @name PatchUsersUserId
     * @summary Update a User
     * @request PATCH:/users/{userId}
     * @secure
     */
    patchUsersUserId: (
      userId: UUID,
      data: UpdateUser,
      params: RequestParams = {}
    ) =>
      this.request<
        User,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/users/${userId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves the Invitation of a given User. The Invitation only exists when the User is in `invited` status.
     *
     * @tags User Invitation
     * @name GetUsersUserIdInvitation
     * @summary Get a User Invitation via the User
     * @request GET:/users/{userId}/invitation
     * @secure
     */
    getUsersUserIdInvitation: (userId: UUID, params: RequestParams = {}) =>
      this.request<
        UserInvitation,
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/users/${userId}/invitation`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  verifications = {
    /**
     * @description Returns the list of all Bank Account Connection Verifications within your organization. You can limit the number of items returned by using filters and pagination.
     *
     * @tags Bank Account Connection Verification
     * @name GetVerificationsBankAccountConnections
     * @summary List Bank Account Connection Verifications
     * @request GET:/verifications/bank_account_connections
     * @secure
     */
    getVerificationsBankAccountConnections: (
      query?: {
        /**
         * After cursor (pagination)
         * @minLength 1
         */
        after?: string;
        /**
         * The limit of items count to retrieve.
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
        /**
         * Filter by status.
         * @example {"eq":"verified"}
         */
        status?: object;
        /**
         * Filter by workspace_id.
         * @example {"eq":"9b6ed2f3-244f-487a-baa1-bbe4f51c8748"}
         */
        workspace_id?: object;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        GetVerificationsBankAccountConnections200Response,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/verifications/bank_account_connections`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Initiate a new Bank Account Connection resource
     *
     * @tags Bank Account Connection Verification
     * @name PostVerificationsBankAccountConnections
     * @summary Initiate a new Bank Account Connection
     * @request POST:/verifications/bank_account_connections
     * @secure
     */
    postVerificationsBankAccountConnections: (
      data: PostVerificationsBankAccountConnectionsRequest,
      params: RequestParams = {}
    ) =>
      this.request<
        BankAccountConnectionFull,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/verifications/bank_account_connections`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get the detailed results of a Bank Account Connection Verification.
     *
     * @tags Bank Account Connection Verification
     * @name GetVerificationsBankAccountConnectionsId
     * @summary Retrieve a Bank Account Connection Verification
     * @request GET:/verifications/bank_account_connections/{verificationId}
     * @secure
     */
    getVerificationsBankAccountConnectionsId: (
      verificationId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        BankAccountConnectionFull,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/verifications/bank_account_connections/${verificationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the list of all Bank Account Lookup Verifications within your organization. You can limit the number of items returned by using filters and pagination. Consult our guide for more details and examples.
     *
     * @tags Bank Account Lookup Verification
     * @name GetVerificationsBankAccountLookups
     * @summary List Bank Account Lookup Verifications
     * @request GET:/verifications/bank_account_lookups
     * @secure
     */
    getVerificationsBankAccountLookups: (
      query?: {
        /**
         * After cursor (pagination)
         * @minLength 1
         */
        after?: string;
        /**
         * The limit of items count to retrieve.
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
        /**
         * Filter by status.
         * @example {"eq":["verified"]}
         */
        status?: object;
        /**
         * Filter by workspace_id.
         * @example {"eq":["9b6ed2f3-244f-487a-baa1-bbe4f51c8748"]}
         */
        workspace_id?: object;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        GetVerificationsBankAccountLookups200Response,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/verifications/bank_account_lookups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Initiate a new Bank Account Lookup Verification to check if a bank account exists and belongs to the specified person or company.
     *
     * @tags Bank Account Lookup Verification
     * @name PostVerificationsBankAccountLookups
     * @summary Initiate a new Bank Account Lookup Verification
     * @request POST:/verifications/bank_account_lookups
     * @secure
     */
    postVerificationsBankAccountLookups: (
      data: PostVerificationsBankAccountLookupsRequest,
      params: RequestParams = {}
    ) =>
      this.request<
        BankAccountLookupMeta,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/verifications/bank_account_lookups`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve a specific Bank Account Lookup Verification by its ID.
     *
     * @tags Bank Account Lookup Verification
     * @name GetVerificationsBankAccountLookupsId
     * @summary Retrieve a Bank Account Lookup Verification
     * @request GET:/verifications/bank_account_lookups/{bankAccountLookupVerificationId}
     * @secure
     */
    getVerificationsBankAccountLookupsId: (
      bankAccountLookupVerificationId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        BankAccountLookupMeta,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/verifications/bank_account_lookups/${bankAccountLookupVerificationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the list of all Bank Account Verifications within your organization. You can limit the number of items returned by using filters and pagination. Consult our guide for more details and examples.
     *
     * @tags Bank Account Verification
     * @name GetVerificationsBankAccounts
     * @summary List Bank Account Verifications
     * @request GET:/verifications/bank_accounts
     * @secure
     */
    getVerificationsBankAccounts: (
      query?: {
        /**
         * After cursor (pagination)
         * @minLength 1
         */
        after?: string;
        /**
         * The limit of items count to retrieve.
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
        /**
         * Filter by status.
         * @example {"eq":["verified"]}
         */
        status?: object;
        /**
         * Filter by workspace_id.
         * @example {"eq":["9b6ed2f3-244f-487a-baa1-bbe4f51c8748"]}
         */
        workspace_id?: object;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        GetVerificationsBankAccounts200Response,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/verifications/bank_accounts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Ask for a Bank Account Verification by sending the file containing the bank account details, such as IBAN and BIC.
     *
     * @tags Bank Account Verification
     * @name PostVerificationsBankAccounts
     * @summary Initiate a new Bank Account Verification
     * @request POST:/verifications/bank_accounts
     * @secure
     */
    postVerificationsBankAccounts: (
      data: PostVerificationsBankAccountsRequest,
      params: RequestParams = {}
    ) =>
      this.request<
        BankAccountFull,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/verifications/bank_accounts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * @description Get the detailed results of a Bank Account Verification.
     *
     * @tags Bank Account Verification
     * @name GetVerificationsBankAccountsId
     * @summary Retrieve a Bank Account Verification
     * @request GET:/verifications/bank_accounts/{bankAccountVerificationId}
     * @secure
     */
    getVerificationsBankAccountsId: (
      bankAccountVerificationId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        BankAccountFull,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/verifications/bank_accounts/${bankAccountVerificationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the list of all Company Verifications within your organization. You can limit the number of items returned by using filters and pagination. Consult our guide for more details and examples.
     *
     * @tags Company Verification
     * @name GetVerificationsCompanies
     * @summary List Company Verifications
     * @request GET:/verifications/companies
     * @secure
     */
    getVerificationsCompanies: (
      query?: {
        /**
         * After cursor (pagination)
         * @minLength 1
         */
        after?: string;
        /**
         * The limit of items count to retrieve.
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
        /**
         * Filter by status.
         * @example {"eq":["verified"]}
         */
        status?: object;
        /**
         * Filter by workspace_id.
         * @example {"eq":["9b6ed2f3-244f-487a-baa1-bbe4f51c8748"]}
         */
        workspace_id?: object;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        GetVerificationsCompanies200Response,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/verifications/companies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Initiate a new Company Verification
     *
     * @tags Company Verification
     * @name PostVerificationsCompanies
     * @summary Initiate a new Company Verification
     * @request POST:/verifications/companies
     * @secure
     */
    postVerificationsCompanies: (
      data: InitiateCompanyFromJson,
      params: RequestParams = {}
    ) =>
      this.request<
        CompanyFull,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/verifications/companies`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get the detailed results of a Company Verification.
     *
     * @tags Company Verification
     * @name GetVerificationsCompaniesId
     * @summary Retrieve a Company Verification
     * @request GET:/verifications/companies/{companyVerificationId}
     * @secure
     */
    getVerificationsCompaniesId: (
      companyVerificationId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        CompanyFull,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/verifications/companies/${companyVerificationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the list of all Identity Document Verifications within your organization. You can limit the number of items returned by using filters and pagination. Consult our guide for more details and examples.
     *
     * @tags Identity Document Verification
     * @name GetVerificationsIdentityDocuments
     * @summary List Identity Document Verifications
     * @request GET:/verifications/identity_documents
     * @secure
     */
    getVerificationsIdentityDocuments: (
      query?: {
        /**
         * After cursor (pagination)
         * @minLength 1
         */
        after?: string;
        /**
         * The limit of items count to retrieve.
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
        /**
         * Filter by status.
         * @example {"eq":["verified"]}
         */
        status?: object;
        /**
         * Filter by workspace_id.
         * @example {"eq":["9b6ed2f3-244f-487a-baa1-bbe4f51c8748"]}
         */
        workspace_id?: object;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        GetVerificationsIdentityDocuments200Response,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/verifications/identity_documents`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Verify a person's Identity Document by sending the file containing their Identity Document (identity card, passport, residence permit or driving license).
     *
     * @tags Identity Document Verification
     * @name PostVerificationsIdentityDocuments
     * @summary Initiate a new Identity Document Verification
     * @request POST:/verifications/identity_documents
     * @secure
     */
    postVerificationsIdentityDocuments: (
      data: PostVerificationsIdentityDocumentsRequest,
      params: RequestParams = {}
    ) =>
      this.request<
        IdentityDocumentFull,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/verifications/identity_documents`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * @description Get the detailed results of an Identity Document Verification, including the status of the verification, the reasons in case of rejection and the data extracted from the Identity Document.
     *
     * @tags Identity Document Verification
     * @name GetVerificationsIdentityDocumentsId
     * @summary Retrieve an Identity Document Verification
     * @request GET:/verifications/identity_documents/{identityDocumentVerificationId}
     * @secure
     */
    getVerificationsIdentityDocumentsId: (
      identityDocumentVerificationId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        IdentityDocumentFull,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/verifications/identity_documents/${identityDocumentVerificationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the list of all Identity Videos within your organization. You can limit the number of items returned by using filters and pagination. Consult our guide for more details and examples.
     *
     * @tags Identity Video Verification
     * @name GetVerificationsIdentityVideos
     * @summary List Identity Videos
     * @request GET:/verifications/identity_videos
     * @secure
     */
    getVerificationsIdentityVideos: (
      query?: {
        /**
         * After cursor (pagination)
         * @minLength 1
         */
        after?: string;
        /**
         * The limit of items count to retrieve.
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
        /**
         * Filter by status.
         * @example {"eq":["verified"]}
         */
        status?: object;
        /**
         * Filter by workspace_id.
         * @example {"eq":["9b6ed2f3-244f-487a-baa1-bbe4f51c8748"]}
         */
        workspace_id?: object;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        GetVerificationsIdentityVideos200Response,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/verifications/identity_videos`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Request verification of a person's identity by recording their documents and/or themselves.
     *
     * @tags Identity Video Verification
     * @name PostVerificationsIdentityVideos
     * @summary Initiate a new Identity Video
     * @request POST:/verifications/identity_videos
     * @secure
     */
    postVerificationsIdentityVideos: (
      data: InitiateIdentityVideo,
      params: RequestParams = {}
    ) =>
      this.request<
        IdentityVideoFull,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/verifications/identity_videos`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get the detailed results of an Identity Video Verification.
     *
     * @tags Identity Video Verification
     * @name GetVerificationsIdentityVideosId
     * @summary Retrieve an Identity Video
     * @request GET:/verifications/identity_videos/{identityVideoVerificationId}
     * @secure
     */
    getVerificationsIdentityVideosId: (
      identityVideoVerificationId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        IdentityVideoFull,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/verifications/identity_videos/${identityVideoVerificationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the list of all Proof of Address Verifications within your organization. You can limit the number of items returned by using filters and pagination. Consult our guide for more details and examples.
     *
     * @tags Proof of Address Verification
     * @name GetVerificationsProofsOfAddress
     * @summary List Proof of Address Verifications
     * @request GET:/verifications/proofs_of_address
     * @secure
     */
    getVerificationsProofsOfAddress: (
      query?: {
        /**
         * After cursor (pagination)
         * @minLength 1
         */
        after?: string;
        /**
         * The limit of items count to retrieve.
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
        /**
         * Filter by status.
         * @example {"eq":["verified"]}
         */
        status?: object;
        /**
         * Filter by workspace_id.
         * @example {"eq":["9b6ed2f3-244f-487a-baa1-bbe4f51c8748"]}
         */
        workspace_id?: object;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        GetVerificationsProofsOfAddress200Response,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/verifications/proofs_of_address`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Ask for a Proof of Address Verification by sending a supported document type (see our guide for more info).
     *
     * @tags Proof of Address Verification
     * @name PostVerificationsProofsOfAddress
     * @summary Initiate a new Proof of Address Verification
     * @request POST:/verifications/proofs_of_address
     * @secure
     */
    postVerificationsProofsOfAddress: (
      data: InitiateProofOfAddress,
      params: RequestParams = {}
    ) =>
      this.request<
        ProofOfAddressFull,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/verifications/proofs_of_address`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * @description Get the detailed results of a Proof of Address Verification.
     *
     * @tags Proof of Address Verification
     * @name GetVerificationsProofsOfAddressId
     * @summary Retrieve a Proof of Address Verification
     * @request GET:/verifications/proofs_of_address/{proofOfAddressVerificationId}
     * @secure
     */
    getVerificationsProofsOfAddressId: (
      proofOfAddressVerificationId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        ProofOfAddressFull,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/verifications/proofs_of_address/${proofOfAddressVerificationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the list of all Watchlist Verifications within your organization. You can limit the number of items returned by using filters and pagination. Consult our guide for more details and examples.
     *
     * @tags Watchlist Verification
     * @name GetVerificationsWatchlists
     * @summary List Watchlist Verifications
     * @request GET:/verifications/watchlists
     * @secure
     */
    getVerificationsWatchlists: (
      query?: {
        /**
         * After cursor (pagination)
         * @minLength 1
         */
        after?: string;
        /**
         * The limit of items count to retrieve.
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
        /**
         * Filter by status.
         * @example {"eq":["verified"]}
         */
        status?: object;
        /**
         * Filter by workspace_id.
         * @example {"eq":["9b6ed2f3-244f-487a-baa1-bbe4f51c8748"]}
         */
        workspace_id?: object;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        GetVerificationsWatchlists200Response,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/verifications/watchlists`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Initiate a verification to check if a person appears on international sanctions lists or as a politically exposed person (PEP).
     *
     * @tags Watchlist Verification
     * @name PostVerificationsWatchlists
     * @summary Initiate a Watchlist Verification
     * @request POST:/verifications/watchlists
     * @secure
     */
    postVerificationsWatchlists: (
      data: InitiateWatchlist,
      params: RequestParams = {}
    ) =>
      this.request<
        WatchlistFull,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/verifications/watchlists`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve a specific Watchlist Verification by its ID. Returns details about sanctions and politically exposed person status.
     *
     * @tags Watchlist Verification
     * @name GetVerificationsWatchlistsId
     * @summary Retrieve a Watchlist Verification
     * @request GET:/verifications/watchlists/{watchlistVerificationId}
     * @secure
     */
    getVerificationsWatchlistsId: (
      watchlistVerificationId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        WatchlistFull,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/verifications/watchlists/${watchlistVerificationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  webhooks = {
    /**
     * @description Returns the list of all Webhook subscriptions in your Organization.
     *
     * @tags Webhook
     * @name GetWebhooks
     * @summary List Webhook subscriptions
     * @request GET:/webhooks
     * @secure
     */
    getWebhooks: (params: RequestParams = {}) =>
      this.request<
        WebhookSubscription[],
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/webhooks`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new Webhook subscription in your organization.
     *
     * @tags Webhook
     * @name PostWebhooksSubscriptions
     * @summary Create a Webhook subscription
     * @request POST:/webhooks
     * @secure
     */
    postWebhooksSubscriptions: (
      data: CreateWebhookSubscription,
      params: RequestParams = {}
    ) =>
      this.request<
        WebhookSubscription,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
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
     * @description Deletes a given Webhook subscription.
     *
     * @tags Webhook
     * @name DeleteWebhooksWebhookId
     * @summary Delete a Webhook subscription
     * @request DELETE:/webhooks/{webhookId}
     * @secure
     */
    deleteWebhooksWebhookId: (webhookId: UUID, params: RequestParams = {}) =>
      this.request<
        any,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/webhooks/${webhookId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Retrieves a given Webhook subscription.
     *
     * @tags Webhook
     * @name GetWebhooksWebhookId
     * @summary Get a Webhook subscription
     * @request GET:/webhooks/{webhookId}
     * @secure
     */
    getWebhooksWebhookId: (webhookId: UUID, params: RequestParams = {}) =>
      this.request<
        WebhookSubscription,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/webhooks/${webhookId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a given Webhook subscription. Any parameters not provided are left unchanged.
     *
     * @tags Webhook
     * @name PatchWebhooksWebhookId
     * @summary Update a Webhook subscription
     * @request PATCH:/webhooks/{webhookId}
     * @secure
     */
    patchWebhooksWebhookId: (
      webhookId: UUID,
      data: UpdateWebhookSubscription,
      params: RequestParams = {}
    ) =>
      this.request<
        WebhookSubscription,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/webhooks/${webhookId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  workspaces = {
    /**
     * @description Returns the list of all Workspaces within your Organization.
     *
     * @tags Workspace
     * @name GetWorkspaces
     * @summary List Workspaces
     * @request GET:/workspaces
     * @secure
     */
    getWorkspaces: (
      query?: {
        /**
         * After cursor (pagination)
         * @minLength 1
         */
        after?: string;
        /**
         * The limit of items count to retrieve.
         * @min 1
         * @max 100
         * @default 10
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        GetWorkspaces200Response,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/workspaces`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new Workspace in the organization.
     *
     * @tags Workspace
     * @name PostWorkspace
     * @summary Create a Workspace
     * @request POST:/workspaces
     * @secure
     */
    postWorkspace: (data: CreateWorkspace, params: RequestParams = {}) =>
      this.request<
        Workspace,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/workspaces`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves the default Workspace.
     *
     * @tags Workspace
     * @name GetWorkspacesDefault
     * @summary Get the default Workspace
     * @request GET:/workspaces/default
     * @secure
     */
    getWorkspacesDefault: (params: RequestParams = {}) =>
      this.request<
        Workspace,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/workspaces/default`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Marks the given Workspace as default.
     *
     * @tags Workspace
     * @name MarkWorkspaceAsDefault
     * @summary Mark the given Workspace as default
     * @request POST:/workspaces/default
     * @secure
     */
    markWorkspaceAsDefault: (
      data: MarkWorkspaceAsDefault,
      params: RequestParams = {}
    ) =>
      this.request<
        any,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/workspaces/default`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes a given Workspace and transfers everything that is attached to this Workspace to a another specified Workspace.
     *
     * @tags Workspace
     * @name DeleteWorkspace
     * @summary Delete a Workspace
     * @request DELETE:/workspaces/{workspaceId}
     * @secure
     */
    deleteWorkspace: (
      workspaceId: UUID,
      data: DeleteWorkspace,
      params: RequestParams = {}
    ) =>
      this.request<
        any,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/workspaces/${workspaceId}`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves a given Workspace.
     *
     * @tags Workspace
     * @name GetWorkspacesWorkspaceId
     * @summary Get a Workspace
     * @request GET:/workspaces/{workspaceId}
     * @secure
     */
    getWorkspacesWorkspaceId: (workspaceId: UUID, params: RequestParams = {}) =>
      this.request<
        Workspace,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/workspaces/${workspaceId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a given Workspace. Any parameters not provided are left unchanged.
     *
     * @tags Workspace
     * @name PatchWorkspacesWorkspaceId
     * @summary Update a Workspace
     * @request PATCH:/workspaces/{workspaceId}
     * @secure
     */
    patchWorkspacesWorkspaceId: (
      workspaceId: UUID,
      data: UpdateWorkspace,
      params: RequestParams = {}
    ) =>
      this.request<
        Workspace,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | UnsupportedMediaTypeResponse
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/workspaces/${workspaceId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Removes a User from a given Workspace.
     *
     * @tags User
     * @name DeleteWorkspaceWorkspaceIdUsersUserId
     * @summary Remove a user from a workspace
     * @request DELETE:/workspaces/{workspaceId}/users/{userId}
     * @secure
     */
    deleteWorkspaceWorkspaceIdUsersUserId: (
      workspaceId: UUID,
      userId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        any,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/workspaces/${workspaceId}/users/${userId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Associates a User with a given Workspace.
     *
     * @tags User
     * @name PutWorkspacesWorkspaceIdUsers
     * @summary Associate a user to a workspace
     * @request PUT:/workspaces/{workspaceId}/users/{userId}
     * @secure
     */
    putWorkspacesWorkspaceIdUsers: (
      workspaceId: UUID,
      userId: UUID,
      params: RequestParams = {}
    ) =>
      this.request<
        any,
        | BadRequestResponse
        | UnauthorizedResponse
        | ForbiddenResponse
        | NotFoundResponse
        | MethodNotAllowed
        | TooManyRequestsResponse
        | InternalServerError
      >({
        path: `/workspaces/${workspaceId}/users/${userId}`,
        method: "PUT",
        secure: true,
        ...params,
      }),
  };
}
