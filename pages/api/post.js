import { Property } from "@/models/Property";
import { mongooseConnect } from "@/lib/mongoose";
import { isAdminRequest } from "./auth/[...nextauth]";

export default async function handle(req, res) {
  const { method } = req;
  // データベースの接続
  await mongooseConnect();
  await isAdminRequest(req, res);

  // .populate('author',['name'])
  // 新規物件の投稿
  if (method === "POST") {
    const { title, desc } = req.body;
    const PropertyDoc = await Property.create({ title, desc })
    res.json(PropertyDoc);
  }

  // 全ての物件と特定の物件を取得
  if (method === 'GET') {
    if (req.query?.id) {
      res.json(await Property.findOne({ _id: req.query.id }))
    } else {
      res.json(await Property.find({}, {}, { sort: { '_id': -1 }, limit: 4 }));
    }
  }

  // 物件の編集
  if (method === 'PUT') {
    const { title, desc } = req.body;
    await Property.updateOne({ _id }, { title, desc });
    res.json(true);
  }

  // 物件の削除
  if (method === 'DELETE') {
    if (req.query?.id) {
      await Property.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
