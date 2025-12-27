import React, { useState, useRef, useEffect } from "react";
import CommentSidebar from "../components/CommentSidebar";

const initialComments = [
  { id: 1, author: "User 1", text: "Live link & GitHub link here." },
  { id: 2, author: "User 2", text: "Another example comment block." },
  { id: 3, author: "User 3", text: "Third comment for landing screen." },
  { id: 4, author: "User 4", text: "Fourth comment." },
  { id: 5, author: "User 5", text: "Fifth comment." },
  { id: 6, author: "User 6", text: "Sixth comment." },
];

const LayoutWithComments = ({ children }) => {
  const [comments, setComments] = useState(initialComments);
  const [activeId, setActiveId] = useState(null);

  const [isPlacingPin, setIsPlacingPin] = useState(false);
  const [pinPos, setPinPos] = useState({ x: 170, y: 300 }); // pin position relative to phone
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });
  const phoneRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setIsPlacingPin(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const addComment = (text) => {
    const nextId = comments.length + 1;
    const c = { id: nextId, author: "You", text };
    setComments((prev) => [...prev, c]);
    setActiveId(nextId);
  };

  const startPlacePin = () => {
    setIsPlacingPin(true);
  };

  const handlePinMouseDown = (e) => {
    if (!isPlacingPin) return;
    dragging.current = true;
    const rect = phoneRef.current.getBoundingClientRect();
    offset.current = {
      x: e.clientX - rect.left - pinPos.x,
      y: e.clientY - rect.top - pinPos.y,
    };
  };

  const handleMouseMove = (e) => {
    if (!dragging.current || !phoneRef.current) return;
    const rect = phoneRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - offset.current.x;
    const y = e.clientY - rect.top - offset.current.y;
    setPinPos({ x, y });
  };

  const handleMouseUp = () => {
    dragging.current = false;
  };

  const handlePhoneClick = (e) => {
    if (!isPlacingPin || dragging.current) return;
    // click to confirm pin placement
    setIsPlacingPin(false);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#f5f5f7",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 40px",
        gap: 40,
        overflow: "hidden",
      }}
    >
      {/* LEFT: phone with overlay and draggable pin */}
      <div
        ref={phoneRef}
        style={{
          flex: "0 0 auto",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
        onClick={handlePhoneClick}
      >
        
        {React.cloneElement(children, {
          commentCount: comments.length,
          activeCommentId: activeId,
          onDigitClick: (id) => setActiveId(id),
        })}

     
        {isPlacingPin && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0, 0, 0, 0.6)",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              fontSize: 13,
              padding: 16,
              borderRadius: 24,
              pointerEvents: "none",
              zIndex: 100,
            }}
          >
            Place the pin here or
            <br />
            press Esc to cancel
          </div>
        )}

        {isPlacingPin && (
          <div
            onMouseDown={handlePinMouseDown}
            style={{
              position: "absolute",
              left: pinPos.x,
              top: pinPos.y,
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: "#6a0fff",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              cursor: dragging.current ? "grabbing" : "grab",
              boxShadow: "0 0 0 3px #ffffff, 0 4px 12px rgba(0,0,0,0.3)",
              userSelect: "none",
              zIndex: 101,
            }}
          >
            📌
          </div>
        )}
      </div>

      <div
        style={{
          flex: "0 0 340px",
          alignSelf: "stretch",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <CommentSidebar
          comments={comments}
          activeId={activeId}
          setActiveId={setActiveId}
          addComment={addComment}
          onPinClick={startPlacePin}
        />
      </div>
    </div>
  );
};

export default LayoutWithComments;
