import React, { useState, useMemo } from "react";

const USERS = ["User1", "User2", "User3", "Sumit", "Vansh"];

const CommentSidebar = ({
  comments,
  activeId,
  setActiveId,
  addComment,
  onPinClick, 
}) => {
  const [text, setText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const mentionQuery = useMemo(() => {
    const idx = text.lastIndexOf("@");
    if (idx === -1) return "";
    const after = text.slice(idx + 1);
    const match = after.match(/^[a-zA-Z0-9_]*/);
    return match ? match[0] : "";
  }, [text]);

  const filteredUsers = useMemo(() => {
    if (!mentionQuery) return [];
    return USERS.filter((u) =>
      u.toLowerCase().startsWith(mentionQuery.toLowerCase())
    );
  }, [mentionQuery]);

  const handleChange = (e) => {
    const val = e.target.value;
    setText(val);
    setShowSuggestions(val.includes("@"));
  };

  const handleMentionClick = () => {
    setText((prev) =>
      prev === "" || prev.endsWith(" ") ? prev + "@" : prev + " @"
    );
    setShowSuggestions(true);
  };

  const insertUser = (user) => {
    const idx = text.lastIndexOf("@");
    if (idx === -1) return;
    const before = text.slice(0, idx + 1);
    const after = text.slice(idx + 1);
    const rest = after.replace(/^[a-zA-Z0-9_]*/, "");
    const newText = `${before}${user}${rest} `;
    setText(newText);
    setShowSuggestions(false);
  };

  const handleSubmit = () => {
    const val = text.trim();
    if (!val) return;
    addComment(val);
    setText("");
    setShowSuggestions(false);
  };

  return (
    <div
      style={{
        width: "100%",
        maxHeight: 640,
        margin: "auto 0",
        background: "#ffffff",
        borderRadius: 8,
        border: "1px solid #e1e1e8",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      
      <div
        style={{
          borderBottom: "1px solid #e1e1e8",
          padding: "10px 12px",
          display: "flex",
          flexDirection: "column",
          gap: 6,
          position: "relative",
        }}
      >
        <div
          style={{
            height: 32,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <input
            placeholder="Make a comment"
            value={text}
            onChange={handleChange}
            style={{
              flex: 1,
              height: "100%",
              borderRadius: 16,
              border: "1px solid #dadade",
              padding: "0 12px",
              fontSize: 12,
            }}
          />
         
          <button
            type="button"
            onClick={handleMentionClick}
            style={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              border: "1px solid #dadade",
              background: "#f8f8fb",
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            @
          </button>

           <button
            type="button"
            onClick={onPinClick}
            style={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              border: "1px solid #dadade",
              background: "#f8f8fb",
              fontSize: 14,
              cursor: "pointer",
            }}
            title="Place a pin on the screen"
          >
            📌
          </button>
        </div>

        {showSuggestions && filteredUsers.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: 48,
              left: 12,
              right: 12,
              background: "#fff",
              borderRadius: 6,
              border: "1px solid #e1e1e8",
              boxShadow: "0 8px 16px rgba(0,0,0,0.08)",
              zIndex: 10,
              padding: "4px 0",
              fontSize: 12,
            }}
          >
            {filteredUsers.map((u) => (
              <div
                key={u}
                onMouseDown={() => insertUser(u)} 
                style={{
                  padding: "6px 10px",
                  cursor: "pointer",
                }}
              >
                {u}
              </div>
            ))}
          </div>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 8,
            marginTop: 4,
          }}
        >
          <button
            type="button"
            onClick={() => {
              setText("");
              setShowSuggestions(false);
            }}
            style={{
              fontSize: 12,
              borderRadius: 4,
              padding: "4px 10px",
              border: "1px solid #dadade",
              background: "#ffffff",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            style={{
              fontSize: 12,
              borderRadius: 4,
              padding: "4px 10px",
              border: "none",
              background: "#6a0fff",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </div>
      </div>

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "12px 12px 0",
        }}
      >
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            marginBottom: 8,
          }}
        >
          Landing Screen
        </div>

        {comments.map((c) => (
          <div
            key={c.id}
            onClick={() => setActiveId(c.id)}
            style={{
              padding: "8px 0",
              borderBottom: "1px solid #f1f1f5",
              fontSize: 12,
              background: activeId === c.id ? "#f3f0ff" : "transparent",
              cursor: "pointer",
            }}
          >
            <div style={{ fontWeight: 600 }}>{c.author}</div>
            <div style={{ marginTop: 4, color: "#555" }}>{c.text}</div>
          </div>
        ))}
      </div>

      <div
        style={{
          padding: "8px 12px",
          borderTop: "1px solid #e1e1e8",
          fontSize: 11,
          color: "#555",
        }}
      >
        All screen comments
      </div>
    </div>
  );
};

export default CommentSidebar;
