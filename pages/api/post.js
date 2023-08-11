import { Post } from "@/models/postModel";
import connectDB from "@/database/mongodb";

export default async function handle(req, res) {
  const { method } = req;
  // データベースの接続
  await connectDB();

  // 新規物件の投稿
  if (method === "POST") {
    const { title, desc } = req.body;
    const PostDoc = await Post.create({ title, desc })
    res.json(PostDoc);
  }

  // 全ての物件と特定の物件を取得
  if (method === 'GET') {
    res.json(await Post.find({}, {}, { sort: { '_id': -1 }, limit: 3 }));
  }

  // 物件の編集
  // if (method === 'PUT') {
  //   const { title, desc } = req.body;
  //   await Post.updateOne({ _id }, { title, desc });
  //   res.json(true);
  // }

  // 物件の削除
  if (method === 'DELETE') {
    if (req.query?.id) {
      await Post.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
