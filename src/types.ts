/**
 * Types for the Precision Service Workshop App
 */

export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  duration: string;
  specs: string[];
  recommended?: boolean;
}

export interface RepairRequest {
  id: string;
  clientName: string;
  phone: string;
  email: string;
  tractorBrand: string;
  tractorModel: string;
  issueDescription: string;
  serviceType: 'repair' | 'maintenance' | 'transport_only';
  status: 'pending_contact' | 'scheduled_transport' | 'in_diagnosis' | 'repair_in_progress' | 'ready_for_delivery' | 'completed';
  createdAt: string;
}

export interface Testimonial {
  author: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}
