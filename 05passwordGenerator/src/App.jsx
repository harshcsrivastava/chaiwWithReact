import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [charAllow, setChar] = useState(false);
  const [numAllow, setNum] = useState(false);
  const [password, setPassword] = useState("");

  // Using callback(fn, dependencies(array))
  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, charAllow, numAllow, setPassword]);
  //method ko optimize kro


  // useEffect is a React Hook that lets you synchronize a component with an external system.
  //in dependencies me kuch bhi ched chad ho to rereun kr do
  useEffect(() => {
    passGenerator()
  }, [length, numAllow, charAllow, passGenerator])

  // kisi bhi chiz ki mujhe reference lena hoto useRef hota
  // useRef hook
  const passRef = useRef(null)

  const copyToClip = useCallback(() => {
    passRef.current?.select()
    // password highlight krta
    
    // passRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
    // NextJS me server side rendering hoti hai, vaha window keyword nhi krega
  }, [password])

  // This hook is commonly used when you want to access or manipulate
  //  DOM elements directly, without triggering a re-render of the component.
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          placeholder="Password"
          className="outline-none w-full py-1 px-3"
          readOnly
          ref={passRef}
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        onClick={copyToClip}>
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={numAllow}
            onChange={() => setNum((prev) => !prev)}
          />{" "}
          <label htmlFor="">Number</label>
        </div>
        <div>
        <input
          type="checkbox"
          defaultChecked={charAllow}
          onChange={() => setChar((prev) => !prev)}
        />{" "}
        <label htmlFor="">Character</label>
      </div>
      </div>
     
    </div>
  );
}

export default App;
