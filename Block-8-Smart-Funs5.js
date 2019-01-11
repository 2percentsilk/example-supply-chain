[{
    "_id": ["_collection/name", "purchaseOrder"],
    "spec": [["_fn/name", "purchaseOrderPredsReq"]],
    "specDoc": "Required predicates: id, product, issuer, issueDate, name."
},
{
    "_id": ["_predicate/name", "purchaseOrder/id"],
    "spec": [["_fn/name", "onlyCafeCreate"], 
        ["_fn/name", "unchangeable"]],
    "specDoc": "Only a cafe can create a purchaseOrder/id, and it's unchangeable."
},
{
    "_id": ["_collection/name", "shipment"],
    "spec": [["_fn/name", "shipmentConnectedToPO?"], ["_fn/name", "shipmentPredsReq"], ["_fn/name", "sentSignatureShipperGPSRequiredTogether"]],
    "specDoc": "Required shipment predicates: id, name, sentBy, sentDate, sentLocation, itemDescription, shipper, intendedRecipient, intendedRecipientLocation. Can't create a shipment, unless it's connected to a purchaseOrder. Can't add sentSignature, shipper, or GPSLocation, unless you add all three."
},
{
    "_id": ["_predicate/name", "shipment/sentBy"],
    "spec": [["_fn/name", "senderApprovedPO"], ["_fn/name", "orgAuthIsSelf?"]],
    "specDoc": "Can't specify self as shipment/sentBy unless you've approved a purchaseOrder."
},
{
    "_id": ["_predicate/name", "purchaseOrder/roastDate"],
    "spec": [["_fn/name", "chainOfApproval"],  ["_fn/name", "didAuthRecieveShipment?"]],
    "specDoc": "Cafe must approve first, then grower, then roaster."
},
{
    "_id": ["_predicate/name", "purchaseOrder/events"],
    "spec": [["_fn/name", "chainOfApproval"]],
    "specDoc": "Cafe must approve first, then grower, then roaster."
},
{
    "_id": ["_predicate/name", "purchaseOrder/shipments"],
    "spec": [["_fn/name", "chainOfApproval"]],
    "specDoc": "Cafe must approve first, then grower, then roaster."
},
{
    "_id": ["_predicate/name", "purchaseOrder/name"],
    "spec": [["_fn/name", "authIsCafe?"]],
    "specDoc": "Only a cafe can add or edit purchaseOrder/name."
},
{
    "_id": ["_predicate/name", "purchaseOrder/closed"],
    "spec": [["_fn/name", "authIsCafe?"], ["_fn/name", "orgAuthIsSelf?"],
    ["_fn/name", "didAuthRecieveShipment?"]]
},
{
    "_id": ["_predicate/name", "purchaseOrder/grower"],
    "spec": [["_fn/name", "authIsGrower?"], ["_fn/name", "orgAuthIsSelf?"], ["_fn/name", "cafeApprovedPO?"]],
    "specDoc": "/nly the grower, themselves, can add or edit purchaseOrder/grower."
},
{
    "_id": ["_predicate/name", "purchaseOrder/harvestDate"],
    "spec": [["_fn/name", "authIsGrower?"]],
    "specDoc": "After cafe approved, only the grower can add or edit purchaseOrder/harvestDate."
},
{
    "_id": ["_predicate/name", "purchaseOrder/roaster"],
    "spec": [["_fn/name", "authIsRoaster?"], ["_fn/name", "orgAuthIsSelf?"], ["_fn/name", "cafeApprovedPO?"],["_fn/name", "chainOfApproval"],
    ["_fn/name", "didAuthRecieveShipment?"], ["_fn/name", "orgAuthIsSelf?"]],
    "specDoc": "After cafe approved, only the grower, themselves, can add or edit purchaseOrder/grower."
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
}]