# node-zstandard

Node.js interface to Zstandard (zstd)

## How to decompress the file

1. Run `npm install` command to install the dependencies.

2. Make sure you save the uncompressed file called `partner_feed_en.json.zst` to the root of this folder.

3. Confirm that the file is present then run `npm run decompress`, this runs the server and decompresses the `ZST` file into a larger file called `partner_feed_en.json`

4. Make sure the right `MONGODB_URI` is set in the .env because thats where the hotel dump will be seeded to.

5. When the `partner_feed_en.json` file is done processing, run `npm run seed` to seed the hotels into the database.

### You will see the hotels been displayed in your terminal as they are been seeded.
