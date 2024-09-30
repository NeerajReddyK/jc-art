"use client";
import axios from "axios";
import { useState, useEffect } from "react";

type Comment = {
  _id: string;
  name: string;
  text: string;
  parentId?: string;
  replies?: Comment[];
};

const url = "http://localhost:5000/api/comments" // Local backend. Deployed link should be replaced if deployed.

const WhatPeopleAreSaying = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);
  const [newComment, setNewComment] = useState(""); 
  const [newName, setNewName] = useState(""); 
  const [replyText, setReplyText] = useState(""); 
  const [replyName, setReplyName] = useState(""); 
  const [replyTo, setReplyTo] = useState<string | null>(null); 

  const fetchComments = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    } finally {
      setLoading(false);
    }
  };

  const addComment = async () => {
    if (!newComment.trim()) {
      alert("Comment cannot be empty");
      return;
    }

    try {
      const response = await axios.post(url, {
        name: newName || "Anonymous User",
        text: newComment,
      });
      setComments([...comments, response.data]);
      setNewComment(""); // Reset comment input
      setNewName(""); // Reset name input
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const addReply = async (parentId: string) => {
    if (!replyText.trim()) {
      alert("Reply cannot be empty");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/comments", {
        name: replyName || "Anonymous User", // Use default name if not provided
        text: replyText,
        parentId, // Associate the reply with the parent comment
      });
      setComments(comments.map(comment =>
        comment._id === parentId
          ? { ...comment, replies: [...(comment.replies || []), response.data] }
          : comment
      ));
      setReplyText(""); // Clear reply input
      setReplyName(""); // Reset name for reply
      setReplyTo(null); // Clear the reply state
    } catch (error) {
      console.error("Error adding reply:", error);
    }
  };

  useEffect(() => {
    fetchComments(); // Fetch comments when component mounts
  }, []);

  return (
    <>
      <div className="flex justify-center my-3 ">
        <div className="bg-white justify-center items-center rounded-lg">
          <div className="p-6">
            <h1 className="text-3xl mb-4 flex justify-center font-bold text-customPurple">What People Are Saying</h1>

            {loading ? (
              <p>Loading...</p>
            ) : (
              <div className="space-y-4">
                {comments.length > 0 ? (
                  comments.map((comment) => (
                    <div key={comment._id} className="border p-4 rounded-lg">
                      <p>
                        <strong className="text-customPurple">{comment.name || "Anonymous"}:</strong>{" "}
                        {comment.text}
                      </p>
                      {/* Nested Replies */}
                      {comment.replies && comment.replies.length > 0 && (
                        <div className="ml-6 mt-2">
                          {comment.replies.map((reply) => (
                            <div key={reply._id} className="border-l pl-4">
                              <p>
                                <strong className=" text-customPurple">{reply.name || "Anonymous"}:</strong>{" "}
                                {reply.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                      {/* Add Reply Button */}
                      <button
                        className="text-blue-500 text-sm mt-2"
                        onClick={() => setReplyTo(comment._id)}
                      >
                        + Add Reply
                      </button>
                      {/* Reply Form */}
                      {replyTo === comment._id && (
                        <div className="mt-4">
                          <input
                            type="text"
                            value={replyName}
                            onChange={(e) => setReplyName(e.target.value)}
                            placeholder="Your Name Please!"
                            className="border rounded p-2 w-full mb-2"
                          />
                          <textarea
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            className="border rounded p-2 w-full"
                            placeholder="Write your reply..."
                          />
                          <button
                            onClick={() => addReply(comment._id)}
                            className="bg-customPurple text-white py-2 px-4 rounded mt-2"
                          >
                            Add Reply
                          </button>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p>No comments available.</p>
                )}
              </div>
            )}

            {/* New Comment Form */}
            <div className="mt-6">
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Your Name Please!"
                className="border rounded p-2 w-full mb-2"
              />
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="border rounded p-2 w-full"
                placeholder="Add a comment"
              />
              <button
                onClick={addComment}
                className="bg-customPurple text-white py-2 px-4 rounded mt-2"
              >
                Add Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatPeopleAreSaying;
