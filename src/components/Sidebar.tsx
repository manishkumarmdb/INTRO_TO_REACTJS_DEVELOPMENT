import './Sidebar.css'

interface SidebarProps {
  onAppSelect: (appName: string) => void;
  selectedApp: string;
}

function Sidebar({ onAppSelect, selectedApp }: SidebarProps) {
  const handleAppClick = (appName: string, e: React.MouseEvent) => {
    e.preventDefault();
    onAppSelect(appName);
  };

  return (
    <aside className="sidebar">
      <h2>React Apps</h2>
      <nav>
        <ul>
          <li>
            <a
              href="#tic_tac_toe"
              className={selectedApp === 'tic_tac_toe' ? 'active' : ''}
              onClick={(e) => handleAppClick('tic_tac_toe', e)}
            >
              Tic-Tac-Toe
            </a>
          </li>
          <li>
            <a
              href="#todo"
              className={selectedApp === 'todo' ? 'active' : ''}
              onClick={(e) => handleAppClick('todo', e)}
            >
              To-Do
            </a>
          </li>
          <li>
            <a
              href="#series_finder"
              className={selectedApp === 'series_finder' ? 'active' : ''}
              onClick={(e) => handleAppClick('series_finder', e)}
            >
              Series Finder
            </a>
          </li>
          <li>
            <a
              href="#premium_products"
              className={selectedApp === 'premium_products' ? 'active' : ''}
              onClick={(e) => handleAppClick('premium_products', e)}
            >
              Premium Products
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
