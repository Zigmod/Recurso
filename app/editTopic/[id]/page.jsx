"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import EditTopicForm from "../../../components/EditTopicForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default function EditTopicPage({ params }) {
  const { id } = params;
  const [topic, setTopic] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchTopic = async () => {
      const topicData = await getTopicById(id);
      if (topicData) {
        setTopic(topicData);
      } else {
        console.error("Failed to load topic data");
        router.push("/"); // Redirigir en caso de error
      }
    };

    fetchTopic();
  }, [id]);

  if (!topic) {
    return <div>Loading...</div>; // Mostrar un mensaje de carga mientras se obtienen los datos
  }

  const { title, description } = topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}
