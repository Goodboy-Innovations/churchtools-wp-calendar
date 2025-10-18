/**
 * ChurchTools API Type Definitions
 */

export interface ApiResponse {
  data: Appointment[];
}

export interface Appointment {
  base: AppointmentBase;
  calculated: AppointmentCalculated;
}
export interface AppointmentCalculated {
    endDate: string;
    startDate: string;
}
export interface AppointmentBase {
  title: string;
  additionals: Additional[];
  address: Address | null;
  allDay: boolean;
  calendar: Calendar;
  description: string;
  endDate: string;
  exceptions: Exception[];
  id: number;
  image: Image | null;
  information: string | null;
  link: string | null;
  note: string | null;
  repeatId: number | null;
  repeatUntil: string | null;
  startDate: string;
  version: number;
}

export interface Additional {
  date: string;
  id: number;
  isRepeated: boolean;
  meta: MetaInfo;
}

export interface Address {
  addition: string | null;
  city: string;
  color: string;
  country: string;
  district: string | null;
  domainIdentifier: string | null;
  domainType: string | null;
  icon: string;
  latitude: string;
  longitude: string;
  name: string;
  street: string;
  zip: string;
  id: number;
  latitudeLoose: string | null;
  longitudeLoose: string | null;
}

export interface Calendar {
  campusId: number | null;
  color: string;
  evTermineEventTypeId: number | null;
  eventTemplateId: number | null;
  iCalSourceUrl: string | null;
  name: string;
  sortKey: number;
  syncToEvTermine: boolean;
  type: string;
  id: number;
  meta: MetaInfo;
  nameTranslated: string | null;
  randomUrl: string | null;
}

export interface Exception {
  date: string;
  id: number;
  meta: MetaInfo;
}

export interface Image {
  additionalInfos: string[];
  domainId: string;
  domainType: string;
  fileUrl: string;
  filename: string;
  id: number;
  imageOption: ImageOption;
  imageUrl: string;
  meta: MetaInfo;
  name: string;
  relativeUrl: string;
  securityLevelId: number;
  showOnlyWhenEditable: boolean;
  size: number;
  type: string;
}

export interface ImageOption {
  crop: Crop;
  focus: Focus;
}

export interface Crop {
  bottom: string;
  left: string;
  right: string;
  top: string;
}

export interface Focus {
  x: string;
  y: string;
}

export interface MetaInfo {
  modifiedDate: string;
  modifiedPid: number;
  createdDate?: string;
  createdPerson?: PersonReference;
  modifiedPerson?: PersonReference;
}

export interface PersonReference {
  id: number;
}
