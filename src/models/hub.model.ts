import mongoose from "mongoose";

const HubSchema = new mongoose.Schema({
  sellerId: { type: mongoose.Schema.ObjectId, ref: "Seller", required: true },

  //  "hub_details":{
  name: { type: String, required: true },
  pincode: { type: Number, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  address1: { type: String, required: true },
  address2: { type: String, required: false },
  contactPersonName: { type: String, required: true },
  phone: { type: String, required: true },
  delivery_type_id: { type: Number, required: false },
  isRTOAddressSame: { type: Boolean, required: true },
  rtoAddress: { type: String, required: false },
  rtoCity: { type: String, required: false },
  rtoState: { type: String, required: false },
  rtoPincode: { type: String, required: false },

  isActive: { type: Boolean, required: false, default: true },
  isPrimary: { type: Boolean, required: false, default: false },
  hub_id: { type: Number, required: false },
});

const HubModel = mongoose.model("Hub", HubSchema);
export default HubModel;