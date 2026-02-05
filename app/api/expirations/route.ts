import { NextResponse } from 'next/server';

export async function GET() {
  const today = new Date();
  
  // This mimics a database of upcoming trucking expirations
  const mockData = [
    { id: '1', entityType: 'driver', entityName: 'John Smith', category: 'Medical Card', expiresOn: new Date(today.setDate(today.getDate() + 5)).toISOString(), status: 'due_soon', link: '#' },
    { id: '2', entityType: 'asset', entityName: 'Unit #402', category: 'Annual Inspection', expiresOn: new Date(today.setDate(today.getDate() - 2)).toISOString(), status: 'expired', link: '#' },
    { id: '3', entityType: 'insurance', entityName: 'Liberty Mutual', category: 'Auto Liability', expiresOn: new Date(today.setDate(today.getDate() + 12)).toISOString(), status: 'due_soon', link: '#' },
    { id: '4', entityType: 'driver', entityName: 'Sarah Connor', category: 'CDL Renewal', expiresOn: new Date(today.setDate(today.getDate() + 45)).toISOString(), status: 'ok', link: '#' },
  ];

  return NextResponse.json(mockData);
}