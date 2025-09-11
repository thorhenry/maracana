// CSS Styles embedded in JavaScript
const styles = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Arial', 'Helvetica', sans-serif;
        background: linear-gradient(135deg, #37003c 0%, #1a0033 50%, #0a001a 100%);
        color: #ffffff;
        min-height: 100vh;
        margin: 0;
        padding: 0;
    }

    #app {
        width: 100%;
        margin: 0;
        padding: 0;
        background: transparent;
    }

    header {
        background: linear-gradient(135deg, #37003c 0%, #1a0033 50%, #0a001a 100%);
        border-bottom: 3px solid #00ff85;
        padding: 0;
        margin-bottom: 0;
    }

    #navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 40px;
        background: linear-gradient(135deg, #37003c 0%, #1a0033 50%, #0a001a 100%);
        border-bottom: 1px solid #00ff85;
        position: relative;
        width: 100%;
        margin: 0;
    }

    .nav-brand {
        display: flex;
        align-items: center;
    }

    .website-logo {
        height: 50px;
        width: auto;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        transition: transform 0.3s ease;
    }

    .website-logo:hover {
        transform: scale(1.05);
    }

    .nav-links {
        display: flex;
        gap: 0;
        align-items: center;
    }

    .mobile-controls {
        display: none;
        align-items: center;
        gap: 10px;
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1001;
    }

    .hamburger {
        display: none;
        flex-direction: column;
        cursor: pointer;
        padding: 15px;
        background: transparent;
        border: none;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .hamburger:hover {
        transform: scale(1.1);
    }

    .hamburger span {
        width: 25px;
        height: 3px;
        background: #00ff85;
        margin: 3px 0;
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        border-radius: 2px;
        transform-origin: center;
    }

    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
        background: #ff6b35;
    }

    .hamburger.active span:nth-child(2) {
        opacity: 0;
        transform: scaleX(0);
    }

    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
        background: #ff6b35;
    }

    .mobile-menu {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        background: linear-gradient(135deg, #37003c 0%, #1a0033 50%, #0a001a 100%);
        z-index: 9999;
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 80px 20px 20px 20px;
        box-sizing: border-box;
    }

    .mobile-menu.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }

    .mobile-close-btn {
        position: absolute;
        top: 15px;
        right: 15px;
        width: 45px;
        height: 45px;
        background: rgba(0, 0, 0, 0.3);
        border: 2px solid rgba(0, 255, 133, 0.3);
        border-radius: 50%;
        color: #00ff85;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
        z-index: 10000;
    }

    .mobile-close-btn:hover {
        background: rgba(0, 255, 133, 0.1);
        border-color: rgba(0, 255, 133, 0.6);
        transform: scale(1.1);
        box-shadow: 0 4px 15px rgba(0, 255, 133, 0.2);
    }

    .mobile-close-btn svg {
        width: 24px;
        height: 24px;
    }

    .mobile-nav-btn {
        display: block;
        width: 95%;
        background: transparent;
        border: none;
        color: #ffffff;
        padding: 20px 30px;
        font-size: 1.2rem;
        font-weight: 600;
        text-align: center;
        border: 2px solid rgba(0, 255, 133, 0.2);
        border-radius: 12px;
        margin: 8px 0;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transform: translateY(30px);
        opacity: 0;
        animation: slideInFromBottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    }

    .mobile-nav-btn:nth-child(1) { animation-delay: 0.1s; }
    .mobile-nav-btn:nth-child(2) { animation-delay: 0.15s; }
    .mobile-nav-btn:nth-child(3) { animation-delay: 0.2s; }
    .mobile-nav-btn:nth-child(4) { animation-delay: 0.25s; }
    .mobile-nav-btn:nth-child(5) { animation-delay: 0.3s; }
    .mobile-nav-btn:nth-child(6) { animation-delay: 0.35s; }
    .mobile-nav-btn:nth-child(7) { animation-delay: 0.4s; }

    .mobile-nav-btn:hover {
        background: rgba(0, 255, 133, 0.15);
        color: #00ff85;
        border-color: #00ff85;
        transform: translateY(0) scale(1.05);
        box-shadow: 0 8px 25px rgba(0, 255, 133, 0.3);
    }

    .mobile-nav-btn.active {
        background: rgba(0, 255, 133, 0.2);
        color: #00ff85;
        border-color: #00ff85;
        transform: translateY(0) scale(1.02);
        box-shadow: 0 4px 15px rgba(0, 255, 133, 0.4);
    }

    @keyframes slideInFromBottom {
        from {
            transform: translateY(30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .nav-btn {
        background: transparent;
        border: none;
        color: #ffffff;
        padding: 16px 24px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 600;
        transition: all 0.3s ease;
        border-bottom: 3px solid transparent;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .nav-btn:hover {
        background: rgba(0, 255, 133, 0.1);
        color: #00ff85;
    }

    .nav-btn.active {
        background: rgba(0, 255, 133, 0.15);
        color: #00ff85;
        border-bottom: 3px solid #00ff85;
    }

    .search-btn {
        background: transparent;
        border: none;
        color: rgba(255, 255, 255, 0.8);
        padding: 10px;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .search-btn:hover {
        background: rgba(0, 255, 133, 0.1);
        color: #00ff85;
        transform: scale(1.05);
    }

    .search-btn:hover svg {
        transform: scale(1.1);
        filter: brightness(1.2);
    }

    .mobile-search-btn {
        background: transparent;
        border: none;
        color: rgba(255, 255, 255, 0.8);
        padding: 15px 20px;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        text-align: left;
        font-size: 1rem;
    }

    .mobile-search-btn:hover {
        background: rgba(0, 255, 133, 0.1);
        color: #00ff85;
    }

    #content {
        background: transparent;
        padding: 0;
        min-height: 600px;
    }

    .page-title {
        font-size: 2.5rem;
        margin-bottom: 30px;
        text-align: center;
        color: #00ff85;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .page-title {
        color: #00ff85;
        font-size: 1.6rem;
        font-weight: 700;
        margin: 30px 0 25px 0;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-shadow: 0 0 10px rgba(0, 255, 133, 0.3);
        position: relative;
        white-space: nowrap;
    }

    .page-title::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background: linear-gradient(90deg, transparent, #00ff85, transparent);
        border-radius: 2px;
    }

    .time-slot-title {
        font-size: 1.2rem;
        margin: 20px 0 15px 0;
        color: #00ff85;
        font-weight: 600;
        text-align: center;
        padding: 10px 0;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .time-slot-title:first-of-type {
        margin-top: 20px;
    }

    .fixtures-sort-controls {
        width: 96%;
        margin: 0 auto 30px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
    }

    .sort-dropdown {
        position: relative;
        min-width: 150px;
    }

    .sort-select {
        width: 100%;
        padding: 12px 16px;
        background: rgba(0, 0, 0, 0.4);
        border: 2px solid rgba(0, 255, 133, 0.3);
        border-radius: 12px;
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.9rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        cursor: pointer;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
        appearance: none;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2300ff85' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
        background-position: right 12px center;
        background-repeat: no-repeat;
        background-size: 16px;
        padding-right: 40px;
    }

    .sort-select:hover {
        background: rgba(0, 255, 133, 0.1);
        border-color: rgba(0, 255, 133, 0.6);
        color: #00ff85;
        transform: translateY(-1px);
        box-shadow: 0 4px 15px rgba(0, 255, 133, 0.2);
    }

    .sort-select:focus {
        outline: none;
        border-color: #00ff85;
        box-shadow: 0 0 0 3px rgba(0, 255, 133, 0.1);
    }

    .sort-select option {
        background: #1a1a1a;
        color: #fff;
        padding: 10px;
        font-weight: 600;
        text-transform: uppercase;
    }

    .fixture {
        cursor: pointer;
    }

    .fixture:hover {
        background: rgba(0, 255, 133, 0.05);
        border-color: rgba(0, 255, 133, 0.4);
        box-shadow: 0 4px 20px rgba(0, 255, 133, 0.15);
        transform: translateY(-2px);
    }

    .fixture-footer {
        text-align: center;
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid rgba(0, 255, 133, 0.1);
    }

    .overview-link {
        color: #00ff85 !important;
        text-decoration: none !important;
        font-style: italic !important;
        font-size: 0.9rem !important;
        font-weight: 500 !important;
        transition: all 0.3s ease !important;
        padding: 8px 15px !important;
        border-radius: 6px !important;
        display: inline-block !important;
        border: 1px solid rgba(0, 255, 133, 0.3) !important;
        background: rgba(0, 255, 133, 0.05) !important;
    }

    .overview-link:hover {
        background: rgba(0, 255, 133, 0.15) !important;
        color: #fff !important;
        transform: translateY(-1px) !important;
        border-color: rgba(0, 255, 133, 0.6) !important;
    }

    .match-details-container {
        width: 96%;
        margin: 0 auto;
        background: transparent;
        border-radius: 0;
        padding: 0;
        backdrop-filter: none;
        border: none;
    }

    .match-header {
        text-align: center;
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 1px solid rgba(0, 255, 133, 0.1);
    }

    .match-teams {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        justify-items: center;
        gap: 8px;
        margin: 20px 0;
    }

    .match-team {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
    }
    
    .home-team {
        justify-self: end;
        margin-right: 8px;
    }
    
    .away-team {
        justify-self: start;
        margin-left: 8px;
    }
    
    .team-info {
        display: flex;
        align-items: center;
        gap: 4px;
    }
    
    .match-events-container {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: start;
        justify-items: center;
        gap: 8px;
        margin-top: 10px;
    }
    
    .team-events-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    
    .team-events-section:first-child {
        justify-self: end;
        margin-right: 8px;
        text-align: right;
    }
    
    .team-events-section:last-child {
        justify-self: start;
        margin-left: 8px;
        text-align: left;
    }
    
    .events-spacer {
        width: 100%;
    }

    .match-score {
        font-size: 2rem;
        font-weight: 700;
        color: #00ff85;
        text-align: center;
    }

    .match-tabs {
        width: 100%;
        margin: 20px 0;
    }

    .match-tab-buttons {
        display: flex;
        gap: 4px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 12px;
        padding: 6px;
        margin-bottom: 20px;
    }

    .match-tab-btn {
        flex: 1;
        padding: 12px 16px;
        background: transparent;
        border: none;
        border-radius: 8px;
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.9rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .match-tab-btn:hover {
        background: rgba(0, 255, 133, 0.1);
        color: rgba(255, 255, 255, 0.9);
    }

    .match-tab-btn.active {
        background: linear-gradient(135deg, #00ff85, #00cc6a);
        color: #000;
        box-shadow: 0 4px 15px rgba(0, 255, 133, 0.3);
    }

    .match-tab-content {
        position: relative;
    }

    .match-tab-pane {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    .match-tab-pane.active {
        position: relative;
        opacity: 1;
        visibility: visible;
    }

    .lineup-section {
        margin-bottom: 30px;
    }

    .lineup-title {
        color: #00ff85;
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 15px;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .lineup-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
    }

    .team-lineup {
        background: rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        padding: 12px;
        border: 1px solid rgba(0, 255, 133, 0.1);
    }

    .team-name {
        color: #00ff85;
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 15px;
        text-align: center;
        text-transform: uppercase;
    }

    .lineup-category {
        margin-bottom: 15px;
    }

    .category-title {
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.8rem;
        font-weight: 600;
        margin-bottom: 8px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .player-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 6px 10px;
        background: rgba(0, 0, 0, 0.15);
        border-radius: 6px;
        margin-bottom: 4px;
        border-left: 3px solid transparent;
        transition: all 0.2s ease;
    }


    .player-item.goal {
        border-left-color: #00ff85;
    }

    .player-item.card-yellow {
        border-left-color: #ffa500;
    }

    .player-item.card-red {
        border-left-color: #ff4757;
    }

    .player-info {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .player-number {
        background: rgba(0, 255, 133, 0.2);
        color: #00ff85;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        font-weight: 600;
    }

    .player-name {
        color: #fff;
        font-weight: 500;
        font-size: 0.8rem;
        line-height: 0.7;
    }

    .player-stats {
        display: flex;
        gap: 2px;
        align-items: center;
    }

    .stat-badge {
        padding: 1px 3px;
        border-radius: 2px;
        font-size: 0.5rem;
        font-weight: 600;
        text-transform: uppercase;
    }

    .stat-clean-sheet {
        background: rgba(0, 255, 133, 0.2);
        color: #00ff85;
        border: 1px solid rgba(0, 255, 133, 0.4);
    }

    .card-icon {
        width: 8px;
        height: 8px;
        margin-left: 3px;
        display: inline-block;
        vertical-align: middle;
    }

    .captain-icon {
        width: 0.7rem;
        height: 0.7rem;
        margin-left: 3px;
        display: inline-block;
        vertical-align: middle;
        font-style: italic;
    }

    .ball-icon {
        width: 0.7rem;
        height: 0.7rem;
        margin-left: 3px;
        display: inline-block;
        vertical-align: middle;
    }
    
    .substitution-arrow {
        margin-left: 4px;
        font-size: 0.8rem;
        font-weight: bold;
    }
    
    .substitution-arrow.down {
        color: #ff4444;
    }
    
    .substitution-arrow.up {
        color: #44ff44;
    }

    .stat-goal {
        background: #00ff85;
        color: #000;
    }

    .stat-assist {
        background: #00cc6a;
        color: #fff;
    }
    
    .stat-own-goal {
        background: #ff4444;
        color: #fff;
    }
    
    .own-goal-text {
        font-size: 0.5rem;
        font-weight: bold;
        margin-left: 2px;
    }

    .stat-yellow {
        background: #ffa500;
        color: #000;
    }

    .stat-red {
        background: #ff4757;
        color: #fff;
    }

    .back-button {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 20px;
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(0, 255, 133, 0.3);
        border-radius: 8px;
        color: #00ff85;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
        margin-bottom: 20px;
    }

    .back-button:hover {
        background: rgba(0, 255, 133, 0.1);
        border-color: rgba(0, 255, 133, 0.6);
        transform: translateX(-2px);
    }

    .analysis-section {
        margin-top: 20px;
    }

    .analysis-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        margin-top: 20px;
    }

    .analysis-card {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 12px;
        padding: 20px;
        border: 1px solid rgba(0, 255, 133, 0.1);
        text-align: center;
    }

    .analysis-card h4 {
        color: #00ff85;
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 10px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .analysis-card p {
        color: rgba(255, 255, 255, 0.8);
        margin: 5px 0;
    }

    .analysis-card ul {
        list-style: none;
        padding: 0;
        margin: 10px 0;
    }

    .analysis-card li {
        color: rgba(255, 255, 255, 0.8);
        margin: 5px 0;
        padding: 5px 0;
        border-bottom: 1px solid rgba(0, 255, 133, 0.1);
    }

    .analysis-card li:last-child {
        border-bottom: none;
    }

    .time-icon {
        width: 24px;
        height: 24px;
        color: #00ff85;
        stroke: currentColor;
        transition: transform 0.3s ease;
    }

    .time-slot-title:hover .time-icon {
        transform: rotate(15deg);
    }

    .card {
        background: #1a1a1a;
        border-radius: 8px;
        padding: 24px;
        margin: 20px 0;
        border: 1px solid #333;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    .card h3 {
        color: #00ff85;
        font-size: 1.4rem;
        font-weight: 700;
        margin-bottom: 16px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .team-card {
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 20px;
        background: transparent;
        border-radius: 0;
        margin: 0;
        transition: all 0.3s ease;
        border: none;
    }

    .team-card:hover {
        background: rgba(26, 26, 26, 0.3);
    }

    .team-logo {
        width: 50px;
        height: 50px;
        background: linear-gradient(45deg, #37003c, #00ff85);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 1.2rem;
        color: white;
    }

    .team-info h3 {
        color: #ffffff;
        margin-bottom: 8px;
        font-size: 1.3rem;
        font-weight: 700;
    }

    .table-container {
        width: 96%;
        margin: 0 auto;
        background: transparent;
        border-radius: 16px;
        overflow: hidden;
        backdrop-filter: blur(20px);
        border: 1px solid rgba(0, 255, 133, 0.15);
    }

    .table-container.scrollable {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }

    .table-container.scrollable::-webkit-scrollbar {
        height: 8px;
    }

    .table-container.scrollable::-webkit-scrollbar-track {
        background: rgba(26, 26, 26, 0.3);
        border-radius: 4px;
    }

    .table-container.scrollable::-webkit-scrollbar-thumb {
        background: rgba(0, 255, 133, 0.3);
        border-radius: 4px;
    }

    .table-container.scrollable::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 255, 133, 0.5);
    }

    .table {
        width: 100%;
        border-collapse: collapse;
        margin: 0;
        background: transparent;
    }

    .table th, .table td {
        padding: 8px 12px;
        text-align: center;
        border-bottom: 1px solid rgba(0, 255, 133, 0.1);
        line-height: 1.3;
        white-space: nowrap;
        transition: all 0.2s ease;
    }

    .short-table th, .short-table td {
        padding: 8px 12px;
    }

    .table.full-table {
        width: 100%;
    }

    .table.short-table {
        width: 100%;
    }

    .table.form-table {
        width: 100%;
    }

    .table-wrapper {
        display: flex;
        width: 100%;
    }

    .fixed-columns {
        flex-shrink: 0;
    }

    .fixed-table {
        width: 200px;
    }

    .scrollable-columns {
        flex: 1;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }

    .scrollable-columns::-webkit-scrollbar {
        height: 8px;
    }

    .scrollable-columns::-webkit-scrollbar-track {
        background: rgba(26, 26, 26, 0.3);
        border-radius: 4px;
    }

    .scrollable-columns::-webkit-scrollbar-thumb {
        background: rgba(0, 255, 133, 0.3);
        border-radius: 4px;
    }

    .scrollable-columns::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 255, 133, 0.5);
    }

    .stats-table {
        width: 100%;
    }

    .table th {
        background: rgba(26, 26, 26, 0.8);
        font-weight: 700;
        color: #00ff85;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        font-size: 0.9rem;
        backdrop-filter: blur(10px);
    }

    .table tr:hover {
        background: rgba(26, 26, 26, 0.8);
    }

    .table tr:nth-child(even) {
        background: rgba(26, 26, 26, 0.4);
    }

    .teams-container {
        width: 96%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .team-item {
        background: transparent;
        border-radius: 16px;
        overflow: hidden;
        backdrop-filter: blur(20px);
        border: 1px solid rgba(0, 255, 133, 0.15);
        transition: all 0.3s ease;
    }

    .team-item:hover {
        border-color: rgba(0, 255, 133, 0.3);
        box-shadow: 0 8px 32px rgba(0, 255, 133, 0.2);
        transform: translateY(-2px);
    }

    .table-tabs {
        width: 96%;
        margin: 0 auto;
    }

    .tab-buttons {
        display: flex;
        justify-content: center;
        gap: 0;
        margin-bottom: 20px;
        background: rgba(26, 26, 26, 0.6);
        border-radius: 12px;
        padding: 4px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(0, 255, 133, 0.15);
    }

    .tab-btn {
        background: transparent;
        border: none;
        color: #ffffff;
        padding: 12px 24px;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        font-size: 0.9rem;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        position: relative;
        overflow: hidden;
    }

    .tab-btn:hover {
        background: rgba(0, 255, 133, 0.1);
        color: #00ff85;
    }

    .tab-btn.active {
        background: rgba(0, 255, 133, 0.2);
        color: #00ff85;
        border: 1px solid rgba(0, 255, 133, 0.3);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0, 255, 133, 0.2);
    }

    .tab-content {
        position: relative;
    }

    .tab-pane {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    .tab-pane.active {
        position: relative;
        opacity: 1;
        visibility: visible;
    }

    .team-cell {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .form-win {
        color: #00ff85;
        background: rgba(0, 255, 133, 0.2);
        padding: 2px;
        border-radius: 50%;
        margin: 0 1px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
    }

    .form-draw {
        color: #ffa500;
        background: rgba(255, 165, 0, 0.2);
        padding: 2px;
        border-radius: 50%;
        margin: 0 1px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
    }

    .form-loss {
        color: #ff6b6b;
        background: rgba(255, 107, 107, 0.2);
        padding: 2px;
        border-radius: 50%;
        margin: 0 1px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
    }

    .form-none {
        color: #666;
        background: rgba(102, 102, 102, 0.2);
        padding: 2px;
        border-radius: 50%;
        margin: 0 1px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
    }

    .form-icon {
        width: 12px;
        height: 12px;
    }

    .qualification-info {
        text-align: center;
        margin: 20px auto 0;
        padding: 16px;
        width: 96%;
        background: rgba(26, 26, 26, 0.6);
        border-radius: 12px;
        border: 1px solid rgba(0, 255, 133, 0.2);
        backdrop-filter: blur(10px);
    }

    .qualification-info p {
        margin: 0;
        color: #00ff85;
        font-weight: 600;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .fixture {
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 20px;
        background: transparent;
        border-radius: 12px;
        margin: 12px auto;
        width: 96%;
        border: 1px solid rgba(0, 255, 133, 0.2);
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    }

    .fixture.team-win {
        border: 1px solid #00ff85;
        box-shadow: 0 0 8px rgba(0, 255, 133, 0.2);
    }

    .fixture.team-draw {
        border: 1px solid #ffa500;
        box-shadow: 0 0 8px rgba(255, 165, 0, 0.2);
    }

    .fixture.team-loss {
        border: 1px solid #ff4757;
        box-shadow: 0 0 8px rgba(255, 71, 87, 0.2);
    }


    .match-status {
        text-align: center;
        margin-top: 8px;
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .match-status.ft {
        color: #00ff85;
    }

    .match-status.live {
        color: #ff6b35;
        animation: pulse 2s infinite;
    }

    .match-status.postponed {
        color: #ffa500;
    }

    .penalties-display {
        font-size: 0.7rem;
        color: #ccc;
        margin-top: 4px;
        text-align: center;
        font-style: italic;
    }

    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.6; }
    }

    .fixture:hover {
        background: rgba(0, 255, 133, 0.05);
        border-color: rgba(0, 255, 133, 0.4);
        box-shadow: 0 4px 20px rgba(0, 255, 133, 0.15);
        transform: translateY(-2px);
    }

    .fixture .teams {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        gap: 8px;
        margin-top: 8px;
    }

    .team-match {
        display: flex;
        align-items: center;
        gap: 8px;
        position: relative;
    }

    .team-match:first-child {
        justify-content: flex-end;
    }

    .team-match:last-child {
        justify-content: flex-start;
    }

    .team-name-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
    }

    .red-card-indicator {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 10px;
        height: 10px;
        font-style: italic;
    }

    .red-card-indicator svg {
        width: 10px;
        height: 10px;
    }

    .score-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 50px;
    }

    .vs-score {
        font-size: 1.4rem;
        font-weight: 700;
        color: #00ff85;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .knockout-teams {
        display: flex;
        align-items: center;
        gap: 15px;
        justify-content: center;
    }

    .fixture .score {
        font-size: 1.5rem;
        font-weight: bold;
        color: #ff6b35;
    }

    .match-details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 8px;
        font-size: 0.9rem;
    }

    .venue {
        color: #ccc;
    }

    .status {
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        display: inline-block;
        transition: all 0.3s ease;
    }

    .status-upcoming {
        background: rgba(255, 165, 0, 0.2);
        color: #ffa500;
        border: 1px solid rgba(255, 165, 0, 0.3);
    }

    .status-scheduled {
        background: rgba(0, 255, 133, 0.2);
        color: #00ff85;
        border: 1px solid rgba(0, 255, 133, 0.3);
    }

    .status-completed {
        background: rgba(0, 255, 133, 0.2);
        color: #00ff85;
        border: 1px solid rgba(0, 255, 133, 0.3);
    }

    .knockout-bracket {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        margin: 20px 0;
    }

    .bracket-round {
        background: transparent;
        border-radius: 0;
        padding: 0;
        border: none;
    }

    .bracket-round h3 {
        color: #00ff85;
        margin-bottom: 20px;
        text-align: center;
        font-size: 1.3rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .match {
        background: transparent;
        border-radius: 0;
        padding: 0;
        margin: 12px 0;
        text-align: center;
        border: none;
        transition: all 0.3s ease;
    }

    .match:hover {
        background: transparent;
        box-shadow: none;
    }

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 15px;
        margin: 20px 0;
    }

    @media (max-width: 768px) {
        .stats-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 8px;
            margin: 20px 0;
        }
        
        .stat-card {
            padding: 12px 4px !important;
            aspect-ratio: 1 !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
            text-align: center !important;
            min-width: auto !important;
            flex: none !important;
        }
        
        .stat-number {
            font-size: 1.1rem;
            margin-bottom: 2px;
        }
        
    .stat-card > div:last-child {
        font-size: 0.5rem;
        line-height: 1.1;
    }
}

    .horizontal-divider {
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(0, 255, 133, 0.3), transparent);
        margin: 30px 0;
        border: none;
    }

    .section-divider {
        height: 2px;
        background: linear-gradient(90deg, transparent, rgba(0, 255, 133, 0.5), transparent);
        margin: 40px 0;
        border: none;
    }

    .team-card-blended {
        background: transparent;
        border: none;
        border-radius: 0;
        padding: 0;
        margin: 0 0 20px 0;
        transition: all 0.3s ease;
    }

    .team-header {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 20px;
        background: rgba(255, 255, 255, 0.03);
        border-radius: 12px;
        border: 1px solid rgba(0, 255, 133, 0.1);
        margin-bottom: 10px;
    }

    .team-position {
        background: linear-gradient(135deg, #00ff85, #00cc6a);
        color: #000;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 0.9rem;
    }

    .team-basic-info h3 {
        color: #fff;
        margin: 0 0 8px 0;
        font-size: 1.2rem;
        font-weight: 600;
    }

    .team-record {
        display: flex;
        gap: 12px;
        font-size: 0.85rem;
    }

    .team-record .points {
        color: #00ff85;
        font-weight: 600;
    }

    .team-record .record {
        color: rgba(255, 255, 255, 0.7);
    }

    .team-record .goals {
        color: rgba(255, 255, 255, 0.8);
    }

    .team-form {
        margin-left: auto;
        text-align: right;
    }

    .form-label {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.75rem;
        margin-bottom: 4px;
    }

    .form-display {
        font-family: monospace;
        font-size: 1rem;
        font-weight: bold;
        color: #fff;
    }

    .team-summary {
        display: flex;
        gap: 20px;
        padding: 0 20px;
        margin-bottom: 10px;
    }

    .summary-item {
        display: flex;
        gap: 8px;
        font-size: 0.85rem;
    }

    .summary-item .label {
        color: rgba(255, 255, 255, 0.6);
    }

    .summary-item .value {
        color: #fff;
    }

    .team-details-collapsed {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
        background: rgba(255, 255, 255, 0.02);
        border-radius: 8px;
        margin: 0 20px;
    }

    .team-details-collapsed.expanded {
        max-height: 500px;
        padding: 20px;
    }

    /* Tabbed Interface Styles */
    .tabs-container {
        background: transparent;
    }

    .tabs-header {
        display: flex;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        margin-bottom: 20px;
    }

    .tab-btn {
        flex: 1;
        background: transparent;
        border: none;
        padding: 12px 16px;
        color: rgba(255, 255, 255, 0.6);
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 0.9rem;
        font-weight: 500;
        position: relative;
        border-bottom: 2px solid transparent;
    }

    .tab-btn:hover {
        color: rgba(255, 255, 255, 0.8);
    }

    .tab-btn.active {
        color: #00ff85;
        border-bottom-color: #00ff85;
    }

    .tab-text {
        font-size: 0.9rem;
    }

    .tab-content {
        position: relative;
        min-height: 200px;
    }

    .tab-panel {
        display: none;
        padding: 0;
        animation: fadeIn 0.3s ease;
    }

    .tab-panel.active {
        display: block;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    /* Club Info Styles */
    .club-info-grid {
        display: flex;
        flex-direction: column;
    }

    .info-item {
        padding: 12px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .info-label {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.75rem;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .info-value {
        color: #fff;
        font-size: 0.9rem;
        font-weight: 600;
    }

    /* Squad Styles */
    .squad-grid {
        display: flex;
        flex-direction: column;
        max-height: 300px;
        overflow-y: auto;
    }

    .squad-grid::-webkit-scrollbar {
        width: 4px;
    }

    .squad-grid::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
    }

    .squad-grid::-webkit-scrollbar-thumb {
        background: #00ff85;
    }

    .player-item {
        padding: 8px 0;
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .player-number {
        color: #00ff85;
        width: 25px;
        font-weight: bold;
        font-size: 0.9rem;
    }

    .player-name {
        color: #fff;
        font-weight: 600;
        font-size: 0.9rem;
        width: 80px;
    }

    .player-position {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        width: 90px;
    }

    .player-stats {
        color: #00ff85;
        font-size: 0.8rem;
        font-weight: 600;
        flex: 1;
        text-align: right;
    }

    .stat {
        color: #00ff85;
        font-size: 0.7rem;
        font-weight: 600;
        margin-right: 8px;
    }

    /* Match History Styles */
    .match-history {
        max-height: 300px;
        overflow-y: auto;
        padding-right: 5px;
    }

    .match-history::-webkit-scrollbar {
        width: 4px;
    }

    .match-history::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 2px;
    }

    .match-history::-webkit-scrollbar-thumb {
        background: #00ff85;
        border-radius: 2px;
    }

    .match-item {
        padding: 15px 0;
        margin-bottom: 10px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
    }

    .match-item:hover {
        background: rgba(255, 255, 255, 0.05);
    }

    .match-date {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.75rem;
        margin-bottom: 8px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .match-teams {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
    }

    .match-teams .team {
        flex: 1;
        font-weight: 600;
        font-size: 0.85rem;
    }

    .match-teams .team.home {
        color: #00ff85;
    }

    .match-teams .team.away {
        color: #fff;
    }

    .match-teams .score {
        color: #fff;
        font-weight: bold;
        font-size: 1rem;
        margin: 0 15px;
    }

    .match-status {
        font-size: 0.7rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .match-status.completed {
        color: #00ff85;
    }

    .match-status.upcoming {
        color: #ffc107;
    }

    .match-details {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 5px;
    }

    .match-venue {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.7rem;
        font-style: italic;
    }

    .pom {
        color: #ffc107;
        font-size: 0.75rem;
        margin-top: 5px;
    }

    .season-form-section {
        margin-top: 30px;
        padding-top: 20px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .season-form-header h4 {
        color: #00ff85;
        font-size: 1rem;
        margin: 0 0 15px 0;
        font-weight: 600;
    }

    .season-form-display {
        background: rgba(0, 255, 133, 0.1);
        border-radius: 8px;
        padding: 15px;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 600;
        color: #00ff85;
        letter-spacing: 2px;
        text-align: center;
        border: 1px solid rgba(0, 255, 133, 0.2);
    }

    .no-data {
        text-align: center;
        color: rgba(255, 255, 255, 0.5);
        font-style: italic;
        padding: 40px 20px;
    }

    /* Team Search Styles */
    .team-search-container {
        margin-bottom: 40px;
        display: flex;
        justify-content: center;
    }

    .search-input-wrapper {
        position: relative;
        width: 60%;
    }

    .team-search-input {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
        border: 2px solid rgba(255, 255, 255, 0.1);
        border-radius: 25px;
        padding: 16px 24px 16px 50px;
        color: #fff;
        font-size: 1.1rem;
        font-weight: 500;
        width: 100%;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(10px);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
    }

    .team-search-input:focus {
        outline: none;
        border-color: #00ff85;
        background: linear-gradient(135deg, rgba(0, 255, 133, 0.15), rgba(0, 255, 133, 0.05));
        box-shadow: 0 0 0 4px rgba(0, 255, 133, 0.2), 0 12px 40px rgba(0, 255, 133, 0.1);
        transform: translateY(-2px);
    }

    .team-search-input:hover {
        border-color: rgba(0, 255, 133, 0.3);
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08));
        transform: translateY(-1px);
    }

    .team-search-input::placeholder {
        color: rgba(255, 255, 255, 0.6);
        font-weight: 400;
        transition: all 0.3s ease;
    }

    .team-search-input:focus::placeholder {
        color: rgba(0, 255, 133, 0.7);
        transform: translateX(5px);
    }

    .search-icon {
        position: absolute;
        left: 18px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.2rem;
        color: rgba(255, 255, 255, 0.4);
        pointer-events: none;
        transition: all 0.3s ease;
        z-index: 2;
    }

    .team-search-input:focus + .search-icon {
        color: #00ff85;
        transform: translateY(-50%) scale(1.1);
    }

    .team-search-input:not(:placeholder-shown) + .search-icon {
        color: rgba(0, 255, 133, 0.7);
    }

    .team-card-blended.hidden {
        display: none;
    }

    .team-divider {
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        margin: 20px 0;
        border: none;
    }

    .no-results-message {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 300px;
        padding: 40px 20px;
    }

    .no-results-content {
        text-align: center;
        max-width: 400px;
    }


    .no-results-content h3 {
        color: #fff;
        font-size: 1.5rem;
        margin: 0 0 15px 0;
        font-weight: 600;
    }

    .no-results-content p {
        color: rgba(255, 255, 255, 0.7);
        font-size: 1rem;
        margin: 0 0 10px 0;
        line-height: 1.5;
    }

    .no-results-content strong {
        color: #00ff85;
        font-weight: 600;
    }

    .no-results-suggestion {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
        font-style: italic;
    }

    .squad-compact {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 8px;
    }

    .player-compact {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 8px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 6px;
        font-size: 0.8rem;
    }

    .player-compact .number {
        background: rgba(0, 255, 133, 0.2);
        color: #00ff85;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 0.7rem;
    }

    .player-compact .name {
        color: #fff;
        font-weight: 500;
        flex: 1;
    }

    .player-compact .position {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.7rem;
    }

    .player-compact .stats {
        color: #00ff85;
        font-size: 0.7rem;
        font-weight: 600;
    }

    .more-players {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.8rem;
        text-align: center;
        padding: 10px;
        font-style: italic;
    }

    .read-more-btn {
        background: transparent;
        border: 1px solid rgba(0, 255, 133, 0.3);
        color: #00ff85;
        padding: 8px 20px;
        border-radius: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 10px 20px 0;
        font-size: 0.85rem;
        transition: all 0.3s ease;
    }

    .read-more-btn:hover {
        background: rgba(0, 255, 133, 0.1);
        border-color: rgba(0, 255, 133, 0.5);
    }

    .read-more-icon {
        transition: transform 0.3s ease;
    }

    .stats-sections {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 30px;
        margin: 30px 0;
    }

    .stats-section {
        background: transparent;
        border-radius: 0;
        padding: 0;
        border: none;
    }

    .stats-section h3 {
        color: #00ff85;
        margin-bottom: 15px;
        font-size: 1.2rem;
        font-weight: 600;
        text-align: center;
    }

    .stats-semi-title {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 8px 12px;
        margin-bottom: 10px;
        background: rgba(0, 255, 133, 0.1);
        border-radius: 8px;
        font-size: 0.9rem;
        font-weight: 600;
        color: #00ff85;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .stats-semi-title span:first-child {
        flex: 1;
        text-align: left;
    }

    .stats-semi-title span:nth-child(2) {
        width: 80px;
        text-align: center;
    }

    .stats-semi-title span:last-child {
        width: 100px;
        text-align: right;
    }

    .stats-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .stat-item {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 12px;
        background: transparent;
        border-radius: 0;
        border: none;
        transition: all 0.3s ease;
    }

    .stat-item:hover {
        background: transparent;
        border: none;
        transform: none;
    }

    .stat-rank {
        width: 30px;
        height: 30px;
        background: linear-gradient(135deg, #00ff85, #00cc6a);
        color: #000;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 0.9rem;
    }

    .stat-player {
        flex: 1;
    }

    .stat-player .player-name {
        font-weight: 600;
        color: #fff;
        font-size: 1rem;
    }

    .stat-player .player-team {
        color: #ccc;
        font-size: 0.8rem;
        margin-top: 2px;
    }

    .stat-matches {
        width: 80px;
        text-align: center;
        color: rgba(255, 255, 255, 0.8);
        font-weight: 500;
        font-size: 0.9rem;
    }

    .stat-value {
        width: 100px;
        text-align: right;
        color: #00ff85;
        font-weight: 600;
        font-size: 0.9rem;
    }

    .stat-card {
        background: transparent;
        border-radius: 0;
        padding: 24px;
        text-align: center;
        border: none;
        transition: all 0.3s ease;
        flex: 1 !important;
        min-width: 200px;
        max-width: none !important;
        width: auto !important;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .stat-card:hover {
        background: transparent;
        box-shadow: none;
    }

    .stat-number {
        font-size: 2.5rem;
        font-weight: 900;
        color: #00ff85;
        margin-bottom: 12px;
    }

    .award {
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 20px;
        background: #2a2a2a;
        border-radius: 8px;
        margin: 12px 0;
        border: 1px solid #444;
        transition: all 0.3s ease;
    }

    .award:hover {
        background: #333;
        box-shadow: 0 4px 12px rgba(0, 255, 133, 0.1);
    }

    .award-icon {
        width: 50px;
        height: 50px;
        background: linear-gradient(45deg, #ffd700, #ffed4e);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.8rem;
        box-shadow: 0 2px 8px rgba(255, 215, 0, 0.3);
    }

    .awards-ceremony {
        min-height: 100vh;
        background: transparent;
        padding: 20px;
        position: relative;
        overflow: hidden;
    }

    .awards-ceremony::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at 50% 50%, rgba(0, 255, 133, 0.05) 0%, transparent 70%);
        pointer-events: none;
    }


    .awards-showcase {
        max-width: 1200px;
        margin: 0 auto;
        position: relative;
        z-index: 2;
    }

    .award-podium {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        margin-bottom: 40px;
    }

    .award-item.featured {
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 25px;
        background: linear-gradient(135deg, rgba(0, 255, 133, 0.08), rgba(0, 204, 106, 0.04));
        border: 1px solid rgba(0, 255, 133, 0.2);
        border-radius: 15px;
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .award-item.featured::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(0, 255, 133, 0.03), transparent);
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .award-item.featured:hover {
        transform: translateY(-2px);
        border-color: rgba(0, 255, 133, 0.4);
        box-shadow: 0 10px 25px rgba(0, 255, 133, 0.15);
    }

    .award-item.featured:hover::before {
        opacity: 1;
    }

    .award-trophy {
        position: relative;
        width: 60px;
        height: 75px;
        flex-shrink: 0;
    }

    .trophy-base {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 45px;
        height: 22px;
        background: linear-gradient(135deg, #00ff85, #00cc6a);
        border-radius: 0 0 6px 6px;
        box-shadow: 0 3px 10px rgba(0, 255, 133, 0.3);
    }

    .trophy-cup {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 38px;
        height: 45px;
        background: linear-gradient(135deg, #00ff85, #00cc6a);
        border-radius: 19px 19px 12px 12px;
        box-shadow: 0 3px 10px rgba(0, 255, 133, 0.3);
    }

    .trophy-cup::before {
        content: '';
        position: absolute;
        top: -4px;
        left: 50%;
        transform: translateX(-50%);
        width: 22px;
        height: 8px;
        background: linear-gradient(135deg, #00ff85, #00cc6a);
        border-radius: 11px;
    }

    .award-info {
        flex: 1;
    }

    .award-title {
        font-size: 1.4rem;
        font-weight: 700;
        color: #fff;
        margin-bottom: 8px;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    }

    .award-recipient {
        font-size: 1.6rem;
        font-weight: 900;
        color: #00ff85;
        margin-bottom: 6px;
        text-shadow: 0 0 10px rgba(0, 255, 133, 0.3);
    }

    .award-description {
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.7);
        font-weight: 300;
        line-height: 1.3;
    }

    .awards-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 15px;
    }

    .award-item {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 20px;
        background: linear-gradient(135deg, rgba(0, 255, 133, 0.05), rgba(0, 204, 106, 0.02));
        border: 1px solid rgba(0, 255, 133, 0.15);
        border-radius: 12px;
        backdrop-filter: blur(8px);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .award-item::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(0, 255, 133, 0.03), transparent);
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .award-item:hover {
        transform: translateY(-2px);
        border-color: rgba(0, 255, 133, 0.3);
        box-shadow: 0 8px 20px rgba(0, 255, 133, 0.1);
    }

    .award-item:hover::before {
        opacity: 1;
    }

    .award-badge {
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #00ff85, #00cc6a);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        box-shadow: 0 3px 10px rgba(0, 255, 133, 0.2);
        transition: all 0.3s ease;
    }

    .award-item:hover .award-badge {
        transform: scale(1.05);
        box-shadow: 0 4px 15px rgba(0, 255, 133, 0.3);
    }

    .badge-icon {
        color: #000;
        font-size: 0.9rem;
        font-weight: 900;
        letter-spacing: 0.5px;
    }

    .award-item .award-title {
        font-size: 1.1rem;
        margin-bottom: 6px;
    }

    .award-item .award-recipient {
        font-size: 1.2rem;
        margin-bottom: 4px;
    }

    .award-stats {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.6);
        font-weight: 400;
    }

    .awards-pending {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 60px 20px;
        background: linear-gradient(135deg, rgba(0, 255, 133, 0.05), rgba(0, 204, 106, 0.02));
        border: 1px solid rgba(0, 255, 133, 0.2);
        border-radius: 20px;
        backdrop-filter: blur(10px);
        max-width: 600px;
        margin: 0 auto;
    }

    .pending-icon {
        margin-bottom: 30px;
    }

    .trophy-placeholder {
        position: relative;
        width: 80px;
        height: 100px;
        margin: 0 auto;
        opacity: 0.3;
    }

    .trophy-placeholder .trophy-base {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 30px;
        background: linear-gradient(135deg, rgba(0, 255, 133, 0.3), rgba(0, 204, 106, 0.3));
        border-radius: 0 0 8px 8px;
        border: 2px dashed rgba(0, 255, 133, 0.4);
    }

    .trophy-placeholder .trophy-cup {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        height: 60px;
        background: linear-gradient(135deg, rgba(0, 255, 133, 0.3), rgba(0, 204, 106, 0.3));
        border-radius: 25px 25px 15px 15px;
        border: 2px dashed rgba(0, 255, 133, 0.4);
    }

    .trophy-placeholder .trophy-cup::before {
        content: '';
        position: absolute;
        top: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: 30px;
        height: 10px;
        background: linear-gradient(135deg, rgba(0, 255, 133, 0.3), rgba(0, 204, 106, 0.3));
        border-radius: 15px;
        border: 2px dashed rgba(0, 255, 133, 0.4);
    }

    .pending-content {
        max-width: 400px;
    }

    .pending-title {
        font-size: 2rem;
        font-weight: 700;
        color: #00ff85;
        margin-bottom: 15px;
        text-shadow: 0 0 15px rgba(0, 255, 133, 0.3);
    }

    .pending-message {
        font-size: 1.1rem;
        color: #fff;
        margin-bottom: 20px;
        line-height: 1.5;
        font-weight: 500;
    }

    .pending-details {
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.7);
        line-height: 1.4;
    }

    /* Tablet styles */
    @media (min-width: 768px) {
        .awards-ceremony {
            padding: 30px;
        }

        .award-podium {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
            margin-bottom: 50px;
        }

        .award-item.featured {
            padding: 30px;
            gap: 25px;
        }

        .award-trophy {
            width: 70px;
            height: 85px;
        }

        .trophy-base {
            width: 52px;
            height: 26px;
        }

        .trophy-cup {
            width: 44px;
            height: 52px;
        }

        .trophy-cup::before {
            width: 26px;
            height: 9px;
        }

        .award-title {
            font-size: 1.6rem;
        }

        .award-recipient {
            font-size: 1.8rem;
        }

        .awards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }

        .award-item {
            padding: 25px;
            gap: 18px;
        }

        .award-badge {
            width: 55px;
            height: 55px;
        }

        .badge-icon {
            font-size: 1rem;
        }

        .award-item .award-title {
            font-size: 1.2rem;
        }

        .award-item .award-recipient {
            font-size: 1.3rem;
        }
    }

    /* Desktop styles */
    @media (min-width: 1024px) {
        .awards-ceremony {
            padding: 40px;
        }

        .award-podium {
            gap: 40px;
            margin-bottom: 60px;
        }

        .award-item.featured {
            padding: 40px;
            gap: 30px;
        }

        .award-trophy {
            width: 80px;
            height: 100px;
        }

        .trophy-base {
            width: 60px;
            height: 30px;
        }

        .trophy-cup {
            width: 50px;
            height: 60px;
        }

        .trophy-cup::before {
            width: 30px;
            height: 10px;
        }

        .award-title {
            font-size: 1.8rem;
        }

        .award-recipient {
            font-size: 2rem;
        }

        .awards-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
        }

        .award-item {
            padding: 30px;
            gap: 20px;
        }

        .award-badge {
            width: 60px;
            height: 60px;
        }

        .badge-icon {
            font-size: 1rem;
        }

        .award-item .award-title {
            font-size: 1.3rem;
        }

        .award-item .award-recipient {
            font-size: 1.4rem;
        }
    }

    .loading {
        text-align: center;
        font-size: 1.4rem;
        color: #00ff85;
        margin: 50px 0;
        font-weight: 600;
    }

    /* Home Page Styles */
    .home-container {
        display: flex;
        flex-direction: column;
        gap: 0;
        margin: 0;
        width: 100%;
    }

    .overall-search-section {
        padding: 30px 20px;
        background: linear-gradient(135deg, rgba(0, 255, 133, 0.05) 0%, rgba(55, 0, 60, 0.1) 100%);
        border-bottom: 1px solid rgba(0, 255, 133, 0.2);
    }

    .search-container {
        position: relative;
        max-width: 600px;
        margin: 0 auto;
    }

    .overall-search-input {
        width: 100%;
        padding: 15px 50px 15px 20px;
        font-size: 1.1rem;
        border: 2px solid rgba(0, 255, 133, 0.3);
        border-radius: 25px;
        background: rgba(0, 0, 0, 0.3);
        color: #ffffff;
        outline: none;
        transition: all 0.3s ease;
    }

    .overall-search-input:focus {
        border-color: #00ff85;
        box-shadow: 0 0 20px rgba(0, 255, 133, 0.3);
        background: rgba(0, 0, 0, 0.5);
    }

    .overall-search-input::placeholder {
        color: rgba(255, 255, 255, 0.6);
    }

    .search-container .search-icon {
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        color: #00ff85;
        font-size: 1.2rem;
        pointer-events: none;
    }

    .search-results {
        max-width: 600px;
        margin: 20px auto 0;
        display: none;
    }

    .search-results.show {
        display: block;
    }

    .search-result-item {
        padding: 15px;
        margin-bottom: 10px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        border-left: 3px solid #00ff85;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .search-result-item:hover {
        background: rgba(0, 255, 133, 0.1);
        transform: translateX(5px);
    }

    .search-result-type {
        font-size: 0.8rem;
        color: #00ff85;
        text-transform: uppercase;
        font-weight: 600;
        margin-bottom: 5px;
    }

    .search-result-title {
        font-size: 1rem;
        color: #ffffff;
        font-weight: 500;
        margin-bottom: 3px;
    }

    .search-result-details {
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.7);
    }

    .search-page-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    .countdown-section {
        text-align: center;
        padding: 40px 20px;
        background: linear-gradient(135deg, rgba(0, 255, 133, 0.1) 0%, rgba(55, 0, 60, 0.3) 100%);
        border-bottom: 2px solid #00ff85;
    }


    .countdown-subtitle {
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 30px;
        font-weight: 500;
    }

    .countdown-timer {
        display: flex;
        justify-content: center;
        gap: 30px;
        flex-wrap: wrap;
    }

    .countdown-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 80px;
    }

    .countdown-number {
        font-size: 2.5rem;
        font-weight: 900;
        color: #00ff85;
        line-height: 1;
        text-shadow: 0 0 20px rgba(0, 255, 133, 0.5);
        margin-bottom: 5px;
    }

    .countdown-label {
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.7);
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 600;
    }

    .mobile-break {
        display: none;
    }

    @media (max-width: 768px) {
        .countdown-timer {
            gap: 20px;
        }
        
        .countdown-number {
            font-size: 2rem;
        }
        
        .countdown-section .page-title {
            font-size: 1.5rem;
            line-height: 1.2;
        }
        
        .mobile-break {
            display: inline;
        }
    }

    .home-hero {
        text-align: center;
        padding: 100px 20px 80px 20px;
        width: 100%;
        margin: 0;
        background-image: url('assets/images/hero.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        border-radius: 0;
        min-height: 400px;
        overflow: hidden;
    }

    .home-hero::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url('assets/images/hero.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        filter: blur(1.5px);
        z-index: 0;
    }

    .home-hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 1;
    }

    .hero-content {
        position: relative;
        z-index: 2;
    }


    .hero-title {
        font-size: 2rem;
        font-weight: 700;
        color: #00ff85;
        margin-bottom: 15px;
        text-shadow: 0 0 20px rgba(0, 255, 133, 0.3);
    }

    .hero-description {
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.6;
        max-width: 600px;
        margin: 0 auto;
    }


    /* Preview Sections */
    .home-preview-sections {
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 30px 0;
    }

    .preview-section {
        padding: 25px;
        width: 100%;
        margin: 0 auto;
    }

    .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 1px solid rgba(0, 255, 133, 0.2);
    }

    .section-header h3 {
        font-size: 1.4rem;
        font-weight: 600;
        color: #00ff85;
        margin: 0;
    }

    .view-more-link {
        color: #00ff85;
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 500;
        padding: 8px 16px;
        border: 1px solid rgba(0, 255, 133, 0.3);
        border-radius: 20px;
        transition: all 0.3s ease;
        background: rgba(0, 255, 133, 0.05);
    }

    .view-more-link:hover {
        background: rgba(0, 255, 133, 0.1);
        border-color: rgba(0, 255, 133, 0.5);
        transform: translateY(-1px);
    }

    .preview-content {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .preview-subsection {
        padding: 15px;
    }

    .preview-subsection h4 {
        color: #00ff85;
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .matches-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .match-item {
        padding: 12px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .match-item:hover {
        opacity: 0.8;
    }

    .match-teams {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        gap: 10px;
        margin-bottom: 5px;
    }

    .match-teams .team-name {
        font-weight: 500;
        color: #ffffff;
        font-size: 0.9rem;
    }

    .match-teams .team-name:first-child {
        text-align: right;
    }

    .match-teams .team-name:last-child {
        text-align: left;
    }

    .match-teams .vs {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.8rem;
        text-align: center;
    }

    .match-teams .score {
        color: #00ff85;
        font-weight: 600;
        font-size: 1rem;
        text-align: center;
    }

    .match-time {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.6);
        text-align: center;
    }

    .no-data {
        text-align: center;
        color: rgba(255, 255, 255, 0.5);
        font-style: italic;
        padding: 20px;
    }

    .table-preview {
        overflow: hidden;
    }

    .knockout-preview {
        padding: 15px;
    }

    .stage-info h4 {
        color: #00ff85;
        font-size: 1rem;
        margin-bottom: 5px;
    }

    .stage-info p {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.9rem;
        margin-bottom: 15px;
    }

    .knockout-matches {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .knockout-match {
        padding: 12px;
    }

    .knockout-match .match-teams {
        margin-bottom: 5px;
    }

    .knockout-match .match-status {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.6);
        text-align: center;
    }

    .stats-preview {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .stat-category {
        padding: 15px;
    }

    .stat-category h4 {
        color: #00ff85;
        font-size: 1rem;
        margin-bottom: 10px;
    }

    .stat-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0;
        border-bottom: 1px solid rgba(0, 255, 133, 0.3);
        gap: 10px;
        font-weight: 600;
        color: #00ff85;
        font-size: 0.8rem;
        margin-bottom: 5px;
    }

    .stat-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        gap: 10px;
    }

    .stat-item:last-child {
        border-bottom: none;
    }

    .stat-item .player-name {
        color: #ffffff;
        font-size: 0.9rem;
        font-weight: 500;
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .stat-item .stat-matches {
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.9rem;
        font-weight: 500;
        text-align: center;
        min-width: 50px;
    }

    .stat-item .stat-value {
        color: #00ff85;
        font-size: 0.9rem;
        font-weight: 600;
        text-align: center;
        min-width: 50px;
    }

    .awards-preview {
        padding: 15px;
    }

    .award-item {
        margin-bottom: 15px;
    }

    .award-item:last-child {
        margin-bottom: 0;
    }

    .award-item h4 {
        color: #00ff85;
        font-size: 1rem;
        margin-bottom: 5px;
    }

    .award-item p {
        color: #ffffff;
        font-size: 0.9rem;
        font-weight: 500;
    }

    .awards-pending {
        text-align: center;
        color: rgba(255, 255, 255, 0.6);
        font-style: italic;
        padding: 20px;
    }

    .sponsors-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 20px;
        padding: 20px 0;
    }

    .sponsor-item {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        transition: all 0.3s ease;
    }

    .sponsor-item:hover {
        transform: translateY(-2px);
    }

    .sponsor-logo {
        width: 120px;
        height: 120px;
        filter: brightness(0) invert(1) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0.8) contrast(1.2);
        transition: all 0.3s ease;
    }

    .sponsor-item:hover .sponsor-logo {
        transform: scale(1.05);
    }

    /* Responsive Design */
    @media (min-width: 768px) {
        .hero-title {
            font-size: 2.5rem;
        }

        .hero-description {
            font-size: 1.2rem;
        }
    }

    .squad-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 10px;
        margin: 15px 0;
    }

    .player-card {
        background: #2a2a2a;
        border-radius: 8px;
        padding: 16px;
        text-align: center;
        border: 1px solid #444;
        transition: all 0.3s ease;
    }

    .player-card:hover {
        background: #333;
        box-shadow: 0 4px 12px rgba(0, 255, 133, 0.1);
    }

    .player-card .player-number {
        font-size: 1.8rem;
        font-weight: 900;
        color: #00ff85;
        margin-bottom: 8px;
    }

    .player-card .player-name {
        font-weight: 700;
        margin-bottom: 6px;
        color: #ffffff;
        font-size: 1.1rem;
    }

    .player-position {
        font-size: 0.9rem;
        color: #ccc;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .team-details {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 15px;
        margin: 15px 0;
    }

    .detail-card {
        background: #2a2a2a;
        border-radius: 8px;
        padding: 20px;
        text-align: center;
        border: 1px solid #444;
        transition: all 0.3s ease;
    }

    .detail-card:hover {
        background: #333;
        box-shadow: 0 4px 12px rgba(0, 255, 133, 0.1);
    }

    .detail-label {
        font-size: 0.9rem;
        color: #ccc;
        margin-bottom: 8px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .detail-value {
        font-size: 1.3rem;
        font-weight: 700;
        color: #00ff85;
    }

    @media (max-width: 768px) {
        #navigation {
            padding: 15px 20px;
        }

        .nav-links {
            display: none;
        }

        .mobile-controls {
            display: flex;
        }

        .hamburger {
            display: flex;
        }
    }
        
        .website-logo {
            height: 45px;
        }

        .page-title {
            font-size: 1.4rem;
            margin: 25px 0 20px 0;
            letter-spacing: 1px;
        }
        
        .fixture {
            flex-direction: column;
            gap: 10px;
        }
        
        .card {
            padding: 20px;
        }
        
        .table-container {
            overflow-x: auto;
        }
        
        .squad-grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        }
        
        .player-card {
            padding: 15px;
        }
    }
`;

// Inject CSS styles
const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// Function to get next opponent logo
function getNextOpponentLogo(teamName) {
    // Find the next upcoming match for this team
    for (let timeSlot of leagueData.fixturesData) {
        for (let match of timeSlot.matches) {
            if ((match.homeTeam === teamName || match.awayTeam === teamName) && 
                (match.status === 'upcoming' || match.status === 'scheduled')) {
                const opponent = match.homeTeam === teamName ? match.awayTeam : match.homeTeam;
                const opponentTeam = leagueData.teams.find(t => t.name === opponent);
                return getTeamLogoElement(opponentTeam?.id || '', '20px');
            }
        }
    }
    return '<span style="color: #666;">-</span>';
}

// Function to get team form (last 5 matches)
function getTeamForm(teamName) {
    const form = [];
    let matchCount = 0;
    
    // Go through fixtures in reverse order to get most recent matches
    for (let i = leagueData.fixturesData.length - 1; i >= 0 && matchCount < 5; i--) {
        const timeSlot = leagueData.fixturesData[i];
        for (let match of timeSlot.matches) {
            if ((match.homeTeam === teamName || match.awayTeam === teamName) && 
                match.status === 'completed' && matchCount < 5) {
                const isHome = match.homeTeam === teamName;
                const teamScore = isHome ? match.homeScore : match.awayScore;
                const opponentScore = isHome ? match.awayScore : match.homeScore;
                
                if (teamScore > opponentScore) {
                    form.push('<span class="form-win"><svg class="form-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>');
                } else if (teamScore < opponentScore) {
                    form.push('<span class="form-loss"><svg class="form-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>');
                } else {
                    form.push('<span class="form-draw"><svg class="form-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>');
                }
                matchCount++;
            }
        }
    }
    
    // Fill remaining slots with dashes if less than 5 matches
    while (form.length < 5) {
        form.push('<span class="form-none">-</span>');
    }
    
    return form.join('');
}

// Function to calculate team standings dynamically from fixtures
function calculateStandings() {
    const standings = {};
    
    // Initialize all teams with zero stats
    leagueData.teams.forEach(team => {
        standings[team.name] = {
            id: team.id,
            name: team.name,
            logo: team.logo,
            logoFile: team.logoFile,
            founded: team.founded,
            stadium: team.stadium,
            captain: team.captain,
            squad: team.squad, // Add squad data
            points: 0,
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            goalsFor: 0,
            goalsAgainst: 0
        };
    });
    
    // Process all completed matches
    leagueData.fixturesData.forEach(timeSlot => {
        timeSlot.matches.forEach(match => {
            if (match.status === 'completed' && match.homeScore !== null && match.awayScore !== null) {
                const homeTeam = match.homeTeam;
                const awayTeam = match.awayTeam;
                
                // Update played matches
                standings[homeTeam].played++;
                standings[awayTeam].played++;
                
                // Update goals
                standings[homeTeam].goalsFor += match.homeScore;
                standings[homeTeam].goalsAgainst += match.awayScore;
                standings[awayTeam].goalsFor += match.awayScore;
                standings[awayTeam].goalsAgainst += match.homeScore;
                
                // Update points and win/draw/loss records
                if (match.homeScore > match.awayScore) {
                    // Home team wins
                    standings[homeTeam].points += 3;
                    standings[homeTeam].won++;
                    standings[awayTeam].lost++;
                } else if (match.homeScore < match.awayScore) {
                    // Away team wins
                    standings[awayTeam].points += 3;
                    standings[awayTeam].won++;
                    standings[homeTeam].lost++;
                } else {
                    // Draw
                    standings[homeTeam].points += 1;
                    standings[awayTeam].points += 1;
                    standings[homeTeam].drawn++;
                    standings[awayTeam].drawn++;
                }
            }
        });
    });
    
    // Convert to array and sort by points (descending), then goal difference (descending)
    return Object.values(standings).sort((a, b) => {
        const aGoalDiff = a.goalsFor - a.goalsAgainst;
        const bGoalDiff = b.goalsFor - b.goalsAgainst;
        
        if (b.points !== a.points) {
            return b.points - a.points;
        }
        return bGoalDiff - aGoalDiff;
    });
}

// Sample data for the league
const leagueData = {
    teams: [
        { 
            id: "mbarara", 
            name: "Mbarara", 
            logo: "MB",
            logoFile: "mbarara.svg",
            founded: 2024,
            stadium: "Maracanã Stadium",
            captain: "Afande",
            squad: [
                { id: 'mbarara-afande', number: 1, name: 'Afande', position: 'Forward' },
                { id: 'mbarara-yasin', number: 31, name: 'Yasin', position: 'Goalkeeper' },
                { id: 'mbarara-success', number: 2, name: 'Success', position: 'Midfielder' },
                { id: 'mbarara-amon', number: 3, name: 'Amon', position: 'Defender' },
                { id: 'mbarara-benard', number: 4, name: 'Benard', position: 'Midfielder' },
                { id: 'mbarara-cliff', number: 5, name: 'Cliff', position: 'Defender' },
                { id: 'mbarara-keneth-maiso', number: 6, name: 'Keneth Maiso', position: 'Midfielder' },
                { id: 'mbarara-tony', number: 7, name: 'Tony', position: 'Forward' },
                { id: 'mbarara-kabagambe', number: 8, name: 'Kabagambe', position: 'Midfielder' },
                { id: 'mbarara-davie', number: 9, name: 'Davie', position: 'Forward' },
                { id: 'mbarara-elaisha', number: 10, name: 'Elaisha', position: 'Midfielder' },
                { id: 'mbarara-gitta', number: 11, name: 'Gitta', position: 'Forward' },
                { id: 'mbarara-martin', number: 12, name: 'Martin', position: 'Defender' },
                { id: 'mbarara-latif', number: 13, name: 'Latif', position: 'Midfielder' },
                { id: 'mbarara-muzoora', number: 14, name: 'Muzoora', position: 'Defender' },
                { id: 'mbarara-malcom', number: 15, name: 'Malcom', position: 'Midfielder' },
                { id: 'mbarara-jude', number: 16, name: 'Jude', position: 'Forward' },
                { id: 'mbarara-ballack', number: 17, name: 'Ballack', position: 'Midfielder' },
                { id: 'mbarara-ronny', number: 18, name: 'Ronny', position: 'Defender' }
            ]
        },
        { 
            id: "gulu", 
            name: "Gulu", 
            logo: "GU",
            logoFile: "gulu.svg",
            founded: 2024, 
            stadium: "Gulu Stadium", 
            captain: "Solomon O",
            squad: [
                { id: 'gulu-solomon-o', number: 1, name: 'Solomon O', position: 'Forward' },
                { id: 'gulu-sebastien', number: 2, name: 'Sebastien', position: 'Midfielder' },
                { id: 'gulu-allano', number: 3, name: 'Allano', position: 'Defender' },
                { id: 'gulu-panda', number: 4, name: 'Panda', position: 'Midfielder' },
                { id: 'gulu-walash', number: 5, name: 'Walash', position: 'Defender' },
                { id: 'gulu-jaguar', number: 6, name: 'Jaguar', position: 'Midfielder' },
                { id: 'gulu-trevor', number: 7, name: 'Trevor', position: 'Forward' },
                { id: 'gulu-musaazi-a', number: 8, name: 'Musaazi A', position: 'Midfielder' },
                { id: 'gulu-charles', number: 9, name: 'Charles', position: 'Forward' },
                { id: 'gulu-marc-henry', number: 10, name: 'Marc Henry', position: 'Midfielder' },
                { id: 'gulu-kityo', number: 11, name: 'Kityo', position: 'Forward' },
                { id: 'gulu-jose', number: 12, name: 'Jose', position: 'Defender' },
                { id: 'gulu-robert', number: 13, name: 'Robert', position: 'Midfielder' },
                { id: 'gulu-edgar-m', number: 14, name: 'Edgar M', position: 'Defender' },
                { id: 'gulu-jk', number: 15, name: 'JK', position: 'Midfielder' },
                { id: 'gulu-brian', number: 16, name: 'Brian', position: 'Forward' },
                { id: 'gulu-wilson', number: 17, name: 'Wilson', position: 'Midfielder' },
                { id: 'gulu-alex-katongole', number: 18, name: 'Alex Katongole', position: 'Defender' }
            ]
        },
        { 
            id: "arua", 
            name: "Arua", 
            logo: "AR",
            logoFile: "arua.svg",
            founded: 2024, 
            stadium: "Arua Stadium", 
            captain: "Aaron",
            squad: [
                { id: 'arua-aaron', number: 4, name: 'Aaron', position: 'Defender' },
                { id: 'arua-emmanuel', number: 1, name: 'Emmanuel', position: 'Goalkeeper' },
                { id: 'arua-sharif', number: 77, name: 'Sharif', position: 'Midfielder' },
                { id: 'arua-denis', number: 9, name: 'Denis', position: 'Forward' },
                { id: 'arua-emmy', number: 16, name: 'Emmy', position: 'Midfielder' },
                { id: 'arua-millio', number: 5, name: 'Millio', position: 'Defender' },
                { id: 'arua-franco', number: 8, name: 'Franco', position: 'Midfielder' },
                { id: 'arua-mykolo', number: 3, name: 'Mykolo', position: 'Defender' },
                { id: 'arua-emo', number: 6, name: 'Emo', position: 'Midfielder' },
                { id: 'arua-aggrey', number: 23, name: 'Aggrey', position: 'Forward' },
                { id: 'arua-arthur-o', number: 17, name: 'Arthur O', position: 'Midfielder' },
                { id: 'arua-mark-o', number: 11, name: 'Mark O', position: 'Forward' },
                { id: 'arua-victor', number: 12, name: 'Victor', position: 'Defender' },
                { id: 'arua-melody', number: 13, name: 'Melody', position: 'Midfielder' },
                { id: 'arua-asaph', number: 14, name: 'Asaph', position: 'Defender' },
                { id: 'arua-falcon', number: 15, name: 'Falcon', position: 'Midfielder' },
                { id: 'arua-henry', number: 10, name: 'Henry', position: 'Forward' },
                { id: 'arua-felix', number: 20, name: 'Felix', position: 'Midfielder' },
                { id: 'arua-alex-ifeanyi', number: 18, name: 'Alex Ifeanyi', position: 'Defender' },
                { id: 'arua-mike', number: 19, name: 'Mike', position: 'Forward' }
            ]
        },
        { 
            id: "masaka", 
            name: "Masaka", 
            logo: "MS",
            logoFile: "masaka.svg",
            founded: 2024, 
            stadium: "Masaka Stadium", 
            captain: "Kagame",
            squad: [
                { id: 'masaka-kagame', number: 1, name: 'Kagame', position: 'Forward' },
                { id: 'masaka-ken', number: 2, name: 'Ken', position: 'Midfielder' },
                { id: 'masaka-barney', number: 3, name: 'Barney', position: 'Defender' },
                { id: 'masaka-pato', number: 4, name: 'Pato', position: 'Midfielder' },
                { id: 'masaka-coach-musisi', number: 5, name: 'Coach Musisi', position: 'Defender' },
                { id: 'masaka-messi', number: 6, name: 'Messi', position: 'Midfielder' },
                { id: 'masaka-bob', number: 7, name: 'Bob', position: 'Forward' },
                { id: 'masaka-shakes', number: 8, name: 'Shakes', position: 'Midfielder' },
                { id: 'masaka-sir-aludah', number: 9, name: 'Sir Aludah', position: 'Forward' },
                { id: 'masaka-fem-dj', number: 10, name: 'Fem DJ', position: 'Midfielder' },
                { id: 'masaka-ivan-dj', number: 11, name: 'Ivan DJ', position: 'Forward' },
                { id: 'masaka-shizzo', number: 12, name: 'Shizzo', position: 'Defender' },
                { id: 'masaka-brian-dj', number: 13, name: 'Brian DJ', position: 'Midfielder' },
                { id: 'masaka-rex-k', number: 14, name: 'Rex K', position: 'Defender' },
                { id: 'masaka-felix-sr', number: 15, name: 'Felix SR', position: 'Midfielder' },
                { id: 'masaka-kagame-2', number: 16, name: 'Kagame', position: 'Forward' },
                { id: 'masaka-shabby', number: 17, name: 'Shabby', position: 'Midfielder' },
                { id: 'masaka-kelvin', number: 18, name: 'Kelvin', position: 'Defender' }
            ]
        },
        { 
            id: "mbale", 
            name: "Mbale", 
            logo: "MB",
            logoFile: "mbale.svg",
            founded: 2024, 
            stadium: "Mbale Stadium", 
            captain: "Dejango",
            squad: [
                { id: 'mbale-onana', number: 1, name: 'Onana', position: 'Goalkeeper' },
                { id: 'mbale-dejango', number: 31, name: 'Dejango', position: 'Forward' },
                { id: 'mbale-benja', number: 2, name: 'Benja', position: 'Midfielder' },
                { id: 'mbale-allan-g', number: 3, name: 'Allan G', position: 'Defender' },
                { id: 'mbale-peter-k', number: 4, name: 'Peter K', position: 'Midfielder' },
                { id: 'mbale-demba', number: 5, name: 'Demba', position: 'Defender' },
                { id: 'mbale-ambrose', number: 6, name: 'Ambrose', position: 'Midfielder' },
                { id: 'mbale-marvin-dadiyo', number: 7, name: 'Marvin Dadiyo', position: 'Forward' },
                { id: 'mbale-ephraim', number: 8, name: 'Ephraim', position: 'Midfielder' },
                { id: 'mbale-bobby', number: 9, name: 'Bobby', position: 'Forward' },
                { id: 'mbale-eric', number: 10, name: 'Eric', position: 'Midfielder' },
                { id: 'mbale-ivan', number: 11, name: 'Ivan', position: 'Forward' },
                { id: 'mbale-drogba', number: 12, name: 'Drogba', position: 'Forward' },
                { id: 'mbale-dembe', number: 13, name: 'Dembe', position: 'Defender' },
                { id: 'mbale-bruno-sali', number: 14, name: 'Bruno Sali', position: 'Midfielder' },
                { id: 'mbale-shafiq', number: 15, name: 'Shafiq', position: 'Defender' },
                { id: 'mbale-abbey', number: 16, name: 'Abbey', position: 'Midfielder' },
                { id: 'mbale-isaac', number: 17, name: 'Isaac', position: 'Forward' },
                { id: 'mbale-guvnor-drake', number: 18, name: 'Guvnor Drake', position: 'Defender' }
            ]
        },
        { 
            id: "wakiso", 
            name: "Wakiso", 
            logo: "WK",
            logoFile: "wakiso.svg",
            founded: 2024, 
            stadium: "Wakiso Stadium", 
            captain: "Matayo",
            squad: [
                { id: 'wakiso-ronny', number: 1, name: 'Ronny', position: 'Goalkeeper' },
                { id: 'wakiso-matayo', number: 19, name: 'Matayo', position: 'Forward' },
                { id: 'wakiso-herbert-i', number: 2, name: 'Herbert I', position: 'Midfielder' },
                { id: 'wakiso-uncle-mo', number: 3, name: 'Uncle Mo', position: 'Defender' },
                { id: 'wakiso-chance', number: 4, name: 'Chance', position: 'Midfielder' },
                { id: 'wakiso-rodney', number: 5, name: 'Rodney', position: 'Defender' },
                { id: 'wakiso-gideon-k', number: 7, name: 'Gideon K', position: 'Midfielder' },
                { id: 'wakiso-edgar-arinetwe', number: 8, name: 'Edgar Arinetwe', position: 'Midfielder' },
                { id: 'wakiso-tugume-m', number: 9, name: 'Tugume M', position: 'Forward' },
                { id: 'wakiso-kevin-barbs', number: 10, name: 'Kevin Barbs', position: 'Forward' },
                { id: 'wakiso-mose-kayima', number: 11, name: 'Mose Kayima', position: 'Midfielder' },
                { id: 'wakiso-wasswa', number: 12, name: 'Wasswa', position: 'Defender' },
                { id: 'wakiso-ivan-m', number: 13, name: 'Ivan M', position: 'Midfielder' },
                { id: 'wakiso-william', number: 14, name: 'William', position: 'Defender' },
                { id: 'wakiso-emran', number: 15, name: 'Emran', position: 'Midfielder' },
                { id: 'wakiso-amuriat', number: 16, name: 'Amuriat', position: 'Forward' },
                { id: 'wakiso-denis-h', number: 17, name: 'Denis H', position: 'Midfielder' },
                { id: 'wakiso-sancho', number: 18, name: 'Sancho', position: 'Forward' }
            ]
        },
        { 
            id: "jinja", 
            name: "Jinja", 
            logo: "JN",
            logoFile: "jinja.svg",
            founded: 2024, 
            stadium: "Jinja Stadium", 
            captain: "Javan",
            squad: [
                { id: 'jinja-javan', number: 1, name: 'Javan', position: 'Forward' },
                { id: 'jinja-bk', number: 2, name: 'BK', position: 'Midfielder' },
                { id: 'jinja-striker', number: 3, name: 'Striker', position: 'Forward' },
                { id: 'jinja-osbie', number: 4, name: 'Osbie', position: 'Midfielder' },
                { id: 'jinja-dario', number: 5, name: 'Dario', position: 'Defender' },
                { id: 'jinja-douglas', number: 6, name: 'Douglas', position: 'Midfielder' },
                { id: 'jinja-dero', number: 7, name: 'Dero', position: 'Forward' },
                { id: 'jinja-timo-k', number: 8, name: 'Timo K', position: 'Midfielder' },
                { id: 'jinja-charlie', number: 9, name: 'Charlie', position: 'Forward' },
                { id: 'jinja-bryo', number: 10, name: 'Bryo', position: 'Midfielder' },
                { id: 'jinja-patrick', number: 11, name: 'Patrick', position: 'Forward' },
                { id: 'jinja-kaisha', number: 12, name: 'Kaisha', position: 'Defender' },
                { id: 'jinja-brim', number: 13, name: 'Brim', position: 'Midfielder' },
                { id: 'jinja-pius', number: 14, name: 'Pius', position: 'Defender' },
                { id: 'jinja-gero', number: 15, name: 'Gero', position: 'Midfielder' },
                { id: 'jinja-eria', number: 16, name: 'Eria', position: 'Forward' },
                { id: 'jinja-brian-wesonga', number: 17, name: 'Brian Wesonga', position: 'Midfielder' },
                { id: 'jinja-vasher', number: 18, name: 'Vasher', position: 'Defender' },
                { id: 'jinja-animal', number: 19, name: 'Animal', position: 'Forward' }
            ]
        },
        { 
            id: "kabale", 
            name: "Kabale", 
            logo: "KB",
            logoFile: "kabale.svg",
            founded: 2024, 
            stadium: "Kabale Stadium", 
            captain: "Jemmy",
            squad: [
                { id: 'kabale-jemmy', number: 1, name: 'Jemmy', position: 'Forward' },
                { id: 'kabale-isaac-m', number: 2, name: 'Isaac M', position: 'Midfielder' },
                { id: 'kabale-aziz', number: 3, name: 'Aziz', position: 'Defender' },
                { id: 'kabale-chairman', number: 4, name: 'Chairman', position: 'Midfielder' },
                { id: 'kabale-fafa', number: 5, name: 'Fafa', position: 'Defender' },
                { id: 'kabale-stephen', number: 6, name: 'Stephen', position: 'Midfielder' },
                { id: 'kabale-david', number: 7, name: 'David', position: 'Forward' },
                { id: 'kabale-josh-muzaaya', number: 8, name: 'Josh Muzaaya', position: 'Midfielder' },
                { id: 'kabale-brian-h', number: 9, name: 'Brian H', position: 'Forward' },
                { id: 'kabale-russel', number: 10, name: 'Russel', position: 'Midfielder' },
                { id: 'kabale-myles', number: 11, name: 'Myles', position: 'Forward' },
                { id: 'kabale-timo-m', number: 12, name: 'Timo M', position: 'Defender' },
                { id: 'kabale-kibalama', number: 13, name: 'Kibalama', position: 'Midfielder' },
                { id: 'kabale-stuart', number: 14, name: 'Stuart', position: 'Defender' },
                { id: 'kabale-kabox', number: 15, name: 'Kabox', position: 'Midfielder' },
                { id: 'kabale-marvin-b', number: 16, name: 'Marvin B', position: 'Forward' },
                { id: 'kabale-justus', number: 17, name: 'Justus', position: 'Midfielder' },
                { id: 'kabale-duglus', number: 18, name: 'Duglus', position: 'Defender' }
            ]
        }
    ],
    fixturesData: [
        {
            time: '09:00',
            matches: [
                {
                    homeTeam: 'Arua',
                    awayTeam: 'Mbarara',
                    venue: 'Maracanã Stadium',
                    status: 'completed',
                    homeScore: 4,
                    awayScore: 0,
                    playerOfTheMatch: "arua-henry",
                    home: {
                        starting: [
                            { playerId: "arua-emmanuel", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "arua-aaron", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: true, redCardMinutes: [83], substituted: false, substitutionMinute: null },
                            { playerId: "arua-sharif", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null },
                            { playerId: "arua-denis", captain: false, goals: 1, goalMinutes: [23], goalTypes: ["penalty"], assists: 2, assistMinutes: [69,"90+1"], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null },
                            { playerId: "arua-emmy", captain: true, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 55 },
                            { playerId: "arua-millio", captain: false, goals: 1, goalMinutes: [56], goalTypes: ["own"], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 60 },
                        ],
                        substitutes: [
                            { playerId: "arua-henry", captain: false, goals: 2, goalMinutes: [69, "90+1"], goalTypes: ["open", "open"], assists: 0, assistMinutes: [], yellowCard: true, yellowCardMinutes: [67], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 55, cameOnFor: "arua-emmy" },
                            { playerId: "arua-arthur-o", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 45, cameOnFor: "arua-emo" },
                            { playerId: "arua-mark-o", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: true, yellowCardMinutes: [80], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 60, cameOnFor: "arua-millio" },
                            { playerId: "arua-victor", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 60, cameOnFor: "arua-aggrey" }
                        ]
                    },
                    away: {
                        starting: [
                            { playerId: "mbarara-yasin", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "mbarara-benard", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 55 },
                            { playerId: "mbarara-cliff", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 67 },
                            { playerId: "mbarara-tony", captain: true, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null },
                            { playerId: "mbarara-davie", captain: false, goals: 2, goalMinutes: [13, 83], goalTypes: ["own", "penalty"], assists: 0, assistMinutes: [], yellowCard: true, yellowCardMinutes: [45], redCard: false, redCardMinutes: [], redCardFromTwoYellows: false, substituted: true, substitutionMinute: 70 },
                            { playerId: "mbarara-kabagambe", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 70 }
                        ],
                        substitutes: [
                            { playerId: "mbarara-martin", captain: false, goals: 1, goalMinutes: [76], goalTypes: ["penalty"], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 70, cameOnFor: "mbarara-kabagambe" },
                            { playerId: "mbarara-latif", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 67, cameOnFor: "mbarara-cliff" },
                            { playerId: "mbarara-muzoora", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: true, redCardMinutes: [85], redCardFromTwoYellows: false, substituted: true, substitutionMinute: 70, cameOnFor: "mbarara-davie" }
                        ]
                    }
                },
                {
                    homeTeam: 'Mbale',
                    awayTeam: 'Gulu',
                    venue: 'Maracanã Stadium',
                    status: 'completed',
                    homeScore: 0,
                    awayScore: 0
                }
            ]
        },
        {
            time: '09:30',
            matches: [
                {
                    homeTeam: 'Masaka',
                    awayTeam: 'Jinja',
                    venue: 'Maracanã Stadium',
                    status: 'live',
                    homeScore: 1,
                    awayScore: 0
                },
                {
                    homeTeam: 'Kabale',
                    awayTeam: 'Wakiso',
                    venue: 'Maracanã Stadium',
                    status: 'upcoming',
                    homeScore: null,
                    awayScore: null
                }
            ]
        },
        {
            time: '10:00',
            matches: [
                {
                    homeTeam: 'Arua',
                    awayTeam: 'Mbale',
                    venue: 'Maracanã Stadium',
                    status: 'scheduled',
                    homeScore: null,
                    awayScore: null
                },
                {
                    homeTeam: 'Gulu',
                    awayTeam: 'Mbarara',
                    venue: 'Maracanã Stadium',
                    status: 'scheduled',
                    homeScore: null,
                    awayScore: null
                }
            ]
        },
        {
            time: '10:30',
            matches: [
                {
                    homeTeam: 'Masaka',
                    awayTeam: 'Wakiso',
                    venue: 'Maracanã Stadium',
                    status: 'scheduled',
                    homeScore: null,
                    awayScore: null
                },
                {
                    homeTeam: 'Jinja',
                    awayTeam: 'Kabale',
                    venue: 'Maracanã Stadium',
                    status: 'scheduled',
                    homeScore: null,
                    awayScore: null
                }
            ]
        },
        {
            time: '11:00',
            matches: [
                {
                    homeTeam: 'Gulu',
                    awayTeam: 'Arua',
                    venue: 'Maracanã Stadium',
                    status: 'scheduled',
                    homeScore: null,
                    awayScore: null
                },
                {
                    homeTeam: 'Mbarara',
                    awayTeam: 'Mbale',
                    venue: 'Maracanã Stadium',
                    status: 'scheduled',
                    homeScore: null,
                    awayScore: null
                }
            ]
        },
        {
            time: '11:30',
            matches: [
                {
                    homeTeam: 'Wakiso',
                    awayTeam: 'Jinja',
                    venue: 'Maracanã Stadium',
                    status: 'scheduled',
                    homeScore: null,
                    awayScore: null
                },
                {
                    homeTeam: 'Kabale',
                    awayTeam: 'Masaka',
                    venue: 'Maracanã Stadium',
                    status: 'scheduled',
                    homeScore: null,
                    awayScore: null
                }
            ]
        },
        {
            time: '12:00',
            matches: [
                {
                    homeTeam: 'Mbale',
                    awayTeam: 'Kabale',
                    venue: 'Maracanã Stadium',
                    status: 'scheduled',
                    homeScore: null,
                    awayScore: null
                },
                {
                    homeTeam: 'Arua',
                    awayTeam: 'Wakiso',
                    venue: 'Maracanã Stadium',
                    status: 'scheduled',
                    homeScore: null,
                    awayScore: null
                }
            ]
        },
        {
            time: '12:30',
            matches: [
                {
                    homeTeam: 'Masaka',
                    awayTeam: 'Gulu',
                    venue: 'Maracanã Stadium',
                    status: 'scheduled',
                    homeScore: null,
                    awayScore: null
                },
                {
                    homeTeam: 'Jinja',
                    awayTeam: 'Mbarara',
                    venue: 'Maracanã Stadium',
                    status: 'scheduled',
                    homeScore: null,
                    awayScore: null
                }
            ]
        },
        {
            time: '13:00',
            matches: [
                {
                    homeTeam: 'Kabale',
                    awayTeam: 'Arua',
                    venue: 'Maracanã Stadium',
                    status: 'scheduled',
                    homeScore: null,
                    awayScore: null
                },
                {
                    homeTeam: 'Wakiso',
                    awayTeam: 'Mbale',
                    venue: 'Maracanã Stadium',
                    status: 'scheduled',
                    homeScore: null,
                    awayScore: null
                }
            ]
        },
        {
            time: '13:30',
            matches: [
                {
                    homeTeam: 'Mbarara',
                    awayTeam: 'Masaka',
                    venue: 'Maracanã Stadium',
                    status: 'scheduled',
                    homeScore: null,
                    awayScore: null
                },
                {
                    homeTeam: 'Gulu',
                    awayTeam: 'Jinja',
                    venue: 'Maracanã Stadium',
                    status: 'scheduled',
                    homeScore: null,
                    awayScore: null
                }
            ]
        },
        {
            time: '14:00',
            matches: [
                {
                    homeTeam: 'Masaka',
                    awayTeam: 'Mbale',
                    venue: 'Maracanã Stadium',
                    status: 'scheduled',
                    homeScore: null,
                    awayScore: null
                },
                {
                    homeTeam: 'Arua',
                    awayTeam: 'Jinja',
                    venue: 'Maracanã Stadium',
                    status: 'scheduled',
                    homeScore: null,
                    awayScore: null
                }
            ]
        },
        {
            time: '14:30',
            matches: [
                {
                    homeTeam: 'Kabale',
                    awayTeam: 'Mbarara',
                    venue: 'Maracanã Stadium',
                    status: 'scheduled',
                    homeScore: null,
                    awayScore: null
                },
                {
                    homeTeam: 'Gulu',
                    awayTeam: 'Wakiso',
                    venue: 'Maracanã Stadium',
                    status: 'scheduled',
                    homeScore: null,
                    awayScore: null
                }
            ]
        },
        {
            time: '15:00',
            matches: [
                {
                    homeTeam: 'Masaka',
                    awayTeam: 'Arua',
                    venue: 'Maracanã Stadium',
                    status: 'scheduled',
                    homeScore: null,
                    awayScore: null
                },
                {
                    homeTeam: 'Jinja',
                    awayTeam: 'Mbale',
                    venue: 'Maracanã Stadium',
                    status: 'scheduled',
                    homeScore: null,
                    awayScore: null
                }
            ]
        },
        {
            time: '15:30',
            matches: [
                {
                    homeTeam: 'Gulu',
                    awayTeam: 'Kabale',
                    venue: 'Maracanã Stadium',
                    status: 'scheduled',
                    homeScore: null,
                    awayScore: null
                },
                {
                    homeTeam: 'Mbarara',
                    awayTeam: 'Wakiso',
                    venue: 'Maracanã Stadium',
                    status: 'scheduled',
                    homeScore: null,
                    awayScore: null
                }
            ]
        }
    ],
    knockout: {
        quarterFinals: [
            { 
                homeTeam: "Mbarara", 
                awayTeam: "Kabale", 
                homeScore: 3, 
                awayScore: 3, 
                status: "completed",
                penalties: { home: 4, away: 5 },
                playerOfTheMatch: "mbarara-davie",
                home: {
                    starting: [
                        { playerId: "mbarara-benard", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null },
                        { playerId: "mbarara-cliff", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null },
                        { playerId: "mbarara-tony", captain: true, goals: 1, goalMinutes: [23], goalTypes: ["open"], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null },
                        { playerId: "mbarara-davie", captain: false, goals: 2, goalMinutes: [45, 78], goalTypes: ["penalty", "open"], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null },
                        { playerId: "mbarara-kabagambe", captain: false, goals: 0, goalMinutes: [], assists: 1, assistMinutes: [23], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null }
                    ],
                    substitutes: [
                        { playerId: "mbarara-martin", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 70, cameOnFor: "mbarara-kabagambe" },
                        { playerId: "mbarara-latif", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 80, cameOnFor: "mbarara-cliff" }
                    ]
                },
                away: {
                    starting: [
                        { playerId: "kabale-jemmy", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null },
                        { playerId: "kabale-isaac-m", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: true, redCardMinutes: [67], substituted: false, substitutionMinute: null },
                        { playerId: "kabale-aziz", captain: true, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: true, yellowCardMinutes: [67], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null },
                        { playerId: "kabale-chairman", captain: false, goals: 1, goalMinutes: [89], goalTypes: ["open"], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null },
                        { playerId: "kabale-fafa", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 60, }
                    ],
                    substitutes: [
                        { playerId: "kabale-stephen", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 60, cameOnFor: "kabale-fafa" }
                    ]
                }
            },
            { homeTeam: "Gulu", awayTeam: "Jinja", homeScore: 2, awayScore: 0, status: "live" },
            { homeTeam: "Arua", awayTeam: "Wakiso", homeScore: 1, awayScore: 1, status: "scheduled" },
            { homeTeam: "Masaka", awayTeam: "Mbale", homeScore: 2, awayScore: 1, status: "scheduled" }
        ],
        semiFinals: [
            { homeTeam: "Mbarara", awayTeam: "Gulu", homeScore: null, awayScore: null, status: "upcoming" },
            { homeTeam: "Arua", awayTeam: "Masaka", homeScore: null, awayScore: null, status: "upcoming" }
        ],
        thirdPlace: [
            { homeTeam: "TBD", awayTeam: "TBD", homeScore: null, awayScore: null, status: "upcoming" }
        ],
        final: [
            { homeTeam: "TBD", awayTeam: "TBD", homeScore: null, awayScore: null, status: "upcoming" }
        ]
    },
    stats: {
        topScorer: { name: "Afande", team: "Mbarara", goals: 15 },
        topAssists: { name: "Success", team: "Mbarara", assists: 8 },
        mostCleanSheets: { name: "Ochola", team: "Gulu", cleanSheets: 12 },
        totalGoals: 156,
        totalMatches: 80,
        averageGoals: 1.95
    },
    
    // Tournament Awards
    tournamentAwards: {
        teamOfTheTournament: "Mbarara",
        playerOfTheTournament: "Davie"
    }
};

// Logo fetching logic
function getTeamLogo(teamId) {
    // Handle TBD case
    if (teamId === 'TBD') {
        return 'assets/tbd.svg';
    }
    
    const team = leagueData.teams.find(t => t.id === teamId);
    if (team && team.logoFile) {
        return `assets/club-logos/${team.logoFile}`;
    }
    return null;
}

// SVG Card generation functions
function getYellowCardSVG() {
    return `<svg class="card-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="15" height="15" rx="2" fill="#FFD700" stroke="#FFA500" stroke-width="1"/>
    </svg>`;
}

function getRedCardSVG() {
    return `<svg class="card-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="15" height="15" rx="2" fill="#FF4444" stroke="#CC0000" stroke-width="1"/>
    </svg>`;
}

function getCaptainSVG() {
    return `<svg class="captain-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="7" fill="#FFA500" stroke="#FF8C00" stroke-width="1"/>
        <text x="8" y="11" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#FFFFFF">C</text>
    </svg>`;
}

function getBallSVG() {
    return `<img src="assets/ball.svg" alt="Goal" class="ball-icon">`;
}

function getTeamLogoElement(teamId, size = '50px') {
    const logoPath = getTeamLogo(teamId);
    if (logoPath) {
        return `<img src="${logoPath}" alt="${teamId} logo" style="width: ${size}; height: ${size}; object-fit: contain;">`;
    }
    // Fallback to text logo
    const team = leagueData.teams.find(t => t.id === teamId);
    return `<div class="team-logo" style="width: ${size}; height: ${size}; display: flex; align-items: center; justify-content: center; background: #ff6b35; border-radius: 50%; font-weight: bold; font-size: 0.8rem;">${team ? team.logo : '?'}</div>`;
}

// Navigation system
let currentPage = 'home';

function initApp() {
    setupNavigation();
    loadPage(currentPage);
}

function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const mobileNavButtons = document.querySelectorAll('.mobile-nav-btn');
    
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const page = button.getAttribute('data-page');
            setActivePage(page);
            loadPage(page);
        });
    });
    
    mobileNavButtons.forEach(button => {
        button.addEventListener('click', () => {
            const page = button.getAttribute('data-page');
            setActivePage(page);
            loadPage(page);
            toggleMobileMenu(); // Close mobile menu after selection
        });
    });
}

function setActivePage(page) {
    const navButtons = document.querySelectorAll('.nav-btn');
    const mobileNavButtons = document.querySelectorAll('.mobile-nav-btn');
    
    navButtons.forEach(btn => btn.classList.remove('active'));
    mobileNavButtons.forEach(btn => btn.classList.remove('active'));
    
    const activeButton = document.querySelector(`[data-page="${page}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
    
    currentPage = page;
}

// Search page functions
function openSearchPage() {
    loadPage('search');
    // Focus on search input after page loads
    setTimeout(() => {
        const searchInput = document.getElementById('search');
        if (searchInput) {
            searchInput.focus();
        }
    }, 100);
}

function generateSearchPage() {
    return `
        <h2 class="page-title">Search</h2>
        
        <div class="search-page-container">
            <div class="search-container">
                <input type="text" id="search" class="overall-search-input" placeholder="Search teams, players, matches, stats..." onkeyup="performOverallSearch(this.value)">
                <div class="search-icon">⌕</div>
            </div>
            <div class="search-results" id="searchResults"></div>
        </div>
    `;
}

// Overall search function
function performOverallSearch(query) {
    const searchResults = document.getElementById('searchResults');
    
    if (!query || query.length < 2) {
        searchResults.classList.remove('show');
        return;
    }
    
    const results = [];
    const searchTerm = query.toLowerCase();
    
    // Search teams
    leagueData.teams.forEach(team => {
        if (team.name.toLowerCase().includes(searchTerm)) {
            results.push({
                type: 'Team',
                title: team.name,
                details: `View team details and squad`,
                action: () => loadPage('teams')
            });
        }
        
        // Search players in team squad
        if (team.squad) {
            team.squad.forEach(player => {
                if (player.name.toLowerCase().includes(searchTerm)) {
                    results.push({
                        type: 'Player',
                        title: player.name,
                        details: `${player.position} • ${team.name}`,
                        action: () => loadPage('teams')
                    });
                }
            });
        }
    });
    
    // Search fixtures
    leagueData.fixturesData.forEach(match => {
        if (match.homeTeam.toLowerCase().includes(searchTerm) || 
            match.awayTeam.toLowerCase().includes(searchTerm)) {
            results.push({
                type: 'Match',
                title: `${match.homeTeam} vs ${match.awayTeam}`,
                details: `${match.time} • ${match.status}`,
                action: () => loadPage('fixtures')
            });
        }
    });
    
    // Search knockout matches
    Object.values(leagueData.knockout).forEach(stage => {
        if (Array.isArray(stage)) {
            stage.forEach(match => {
                if (match.homeTeam && match.awayTeam && 
                    (match.homeTeam.toLowerCase().includes(searchTerm) || 
                     match.awayTeam.toLowerCase().includes(searchTerm))) {
                    results.push({
                        type: 'Knockout Match',
                        title: `${match.homeTeam} vs ${match.awayTeam}`,
                        details: `${match.status}`,
                        action: () => loadPage('knockout')
                    });
                }
            });
        }
    });
    
    // Display results
    if (results.length > 0) {
        searchResults.innerHTML = results.slice(0, 8).map(result => `
            <div class="search-result-item" onclick="${result.action.toString()}">
                <div class="search-result-type">${result.type}</div>
                <div class="search-result-title">${result.title}</div>
                <div class="search-result-details">${result.details}</div>
            </div>
        `).join('');
        searchResults.classList.add('show');
    } else {
        searchResults.innerHTML = `
            <div class="search-result-item">
                <div class="search-result-type">No Results</div>
                <div class="search-result-title">No matches found for "${query}"</div>
                <div class="search-result-details">Try searching for team names, player names, or match fixtures</div>
            </div>
        `;
        searchResults.classList.add('show');
    }
}

// Countdown timer function
function startCountdown() {
    const targetDate = new Date('October 5, 2025 09:00:00 GMT+0300').getTime();
    const countdownSection = document.querySelector('.countdown-section');
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
            // Hide the entire countdown section when countdown is complete
            if (countdownSection) {
                countdownSection.style.display = 'none';
            }
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
        document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

async function loadPage(page) {
    const content = document.getElementById('content');
    
    switch (page) {
        case 'home':
            content.innerHTML = await generateHomePage();
            // Start countdown timer after page loads
            setTimeout(startCountdown, 100);
            break;
        case 'fixtures':
            content.innerHTML = generateFixturesPage();
            break;
        case 'table':
            content.innerHTML = generateTablePage();
            break;
        case 'teams':
            content.innerHTML = generateTeamsPage();
            break;
        case 'knockout':
            content.innerHTML = generateKnockoutPage();
            break;
        case 'stats':
            content.innerHTML = generateStatsPage();
            break;
        case 'awards':
            content.innerHTML = generateAwardsPage();
            break;
        case 'search':
            content.innerHTML = generateSearchPage();
            break;
        default:
            content.innerHTML = '<div class="loading">Page not found</div>';
    }
}

// Page generators
// Function to get sponsor SVGs dynamically
async function getSponsorLogos() {
    // Known sponsors list - add new sponsors here by adding their filename
    const sponsorFiles = [
        'dejango-city.svg',
        'io-fitness-gym.svg',
        'maracana-sports-centre.svg',
        'paul-fitness-training.svg',
        'success-motors.svg'
        // Add new sponsor files here: 'new-sponsor.svg'
    ];
    
    // Convert filenames to sponsor objects
    const knownSponsors = sponsorFiles.map(file => {
        const name = file.replace('.svg', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        return { name, file };
    });
    
    // For now, use the known sponsors list to avoid path issues
    // TODO: Implement proper directory scanning when server supports it
    console.log('Using known sponsors list');
    
    // Return known sponsors as fallback
    return knownSponsors;
}

async function generateHomePage() {
    const upcomingMatches = getUpcomingMatches(4);
    const latestResults = getLatestResults(4);
    const topTeams = calculateStandings().slice(0, 4);
    const playerStats = calculatePlayerStats();
    const topScorers = getTopScorers(playerStats, 3);
    const topAssists = getTopAssists(playerStats, 3);
    const matchStats = calculateMatchStats();
    const sponsors = await getSponsorLogos();
    
    return `
        <div class="home-container">
            <div class="countdown-section">
                <h2 class="page-title">MARACANÃ Independence<br class="mobile-break">Day Gala Cup</h2>
                <div class="countdown-subtitle">5th October 2025 • 9:00 AM EAT</div>
                <div class="countdown-timer" id="countdownTimer">
                    <div class="countdown-item">
                        <span class="countdown-number" id="days">00</span>
                        <span class="countdown-label">Days</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number" id="hours">00</span>
                        <span class="countdown-label">Hours</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number" id="minutes">00</span>
                        <span class="countdown-label">Minutes</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number" id="seconds">00</span>
                        <span class="countdown-label">Seconds</span>
                    </div>
                </div>
            </div>
            <div class="home-preview-sections">
                <div class="preview-section">
                    <div class="section-header">
                        <h3>Fixtures & Results</h3>
                        <a href="#" class="view-more-link" onclick="loadPage('fixtures')">View all fixtures</a>
                    </div>
                    <div class="preview-content">
                        <div class="preview-subsection">
                            <h4>Upcoming Matches</h4>
                            <div class="matches-list">
                                ${upcomingMatches.length > 0 ? upcomingMatches.map(match => `
                                    <div class="match-item" onclick="viewMatchDetails('${match.time}', '${match.homeTeam}', '${match.awayTeam}')">
                                        <div class="match-teams">
                                            <span class="team-name">${match.homeTeam}</span>
                                            <span class="vs">vs</span>
                                            <span class="team-name">${match.awayTeam}</span>
                                        </div>
                                        <div class="match-time">${match.time}</div>
                                    </div>
                                `).join('') : '<div class="no-data">No upcoming matches</div>'}
                            </div>
                        </div>
                        <div class="preview-subsection">
                            <h4>Latest Results</h4>
                            <div class="matches-list">
                                ${latestResults.length > 0 ? latestResults.map(match => `
                                    <div class="match-item" onclick="viewMatchDetails('${match.time}', '${match.homeTeam}', '${match.awayTeam}')">
                                        <div class="match-teams">
                                            <span class="team-name">${match.homeTeam}</span>
                                            <span class="score">${match.homeScore} - ${match.awayScore}</span>
                                            <span class="team-name">${match.awayTeam}</span>
                                        </div>
                                        <div class="match-time">${match.time}</div>
                                    </div>
                                `).join('') : '<div class="no-data">No recent results</div>'}
                            </div>
                        </div>
                    </div>
        </div>
        
                <div class="preview-section">
                    <div class="section-header">
                        <h3>Teams</h3>
                        <a href="#" class="view-more-link" onclick="loadPage('table')">View Full Table</a>
                    </div>
                    <div class="preview-content">
                        <div class="table-preview">
                            <table class="table short-table">
                                <thead>
                                    <tr>
                                        <th>Pos</th>
                                        <th>Team</th>
                                        <th>P</th>
                                        <th>W</th>
                                        <th>Pts</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${topTeams.map((team, index) => `
                                        <tr>
                                            <td><strong>${index + 1}</strong></td>
                                            <td>
                                                <div class="team-cell">
                                                    ${getTeamLogoElement(team.id, '20px')}
                                                    <span>${team.name}</span>
                </div>
                                            </td>
                                            <td>${team.played}</td>
                                            <td>${team.won}</td>
                                            <td><strong>${team.points}</strong></td>
                                        </tr>
            `).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>
        </div>
        
                <div class="preview-section">
                    <div class="section-header">
                        <h3>Knockout Stage</h3>
                        <a href="#" class="view-more-link" onclick="loadPage('knockout')">View knockout stage</a>
                    </div>
                    <div class="preview-content">
                        <div class="knockout-preview">
                            <div class="stage-info">
                                <h4>Current Stage</h4>
                                <div class="section-divider"></div>
                                <p>Quarter Finals</p>
                </div>
                            <div class="knockout-matches">
                                ${leagueData.knockout.quarterFinals.slice(0, 2).map((match, index) => `
                                    <div class="knockout-match">
                                        <div class="match-teams">
                                            <span class="team-name">${match.homeTeam}</span>
                                            <span class="vs">vs</span>
                                            <span class="team-name">${match.awayTeam}</span>
                                        </div>
                                        <div class="match-status">${match.status}</div>
                                    </div>
                                    ${index < leagueData.knockout.quarterFinals.slice(0, 2).length - 1 ? '<div class="section-divider"></div>' : ''}
            `).join('')}
                            </div>
                        </div>
                    </div>
        </div>
        
                <div class="preview-section">
                    <div class="section-header">
                        <h3>Statistics</h3>
                        <a href="#" class="view-more-link" onclick="loadPage('stats')">View all stats</a>
                    </div>
                    <div class="preview-content">
                        <div class="stats-sections">
                            <div class="stats-section">
                                <h3>Top Scorers</h3>
                                <div class="stats-semi-title">
                                    <span>Player</span>
                                    <span>Matches</span>
                                    <span>Goals</span>
                                </div>
                                <div class="stats-list">
                                    ${topScorers.map((player, index) => `
                                        <div class="stat-item">
                                            <div class="stat-rank">${index + 1}</div>
                                            <div class="stat-player">
                                                <div class="player-name">${player.name}</div>
                                                <div class="player-team">${player.team}</div>
                                            </div>
                                            <div class="stat-matches">${player.matches}</div>
                                            <div class="stat-value">${player.goals} goals</div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                            
                            <hr class="horizontal-divider">
                            
                            <div class="stats-section">
                                <h3>Top Assists</h3>
                                <div class="stats-semi-title">
                                    <span>Player</span>
                                    <span>Matches</span>
                                    <span>Assists</span>
                                </div>
                                <div class="stats-list">
                                    ${topAssists.map((player, index) => `
                                        <div class="stat-item">
                                            <div class="stat-rank">${index + 1}</div>
                                            <div class="stat-player">
                                                <div class="player-name">${player.name}</div>
                                                <div class="player-team">${player.team}</div>
                                            </div>
                                            <div class="stat-matches">${player.matches}</div>
                                            <div class="stat-value">${player.assists} assists</div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="preview-section">
                    <div class="section-header">
                        <h3>Awards</h3>
                        <a href="#" class="view-more-link" onclick="loadPage('awards')">View all awards</a>
                    </div>
                    <div class="preview-content">
                        <div class="awards-preview">
                            ${areAllMatchesCompleted() ? `
                                <div class="award-item">
                                    <h4>Team of the Tournament</h4>
                                    <p>${leagueData.tournamentAwards.teamOfTheTournament}</p>
                                </div>
                                <div class="award-item">
                                    <h4>Player of the Tournament</h4>
                                    <p>${leagueData.tournamentAwards.playerOfTheTournament}</p>
                                </div>
                            ` : `
                                <div class="awards-pending">
                                    <p>Awards will be announced after all matches are completed</p>
                                </div>
                            `}
                        </div>
                    </div>
                </div>
                
                <div class="preview-section">
                    <div class="section-header">
                        <h3>Our Sponsors</h3>
                    </div>
                    <div class="preview-content">
                        <div class="sponsors-grid">
                            ${sponsors.map(sponsor => `
                                <div class="sponsor-item">
                                    <img src="assets/sponsors/${sponsor.file}" alt="${sponsor.name}" class="sponsor-logo">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateFixturesPage() {
    return `
        <h2 class="page-title">Fixtures & Results</h2>
        
        <div class="fixtures-sort-controls">
            <div class="sort-dropdown">
                <select class="sort-select" onchange="filterByTeam(this.value)">
                    <option value="all">All Teams</option>
                    <option value="Gulu">Gulu</option>
                    <option value="Arua">Arua</option>
                    <option value="Mbarara">Mbarara</option>
                    <option value="Masaka">Masaka</option>
                    <option value="Mbale">Mbale</option>
                    <option value="Wakiso">Wakiso</option>
                    <option value="Jinja">Jinja</option>
                    <option value="Kabale">Kabale</option>
                </select>
                    </div>
            
            <div class="sort-dropdown">
                <select class="sort-select" onchange="filterByTime(this.value)">
                    <option value="all">All Times</option>
                    <option value="09:00">09:00</option>
                    <option value="09:30">09:30</option>
                    <option value="10:00">10:00</option>
                    <option value="10:30">10:30</option>
                    <option value="11:00">11:00</option>
                    <option value="11:30">11:30</option>
                    <option value="12:00">12:00</option>
                    <option value="12:30">12:30</option>
                    <option value="13:00">13:00</option>
                    <option value="13:30">13:30</option>
                    <option value="14:00">14:00</option>
                    <option value="14:30">14:30</option>
                    <option value="15:00">15:00</option>
                    <option value="15:30">15:30</option>
                </select>
                </div>
            
            <div class="sort-dropdown">
                <select class="sort-select" onchange="filterByStatus(this.value)">
                    <option value="all">All Status</option>
                    <option value="completed">Completed</option>
                    <option value="live">Live</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="postponed">Postponed</option>
                </select>
            </div>
        </div>
        
        <hr class="horizontal-divider">
        
        <div id="fixtures-content">
        ${leagueData.fixturesData.map(timeSlot => `
            <h3 class="time-slot-title">
                <svg class="time-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                ${timeSlot.time}
            </h3>
            ${timeSlot.matches.map(match => `
                <section class="fixture">
                    <div class="teams">
                        <div class="team-match">
                            <div class="team-name-container">
                                <span>${match.homeTeam}</span>
                                ${getTeamRedCards(match, match.homeTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
                            </div>
                            ${getTeamLogoElement(leagueData.teams.find(t => t.name === match.homeTeam)?.id || '', '40px')}
                    </div>
                        <div class="score-container">
                            <span class="vs-score">${match.status === 'upcoming' || match.status === 'scheduled' ? 'vs' : match.homeScore + ' - ' + match.awayScore}</span>
                            ${match.status === 'completed' ? '<div class="match-status ft">FT</div>' : 
                              match.status === 'live' ? '<div class="match-status live">LIVE</div>' :
                              match.status === 'postponed' ? '<div class="match-status postponed">POSTPONED</div>' : ''}
                </div>
                        <div class="team-match">
                            ${getTeamLogoElement(match.awayTeam === 'TBD' ? 'TBD' : (leagueData.teams.find(t => t.name === match.awayTeam)?.id || ''), '40px')}
                            <div class="team-name-container">
                                <span>${match.awayTeam}</span>
                                ${getTeamRedCards(match, match.awayTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
                            </div>
                        </div>
                    </div>
                    ${match.status === 'completed' || match.status === 'live' ? `
                    <div class="fixture-footer">
                        <a href="#" class="overview-link" onclick="viewMatchDetails('${timeSlot.time}', '${match.homeTeam}', '${match.awayTeam}')">Overview</a>
                    </div>
                    ` : ''}
                </section>
            `).join('')}
            `).join('')}
        </div>
    `;
}

function generateTablePage() {
    const sortedTeams = calculateStandings();
    
    return `
        <h2 class="page-title">League Table</h2>
        <div class="table-tabs">
            <div class="tab-buttons">
                <button class="tab-btn active" onclick="switchTableTab('short')">Short</button>
                <button class="tab-btn" onclick="switchTableTab('full')">Full</button>
                <button class="tab-btn" onclick="switchTableTab('form')">Form</button>
            </div>
            
            <div class="tab-content">
                <div id="short-tab" class="tab-pane active">
                    <div class="table-container">
                        <table class="table short-table">
                <thead>
                    <tr>
                        <th>Pos</th>
                        <th>Team</th>
                                    <th>Pl</th>
                        <th>W</th>
                        <th>GD</th>
                        <th>Pts</th>
                    </tr>
                </thead>
                <tbody>
                    ${sortedTeams.map((team, index) => `
                        <tr>
                                        <td><strong>${index + 1}</strong></td>
                                        <td>
                                            <div class="team-cell">
                                                ${getTeamLogoElement(team.id, '25px')}
                                                <span>${team.name}</span>
                                    </div>
                                        </td>
                                        <td>${team.played}</td>
                                        <td>${team.won}</td>
                                        <td>${team.goalsFor - team.goalsAgainst}</td>
                                        <td><strong>${team.points}</strong></td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div id="full-tab" class="tab-pane">
                    <div class="table-container">
                        <div class="table-wrapper">
                            <div class="fixed-columns">
                                <table class="table fixed-table">
                                    <thead>
                                        <tr>
                                            <th>Pos</th>
                                            <th>Team</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${sortedTeams.map((team, index) => `
                                            <tr>
                                                <td><strong>${index + 1}</strong></td>
                                                <td>
                                                    <div class="team-cell">
                                                        ${getTeamLogoElement(team.id, '25px')}
                                                        <span>${team.name}</span>
                                </div>
                            </td>
                                            </tr>
                                        `).join('')}
                                    </tbody>
                                </table>
                            </div>
                            <div class="scrollable-columns">
                                <table class="table stats-table">
                                    <thead>
                                        <tr>
                                            <th>Pl</th>
                                            <th>W</th>
                                            <th>D</th>
                                            <th>L</th>
                                            <th>GF</th>
                                            <th>GA</th>
                                            <th>GD</th>
                                            <th>Pts</th>
                                            <th>Next</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${sortedTeams.map((team, index) => `
                                            <tr>
                            <td>${team.played}</td>
                            <td>${team.won}</td>
                            <td>${team.drawn}</td>
                            <td>${team.lost}</td>
                            <td>${team.goalsFor}</td>
                            <td>${team.goalsAgainst}</td>
                            <td>${team.goalsFor - team.goalsAgainst}</td>
                            <td><strong>${team.points}</strong></td>
                                                <td>${getNextOpponentLogo(team.name)}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="form-tab" class="tab-pane">
                    <div class="table-container">
                        <table class="table form-table">
                            <thead>
                                <tr>
                                    <th>Pos</th>
                                    <th>Team</th>
                                    <th>Form</th>
                                    <th>Pts</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${sortedTeams.map((team, index) => `
                                    <tr>
                                        <td><strong>${index + 1}</strong></td>
                                        <td>
                                            <div class="team-cell">
                                                ${getTeamLogoElement(team.id, '25px')}
                                                <span>${team.name}</span>
                                            </div>
                                        </td>
                                        <td>${getTeamForm(team.name)}</td>
                                        <td><strong>${team.points}</strong></td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        
        <hr class="section-divider">
        
        <div class="qualification-info">
            <p>Top 4 teams qualify for the knockout stage</p>
        </div>
    `;
}

function generateTeamsPage() {
    const standings = calculateStandings();
    const playerStats = calculatePlayerStats();
    
    return `
        <h2 class="page-title">Teams</h2>
        
        <div class="team-search-container">
            <div class="search-input-wrapper">
                <input type="text" id="teamSearch" class="team-search-input" placeholder="Search teams..." onkeyup="filterTeams()">
                <div class="search-icon">⌕</div>
            </div>
        </div>
        
        <div class="teams-container" id="teamsContainer">
            ${standings.map((team, index) => {
                const teamPlayers = Object.values(playerStats).filter(p => p.team === team.name);
                const topScorer = teamPlayers.filter(p => p.goals > 0).sort((a, b) => b.goals - a.goals)[0];
                const recentForm = getTeamRecentForm(team.name);
                const nextFixture = getTeamNextFixture(team.name);
                
                return `
                ${index > 0 ? '<div class="team-divider"></div>' : ''}
                <div class="team-card-blended" id="team-${team.id}">
                    <div class="team-header">
                        <div class="team-position">${index + 1}</div>
                        ${getTeamLogoElement(team.id, '50px')}
                        <div class="team-basic-info">
                            <h3>${team.name}</h3>
                            <div class="team-record">
                                <span class="points">${team.points} pts</span>
                                <span class="record">${team.played} played</span>
                                <span class="goals">${team.goalsFor}-${team.goalsAgainst}</span>
                            </div>
                        </div>
                        ${team.played > 0 ? `
                        <div class="team-form">
                            <div class="form-label">Form</div>
                            <div class="form-display">${recentForm}</div>
                        </div>
                        ` : ''}
                    </div>
                    
                    <div class="team-summary">
                        <div class="summary-item">
                            <span class="label">Top Scorer:</span>
                            <span class="value">${topScorer ? `${topScorer.name} (${topScorer.goals})` : 'None'}</span>
                        </div>
                        <div class="summary-item">
                            <span class="label">Next:</span>
                            <span class="value">${nextFixture || 'No fixtures'}</span>
                        </div>
                    </div>
                    
                    <div class="team-details-collapsed" id="details-${team.id}">
                        <div class="tabs-container">
                            <div class="tabs-header">
                                <button class="tab-btn active" onclick="switchTab('${team.id}', 'club-info')" data-tab="club-info">
                                    <span class="tab-text">Club Info</span>
                                </button>
                                <button class="tab-btn" onclick="switchTab('${team.id}', 'squad')" data-tab="squad">
                                    <span class="tab-text">Squad</span>
                                </button>
                                <button class="tab-btn" onclick="switchTab('${team.id}', 'match-history')" data-tab="match-history">
                                    <span class="tab-text">Match History</span>
                                </button>
                            </div>
                            
                            <div class="tab-content">
                                <div class="tab-panel active" id="club-info-${team.id}">
                                    <div class="club-info-grid">
                                <div class="info-item">
                                            <span class="info-label">Founded</span>
                                            <span class="info-value">${team.founded || 'N/A'}</span>
                                </div>
                                <div class="info-item">
                                            <span class="info-label">Stadium</span>
                                            <span class="info-value">${team.stadium || 'N/A'}</span>
                                </div>
                                <div class="info-item">
                                            <span class="info-label">Captain</span>
                                            <span class="info-value">${team.captain || 'N/A'}</span>
                                        </div>
                                        <div class="info-item">
                                            <span class="info-label">Manager</span>
                                            <span class="info-value">${team.manager || 'N/A'}</span>
                                        </div>
                                        <div class="info-item">
                                            <span class="info-label">City</span>
                                            <span class="info-value">${team.city || 'N/A'}</span>
                                        </div>
                                        <div class="info-item">
                                            <span class="info-label">Colors</span>
                                            <span class="info-value">${team.colors || 'N/A'}</span>
                                        </div>
                                </div>
                            </div>
                            
                                <div class="tab-panel" id="squad-${team.id}">
                                    <div class="squad-grid">
                                        ${team.squad ? team.squad.map(player => {
                                        const playerStat = playerStats[player.id] || { goals: 0, assists: 0, yellowCards: 0, redCards: 0, cleanSheets: 0 };
                                            const firstName = player.name.split(' ')[0];
                                            const shortPosition = getShortPosition(player.position);
                                            const isCaptain = team.captain === player.name;
                                        return `
                                            <div class="player-item">
                                                <span class="player-number">${player.number}</span>
                                                <span class="player-name">
                                                    ${firstName}
                                                    ${isCaptain ? getCaptainSVG() : ''}
                                                </span>
                                                <span class="player-position">${shortPosition}</span>
                                                <span class="player-stats">
                                                    ${playerStat.goals > 0 ? `${playerStat.goals}G ` : ''}
                                                    ${playerStat.assists > 0 ? `${playerStat.assists}A ` : ''}
                                                    ${playerStat.cleanSheets > 0 ? `${playerStat.cleanSheets}CS` : ''}
                                                </span>
                                        </div>
                                    `;
                                        }).join('') : '<div class="no-data">No squad information available</div>'}
                                    </div>
                                </div>
                                
                                <div class="tab-panel" id="match-history-${team.id}">
                                    <div class="match-history">
                                        <div class="no-data">Match history will load when tab is opened</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <button class="read-more-btn" onclick="toggleTeamDetails('${team.id}')">
                        <span class="read-more-text">Read More</span>
                        <span class="read-more-icon">▼</span>
                    </button>
                </div>
            `;
            }).join('')}
        </div>
    `;
}

function generateKnockoutPage() {
    return `
        <h2 class="page-title">Knockout Stage</h2>
        
        <div class="knockout-bracket">
            <div class="bracket-round">
                <h3>Quarter Finals</h3>
                ${leagueData.knockout.quarterFinals.map(match => `
                    <section class="fixture">
                        <div class="teams">
                            <div class="team-match">
                                <div class="team-name-container">
                                    <span>${match.homeTeam}</span>
                                    ${match.home && getTeamRedCards(match, match.homeTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
                                </div>
                                ${getTeamLogoElement(match.homeTeam === 'TBD' ? 'TBD' : (leagueData.teams.find(t => t.name === match.homeTeam)?.id || ''), '40px')}
                            </div>
                            <div class="score-container">
                                <span class="vs-score">${match.status === 'completed' ? `${match.homeScore} - ${match.awayScore}` : 'vs'}</span>
                                ${match.status === 'completed' ? '<div class="match-status ft">FT</div>' : 
                                  match.status === 'live' ? '<div class="match-status live">LIVE</div>' :
                                  match.status === 'postponed' ? '<div class="match-status postponed">POSTPONED</div>' : ''}
                                ${match.status === 'completed' && match.penalties && match.penalties.home !== null ? 
                                    `<div class="penalties-display">Penalties: ${match.penalties.home}-${match.penalties.away}</div>` : ''}
                            </div>
                            <div class="team-match">
                                ${getTeamLogoElement(match.awayTeam === 'TBD' ? 'TBD' : (leagueData.teams.find(t => t.name === match.awayTeam)?.id || ''), '40px')}
                                <div class="team-name-container">
                                    <span>${match.awayTeam}</span>
                                    ${match.away && getTeamRedCards(match, match.awayTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
                                </div>
                            </div>
                        </div>
                        ${match.status === 'completed' || match.status === 'live' ? `
                        <div class="fixture-footer">
                            <a href="#" class="overview-link" onclick="viewMatchDetails('knockout', '${match.homeTeam}', '${match.awayTeam}')">Overview</a>
                        </div>
                        ` : ''}
                    </section>
                `).join('')}
            </div>
            
            <hr class="horizontal-divider">
            
            <div class="bracket-round">
                <h3>Semi Finals</h3>
                ${leagueData.knockout.semiFinals.map(match => `
                    <section class="fixture">
                        <div class="teams">
                            <div class="team-match">
                                <div class="team-name-container">
                                    <span>${match.homeTeam}</span>
                                    ${match.home && getTeamRedCards(match, match.homeTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
                                </div>
                                ${getTeamLogoElement(match.homeTeam === 'TBD' ? 'TBD' : (leagueData.teams.find(t => t.name === match.homeTeam)?.id || ''), '40px')}
                            </div>
                            <div class="score-container">
                                <span class="vs-score">${match.status === 'completed' ? `${match.homeScore} - ${match.awayScore}` : 'vs'}</span>
                                ${match.status === 'completed' ? '<div class="match-status ft">FT</div>' : 
                                  match.status === 'live' ? '<div class="match-status live">LIVE</div>' :
                                  match.status === 'postponed' ? '<div class="match-status postponed">POSTPONED</div>' : ''}
                                ${match.status === 'completed' && match.penalties && match.penalties.home !== null ? 
                                    `<div class="penalties-display">Penalties: ${match.penalties.home}-${match.penalties.away}</div>` : ''}
                            </div>
                            <div class="team-match">
                                ${getTeamLogoElement(match.awayTeam === 'TBD' ? 'TBD' : (leagueData.teams.find(t => t.name === match.awayTeam)?.id || ''), '40px')}
                                <div class="team-name-container">
                                    <span>${match.awayTeam}</span>
                                    ${match.away && getTeamRedCards(match, match.awayTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
                                </div>
                            </div>
                        </div>
                        ${match.status === 'completed' || match.status === 'live' ? `
                        <div class="fixture-footer">
                            <a href="#" class="overview-link" onclick="viewMatchDetails('knockout', '${match.homeTeam}', '${match.awayTeam}')">Overview</a>
                        </div>
                        ` : ''}
                    </section>
                `).join('')}
            </div>
            
            <hr class="horizontal-divider">
            
            <div class="bracket-round">
                <h3>Third Place Playoff</h3>
                ${leagueData.knockout.thirdPlace.map(match => `
                    <section class="fixture">
                        <div class="teams">
                            <div class="team-match">
                                <div class="team-name-container">
                                    <span>${match.homeTeam}</span>
                                    ${match.home && getTeamRedCards(match, match.homeTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
                                </div>
                                ${getTeamLogoElement(match.homeTeam === 'TBD' ? 'TBD' : (leagueData.teams.find(t => t.name === match.homeTeam)?.id || ''), '40px')}
                            </div>
                            <div class="score-container">
                                <span class="vs-score">${match.status === 'completed' ? `${match.homeScore} - ${match.awayScore}` : 'vs'}</span>
                                ${match.status === 'completed' ? '<div class="match-status ft">FT</div>' : 
                                  match.status === 'live' ? '<div class="match-status live">LIVE</div>' :
                                  match.status === 'postponed' ? '<div class="match-status postponed">POSTPONED</div>' : ''}
                                ${match.status === 'completed' && match.penalties && match.penalties.home !== null ? 
                                    `<div class="penalties-display">Penalties: ${match.penalties.home}-${match.penalties.away}</div>` : ''}
                            </div>
                            <div class="team-match">
                                ${getTeamLogoElement(match.awayTeam === 'TBD' ? 'TBD' : (leagueData.teams.find(t => t.name === match.awayTeam)?.id || ''), '40px')}
                                <div class="team-name-container">
                                    <span>${match.awayTeam}</span>
                                    ${match.away && getTeamRedCards(match, match.awayTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
                                </div>
                            </div>
                        </div>
                        ${match.status === 'completed' || match.status === 'live' ? `
                        <div class="fixture-footer">
                            <a href="#" class="overview-link" onclick="viewMatchDetails('knockout', '${match.homeTeam}', '${match.awayTeam}')">Overview</a>
                        </div>
                        ` : ''}
                    </section>
                `).join('')}
            </div>
            
            <hr class="horizontal-divider">
            
            <div class="bracket-round">
                <h3>Final</h3>
                ${leagueData.knockout.final.map(match => `
                    <section class="fixture">
                        <div class="teams">
                            <div class="team-match">
                                <div class="team-name-container">
                                    <span>${match.homeTeam}</span>
                                    ${match.home && getTeamRedCards(match, match.homeTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
                                </div>
                                ${getTeamLogoElement(match.homeTeam === 'TBD' ? 'TBD' : (leagueData.teams.find(t => t.name === match.homeTeam)?.id || ''), '40px')}
                            </div>
                            <div class="score-container">
                                <span class="vs-score">${match.status === 'completed' ? `${match.homeScore} - ${match.awayScore}` : 'vs'}</span>
                                ${match.status === 'completed' ? '<div class="match-status ft">FT</div>' : 
                                  match.status === 'live' ? '<div class="match-status live">LIVE</div>' :
                                  match.status === 'postponed' ? '<div class="match-status postponed">POSTPONED</div>' : ''}
                                ${match.status === 'completed' && match.penalties && match.penalties.home !== null ? 
                                    `<div class="penalties-display">Penalties: ${match.penalties.home}-${match.penalties.away}</div>` : ''}
                            </div>
                            <div class="team-match">
                                ${getTeamLogoElement(match.awayTeam === 'TBD' ? 'TBD' : (leagueData.teams.find(t => t.name === match.awayTeam)?.id || ''), '40px')}
                                <div class="team-name-container">
                                    <span>${match.awayTeam}</span>
                                    ${match.away && getTeamRedCards(match, match.awayTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
                                </div>
                            </div>
                        </div>
                        ${match.status === 'completed' || match.status === 'live' ? `
                        <div class="fixture-footer">
                            <a href="#" class="overview-link" onclick="viewMatchDetails('knockout', '${match.homeTeam}', '${match.awayTeam}')">Overview</a>
                        </div>
                        ` : ''}
                    </section>
                `).join('')}
            </div>
        </div>
    `;
}

// Dynamic statistics calculation functions
function calculatePlayerStats() {
    const playerStats = {};
    
    // Process fixtures data
    leagueData.fixturesData.forEach(timeSlot => {
        timeSlot.matches.forEach(match => {
            if (match.status === 'completed' && match.home && match.away) {
                processMatchPlayers(match, playerStats);
            }
        });
    });
    
    // Process knockout data
    const allKnockoutMatches = [
        ...leagueData.knockout.quarterFinals,
        ...leagueData.knockout.semiFinals,
        ...leagueData.knockout.thirdPlace,
        ...leagueData.knockout.final
    ];
    
    allKnockoutMatches.forEach(match => {
        if (match.status === 'completed' && match.home && match.away) {
            processMatchPlayers(match, playerStats);
        }
    });
    
    return playerStats;
}

function processMatchPlayers(match, playerStats) {
    // Process home team players
    [...(match.home.starting || []), ...(match.home.substitutes || [])].forEach(player => {
        if (!playerStats[player.playerId]) {
            playerStats[player.playerId] = {
                name: getPlayerName(player.playerId),
                team: getPlayerTeam(player.playerId),
                goals: 0,
                assists: 0,
                yellowCards: 0,
                redCards: 0,
                cleanSheets: 0,
                matches: 0
            };
        }
        
        // Count only non-own goals
        const nonOwnGoals = (player.goals || 0) - (player.goalTypes ? player.goalTypes.filter(type => type === 'own').length : 0);
        playerStats[player.playerId].goals += nonOwnGoals;
        playerStats[player.playerId].assists += player.assists || 0;
        playerStats[player.playerId].yellowCards += player.yellowCard ? 1 : 0;
        playerStats[player.playerId].redCards += player.redCard ? 1 : 0;
        playerStats[player.playerId].cleanSheets += player.cleanSheet ? 1 : 0;
        playerStats[player.playerId].matches += 1;
    });
    
    // Process away team players
    [...(match.away.starting || []), ...(match.away.substitutes || [])].forEach(player => {
        if (!playerStats[player.playerId]) {
            playerStats[player.playerId] = {
                name: getPlayerName(player.playerId),
                team: getPlayerTeam(player.playerId),
                goals: 0,
                assists: 0,
                yellowCards: 0,
                redCards: 0,
                cleanSheets: 0,
                matches: 0
            };
        }
        
        // Count only non-own goals
        const nonOwnGoals = (player.goals || 0) - (player.goalTypes ? player.goalTypes.filter(type => type === 'own').length : 0);
        playerStats[player.playerId].goals += nonOwnGoals;
        playerStats[player.playerId].assists += player.assists || 0;
        playerStats[player.playerId].yellowCards += player.yellowCard ? 1 : 0;
        playerStats[player.playerId].redCards += player.redCard ? 1 : 0;
        playerStats[player.playerId].cleanSheets += player.cleanSheet ? 1 : 0;
        playerStats[player.playerId].matches += 1;
    });
}

function getPlayerName(playerId) {
    for (const team of leagueData.teams) {
        const player = team.squad.find(p => p.id === playerId);
        if (player) return player.name;
    }
    return 'Unknown';
}

function getPlayerTeam(playerId) {
    for (const team of leagueData.teams) {
        const player = team.squad.find(p => p.id === playerId);
        if (player) return team.name;
    }
    return 'Unknown';
}

function calculateMatchStats() {
    let totalGoals = 0;
    let totalMatches = 0;
    let completedMatches = 0;
    
    // Process fixtures data
    leagueData.fixturesData.forEach(timeSlot => {
        timeSlot.matches.forEach(match => {
            totalMatches++;
            if (match.status === 'completed' && match.homeScore !== null && match.awayScore !== null) {
                completedMatches++;
                totalGoals += match.homeScore + match.awayScore;
            }
        });
    });
    
    // Process knockout data
    const allKnockoutMatches = [
        ...leagueData.knockout.quarterFinals,
        ...leagueData.knockout.semiFinals,
        ...leagueData.knockout.thirdPlace,
        ...leagueData.knockout.final
    ];
    
    allKnockoutMatches.forEach(match => {
        totalMatches++;
        if (match.status === 'completed' && match.homeScore !== null && match.awayScore !== null) {
            completedMatches++;
            totalGoals += match.homeScore + match.awayScore;
        }
    });
    
    return {
        totalGoals,
        totalMatches,
        completedMatches,
        averageGoals: completedMatches > 0 ? (totalGoals / completedMatches).toFixed(2) : 0
    };
}

function getTopScorers(playerStats, limit = 5) {
    return Object.values(playerStats)
        .filter(p => p.goals > 0)
        .sort((a, b) => b.goals - a.goals)
        .slice(0, limit);
}

function getTopAssists(playerStats, limit = 5) {
    return Object.values(playerStats)
        .filter(p => p.assists > 0)
        .sort((a, b) => b.assists - a.assists)
        .slice(0, limit);
}

function getMostCards(playerStats, limit = 5) {
    return Object.values(playerStats)
        .filter(p => (p.yellowCards + p.redCards) > 0)
        .sort((a, b) => (b.yellowCards + b.redCards) - (a.yellowCards + a.redCards))
        .slice(0, limit);
}

function getMostYellowCards(playerStats, limit = 5) {
    return Object.values(playerStats)
        .filter(p => p.yellowCards > 0)
        .sort((a, b) => b.yellowCards - a.yellowCards)
        .slice(0, limit);
}

function getMostRedCards(playerStats, limit = 5) {
    return Object.values(playerStats)
        .filter(p => p.redCards > 0)
        .sort((a, b) => b.redCards - a.redCards)
        .slice(0, limit);
}

function getTopCleanSheets(playerStats, limit = 5) {
    return Object.values(playerStats)
        .filter(p => p.cleanSheets > 0)
        .sort((a, b) => b.cleanSheets - a.cleanSheets)
        .slice(0, limit);
}

function areAllMatchesCompleted() {
    // Check all fixtures matches
    for (const timeSlot of leagueData.fixturesData) {
        for (const match of timeSlot.matches) {
            if (match.status !== 'completed') {
                return false;
            }
        }
    }
    
    // Check all knockout matches
    const allKnockoutMatches = [
        ...leagueData.knockout.quarterFinals,
        ...leagueData.knockout.semiFinals,
        ...leagueData.knockout.thirdPlace,
        ...leagueData.knockout.final
    ];
    
    for (const match of allKnockoutMatches) {
        if (match.status !== 'completed') {
            return false;
        }
    }
    
    return true;
}

function getUpcomingMatches(limit = 4) {
    const upcomingMatches = [];
    
    // Get upcoming matches from fixtures
    leagueData.fixturesData.forEach(timeSlot => {
        timeSlot.matches.forEach(match => {
            if (match.status === 'scheduled' || match.status === 'upcoming') {
                upcomingMatches.push({
                    ...match,
                    time: timeSlot.time,
                    source: 'fixtures'
                });
            }
        });
    });
    
    // Get upcoming matches from knockout
    const allKnockoutMatches = [
        ...leagueData.knockout.quarterFinals,
        ...leagueData.knockout.semiFinals,
        ...leagueData.knockout.thirdPlace,
        ...leagueData.knockout.final
    ];
    
    allKnockoutMatches.forEach(match => {
        if (match.status === 'scheduled' || match.status === 'upcoming') {
            upcomingMatches.push({
                ...match,
                time: 'Knockout Stage',
                source: 'knockout'
            });
        }
    });
    
    // Sort by date and return limited results
    return upcomingMatches.slice(0, limit);
}

function getLatestResults(limit = 4) {
    const completedMatches = [];
    
    // Get completed matches from fixtures
    leagueData.fixturesData.forEach(timeSlot => {
        timeSlot.matches.forEach(match => {
            if (match.status === 'completed') {
                completedMatches.push({
                    ...match,
                    time: timeSlot.time,
                    source: 'fixtures'
                });
            }
        });
    });
    
    // Get completed matches from knockout
    const allKnockoutMatches = [
        ...leagueData.knockout.quarterFinals,
        ...leagueData.knockout.semiFinals,
        ...leagueData.knockout.thirdPlace,
        ...leagueData.knockout.final
    ];
    
    allKnockoutMatches.forEach(match => {
        if (match.status === 'completed') {
            completedMatches.push({
                ...match,
                time: 'Knockout Stage',
                source: 'knockout'
            });
        }
    });
    
    // Sort by date (most recent first) and return limited results
    return completedMatches.sort((a, b) => new Date(b.date || b.time) - new Date(a.date || a.time)).slice(0, limit);
}

function getTeamRecentForm(teamName) {
    const allMatches = [];
    
    // Get all completed matches for the team
    leagueData.fixturesData.forEach(timeSlot => {
        timeSlot.matches.forEach(match => {
            if (match.status === 'completed' && (match.homeTeam === teamName || match.awayTeam === teamName)) {
                allMatches.push(match);
            }
        });
    });
    
    // Get knockout matches
    const allKnockoutMatches = [
        ...leagueData.knockout.quarterFinals,
        ...leagueData.knockout.semiFinals,
        ...leagueData.knockout.thirdPlace,
        ...leagueData.knockout.final
    ];
    
    allKnockoutMatches.forEach(match => {
        if (match.status === 'completed' && (match.homeTeam === teamName || match.awayTeam === teamName)) {
            allMatches.push(match);
        }
    });
    
    // Get last 3 matches
    const recentMatches = allMatches.slice(-3);
    
    if (recentMatches.length === 0) return 'No matches played';
    
    return recentMatches.map(match => {
        const isHome = match.homeTeam === teamName;
        const teamScore = isHome ? match.homeScore : match.awayScore;
        const opponentScore = isHome ? match.awayScore : match.homeScore;
        
        if (teamScore > opponentScore) {
            return '<span class="form-win"><svg class="form-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
        } else if (teamScore < opponentScore) {
            return '<span class="form-loss"><svg class="form-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
        } else {
            return '<span class="form-draw"><svg class="form-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
        }
    }).join('');
}

function getTeamSeasonForm(teamName) {
    const allMatches = [];
    
    // Get all completed matches for the team
    leagueData.fixturesData.forEach(timeSlot => {
        timeSlot.matches.forEach(match => {
            if (match.status === 'completed' && (match.homeTeam === teamName || match.awayTeam === teamName)) {
                allMatches.push(match);
            }
        });
    });
    
    // Get knockout matches
    const allKnockoutMatches = [
        ...leagueData.knockout.quarterFinals,
        ...leagueData.knockout.semiFinals,
        ...leagueData.knockout.thirdPlace,
        ...leagueData.knockout.final
    ];
    
    allKnockoutMatches.forEach(match => {
        if (match.status === 'completed' && (match.homeTeam === teamName || match.awayTeam === teamName)) {
            allMatches.push(match);
        }
    });
    
    if (allMatches.length === 0) return 'No matches played';
    
    // Sort matches by date to get chronological order
    allMatches.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    return allMatches.map(match => {
        const isHome = match.homeTeam === teamName;
        const teamScore = isHome ? match.homeScore : match.awayScore;
        const opponentScore = isHome ? match.awayScore : match.homeScore;
        
        if (teamScore > opponentScore) {
            return '<span class="form-win"><svg class="form-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
        } else if (teamScore < opponentScore) {
            return '<span class="form-loss"><svg class="form-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
        } else {
            return '<span class="form-draw"><svg class="form-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
        }
    }).join('');
}

function getShortPosition(position) {
    const positionMap = {
        'Goalkeeper': 'GK',
        'Defender': 'DEF',
        'Midfielder': 'MID',
        'Forward': 'FWD'
    };
    
    return positionMap[position] || position;
}

function getTeamNextFixture(teamName) {
    // Check regular fixtures
    for (const timeSlot of leagueData.fixturesData) {
        for (const match of timeSlot.matches) {
            if ((match.homeTeam === teamName || match.awayTeam === teamName) && 
                (match.status === 'scheduled' || match.status === 'upcoming')) {
                const opponent = match.homeTeam === teamName ? match.awayTeam : match.homeTeam;
                const venue = match.homeTeam === teamName ? 'vs' : '@';
                return `${venue} ${opponent} (${timeSlot.time})`;
            }
        }
    }
    
    // Check knockout fixtures
    const allKnockoutMatches = [
        ...leagueData.knockout.quarterFinals,
        ...leagueData.knockout.semiFinals,
        ...leagueData.knockout.thirdPlace,
        ...leagueData.knockout.final
    ];
    
    for (const match of allKnockoutMatches) {
        if ((match.homeTeam === teamName || match.awayTeam === teamName) && 
            (match.status === 'scheduled' || match.status === 'upcoming')) {
            const opponent = match.homeTeam === teamName ? match.awayTeam : match.homeTeam;
            const venue = match.homeTeam === teamName ? 'vs' : '@';
            return `${venue} ${opponent} (Knockout)`;
        }
    }
    
    return null;
}

function toggleTeamDetails(teamId) {
    const details = document.getElementById(`details-${teamId}`);
    const button = details.nextElementSibling;
    const text = button.querySelector('.read-more-text');
    const icon = button.querySelector('.read-more-icon');
    
    if (details.classList.contains('expanded')) {
        details.classList.remove('expanded');
        text.textContent = 'Read More';
        icon.textContent = '▼';
    } else {
        details.classList.add('expanded');
        text.textContent = 'Read Less';
        icon.textContent = '▲';
    }
}

function switchTab(teamId, tabName) {
    // Remove active class from all tabs and panels for this team
    const tabsContainer = document.querySelector(`#details-${teamId} .tabs-container`);
    if (!tabsContainer) return;
    
    const allTabs = tabsContainer.querySelectorAll('.tab-btn');
    const allPanels = tabsContainer.querySelectorAll('.tab-panel');
    
    allTabs.forEach(tab => tab.classList.remove('active'));
    allPanels.forEach(panel => panel.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding panel
    const activeTab = tabsContainer.querySelector(`[data-tab="${tabName}"]`);
    const activePanel = tabsContainer.querySelector(`#${tabName}-${teamId}`);
    
    if (activeTab && activePanel) {
        activeTab.classList.add('active');
        activePanel.classList.add('active');
        
        // Load match history dynamically when tab is opened
        if (tabName === 'match-history') {
            loadMatchHistory(teamId);
        }
    }
}

function loadMatchHistory(teamId) {
    const matchHistoryContainer = document.querySelector(`#match-history-${teamId} .match-history`);
    if (!matchHistoryContainer) return;
    
    try {
        const teamMatches = getTeamMatchHistory(teamId);
        const team = leagueData.teams.find(t => t.id === teamId);
        
        if (teamMatches.length > 0) {
            const seasonForm = getTeamSeasonForm(team.name);
            matchHistoryContainer.innerHTML = teamMatches.map(match => `
                <div class="match-item">
                    <div class="match-date">${match.date}</div>
                    <div class="match-teams">
                        <span class="team ${match.homeTeam === team.name ? 'home' : 'away'}">${match.homeTeam}</span>
                        <span class="score">${match.homeScore} - ${match.awayScore}</span>
                        <span class="team ${match.awayTeam === team.name ? 'home' : 'away'}">${match.awayTeam}</span>
                    </div>
                    <div class="match-details">
                        <span class="match-status ${match.status}">${match.status}</span>
                        ${match.venue ? `<span class="match-venue">${match.venue}</span>` : ''}
                    </div>
                    ${match.playerOfTheMatch ? `<div class="pom">${match.playerOfTheMatch}</div>` : ''}
                </div>
            `).join('') + `
                <div class="season-form-section">
                    <div class="season-form-header">
                        <h4>Full Season Form</h4>
                    </div>
                    <div class="season-form-display">
                        ${seasonForm}
                    </div>
                </div>
            `;
        } else {
            matchHistoryContainer.innerHTML = '<div class="no-data">No match history available</div>';
        }
    } catch (error) {
        console.error('Error loading match history:', error);
        matchHistoryContainer.innerHTML = '<div class="no-data">Error loading match history</div>';
    }
}

function getTeamMatchHistory(teamId) {
    const team = leagueData.teams.find(t => t.id === teamId);
    if (!team) return [];
    
    const teamMatches = [];
    
    // Get matches from fixtures data (group stage and regular matches) - only completed matches
    leagueData.fixturesData.forEach(timeSlot => {
        timeSlot.matches.forEach(match => {
            if ((match.homeTeam === team.name || match.awayTeam === team.name) && match.status === 'completed') {
                teamMatches.push({
                    date: match.date,
                    homeTeam: match.homeTeam,
                    awayTeam: match.awayTeam,
                    homeScore: match.homeScore,
                    awayScore: match.awayScore,
                    status: match.status,
                    playerOfTheMatch: match.playerOfTheMatch,
                    venue: match.venue
                });
            }
        });
    });
    
    // Get matches from knockout stage
    const knockoutMatches = [
        ...leagueData.knockout.quarterFinals,
        ...leagueData.knockout.semiFinals,
        ...leagueData.knockout.final
    ];
    
    knockoutMatches.forEach(match => {
        if ((match.homeTeam === team.name || match.awayTeam === team.name) && match.status === 'completed') {
            teamMatches.push({
                date: match.date,
                homeTeam: match.homeTeam,
                awayTeam: match.awayTeam,
                homeScore: match.homeScore,
                awayScore: match.awayScore,
                status: match.status,
                playerOfTheMatch: match.playerOfTheMatch,
                venue: match.venue
            });
        }
    });
    
    // Sort by date (most recent first)
    return teamMatches.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function filterTeams() {
    const searchInput = document.getElementById('teamSearch');
    const searchTerm = searchInput.value.toLowerCase();
    const teamCards = document.querySelectorAll('.team-card-blended');
    const teamDividers = document.querySelectorAll('.team-divider');
    const teamsContainer = document.getElementById('teamsContainer');
    
    let visibleCount = 0;
    
    teamCards.forEach((card, index) => {
        const teamName = card.querySelector('h3').textContent.toLowerCase();
        const teamId = card.id.replace('team-', '');
        
        // Search by team name or team ID
        if (teamName.includes(searchTerm) || teamId.includes(searchTerm)) {
            card.classList.remove('hidden');
            visibleCount++;
            
            // Show divider only if this team is visible and it's not the first team
            if (index > 0) {
                const divider = teamDividers[index - 1];
                if (divider) {
                    divider.style.display = 'block';
                }
            }
        } else {
            card.classList.add('hidden');
            
            // Hide divider for hidden teams
            if (index > 0) {
                const divider = teamDividers[index - 1];
                if (divider) {
                    divider.style.display = 'none';
                }
            }
        }
    });
    
    // Remove existing no-results message if it exists
    const existingMessage = teamsContainer.querySelector('.no-results-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Show no results message if no teams match
    if (visibleCount === 0 && searchTerm.length > 0) {
        const noResultsMessage = document.createElement('div');
        noResultsMessage.className = 'no-results-message';
        noResultsMessage.innerHTML = `
            <div class="no-results-content">
                <h3>No teams found</h3>
                <p>No teams match your search for "<strong>${searchInput.value}</strong>"</p>
                <p class="no-results-suggestion">Try searching by team name or city</p>
            </div>
        `;
        teamsContainer.appendChild(noResultsMessage);
    }
}

function generateStatsPage() {
    const playerStats = calculatePlayerStats();
    const matchStats = calculateMatchStats();
    const topScorers = getTopScorers(playerStats);
    const topAssists = getTopAssists(playerStats);
    const mostYellowCards = getMostYellowCards(playerStats);
    const mostRedCards = getMostRedCards(playerStats);
    const topCleanSheets = getTopCleanSheets(playerStats);
    
    return `
        <h2 class="page-title">Statistics</h2>
        
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-number">${matchStats.totalGoals}</div>
                <div>Total Goals</div>
            </div>
            
            <div class="stat-card">
                <div class="stat-number">${matchStats.completedMatches}</div>
                <div>Completed Matches</div>
            </div>
            
            <div class="stat-card">
                <div class="stat-number">${matchStats.averageGoals}</div>
                <div>Goals per Match</div>
            </div>
            
            <div class="stat-card">
                <div class="stat-number">${Object.keys(playerStats).length}</div>
                <div>Players Featured</div>
            </div>
        </div>
        
        <hr class="section-divider">

        <div class="stats-sections">
            <div class="stats-section">
                <h3>Top Scorers</h3>
                <div class="stats-semi-title">
                    <span>Player</span>
                    <span>Matches</span>
                    <span>Goals</span>
                </div>
                <div class="stats-list">
                    ${topScorers.map((player, index) => `
                        <div class="stat-item">
                            <div class="stat-rank">${index + 1}</div>
                            <div class="stat-player">
                                <div class="player-name">${player.name}</div>
                                <div class="player-team">${player.team}</div>
                            </div>
                            <div class="stat-matches">${player.matches}</div>
                            <div class="stat-value">${player.goals} goals</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <hr class="horizontal-divider">

            <div class="stats-section">
                <h3>Top Assists</h3>
                <div class="stats-semi-title">
                    <span>Player</span>
                    <span>Matches</span>
                    <span>Assists</span>
                </div>
                <div class="stats-list">
                    ${topAssists.map((player, index) => `
                        <div class="stat-item">
                            <div class="stat-rank">${index + 1}</div>
                            <div class="stat-player">
                                <div class="player-name">${player.name}</div>
                                <div class="player-team">${player.team}</div>
                            </div>
                            <div class="stat-matches">${player.matches}</div>
                            <div class="stat-value">${player.assists} assists</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <hr class="horizontal-divider">

            <div class="stats-section">
                <h3>Most Clean Sheets</h3>
                <div class="stats-semi-title">
                    <span>Player</span>
                    <span>Matches</span>
                    <span>Clean Sheets</span>
                </div>
                <div class="stats-list">
                    ${topCleanSheets.map((player, index) => `
                        <div class="stat-item">
                            <div class="stat-rank">${index + 1}</div>
                            <div class="stat-player">
                                <div class="player-name">${player.name}</div>
                                <div class="player-team">${player.team}</div>
                            </div>
                            <div class="stat-matches">${player.matches}</div>
                            <div class="stat-value">${player.cleanSheets} clean sheets</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <hr class="horizontal-divider">

            <div class="stats-section">
                <h3>Most Yellow Cards</h3>
                <div class="stats-semi-title">
                    <span>Player</span>
                    <span>Matches</span>
                    <span>Yellow Cards</span>
                </div>
                <div class="stats-list">
                    ${mostYellowCards.map((player, index) => `
                        <div class="stat-item">
                            <div class="stat-rank">${index + 1}</div>
                            <div class="stat-player">
                                <div class="player-name">${player.name}</div>
                                <div class="player-team">${player.team}</div>
                            </div>
                            <div class="stat-matches">${player.matches}</div>
                            <div class="stat-value">${player.yellowCards} 🟨</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <hr class="horizontal-divider">

            <div class="stats-section">
                <h3>Most Red Cards</h3>
                <div class="stats-semi-title">
                    <span>Player</span>
                    <span>Matches</span>
                    <span>Red Cards</span>
                </div>
                <div class="stats-list">
                    ${mostRedCards.map((player, index) => `
                        <div class="stat-item">
                            <div class="stat-rank">${index + 1}</div>
                            <div class="stat-player">
                                <div class="player-name">${player.name}</div>
                                <div class="player-team">${player.team}</div>
                            </div>
                            <div class="stat-matches">${player.matches}</div>
                            <div class="stat-value">${player.redCards} 🟥</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function generateAwardsPage() {
    // Check if all matches are completed
    const allMatchesCompleted = areAllMatchesCompleted();
    
    if (!allMatchesCompleted) {
    return `
            <h2 class="page-title">Tournament Awards</h2>
            
            <div class="awards-ceremony">
                <div class="awards-pending">
                    <div class="pending-icon">
                        <div class="trophy-placeholder">
                            <div class="trophy-base"></div>
                            <div class="trophy-cup"></div>
                    </div>
                </div>
                    <div class="pending-content">
                        <h3 class="pending-title">Awards Pending</h3>
                        <p class="pending-message">Tournament awards will be announced once all matches are completed.</p>
                        <div class="pending-details">
                            <p>Complete all fixtures and knockout matches to reveal the winners.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    const playerStats = calculatePlayerStats();
    const topScorers = getTopScorers(playerStats, 1);
    const topAssists = getTopAssists(playerStats, 1);
    const topCleanSheets = getTopCleanSheets(playerStats, 1);
    
    return `
        <h2 class="page-title">Tournament Awards</h2>
        
        <div class="awards-ceremony">
            <div class="awards-showcase">
                <div class="award-podium">
                    <div class="award-item featured">
                        <div class="award-trophy">
                            <div class="trophy-base"></div>
                            <div class="trophy-cup"></div>
                        </div>
                        <div class="award-info">
                            <h3 class="award-title">Team of the Tournament</h3>
                            <div class="award-recipient">${leagueData.tournamentAwards.teamOfTheTournament}</div>
                            <div class="award-description">Outstanding team performance throughout the tournament</div>
                        </div>
                    </div>
                    
                    <div class="award-item featured">
                        <div class="award-trophy">
                            <div class="trophy-base"></div>
                            <div class="trophy-cup"></div>
                        </div>
                        <div class="award-info">
                            <h3 class="award-title">Player of the Tournament</h3>
                            <div class="award-recipient">${leagueData.tournamentAwards.playerOfTheTournament}</div>
                            <div class="award-description">Exceptional individual performance and leadership</div>
                        </div>
                    </div>
                </div>
                
                <div class="awards-grid">
                    <div class="award-item">
                        <div class="award-badge">
                            <div class="badge-icon">GK</div>
                        </div>
                        <div class="award-info">
                            <h4 class="award-title">Golden Glove</h4>
                            <div class="award-recipient">${topCleanSheets.length > 0 ? topCleanSheets[0].name : 'TBD'}</div>
                            <div class="award-stats">${topCleanSheets.length > 0 ? `${topCleanSheets[0].cleanSheets} Clean Sheets` : 'To be determined'}</div>
                        </div>
                    </div>
                    
                    <div class="award-item">
                        <div class="award-badge">
                            <div class="badge-icon">GS</div>
                        </div>
                        <div class="award-info">
                            <h4 class="award-title">Golden Boot</h4>
                            <div class="award-recipient">${topScorers.length > 0 ? topScorers[0].name : 'TBD'}</div>
                            <div class="award-stats">${topScorers.length > 0 ? `${topScorers[0].goals} Goals` : 'To be determined'}</div>
                        </div>
                    </div>
                    
                    <div class="award-item">
                        <div class="award-badge">
                            <div class="badge-icon">AS</div>
                        </div>
                        <div class="award-info">
                            <h4 class="award-title">Playmaker Award</h4>
                            <div class="award-recipient">${topAssists.length > 0 ? topAssists[0].name : 'TBD'}</div>
                            <div class="award-stats">${topAssists.length > 0 ? `${topAssists[0].assists} Assists` : 'To be determined'}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Table tab switching functionality
function switchTableTab(tabName) {
    const currentActivePane = document.querySelector('.tab-pane.active');
    const targetPane = document.getElementById(`${tabName}-tab`);
    const targetBtn = document.querySelector(`[onclick="switchTableTab('${tabName}')"]`);
    
    // If clicking the same tab, do nothing
    if (currentActivePane === targetPane) return;
    
    // Remove active class from all tabs
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    // Add active class to target button immediately
    targetBtn.classList.add('active');
    
    // Fade out current content
    if (currentActivePane) {
        currentActivePane.classList.remove('active');
        
        // Wait for fade out to complete, then fade in new content
        setTimeout(() => {
            targetPane.classList.add('active');
        }, 150); // Half of the transition duration
    } else {
        // If no current active pane, show target immediately
        targetPane.classList.add('active');
    }
}

// Mobile menu functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.hamburger');
    const mobileNavBtns = document.querySelectorAll('.mobile-nav-btn');
    
    if (mobileMenu && hamburger) {
        const isActive = mobileMenu.classList.contains('active');
        
        if (isActive) {
            // Closing animation
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
            
            // Reset button animations
            mobileNavBtns.forEach(btn => {
                btn.style.animation = 'none';
                btn.style.transform = 'translateY(30px)';
                btn.style.opacity = '0';
            });
        } else {
            // Opening animation
            mobileMenu.classList.add('active');
            hamburger.classList.add('active');
            
            // Trigger button animations with delay
            setTimeout(() => {
                mobileNavBtns.forEach((btn, index) => {
                    btn.style.animation = `slideInFromBottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.08 + 0.2}s forwards`;
                });
            }, 150);
        }
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.hamburger');
    
    if (mobileMenu && hamburger && 
        !mobileMenu.contains(event.target) && 
        !hamburger.contains(event.target)) {
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Fixtures filtering functions
let currentFilters = {
    team: 'all',
    time: 'all',
    status: 'all'
};

function filterByTeam(team) {
    currentFilters.team = team;
    applyFilters();
}

function filterByTime(time) {
    currentFilters.time = time;
    applyFilters();
}

function filterByStatus(status) {
    currentFilters.status = status;
    applyFilters();
}

// Function to determine match result for a team
function getTeamMatchResult(match, teamName) {
    if (match.status !== 'completed') return null;
    
    const isHomeTeam = match.homeTeam === teamName;
    const isAwayTeam = match.awayTeam === teamName;
    
    if (!isHomeTeam && !isAwayTeam) return null;
    
    if (match.homeScore > match.awayScore) {
        return isHomeTeam ? 'win' : 'loss';
    } else if (match.homeScore < match.awayScore) {
        return isHomeTeam ? 'loss' : 'win';
    } else {
        return 'draw';
    }
}

function getTeamRedCards(match, teamName) {
    if (!match.home || !match.away) return 0;
    
    const isHomeTeam = match.homeTeam === teamName;
    const teamData = isHomeTeam ? match.home : match.away;
    
    let redCardCount = 0;
    
    // Check starting XI
    if (teamData.starting) {
        teamData.starting.forEach(player => {
            if (player.redCard) {
                redCardCount++;
            }
        });
    }
    
    // Check substitutes
    if (teamData.substitutes) {
        teamData.substitutes.forEach(player => {
            if (player.redCard) {
                redCardCount++;
            }
        });
    }
    
    return redCardCount;
}

function applyFilters() {
    const fixturesContent = document.getElementById('fixtures-content');
    if (!fixturesContent) return;
    
    let filteredFixtures = [...leagueData.fixturesData];
    
    // Filter by time
    if (currentFilters.time !== 'all') {
        filteredFixtures = filteredFixtures.filter(timeSlot => timeSlot.time === currentFilters.time);
    }
    
    // Filter by team and status within each time slot
    filteredFixtures = filteredFixtures.map(timeSlot => ({
        ...timeSlot,
        matches: timeSlot.matches.filter(match => {
            const teamMatch = currentFilters.team === 'all' || 
                             match.homeTeam === currentFilters.team || 
                             match.awayTeam === currentFilters.team;
            
            const statusMatch = currentFilters.status === 'all' || 
                               match.status === currentFilters.status;
            
            return teamMatch && statusMatch;
        })
    })).filter(timeSlot => timeSlot.matches.length > 0); // Remove empty time slots
    
    // Regenerate fixtures content
    fixturesContent.innerHTML = filteredFixtures.map(timeSlot => `
        <h3 class="time-slot-title">
            <svg class="time-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            ${timeSlot.time}
        </h3>
        ${timeSlot.matches.map(match => {
            // Determine if we should add result-based styling
            let resultClass = '';
            if (currentFilters.team !== 'all' && match.status === 'completed') {
                const result = getTeamMatchResult(match, currentFilters.team);
                if (result) {
                    resultClass = ` team-${result}`;
                }
            }
            
            return `
            <section class="fixture${resultClass}">
                <div class="teams">
                    <div class="team-match">
                        <div class="team-name-container">
                            <span>${match.homeTeam}</span>
                            ${getTeamRedCards(match, match.homeTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
                        </div>
                        ${getTeamLogoElement(leagueData.teams.find(t => t.name === match.homeTeam)?.id || '', '40px')}
                    </div>
                    <div class="score-container">
                        <span class="vs-score">${match.status === 'upcoming' || match.status === 'scheduled' ? 'vs' : match.homeScore + ' - ' + match.awayScore}</span>
                        ${match.status === 'completed' ? '<div class="match-status ft">FT</div>' : 
                          match.status === 'live' ? '<div class="match-status live">LIVE</div>' :
                          match.status === 'postponed' ? '<div class="match-status postponed">POSTPONED</div>' : ''}
                    </div>
                    <div class="team-match">
                        ${getTeamLogoElement(leagueData.teams.find(t => t.name === match.awayTeam)?.id || '', '40px')}
                        <div class="team-name-container">
                            <span>${match.awayTeam}</span>
                            ${getTeamRedCards(match, match.awayTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
                        </div>
                    </div>
                </div>
                ${match.status === 'completed' || match.status === 'live' ? `
                <div class="fixture-footer">
                    <a href="#" class="overview-link" onclick="viewMatchDetails('${timeSlot.time}', '${match.homeTeam}', '${match.awayTeam}')">Overview</a>
                </div>
                ` : ''}
            </section>
        `;
        }).join('')}
    `).join('');
}

// Function to view match details
function viewMatchDetails(time, homeTeam, awayTeam) {
    let match = null;
    let matchTime = time;
    
    // Check if it's a knockout match
    if (time === 'knockout') {
        // Search through all knockout rounds
        const allKnockoutMatches = [
            ...leagueData.knockout.quarterFinals,
            ...leagueData.knockout.semiFinals,
            ...leagueData.knockout.thirdPlace,
            ...leagueData.knockout.final
        ];
        
        match = allKnockoutMatches.find(m => m.homeTeam === homeTeam && m.awayTeam === awayTeam);
        matchTime = 'Knockout Stage';
        // Store the source page for back navigation
        window.matchDetailsSource = 'knockout';
    } else {
        // Find the match data from fixtures
        const timeSlot = leagueData.fixturesData.find(slot => slot.time === time);
        match = timeSlot?.matches.find(m => m.homeTeam === homeTeam && m.awayTeam === awayTeam);
        // Store the source page for back navigation
        window.matchDetailsSource = 'fixtures';
    }
    
    if (!match) {
        console.error('Match not found!');
        return;
    }
    
    // Generate and display match details page
    const content = document.getElementById('content');
    content.innerHTML = generateMatchDetailsPage(match, matchTime);
    
    // Update navigation and current page
    setActivePage('match-details');
    currentPage = 'match-details';
}

// Function to go back to the appropriate page based on source
function goBackToFixtures() {
    // Check the source page and navigate back accordingly
    if (window.matchDetailsSource === 'knockout') {
        // Load the knockout page
        loadPage('knockout');
    } else {
        // Load the fixtures page
        loadPage('fixtures');
        
        // Reapply any active filters
        if (currentFilters.team !== 'all' || currentFilters.time !== 'all' || currentFilters.status !== 'all') {
            // Small delay to ensure the page is loaded before applying filters
            setTimeout(() => {
                applyFilters();
            }, 100);
        }
    }
    
    // Clear the source
    window.matchDetailsSource = null;
}

// Function to generate team events (goals, cards) for a specific team
function generateTeamEvents(match, teamName) {
    if (match.status !== 'completed' && match.status !== 'live') {
        return '';
    }
    
    let events = [];
    const isHomeTeam = teamName === match.homeTeam;
    
    // Get players from the specified team
    const teamPlayers = isHomeTeam ? 
        [...(match.home?.starting || []), ...(match.home?.substitutes || [])] :
        [...(match.away?.starting || []), ...(match.away?.substitutes || [])];
    
    // Get players from the opposing team for own goals
    const opposingPlayers = isHomeTeam ? 
        [...(match.away?.starting || []), ...(match.away?.substitutes || [])] :
        [...(match.home?.starting || []), ...(match.home?.substitutes || [])];
    
    // Collect goal events from this team
    teamPlayers.forEach(player => {
        if (player.goals > 0 && player.goalMinutes && player.goalMinutes.length > 0) {
            const playerName = getPlayerName(player.playerId);
            
            player.goalMinutes.forEach((minute, index) => {
                const goalType = player.goalTypes && player.goalTypes[index] ? player.goalTypes[index] : 'open';
                if (goalType !== 'own') {
                    events.push({
                        type: goalType === 'penalty' ? 'penalty' : 'goal',
                        minute: minute,
                        player: playerName
                    });
                }
            });
        }
    });
    
    // Collect own goals from opposing team (they benefit this team)
    opposingPlayers.forEach(player => {
        if (player.goals > 0 && player.goalMinutes && player.goalMinutes.length > 0) {
            const playerName = getPlayerName(player.playerId);
            
            player.goalMinutes.forEach((minute, index) => {
                const goalType = player.goalTypes && player.goalTypes[index] ? player.goalTypes[index] : 'open';
                if (goalType === 'own') {
                    events.push({
                        type: 'own_goal',
                        minute: minute,
                        player: playerName
                    });
                }
            });
        }
    });
    
    // Collect card events
    teamPlayers.forEach(player => {
        if (player.yellowCard && player.yellowCardMinutes && player.yellowCardMinutes.length > 0) {
            const playerName = getPlayerName(player.playerId);
            
            player.yellowCardMinutes.forEach(minute => {
                events.push({
                    type: 'yellow',
                    minute: minute,
                    player: playerName
                });
            });
        }
        
        if (player.redCard && player.redCardMinutes && player.redCardMinutes.length > 0) {
            const playerName = getPlayerName(player.playerId);
            
            player.redCardMinutes.forEach(minute => {
                events.push({
                    type: 'red',
                    minute: minute,
                    player: playerName
                });
            });
        }
    });
    
    // Group events by player and track earliest event time
    const playerEvents = {};
    events.forEach(event => {
        if (!playerEvents[event.player]) {
            playerEvents[event.player] = {
                goals: [],
                penalties: [],
                ownGoals: [],
                yellowCards: [],
                redCards: [],
                earliestEvent: event.minute
            };
        }
        
        // Update earliest event time
        if (event.minute < playerEvents[event.player].earliestEvent) {
            playerEvents[event.player].earliestEvent = event.minute;
        }
        
        if (event.type === 'goal') {
            playerEvents[event.player].goals.push(event.minute);
        } else if (event.type === 'penalty') {
            playerEvents[event.player].penalties.push(event.minute);
        } else if (event.type === 'own_goal') {
            playerEvents[event.player].ownGoals.push(event.minute);
        } else if (event.type === 'yellow') {
            playerEvents[event.player].yellowCards.push(event.minute);
        } else if (event.type === 'red') {
            playerEvents[event.player].redCards.push(event.minute);
        }
    });
    
    if (Object.keys(playerEvents).length === 0) {
        return '';
    }
    
    // Sort players by their earliest event time
    const sortedPlayers = Object.entries(playerEvents).sort((a, b) => a[1].earliestEvent - b[1].earliestEvent);
    
    const eventsHtml = sortedPlayers.map(([playerName, events]) => {
        let eventParts = [];
        
        // Add yellow cards
        if (events.yellowCards.length > 0) {
            if (isHomeTeam) {
                eventParts.push(`${playerName} 🟨 ${events.yellowCards.join(', ')}'`);
            } else {
                eventParts.push(`🟨 ${events.yellowCards.join(', ')}' ${playerName}`);
            }
        }
        
        // Add red cards
        if (events.redCards.length > 0) {
            if (isHomeTeam) {
                eventParts.push(`${playerName} 🟥 ${events.redCards.join(', ')}'`);
            } else {
                eventParts.push(`🟥 ${events.redCards.join(', ')}' ${playerName}`);
            }
        }
        
        // Combine goals and penalties in chronological order
        const allGoals = [];
        events.goals.forEach(minute => {
            allGoals.push({ minute, type: 'open' });
        });
        events.penalties.forEach(minute => {
            allGoals.push({ minute, type: 'penalty' });
        });
        
        // Sort by minute (handle 90+1 format)
        allGoals.sort((a, b) => {
            const aMinute = typeof a.minute === 'string' ? a.minute : a.minute.toString();
            const bMinute = typeof b.minute === 'string' ? b.minute : b.minute.toString();
            
            // Extract base minute for sorting
            const aBase = parseInt(aMinute.replace(/\+.*/, ''));
            const bBase = parseInt(bMinute.replace(/\+.*/, ''));
            
            if (aBase !== bBase) {
                return aBase - bBase;
            }
            
            // If same base minute, sort by the full string
            return aMinute.localeCompare(bMinute);
        });
        
        if (allGoals.length > 0) {
            const goalString = allGoals.map(goal => {
                return goal.type === 'penalty' ? `${goal.minute}' (P)` : `${goal.minute}'`;
            }).join(' ');
            
            if (isHomeTeam) {
                eventParts.push(`${playerName} ⚽ ${goalString}`);
            } else {
                eventParts.push(`⚽ ${goalString} ${playerName}`);
            }
        }
        
        // Add own goals
        if (events.ownGoals.length > 0) {
            if (isHomeTeam) {
                eventParts.push(`${playerName} ⚽ ${events.ownGoals.join(' ')}' (OG)`);
            } else {
                eventParts.push(`⚽ ${events.ownGoals.join(' ')}' (OG) ${playerName}`);
            }
        }
        
        return eventParts.join('<br>');
    }).join('<br>');
    
    return `<div class="team-events" style="color: rgba(255, 255, 255, 0.6); font-style: italic; font-size: 0.65rem; line-height: 1.6;">${eventsHtml}</div>`;
}

// Function to generate match details page
function generateMatchDetailsPage(match, time) {
    const homeTeamData = leagueData.teams.find(t => t.name === match.homeTeam);
    const awayTeamData = leagueData.teams.find(t => t.name === match.awayTeam);
    
    return `
        <div class="match-details-container">
            <a href="#" class="back-button" onclick="goBackToFixtures()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Back to Fixtures
            </a>
            
            <div class="match-header">
                <h2 class="page-title">Match Details</h2>
                <div class="match-teams">
                    <div class="match-team home-team">
                        <div class="team-info">
                            <span>${match.homeTeam}</span>
                            ${getTeamLogoElement(homeTeamData?.id || '', '50px')}
                        </div>
                    </div>
                    <div class="match-score">
                        ${match.status === 'completed' ? `${match.homeScore} - ${match.awayScore}` : 
                          match.status === 'live' ? `${match.homeScore} - ${match.awayScore}` : 'vs'}
                    </div>
                    <div class="match-team away-team">
                        <div class="team-info">
                            ${getTeamLogoElement(awayTeamData?.id || '', '50px')}
                            <span>${match.awayTeam}</span>
                        </div>
                    </div>
                </div>
                <div class="match-events-container">
                    <div class="team-events-section">
                        ${generateTeamEvents(match, match.homeTeam)}
                    </div>
                    <div class="events-spacer"></div>
                    <div class="team-events-section">
                        ${generateTeamEvents(match, match.awayTeam)}
                    </div>
                </div>
                <div class="match-status">
                    ${match.status === 'completed' ? '<span class="match-status ft">FT</span>' : 
                      match.status === 'live' ? '<span class="match-status live">LIVE</span>' :
                      match.status === 'postponed' ? '<span class="match-status postponed">POSTPONED</span>' : 
                      '<span class="match-status scheduled">SCHEDULED</span>'}
                    ${match.status === 'completed' && match.penalties && match.penalties.home !== null ? 
                        `<div class="penalties-display">Penalties: ${match.penalties.home}-${match.penalties.away}</div>` : ''}
                </div>
                <p style="color: rgba(255, 255, 255, 0.7); margin: 10px 0;">${time}${match.venue ? ` • ${match.venue}` : ''}</p>
            </div>
            
            <div class="match-tabs">
                <div class="match-tab-buttons">
                    <button class="match-tab-btn active" onclick="switchMatchTab('lineup')">Lineup</button>
                    <button class="match-tab-btn" onclick="switchMatchTab('analysis')">Match Analysis</button>
                </div>
                
                <div class="match-tab-content">
                    <div id="lineup-tab" class="match-tab-pane active">
                        ${generateLineupTab(match)}
                    </div>
                    <div id="analysis-tab" class="match-tab-pane">
                        ${generateAnalysisTab(match)}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to generate lineup tab
function generateLineupTab(match) {
    if (!match.home || !match.away) {
        return '<p style="text-align: center; color: rgba(255, 255, 255, 0.7);">Lineup data not available</p>';
    }
    
    return `
        <div class="lineup-section">
            <div class="lineup-grid">
                <div class="team-lineup">
                    <div class="team-name">${match.homeTeam}</div>
                    
                    <div class="lineup-category">
                        <div class="category-title">Starting XI</div>
                        ${match.home.starting.map(player => generatePlayerItem(player, match.homeTeam)).join('')}
                    </div>
                    
                    <div class="lineup-category">
                        <div class="category-title">Substitutes</div>
                        ${match.home.substitutes.map(player => generatePlayerItem(player, match.homeTeam)).join('')}
                    </div>
                </div>
                
                <div class="team-lineup">
                    <div class="team-name">${match.awayTeam}</div>
                    
                    <div class="lineup-category">
                        <div class="category-title">Starting XI</div>
                        ${match.away.starting.map(player => generatePlayerItem(player, match.awayTeam)).join('')}
                    </div>
                    
                    <div class="lineup-category">
                        <div class="category-title">Substitutes</div>
                        ${match.away.substitutes.map(player => generatePlayerItem(player, match.awayTeam)).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to generate player item
function generatePlayerItem(player, teamName) {
    const teamData = leagueData.teams.find(t => t.name === teamName);
    const playerData = teamData?.squad.find(p => p.id === player.playerId);
    
    if (!playerData) return '';
    
    let itemClass = '';
    let stats = [];
    
    if (player.captain) {
        itemClass += ' captain';
    }
    if (player.goals > 0) {
        itemClass += ' goal';
        // Add ball icon for each goal scored
        for (let i = 0; i < player.goals; i++) {
            const goalType = player.goalTypes && player.goalTypes[i] ? player.goalTypes[i] : 'open';
            if (goalType === 'own') {
                stats.push(getBallSVG() + '<span class="own-goal-text">(OG)</span>');
            } else if (goalType === 'penalty') {
                stats.push(getBallSVG() + '<span class="own-goal-text">(P)</span>');
            } else {
                stats.push(getBallSVG());
            }
        }
    }
    if (player.assists > 0) {
        stats.push(`<span class="stat-badge stat-assist">${player.assists}A</span>`);
    }
    if (player.yellowCard) {
        itemClass += ' card-yellow';
        stats.push(getYellowCardSVG());
    }
    if (player.redCard) {
        itemClass += ' card-red';
        stats.push(getRedCardSVG());
    }
    
    // Add clean sheet for goalkeepers
    if (playerData.position === 'Goalkeeper' && player.cleanSheet) {
        stats.push(`<span class="stat-badge stat-clean-sheet">CS</span>`);
    }
    
    // Add substitution arrows
    let substitutionArrow = '';
    if (player.cameOnFor) {
        // Player came on as substitute
        substitutionArrow = `<span class="substitution-arrow up">↑</span>`;
    } else if (player.substituted && player.substitutionMinute) {
        // Player was substituted off
        substitutionArrow = `<span class="substitution-arrow down">↓</span>`;
    }
    
    return `
        <div class="player-item${itemClass}">
            <div class="player-info">
                <div class="player-number">${playerData.number}</div>
                <div class="player-name">${playerData.name}${player.captain ? getCaptainSVG() : ''}${substitutionArrow}</div>
            </div>
            <div class="player-stats">
                ${stats.join('')}
            </div>
        </div>
    `;
}

// Function to generate analysis tab
function generateAnalysisTab(match) {
    if (match.status !== 'completed') {
        return '<p style="text-align: center; color: rgba(255, 255, 255, 0.7);">Match analysis will be available after the match</p>';
    }
    
    return `
        <div class="analysis-section">
            <h3 class="lineup-title">Match Analysis</h3>
            
            <div class="analysis-grid">
                <div class="analysis-card">
                    <h4>Player of the Match</h4>
                    <p>${match.playerOfTheMatch ? getPlayerName(match.playerOfTheMatch) : 'Not selected'}</p>
                </div>
                
                <div class="analysis-card">
                    <h4>Match Summary</h4>
                    <p>${match.homeTeam} ${match.homeScore} - ${match.awayScore} ${match.awayTeam}</p>
                    <p>Final Score</p>
                </div>
                
                <div class="analysis-card">
                    <h4>Key Events</h4>
                    <ul>
                        <li>Goals: ${getTotalGoals(match)}</li>
                        <li>Cards: ${getTotalCards(match)}</li>
                        <li>Substitutions: ${getTotalSubstitutions(match)}</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

// Helper functions for analysis
function getPlayerName(playerId) {
    for (const team of leagueData.teams) {
        const player = team.squad.find(p => p.id === playerId);
        if (player) return player.name;
    }
    return 'Unknown Player';
}

function getTotalGoals(match) {
    if (!match.home || !match.away) return 0;
    const homeGoals = match.home.starting.reduce((sum, p) => sum + p.goals, 0) + 
                     match.home.substitutes.reduce((sum, p) => sum + p.goals, 0);
    const awayGoals = match.away.starting.reduce((sum, p) => sum + p.goals, 0) + 
                     match.away.substitutes.reduce((sum, p) => sum + p.goals, 0);
    return homeGoals + awayGoals;
}

function getTotalCards(match) {
    if (!match.home || !match.away) return 0;
    const homeCards = match.home.starting.filter(p => p.yellowCard || p.redCard).length + 
                     match.home.substitutes.filter(p => p.yellowCard || p.redCard).length;
    const awayCards = match.away.starting.filter(p => p.yellowCard || p.redCard).length + 
                     match.away.substitutes.filter(p => p.yellowCard || p.redCard).length;
    return homeCards + awayCards;
}

function getTotalSubstitutions(match) {
    if (!match.home || !match.away) return 0;
    const homeSubs = match.home.substitutes.filter(p => p.substituted).length;
    const awaySubs = match.away.substitutes.filter(p => p.substituted).length;
    return homeSubs + awaySubs;
}

// Function to switch match tabs
function switchMatchTab(tabName) {
    // Update active tab buttons
    document.querySelectorAll('.match-tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Update active tab panes
    document.querySelectorAll('.match-tab-pane').forEach(pane => pane.classList.remove('active'));
    document.getElementById(`${tabName}-tab`).classList.add('active');
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', initApp);
