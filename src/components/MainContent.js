import React from "react";


export default function MainContent({signedInUser, setSignedInUser}) {
  if (signedInUser) {
    return (
      <>
        <button onClick={() => setSignedInUser(undefined)}>Sign Out</button>
        <div>{`The signed in user is ${signedInUser}`}</div>
      </>
    );
  }
  return (
    <>
    </>
  );
}
