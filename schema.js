const mongoose = require("mongoose");

// Schema of whatever json you wish to save to your db, mine was a hotel schema
const yourSchema = new mongoose.Schema(
  {
    address: {
      type: String,
    },
    amenity_groups: {
      type: Array,
    },
    check_in_time: {
      type: String,
    },
    check_out_time: {
      type: String,
    },
    description_struct: {
      type: Array,
    },
    email: {
      type: String,
    },
    facts: {
      type: Object,
    },
    front_desk_time_end: {
      type: String,
    },
    front_desk_time_start: {
      type: String,
    },
    hotel_chain: {
      type: String,
    },
    id: {
      type: String,
    },
    images: {
      type: Array,
    },
    is_closed: {
      type: Boolean,
    },
    kind: {
      type: String,
    },
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
    metapolicy_extra_info: {
      type: String,
    },
    metapolicy_struct: {
      type: Object,
    },
    name: {
      type: String,
    },
    payment_methods: {
      type: Array,
    },
    phone: {
      type: String,
    },
    policy_struct: {
      type: Array,
    },
    postal_code: {
      type: String,
    },
    region: {
      type: Object,
    },
    room_groups: {
      type: Array,
    },
    serp_filters: {
      type: Array,
    },
    star_certificate: {},
    star_rating: {
      type: Number,
    },
    rates: Array,
  },
  { timestamps: true }
);

module.exports = mongoose.model("your-schema", yourSchema);
