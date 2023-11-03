const ChatMessage = ({ name, message }) => {
    return (
      <div className="flex items-center space-x-2 py-2 shadow-sm ">
        <img
          className="h-8 w-8 rounded-full"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
        <span className="font-bold ">{name}</span>
        <span className="whitespace-normal line-clamp-2">{message}</span>
      </div>
    );
  };
  export default ChatMessage;
  