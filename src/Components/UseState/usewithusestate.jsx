import React, { useState } from 'react';


const Likebutton = () => {
  const [like, setLike] = useState(false);



  return (
    <button onClick={() => setLike(!like)}>
      {like ? "❤️ Liked" : "🤍 Like"}
    </button>
  
    
  );
};

export default Likebutton;