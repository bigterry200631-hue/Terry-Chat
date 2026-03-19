import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function TerryApp() {
  const [users] = useState(["Jerry", "Mike", "Sarah"]);
  const [messages, setMessages] = useState({});
  const [currentUser, setCurrentUser] = useState("Jerry");
  const [input, setInput] = useState("");

  const sendMessage = (user) => {
    if (!input) return;
    const chat = messages[user] || [];
    setMessages({
      ...messages,
      [user]: [...chat, { sender: currentUser, text: input }],
    });
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      
      {/* Sidebar */}
      <Card className="rounded-2xl shadow-lg">
        <CardContent className="p-4 space-y-4">
          <h1 className="text-xl font-bold">Terry App</h1>
          <p className="text-sm text-gray-500">Online Users</p>
          <ul className="space-y-2">
            {users.map((user, i) => (
              <li
                key={i}
                onClick={() => setCurrentUser(user)}
                className="p-2 bg-gray-200 rounded-xl cursor-pointer"
              >
                {user}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Chat Area */}
      <Card className="md:col-span-2 rounded-2xl shadow-lg flex flex-col">
        <CardContent className="p-4 flex flex-col h-[70vh] justify-between">
          
          <div className="overflow-y-auto space-y-2">
            {(messages[currentUser] || []).map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-xl w-fit max-w-xs ${
                  msg.sender === currentUser
                    ? "bg-blue-200 ml-auto"
                    : "bg-gray-300"
                }`}
              >
                <p className="text-xs text-gray-600">{msg.sender}</p>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-2 mt-2">
            <Input
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button onClick={() => sendMessage(currentUser)}>
              Send
            </Button>
          </div>

        </CardContent>
      </Card>

      {/* Monetization Section */}
      <Card className="md:col-span-3 rounded-2xl shadow-lg">
        <CardContent className="p-4 space-y-3">
          <h2 className="font-bold">Make Money 💰</h2>
          <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
            <li>Run Ads (Google AdSense)</li>
            <li>Premium Membership</li>
            <li>Business Promotions</li>
            <li>Sell products/services</li>
          </ul>
        </CardContent>
      </Card>

    </div>
  );
                  }
