import Cors from "cors";

// Initialize CORS middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

const peopleData = [
  { id: 1, uuid: "9f1c2c9e-9b6b-4e38-9b4f-7e8a3e9b4c21", name: "ជា សុជាង", nickname: "សម្លាញ់ សុជាង" },
  { id: 2, uuid: "2c7f1e6b-8f44-4a8d-b9c1-1b7d6c7a9f01", name: "នី ផានឹត", nickname: "សម្លាញ់ ផានឹត និង Honey" },
  { id: 3, uuid: "b8a2c4e9-3a1d-4c77-9e6f-2d5f9c4a6b88", name: "ផាត សុថាក់", nickname: "សម្លាញ់ សុថាក់ និង Honey" },
  { id: 4, uuid: "c1f9a7e2-6d5a-4fbe-8c2d-5a6e9b3d1f42", name: "ហ៊ាន សុខសាន", nickname: "សម្លាញ់ សុខសាន" },
  { id: 5, uuid: "5e3c9d21-9a4e-4c1b-8b7f-7a1d2e6f4c91", name: "ភាព សុភី", nickname: "សម្លាញ់ភី" },
  { id: 6, uuid: "f6b1c7a9-2e8d-4b33-9d1f-4a8c2e7b5d10", name: "ផល់ ផេង", nickname: "សម្លាញ់ផេង" },
  { id: 7, uuid: "e2d9f4a7-6b8c-4caa-b5f9-7a3e2d1c6b44", name: "ណាង វណ្ណេត", nickname: "សម្លាញ់ វណ្ណេត" },
  { id: 8, uuid: "a9e7c1d4-5b6f-4e9d-9a8c-3d2b7f6a5e31", name: "លាវ វណ្ណី", nickname: "សម្លាញ់ វណ្ណី" },
  { id: 9, uuid: "7c3a2e6b-1f5d-4c9e-a8b4-9e6d2f7a1c55", name: "ញ៉ សេងអាន", nickname: "សម្លាញ់ សេងអាន" },
  { id: 10, uuid: "4f9d7b2c-8a5e-4a91-9c3e-6b1d2f8e7a66", name: "យ៉េត ស្រស់", nickname: "សម្លាញ់ ស្រស់" },
  { id: 11, uuid: "d1a6c9e5-2f8b-4e33-b9d7-5c4a7f1e8a77", name: "ជីវ៉ា ម៉េងអី", nickname: "សម្លាញ់ជីរ៉ា និង ប្អូនអី" },
  { id: 12, uuid: "8b4e1f9d-6a5c-4c77-a3e9-2d7b6f5c1a88", name: "ខេងសុម៉េង", nickname: "សម្លាញ់ម៉េង និង ភរិយា" },
  { id: 13, uuid: "3e9f6a5-1c2d-4b88-9f7a-8e5d1c4a6b99", name: "ធា សុធី", nickname: "សម្លាញ់ ធី" },
  { id: 14, uuid: "6c2f8a9e-4b1d-4e77-9a5c-3d6f1b7e5a10", name: "ឡេង ម៉េងហ៊ុង", nickname: "ឡេង ម៉េងហ៊ុង" },
  { id: 15, uuid: "9a5e1d7b-6c4f-4c99-8b2a-7e3d6f1c5a11", name: "យ៉ុន វ៉ាធីក", nickname: "សម្លាញ់ធិក" },
  { id: 16, uuid: "1d7b9e5a-6c4f-4a11-b8e3-5f2d7c6a9e22", name: "ថា បញ្ញា", nickname: "ថា បញ្ញា" },
  { id: 17, uuid: "f5c1e7d9-2a8b-4c66-9d3e-6a4b1f7c5e33", name: "យន សីហា", nickname: "សម្លាញ់ សីហា" },
  { id: 18, uuid: "a8b7c5f1-9e4d-4a22-b6e3-1c5d7f9e8a44", name: "ហាន តឿន", nickname: "សម្លាញ់ តឿន" },
  { id: 19, uuid: "e4d2c7a9-1f6b-4e88-9c5a-7f3b1d6e2a55", name: "ចេន ជួរ", nickname: "សម្លាញ់ ជួរ" },
  { id: 20, uuid: "7a9d5c4e-1b6f-4c44-9e8a-2f3d6b1c7a66", name: "ហ៊ួ ធារ៉ា", nickname: "សម្លាញ់ ធារ៉ា" },
  { id: 21, uuid: "c6a1f9d2-7e5b-4a55-8c3e-9d1b7f6a5e77", name: "ហ៊ាន វិសាល", nickname: "សម្លាញ់ វិសាល" },
  { id: 22, uuid: "5d7f3e9c-1a2b-4c66-9e8d-6b5a7f1c2a88", name: "សឿន លីសាង", nickname: "សម្លាញ់លីស៊ាង" },
  { id: 23, uuid: "2e6d9a7c-5f1b-4e77-8c3a-9f7d1b5e6a99", name: "ញ៉ាព្រៃខ្លា", nickname: "ញ៉ាព្រៃខ្លា" },
  { id: 24, uuid: "9c1b7e5a-4d6f-4a88-8e2c-3f9a7d5b1c10", name: "ហ៊ាន ចិត្រា", nickname: "សម្លាញ់ ចិត្រា" },
  { id: 25, uuid: "4a7d2f6c-9e1b-4c99-8a5e-3d7f1b9c6a21", name: "ជាងនៅ", nickname: "ជាងនៅ" },
  { id: 26, uuid: "6f2a9e1c-5d7b-4a11-9c8e-7f3b6d5a2c32", name: "គុណវឌ្ឍ", nickname: "គុណវឌ្ឍ" },
  { id: 27, uuid: "b3e7a5f9-1c2d-4c22-8a6e-9f7d5b1c3a43", name: "vanna rany", nickname: "បងស្រី រ៉ានី និង គ្រួសារ" },
  { id: 28, uuid: "a1f3c5d2-7b4e-4d9a-8c2f-1b3e6f9a2d7c", name: "កូនចៅ ឃៀក អ៊ាង", nickname: "កូនចៅ ឃៀក អ៊ាង"},
  { id: 27, uuid: "d4e7f2a1-9b3c-4f6d-8e2a-5c1f9b7a3d8e", name: "Saren NaRorng", nickname: "សារ៉ែន ណារ៉ង" },
  { id: 29, uuid: "f6a9c2d1-3b8e-4a7c-9d5f-2e1b4c8a6d7f", name: "ប្អូនប្រុស ម៉េងស៊ឺ", nickname: "ប្អូនប្រុស ម៉េងស៊ឺ"},
  { id: 30, uuid: "b9e4c1d7-6a2f-4e8b-9c5a-3d1f7e6a2b8c", name: "Rath Õver", nickname: "Rath Õver និង ភរិយា"},
  { id: 31, uuid: "3f7c9a2e-6c4b-4f91-9d8a-2e5c1b7a9d44", name: "អាប្អូនបូ នឹង Honey", nickname: "អាប្អូនបូ នឹង Honey"},
  { id: 32, uuid: "e7b1c3a9-2d5f-4e8a-9c6b-d4a1f2e8c7b3", name: "បងវិត នឹង Honey", nickname: "បងវិត នឹង Honey"},
  { id: 33, uuid: "a3f8c9e2-6b4d-4a7c-9e1f-5d2b8c6a7f1e", name: "ស៊ាងម៉េងស៊ឺ", nickname: "ស៊ាងម៉េងស៊ឺ"}
];


function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  const { id, uuid } = req.query;

  if (id) {
    const person = peopleData.find((p) => p.id === parseInt(id));
    if (!person) return res.status(404).json({ success: false, message: "Person not found" });
    return res.json({ success: true, data: person });
  }

  if (uuid) {
    const person = peopleData.find((p) => p.uuid === uuid);
    if (!person) return res.status(404).json({ success: false, message: "Person not found" });
    return res.json({ success: true, data: person });
  }

  res.json({ success: true, data: peopleData });
}
