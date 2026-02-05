export type EntityType = "driver" | "asset" | "program" | "document" | "safety_equipment" | "insurance";
export interface ExpirationItem {
  id: string;
  entityType: EntityType;
  entityId: string;
  entityName: string;
  category: string;
  expiresOn: string;
  daysLeft: number;
  status: "expired" | "due_soon" | "ok";
  link: string;
}