import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: 'string',
    },
    shipping: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);