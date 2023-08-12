import Layout from "@/pages/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AddPost from "@/pages/components/AddPost";

export default function EditPost() {

  const [editPost, setEditPost] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/api/post?id=' + id).then(response => {
      setEditPost(response.data)
    }
    )
  }, [id])
  return (
    <Layout>
      {editPost && (
        <AddPost {...editPost} />
      )}
    </Layout>
  )
}