[{
    "_id": ["_collection/name", "purchaseOrder"],
    "spec": [["_fn/name", "purchaseOrderPredsReq"]],
    "specDoc": "Required predicates: id, product, issuer, issueDate, name."
},
{
    "_id": ["_collection/name", "shipment"],
    "spec": [["_fn/name", "shipmentConnectedToPO?"], ["_fn/name", "shipmentPredsReq"], ["_fn/name", "shipperGPSRequiredTogether"]],
    "specDoc": "Required shipment predicates: id, name, sentBy, sentDate, sentLocation, itemDescription, intendedRecipient, intendedRecipientLocation. Can't create a shipment, unless it's connected to a purchaseOrder. Can't add shipper, or GPSLocation, unless you have sentSignature, shipper, and GPSLocation."
},
{
    "_id": ["_predicate/name", "purchaseOrder/id"],
    "spec": [["_fn/name", "onlyCafeCreate"], 
        ["_fn/name", "new?"]],
    "specDoc": "Only a cafe can create a purchaseOrder/id, and it's unchangeable."
},
{
    "_id": ["_predicate/name", "purchaseOrder/name"],
    "spec": [["_fn/name", "authIsCafe?"]],
    "specDoc": "Only a cafe can add or edit purchaseOrder/name."
},
{
    "_id": ["_predicate/name", "purchaseOrder/grower"],
    "spec": [["_fn/name", "authIsGrower?"], ["_fn/name", "orgAuthIsSelf?"], ["_fn/name", "chainOfApproval"]],
    "specDoc": "Only the grower, themselves, can add or edit purchaseOrder/grower."
},
{
    "_id": ["_predicate/name", "purchaseOrder/harvestDate"],
    "spec": [["_fn/name", "chainOfApproval"], ["_fn/name", "authIsGrower?"]],
    "specDoc": "After cafe approved, only the grower can add or edit purchaseOrder/harvestDate."
},
{
    "_id": ["_predicate/name", "purchaseOrder/roaster"],
    "spec": [["_fn/name", "authIsRoaster?"], ["_fn/name", "orgAuthIsSelf?"], ["_fn/name", "chainOfApproval"],
    ["_fn/name", "didAuthRecieveShipment?"] ],
    "specDoc": "After cafe approved, only the grower, themselves, can add or edit purchaseOrder/grower."
},
{
    "_id": ["_predicate/name", "purchaseOrder/roastDate"],
    "spec": [["_fn/name", "chainOfApproval"],  ["_fn/name", "didAuthRecieveShipment?"]],
    "specDoc": "Both a cafe and a grower needed to have approved the purchaseOrder, and the roaster needs to have received the shipment, before they can list a roastDate."
},
{
    "_id": ["_predicate/name", "purchaseOrder/shipments"],
    "spec": [["_fn/name", "chainOfApproval"]],
    "specDoc": "First, only the cafe can add or edit purchaseOrder/shipments. After cafe approves, only the grower can. After grower approves, only the roaster can, then "
},
{
    "_id": ["_predicate/name", "purchaseOrder/closed"],
    "spec": [["_fn/name", "authIsCafe?"], ["_fn/name", "orgAuthIsSelf?"],
    ["_fn/name", "didAuthRecieveShipment?"]]
},
{
    "_id": ["_predicate/name", "purchaseOrder/approved"],
    "spec": [["_fn/name", "orgAuthIsSelf?"], ["_fn/name", "chainOfApproval"]],
    "specDoc": "Only organization can add self to purchaseOrder/approved, according to the chain of approval."
},
{
    "_id": ["_predicate/name", "purchaseOrder/issuer"],
    "spec": [["_fn/name", "orgAuthIsSelf?"]],
    "specDoc": "Only organization can add self to purchaseOrder/issuer."
},
{
    "_id": ["_predicate/name", "shipment/sentBy"],
    "spec": [["_fn/name", "senderApprovedPO"], ["_fn/name", "orgAuthIsSelf?"]],
    "specDoc": "Can't specify self as shipment/sentBy unless you've approved a purchaseOrder."
},
{
    "_id": ["_predicate/name", "shipment/sentSignature"],
    "spec": [["_fn/name", "sentSignatureEqualsSentBy"]],
    "specDoc": "shipment/sentSignature has to be same person as shipment/sentBy"
},
{
    "_id": ["_predicate/name", "shipment/receivedDate"],
    "spec": [["_fn/name", "sentSignature?"]],
    "specDoc": "Can't add receivedDate unless sentSignature present."
},
{
    "_id": ["_predicate/name", "shipment/receivedSignature"],
    "spec": [["_fn/name", "sentSignature?"], ["_fn/name", "recipientIsIntended"], ["_fn/name", "orgAuthIsSelf?"]],
    "specDoc": "Can only add receivedSignature if it's you and you are the intendedRecipient, and a sentSignature present."
},
{
    "_id": ["_predicate/name", "shipment/shipper"],
    "spec": [["_fn/name", "authIsShipper?"], ["_fn/name", "orgAuthIsSelf?"]]
},
{
    "_id": ["_predicate/name", "shipment/GPSLocation"],
    "spec": [["_fn/name", "authIsShipper?"]]
}]