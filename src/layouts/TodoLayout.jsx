const TodoLayout = ({ children }) => (
    <div className="layout">
        <div className="top top-background" />
        <div className="bottom bg-color" />
        <div className="content">{children}</div>
    </div>
)

export { TodoLayout }