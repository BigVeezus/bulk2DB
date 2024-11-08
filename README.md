# node-zstandard

Node.js interface to Zstandard (zstd)

I was tasked by an employer to create a scheduler that updates their hotel data with new data monthly gotten from a 20GB compressed ZST file, the file futher decompresses to 60Gb and cant be viewed even by the computer so I figured I needed a cron job to make request to a custom server monthly; this is the server. Enjoy !

## How to decompress the file

1. Run `npm install` command to install the dependencies.

2. Make sure you save the uncompressed `JSON` file called `file.zst` to the root of this folder.

3. Confirm that the file is present then run `npm run decompress`, this runs the server and decompresses the `ZST` file into a larger file called `file.json`

4. Make sure the right `MONGODB_URI` is set in the .env because thats where the dump will be seeded to.

5. When the `file.json` file is done processing, run `npm run seed` to seed the schema into the database.

### You will see the hotels been displayed in your terminal as they are been seeded.
