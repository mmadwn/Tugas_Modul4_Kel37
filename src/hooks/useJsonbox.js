import { useState, useEffect } from "react";

const useJsonbox = jsonboxUrl => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newMessage, setNewMessage] = useState(false);
  const [delMessage, setDelMessage] = useState(false);

  // GET
  useEffect(() => {
    if (isLoading && jsonboxUrl) {
      fetch(jsonboxUrl, {
        method: "GET"
      })
        .then(res => res.json())
        .then(data => {
          setMessages(data);
          setIsLoading(false);
        })
        .catch(error => console.log("Masalah Jaringan", error));
    }
  }, [isLoading, jsonboxUrl]);

  // POST
  useEffect(() => {
    if (newMessage && newMessage.name && newMessage.desc && jsonboxUrl) {
      fetch(jsonboxUrl, {
        method: "POST",
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newMessage)
      })
        .then(res => res.json())
        .then(data => {
          setNewMessage(false);
          setMessages([data].concat(messages));
        })
        .catch(error => console.log(error));
    }
  }, [messages, newMessage, jsonboxUrl]);

  // DELETE
  useEffect(() => {
    if (delMessage && jsonboxUrl) {
      fetch(`${jsonboxUrl}/${delMessage}`, {
        method: "DELETE",
        headers: new Headers({
          Accept: "application/json"
        })
      })
        .then(res => res.json())
        .then(data => {
          setMessages(messages.filter(i => i._id !== delMessage));
          setDelMessage(false);
        })
        .catch(error => console.log(error));
    }
  }, [messages, delMessage, jsonboxUrl]);

  return { messages, isLoading, setIsLoading, setNewMessage, setDelMessage };
};

export default useJsonbox;

