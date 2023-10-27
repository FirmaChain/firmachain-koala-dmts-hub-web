export interface NftData {
  nftId: string;
  name: string;
  description: string;
  imageURI: string;
  metaURI: string;
  identity: string;
  attributes: { key: string; description: string; value: string }[];
}
