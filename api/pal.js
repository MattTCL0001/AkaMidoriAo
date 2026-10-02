const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const files = fs.readdirSync(path.join(process.cwd(), 'pal'))
      .filter(n => /\.palcol$/i.test(n))
      .sort();
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json(files);
  } catch (e) {
    res.status(200).json([]);
  }
};
