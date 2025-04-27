import React from 'react';
const HeaderBox = ({ type = "title", title, subtext, user }: HeaderBox.props) => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">
        {type === "greeting" && (
          <>
            Hello,&nbsp;
            <span className="text-blue-500 text-xl font-bold">
              {user}
            </span>
          </>
        )}
      </h1>
      {subtext && <p>{subtext}</p>}
    </div>
  );
};

export default HeaderBox;
