import { sanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "next-sanity-image";

export const client = sanityClient({
  projectId: "st01io2y",
  dataset: "production",
  apiVersion: "2022-11-26",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
