
// Lorrigo Bucketing 
export const NEW = 0;
export const READY_TO_SHIP = 1;
export const IN_TRANSIT = 2;
export const NDR = 3;
export const DELIVERED = 4;
export const RTO = 5;
export const CANCELED = 6;
export const LOST_DAMAGED = 7;
export const DISPOSED = 8;

/* REVERSE ORDER BUCKETING */
export const RETURN_CONFIRMED = 101;
export const RETURN_ORDER_MANIFESTED = 101;
export const RETURN_PICKED = 102;
export const RETURN_CANCELLATION = 103;
export const RETURN_DELIVERED = 104;
export const RETURN_OUT_FOR_PICKUP = 101;
export const RETURN_IN_TRANSIT = 102;
export const RETURN_CANCELLED_BY_SMARTSHIP = 103;
export const RETURN_CANCELLED_BY_CLIENT = 103;
export const RETURN_SHIPMENT_LOST = 105;

export const ORDER_TO_TRACK = [
    READY_TO_SHIP,
    IN_TRANSIT,
    NDR,
    RTO,
    LOST_DAMAGED,
    DISPOSED,

    // Return Order 
    RETURN_CONFIRMED,
    RETURN_ORDER_MANIFESTED,
    RETURN_PICKED,
    RETURN_CANCELLATION,
    RETURN_OUT_FOR_PICKUP,
    RETURN_IN_TRANSIT,
    RETURN_CANCELLED_BY_SMARTSHIP,
    RETURN_CANCELLED_BY_CLIENT,
    RETURN_SHIPMENT_LOST,
];

// Universal Order Status
export const NEW_ORDER_STATUS = 0;
export const NEW_ORDER_DESCRIPTION = 'New';
export const COURRIER_ASSIGNED_ORDER_DESCRIPTION = "Courier Assigned";
export const MANIFEST_ORDER_DESCRIPTION = 'Manifest Generated';  // not used
export const PICKUP_SCHEDULED_DESCRIPTION = "Pickup Scheduled";
export const CANCELLED_ORDER_DESCRIPTION = 'Cancelled';
export const SHIPMENT_CANCELLED_ORDER_DESCRIPTION = 'Shipment Cancelled';
export const SHIPMENT_CANCELLED_ORDER_STATUS = -2;
export const CANCELLATION_REQUESTED_ORDER_STATUS = -1;


// SMARTSHIP ORDER STATUS
export const SMARTSHIP_COURIER_ASSIGNED_ORDER_STATUS = 24;
export const SMARTSHIP_MANIFEST_ORDER_STATUS = 4;
export const SMARTSHIP_SHIPPED_ORDER_STATUS = 10;
export const SMARTSHIP_SHIPPED_ORDER_DESCRIPTION = 'Shippped';
export const SMARTSHIP_ORDER_REATTEMPT_STATUS = 17;
export const SMARTSHIP_ORDER_REATTEMPT_DESCRIPTION = 'Reattempt Requested';



// SHIPROCKET ORDER STATUS
export const SHIPROCKET_SHIPPED_ORDER_STATUS = 6;
export const SHIPROCKET_SHIPPED_ORDER_DESCRIPTION = 'Ready for Pickup';
export const SHIPROCKET_COURIER_ASSIGNED_ORDER_STATUS = 52;
export const SHIPROCKET_MANIFEST_ORDER_STATUS = 67;


