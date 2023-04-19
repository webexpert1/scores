import { NextApiHandler } from 'next';
import fs from 'fs/promises';
import path from 'path';

const handler: NextApiHandler = async (req, res) => {
  try {
    // Find the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), 'json');

    // Read the json data file data.json
    const fileContents = await fs.readFile(path.join(jsonDirectory, 'data.json'), 'utf8');

    // Return the content of the data file in json format
    res.status(200).json(fileContents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving data' });
  }
};

export default handler;
