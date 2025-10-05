// CSS Styles embedded in JavaScript - Updated
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

    /* Loading Screen Styles */
    .loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #37003c 0%, #1a0033 50%, #0a001a 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.8s ease-out, visibility 0.8s ease-out, transform 0.8s ease-out;
        transform: scale(1);
    }

    .loader.hidden {
        opacity: 0;
        visibility: hidden;
        transform: scale(0.95);
    }

    .loader-content {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .loader-logo {
        animation: logoFloat 2s ease-in-out infinite;
    }

    .loader-logo-img {
        width: 120px;
        height: 120px;
        filter: drop-shadow(0 0 20px rgba(0, 255, 133, 0.3));
    }

    .loader-text {
        color: #00ff85;
        font-size: 1.2rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 2px;
        animation: textPulse 1.5s ease-in-out infinite;
    }

    .loader-balls {
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .ball-container {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .ball-img {
        width: 30px;
        height: 30px;
        filter: drop-shadow(0 0 8px rgba(0, 255, 133, 0.4));
        display: inline-block;
    }

    @keyframes logoFloat {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
    }

    @keyframes textPulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.6;
        }
    }

    #ball-1 {
        animation-name: bounce;
        animation-delay: 0s;
        animation-duration: 1.2s;
        animation-iteration-count: infinite;
    }

    #ball-2 {
        animation-name: bounce;
        animation-delay: 0.1s;
        animation-duration: 1.2s;
        animation-iteration-count: infinite;
    }

    #ball-3 {
        animation-name: bounce;
        animation-delay: 0.2s;
        animation-duration: 1.2s;
        animation-iteration-count: infinite;
    }

    @keyframes bounce {
        0% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-25px);
        }
        60% {
            transform: translateY(-25px);
        }
        80% {
            transform: translateY(0);
        }
    }

    /* Hide app content while loading */
    #app {
        opacity: 0;
        transition: opacity 0.8s ease-in;
    }

    #app.loaded {
        opacity: 1;
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
        padding: 10px 25px;
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
        height: 70px;
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

    .desktop-search-container {
        margin-left: 20px;
        margin-right: 20px;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .search-icon-svg {
        width: 18px;
        height: 18px;
        color: rgba(255, 255, 255, 0.6);
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .search-icon-svg:hover {
        color: rgba(0, 255, 133, 0.7);
        transform: scale(1.1);
    }

    .desktop-search-input {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        padding: 8px 15px;
        color: #fff;
        font-size: 0.9rem;
        width: 150px;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
        cursor: pointer;
    }

    .desktop-search-input:hover {
        border-color: rgba(0, 255, 133, 0.3);
        background: rgba(255, 255, 255, 0.15);
    }

    .desktop-search-input:focus {
        outline: none;
        border-color: #00ff85;
        background: rgba(0, 255, 133, 0.1);
        width: 200px;
        cursor: text;
    }

    .desktop-search-input::placeholder {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.85rem;
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

    .mobile-search-container {
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .mobile-search-input {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        padding: 8px 15px;
        color: #fff;
        font-size: 0.9rem;
        width: 120px;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
        cursor: pointer;
    }

    .mobile-search-input:hover {
        border-color: rgba(0, 255, 133, 0.3);
        background: rgba(255, 255, 255, 0.15);
    }

    .mobile-search-input:focus {
        outline: none;
        border-color: #00ff85;
        background: rgba(0, 255, 133, 0.1);
        width: 150px;
        cursor: text;
    }

    .mobile-search-input::placeholder {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.85rem;
    }

    .home-icon-btn {
        background: none;
        border: none;
        cursor: pointer;
        padding: 8px;
        border-radius: 8px;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .home-icon-btn:hover {
        background: rgba(0, 255, 133, 0.1);
        transform: scale(1.1);
    }

    .home-icon-btn:active,
    .home-icon-btn:focus,
    .home-icon-btn:focus-visible {
        background: none !important;
        transform: scale(0.95);
        outline: none;
    }

    .home-icon-btn:active:not(:hover) {
        background: none !important;
    }

    .home-icon {
        width: 24px;
        height: 24px;
        filter: brightness(0) saturate(100%) invert(64%) sepia(100%) saturate(1000%) hue-rotate(90deg) brightness(1.2) contrast(1.2);
        transition: all 0.3s ease;
    }

    .home-icon-btn:hover .home-icon {
        filter: brightness(0) saturate(100%) invert(64%) sepia(100%) saturate(1000%) hue-rotate(90deg) brightness(1.4) contrast(1.4);
    }

    .home-icon-btn:active .home-icon,
    .home-icon-btn:focus .home-icon {
        filter: brightness(0) saturate(100%) invert(64%) sepia(100%) saturate(1000%) hue-rotate(90deg) brightness(1.2) contrast(1.2);
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
        top: 81px;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: calc(100vh - 81px);
        background: linear-gradient(135deg, #37003c 0%, #1a0033 50%, #0a001a 100%);
        z-index: 9999;
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        overflow-y: auto;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 20px;
        box-sizing: border-box;
        /* Hide scrollbar for webkit browsers */
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* Internet Explorer 10+ */
    }

    .mobile-menu::-webkit-scrollbar {
        display: none; /* WebKit browsers */
    }

    .mobile-menu.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }


    .mobile-nav-btn {
        display: block;
        width: 95%;
        background: transparent;
        border: none;
        color: #ffffff;
        padding: 15px 22px;
        font-size: 0.9rem;
        font-weight: 600;
        text-align: center;
        border: 1.5px solid rgba(0, 255, 133, 0.2);
        border-radius: 9px;
        margin: 6px 0;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transform: translateY(30px);
        opacity: 0;
        animation: slideInFromBottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        flex-shrink: 0;
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

    /* Mobile Sponsors Section */
    .mobile-sponsors-section {
        margin-top: 30px;
        padding: 20px 0 40px 0;
        border-top: 1px solid rgba(0, 255, 133, 0.2);
        width: 95%;
        transform: translateY(30px);
        opacity: 0;
        flex-shrink: 0;
    }

    .mobile-sponsors-title {
        color: #00ff85;
        font-size: 0.825rem;
        font-weight: 600;
        text-align: center;
        margin-bottom: 15px;
        text-shadow: 0 0 7.5px rgba(0, 255, 133, 0.3);
    }

    .mobile-sponsors-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
        gap: 11px;
        padding: 0 7.5px;
    }

    .mobile-sponsor-item {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 7.5px;
        background: rgba(0, 255, 133, 0.05);
        border: 0.75px solid rgba(0, 255, 133, 0.2);
        border-radius: 6px;
        transition: all 0.3s ease;
    }

    .mobile-sponsor-item:hover {
        background: rgba(0, 255, 133, 0.1);
        border-color: rgba(0, 255, 133, 0.4);
        transform: translateY(-2px);
    }

    .mobile-sponsor-logo {
        width: 45px;
        height: 45px;
        filter: brightness(0) invert(1) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0.8) contrast(1.2);
        transition: all 0.3s ease;
    }

    .mobile-sponsor-item:hover .mobile-sponsor-logo {
        transform: scale(1.05);
        filter: brightness(0) invert(1) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(1) contrast(1.2);
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
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }

    .page-title .live-indicator {
        margin-left: 15px;
    }

    .team-name-with-status {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .live-status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        animation: pulse 2s infinite;
        flex-shrink: 0;
    }

    .live-status-dot.win {
        background-color: #00ff85;
        box-shadow: 0 0 10px rgba(0, 255, 133, 0.5);
    }

    .live-status-dot.draw {
        background-color: #ffa502;
        box-shadow: 0 0 10px rgba(255, 165, 2, 0.5);
    }

    .live-status-dot.loss {
        background-color: #ff4757;
        box-shadow: 0 0 10px rgba(255, 71, 87, 0.5);
    }

    .live-score-display {
        font-size: 12px;
        color: #ff4757;
        font-weight: bold;
        margin-left: 8px;
        background: rgba(255, 71, 87, 0.1);
        padding: 2px 6px;
        border-radius: 4px;
        border: 1px solid rgba(255, 71, 87, 0.3);
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

    .view-toggle-btn {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(0, 255, 133, 0.2);
        border-radius: 8px;
        color: rgba(255, 255, 255, 0.7);
        cursor: pointer;
        transition: all 0.3s ease;
        padding: 0;
    }

    .view-toggle-btn:hover {
        color: #00ff85;
        background: rgba(0, 255, 133, 0.1);
        border-color: rgba(0, 255, 133, 0.4);
    }

    .view-toggle-btn.active {
        background: rgba(0, 255, 133, 0.2);
        color: #00ff85;
        border-color: rgba(0, 255, 133, 0.4);
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

    .lineup-section .player-item {
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

    .lineup-section .player-info {
        display: flex;
        align-items: center;
        gap: 2px;
    }

    .lineup-section .player-item-wrap .player-info {
        flex-wrap: wrap;
    }

    .lineup-section .player-number {
        color: #00ff85;
        font-weight: 500;
        min-width: 20px;
    }

    .lineup-section .player-name {
        color: #fff;
        font-weight: 500;
        line-height: 0.7;
    }

    .lineup-section .player-stats {
        display: inline-flex !important;
        gap: 2px !important;
        align-items: center !important;
        margin-left: 2px !important;
    }

    .stat-badge {
        padding: 1px 3px;
        border-radius: 2px;
        font-size: 0.4rem;
        font-weight: 600;
        text-transform: uppercase;
    }

    .stat-clean-sheet {
        background: rgba(0, 255, 133, 0.2);
        color: #00ff85;
        border: 1px solid rgba(0, 255, 133, 0.4);
    }

    .card-icon {
        width: 0.4rem;
        height: 0.4rem;
        margin-left: 3px;
        display: inline-block;
        vertical-align: middle;
    }

    .captain-icon {
        width: 0.4rem;
        height: 0.4rem;
        margin-left: 3px;
        display: inline-block;
        vertical-align: middle;
        font-style: italic;
    }

    .ball-icon {
        width: 0.4rem;
        height: 0.4rem;
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
        margin: 20px 0 20px 0;
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
        padding: 11.6px 12px;
        text-align: center;
        border-bottom: 1px solid rgba(0, 255, 133, 0.1);
        line-height: 1.2;
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

    .form-pending {
        color: #ff4757;
        background: rgba(255, 71, 87, 0.2);
        padding: 2px;
        border-radius: 50%;
        margin: 0 1px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
        font-weight: bold;
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

    /* Grid View Styles */
    .fixtures-grid-view .time-slot-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 2%;
        margin-bottom: 25px;
        justify-content: flex-start;
        padding-left: 2%;
    }

    .fixtures-grid-view .fixture {
        width: 47%;
        aspect-ratio: 1;
        margin: 0;
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    }

    .fixtures-grid-view .fixture-teams {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        margin-bottom: 10px;
        width: 100%;
    }

    .fixtures-grid-view .team-badge {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 4px 8px;
        background: rgba(0, 255, 133, 0.1);
        border: 1px solid rgba(0, 255, 133, 0.3);
        border-radius: 15px;
        font-size: 0.75rem;
        font-weight: 600;
        color: #00ff85;
        width: 100%;
        justify-content: center;
    }

    .fixtures-grid-view .team-badge .team-logo {
        width: 16px;
        height: 16px;
    }

    .fixtures-grid-view .vs-separator {
        color: rgba(255, 255, 255, 0.6);
        font-weight: 600;
        font-size: 0.8rem;
        margin: 2px 0;
    }

    .fixtures-grid-view .fixture-info {
        text-align: center;
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.7);
        line-height: 1.3;
    }

    .fixtures-grid-view .red-card-indicator {
        margin-left: 4px;
        display: inline-flex;
        align-items: center;
    }

    .fixtures-grid-view .red-card-indicator svg {
        width: 12px;
        height: 12px;
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

    .match-status-message {
        background: linear-gradient(135deg, rgba(0, 255, 133, 0.05) 0%, rgba(55, 0, 60, 0.1) 100%);
        border: 1px solid rgba(0, 255, 133, 0.3);
        border-radius: 20px;
        padding: 40px 30px;
        margin: 30px 0;
        text-align: center;
    }

    .status-message-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    .status-message-content svg {
        color: #00ff85;
        flex-shrink: 0;
        opacity: 0.7;
    }

    .status-message-text {
        max-width: 500px;
    }

    .status-message-text h4 {
        color: #00ff85;
        margin: 0 0 15px 0;
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .status-message-text p {
        color: rgba(255, 255, 255, 0.8);
        margin: 0 0 20px 0;
        font-size: 1.1rem;
        line-height: 1.6;
    }

    .status-message-details {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        padding: 20px;
        border-left: 3px solid #00ff85;
        text-align: left;
    }

    .status-message-details p {
        color: #00ff85;
        font-weight: 600;
        margin-bottom: 10px;
        font-size: 1rem;
    }

    .status-message-details ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .status-message-details li {
        color: rgba(255, 255, 255, 0.7);
        padding: 5px 0;
        padding-left: 20px;
        position: relative;
        font-size: 0.95rem;
    }

    .status-message-details li:before {
        content: "▶";
        color: #00ff85;
        position: absolute;
        left: 0;
        font-size: 0.8rem;
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

    .stats-pending {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 400px;
        padding: 40px 20px;
    }

    .stats-pending-content {
        text-align: center;
        max-width: 500px;
        background: linear-gradient(135deg, rgba(0, 255, 133, 0.05) 0%, rgba(55, 0, 60, 0.1) 100%);
        border: 1px solid rgba(0, 255, 133, 0.2);
        border-radius: 20px;
        padding: 40px 30px;
    }

    .stats-pending-icon {
        margin-bottom: 20px;
        opacity: 0.7;
    }

    .stats-pending-title {
        color: #00ff85;
        font-size: 1.8rem;
        font-weight: 700;
        margin-bottom: 15px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .stats-pending-message {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 25px;
    }

    .stats-pending-details {
        text-align: left;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        padding: 20px;
        border-left: 3px solid #00ff85;
    }

    .stats-pending-details p {
        color: #00ff85;
        font-weight: 600;
        margin-bottom: 10px;
        font-size: 1rem;
    }

    .stats-pending-details ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .stats-pending-details li {
        color: rgba(255, 255, 255, 0.7);
        padding: 5px 0;
        padding-left: 20px;
        position: relative;
        font-size: 0.95rem;
    }

    .stats-pending-details li:before {
        content: "▶";
        color: #00ff85;
        position: absolute;
        left: 0;
        font-size: 0.8rem;
    }

    .knockout-pending {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 400px;
        padding: 40px 20px;
    }

    .knockout-pending-content {
        text-align: center;
        max-width: 500px;
        background: linear-gradient(135deg, rgba(0, 255, 133, 0.05) 0%, rgba(55, 0, 60, 0.1) 100%);
        border: 1px solid rgba(0, 255, 133, 0.2);
        border-radius: 20px;
        padding: 40px 30px;
    }

    .knockout-pending-icon {
        margin-bottom: 20px;
        opacity: 0.7;
    }

    .knockout-pending-title {
        color: #00ff85;
        font-size: 1.8rem;
        font-weight: 700;
        margin-bottom: 15px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .knockout-pending-message {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 25px;
    }

    .knockout-pending-details {
        text-align: left;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        padding: 20px;
        border-left: 3px solid #00ff85;
    }

    .knockout-pending-details p {
        color: #00ff85;
        font-weight: 600;
        margin-bottom: 10px;
        font-size: 1rem;
    }

    @media (max-width: 768px) {
        .stats-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 8px;
            margin: 20px 0;
        }

        .stats-pending {
            min-height: 300px;
            padding: 20px 15px;
        }

        .stats-pending-content {
            padding: 30px 20px;
        }

        .stats-pending-title {
            font-size: 1.5rem;
        }

        .stats-pending-message {
            font-size: 1rem;
        }

        .stats-pending-details {
            padding: 15px;
        }

        .knockout-pending {
            min-height: 300px;
            padding: 20px 15px;
        }

        .knockout-pending-content {
            padding: 30px 20px;
        }

        .knockout-pending-title {
            font-size: 1.5rem;
        }

        .knockout-pending-message {
            font-size: 1rem;
        }

        .knockout-pending-details {
            padding: 15px;
        }

        .match-status-message {
            padding: 30px 20px;
            margin: 20px 0;
        }

        .status-message-content {
            gap: 15px;
        }

        .status-message-content svg {
            width: 50px;
            height: 50px;
        }

        .status-message-text h4 {
            font-size: 1.3rem;
        }

        .status-message-text p {
            font-size: 1rem;
        }

        .status-message-details {
            padding: 15px;
        }
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

    .team-basic-info .team-name-with-status {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
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

    .team-record .record.live-record {
        color: #ff4757;
        font-weight: bold;
        text-transform: uppercase;
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
        margin: 0 auto;
        width: 96%;
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
        overflow-x: hidden; /* Hide horizontal scrollbar */
    }

    .squad-grid::-webkit-scrollbar {
        width: 4px; /* Keep vertical scrollbar visible */
    }

    .squad-grid::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
    }

    .squad-grid::-webkit-scrollbar-thumb {
        background: #00ff85;
    }

    .squad-grid .player-item {
        padding: 8px 0;
        display: flex;
        align-items: center;
        gap: 15px;
        transition: all 0.3s ease;
    }

    .squad-grid .player-item.search-highlight {
        background: linear-gradient(135deg, rgba(0, 255, 133, 0.2), rgba(0, 255, 133, 0.1));
        border-radius: 8px;
        padding: 8px 12px;
        border: 1px solid rgba(0, 255, 133, 0.3);
        box-shadow: 0 2px 8px rgba(0, 255, 133, 0.15);
        transform: scale(1.02);
    }

    .squad-grid .player-item.search-highlight .player-name {
        color: #00ff85;
        font-weight: 700;
    }

    .squad-grid .player-item.search-highlight .player-number {
        color: #00ff85;
        font-weight: bold;
        font-size: 1rem;
    }

    .squad-grid .player-item.search-highlight .player-position {
        color: #00ff85;
        font-weight: 600;
    }

    .squad-grid .player-number {
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

    .squad-grid .player-stats {
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

    /* Global Search Page Styles */
    .search-page-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }

    .global-search-container {
        display: flex;
        justify-content: center;
        margin-bottom: 40px;
    }

    .global-search-container .search-input-wrapper {
        width: 80%;
        max-width: 600px;
    }

    .global-search-input {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
        border: 2px solid rgba(255, 255, 255, 0.1);
        border-radius: 25px;
        padding: 20px 30px 20px 60px;
        color: #fff;
        font-size: 1.2rem;
        font-weight: 500;
        width: 100%;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(10px);
    }

    .global-search-input:focus {
        outline: none;
        border-color: #00ff85;
        background: linear-gradient(135deg, rgba(0, 255, 133, 0.15), rgba(0, 255, 133, 0.05));
        box-shadow: 0 0 0 4px rgba(0, 255, 133, 0.2), 0 12px 40px rgba(0, 255, 133, 0.1);
        transform: translateY(-2px);
    }

    .global-search-input:hover {
        border-color: rgba(0, 255, 133, 0.3);
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08));
        transform: translateY(-1px);
    }

    .global-search-input::placeholder {
        color: rgba(255, 255, 255, 0.6);
        font-weight: 400;
        transition: all 0.3s ease;
    }

    .global-search-input:focus::placeholder {
        color: rgba(0, 255, 133, 0.7);
        transform: translateX(5px);
    }

    .global-search-container .search-icon {
        position: absolute;
        left: 22px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.4rem;
        color: rgba(255, 255, 255, 0.4);
        pointer-events: none;
        transition: all 0.3s ease;
        z-index: 2;
    }

    .global-search-input:focus + .search-icon {
        color: #00ff85;
        transform: translateY(-50%) scale(1.1);
    }

    .global-search-input:not(:placeholder-shown) + .search-icon {
        color: rgba(0, 255, 133, 0.7);
    }

    .search-results-container {
        min-height: 400px;
    }

    .search-placeholder {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 400px;
    }

    .search-placeholder-content {
        text-align: center;
        max-width: 600px;
    }

    .search-placeholder-content h3 {
        color: #fff;
        font-size: 2rem;
        margin-bottom: 15px;
        font-weight: 600;
    }

    .search-placeholder-content p {
        color: rgba(255, 255, 255, 0.7);
        font-size: 1.1rem;
        margin-bottom: 40px;
        line-height: 1.6;
    }

    .search-suggestions {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 30px;
        margin-top: 30px;
    }

    .suggestion-category h4 {
        color: #00ff85;
        font-size: 1.1rem;
        margin-bottom: 15px;
        font-weight: 600;
    }

    .suggestion-tag {
        display: inline-block;
        background: rgba(0, 255, 133, 0.1);
        border: 1px solid rgba(0, 255, 133, 0.3);
        color: #00ff85;
        padding: 8px 16px;
        border-radius: 20px;
        margin: 5px;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .suggestion-tag:hover {
        background: rgba(0, 255, 133, 0.2);
        border-color: #00ff85;
        transform: translateY(-2px);
    }

    /* Search Results Styles */
    .search-results {
        max-width: 1000px;
        margin: 0 auto;
    }

    .search-results-header {
        text-align: center;
        margin-bottom: 40px;
    }

    .search-results-header h3 {
        color: #fff;
        font-size: 1.8rem;
        margin-bottom: 10px;
        font-weight: 600;
    }

    .search-results-header p {
        color: rgba(255, 255, 255, 0.7);
        font-size: 1rem;
    }

    .results-section {
        margin-bottom: 40px;
    }

    .results-section-title {
        color: #00ff85;
        font-size: 1.3rem;
        margin-bottom: 20px;
        font-weight: 600;
        border-bottom: 2px solid rgba(0, 255, 133, 0.3);
        padding-bottom: 10px;
    }

    .results-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
    }

    .result-card {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 20px;
        cursor: pointer;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    }

    .result-card:hover {
        border-color: rgba(0, 255, 133, 0.3);
        background: linear-gradient(135deg, rgba(0, 255, 133, 0.1), rgba(0, 255, 133, 0.05));
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 255, 133, 0.1);
    }

    .result-header {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .result-info h5 {
        color: #fff;
        font-size: 1.1rem;
        margin-bottom: 5px;
        font-weight: 600;
    }

    .result-info p {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.9rem;
        margin-bottom: 5px;
    }

    .player-stats {
        color: #00ff85;
        font-size: 0.8rem;
        font-weight: 600;
    }

    .player-result .player-number {
        background: linear-gradient(135deg, #00ff85, #00cc6a);
        color: #000;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 0.9rem;
    }

    /* Player Profile Card Styles */
    .player-results-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        margin-top: 20px;
    }
    
    .player-results-grid:has(.player-profile-card:only-child) {
        grid-template-columns: 1fr;
        margin: 20px 0 0;
    }

    .player-profile-card {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        padding: 25px;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    }

    .player-profile-card:hover {
        border-color: rgba(0, 255, 133, 0.3);
        background: linear-gradient(135deg, rgba(0, 255, 133, 0.1), rgba(0, 255, 133, 0.05));
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 255, 133, 0.1);
    }

    .player-profile-header {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 25px;
    }

    .player-avatar {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .player-number-large {
        background: linear-gradient(135deg, #00ff85, #00cc6a);
        color: #000;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 1.4rem;
        box-shadow: 0 4px 15px rgba(0, 255, 133, 0.3);
    }

    .captain-badge {
        position: absolute;
        top: -5px;
        right: -5px;
        background: #ff6b35;
        color: #fff;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.7rem;
        font-weight: bold;
        border: 2px solid #fff;
    }

    .player-basic-info {
        flex: 1;
    }

    .player-basic-info .player-name {
        color: #fff;
        font-size: 1.5rem;
        margin-bottom: 5px;
        font-weight: 700;
    }

    .player-basic-info .player-position {
        color: #00ff85;
        font-size: 1rem;
        margin-bottom: 10px;
        font-weight: 600;
    }

    .player-team-info {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
    }

    .player-team-info .team-name {
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.9rem;
        font-weight: 500;
        margin-bottom: 0;
        text-align: left;
        display: inline;
    }

    .player-team-info .team-position {
        color: #00ff85;
        font-size: 0.8rem;
        font-weight: 600;
        background: rgba(0, 255, 133, 0.1);
        padding: 2px 8px;
        border-radius: 10px;
    }

    .player-stats-section {
        margin-bottom: 20px;
    }

    .player-stats-section h4 {
        color: #00ff85;
        font-size: 1.1rem;
        margin-bottom: 15px;
        font-weight: 600;
    }

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
        margin: 0;
    }

    .stat-item {
        text-align: center;
        padding: 10px 6px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 6px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        min-height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .stat-item .stat-value {
        display: block;
        color: #00ff85;
        font-size: 1.3rem;
        font-weight: bold;
        margin-bottom: 4px;
    }

    .stat-item .stat-label {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.8rem;
        font-weight: 500;
    }

    .points-highlight {
        background: rgba(0, 255, 133, 0.1) !important;
        border: 1px solid rgba(0, 255, 133, 0.3) !important;
        border-radius: 8px !important;
    }

    .points-highlight .stat-value {
        color: #00ff85 !important;
        font-weight: bold !important;
        font-size: 1.1rem !important;
    }

    .points-highlight .stat-label {
        color: #00ff85 !important;
        font-weight: 600 !important;
    }

    .player-awards-section {
        margin-bottom: 20px;
    }

    .player-awards-section h4 {
        color: #00ff85;
        font-size: 1.1rem;
        margin-bottom: 15px;
        font-weight: 600;
    }

    .player-news-section {
        margin-bottom: 20px;
    }

    .player-news-section h4 {
        color: #00ff85;
        font-size: 1.1rem;
        margin-bottom: 15px;
        font-weight: 600;
    }

    .news-item {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        padding: 12px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        margin-bottom: 10px;
    }

    .news-item:last-child {
        margin-bottom: 0;
    }

    .news-icon {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        flex-shrink: 0;
    }

    .news-icon.goal {
        background: linear-gradient(135deg, #00ff85, #00cc6a);
        color: #000;
    }

    .news-icon.award {
        background: linear-gradient(135deg, #ffd700, #ffed4e);
        color: #000;
    }

    .news-icon.match {
        background: linear-gradient(135deg, #4a90e2, #357abd);
        color: #fff;
    }

    .news-icon.form {
        background: linear-gradient(135deg, #ff6b35, #e55a2b);
        color: #fff;
    }

    .news-content {
        flex: 1;
    }

    .news-title {
        color: #fff;
        font-size: 0.9rem;
        font-weight: 600;
        margin-bottom: 4px;
    }

    .news-description {
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.8rem;
        line-height: 1.4;
    }

    .news-time {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.75rem;
        margin-top: 4px;
    }

    .awards-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .award-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 12px;
        background: rgba(255, 215, 0, 0.1);
        border: 1px solid rgba(255, 215, 0, 0.3);
        border-radius: 8px;
    }

    .award-icon {
        font-size: 1.2rem;
    }

    .award-text {
        color: #ffd700;
        font-weight: 600;
        font-size: 0.9rem;
    }

    .player-actions {
        display: flex;
        gap: 10px;
        margin-top: 20px;
    }

    .view-team-btn, .view-stats-btn {
        flex: 1;
        padding: 10px 15px;
        border: 1px solid rgba(0, 255, 133, 0.3);
        background: rgba(0, 255, 133, 0.1);
        color: #00ff85;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .view-team-btn:hover, .view-stats-btn:hover {
        background: rgba(0, 255, 133, 0.2);
        border-color: #00ff85;
        transform: translateY(-1px);
    }

    /* Team Profile Card Styles */
    .team-results-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        margin-top: 20px;
    }
    
    .team-results-grid:has(.team-profile-card:only-child) {
        grid-template-columns: 1fr;
        margin: 20px 0 0;
    }

    .team-profile-card {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        padding: 25px;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    }

    .team-profile-card:hover {
        border-color: rgba(0, 255, 133, 0.3);
        background: linear-gradient(135deg, rgba(0, 255, 133, 0.1), rgba(0, 255, 133, 0.05));
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 255, 133, 0.1);
    }

    .team-profile-header {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 25px;
    }

    .team-logo-large {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .team-position-badge {
        position: absolute;
        top: -8px;
        right: -8px;
        background: #00ff85;
        color: #000;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.7rem;
        font-weight: bold;
        border: 2px solid #fff;
    }

    .team-basic-info {
        flex: 1;
    }

    .team-basic-info .team-name {
        color: #fff;
        font-size: 1.5rem;
        margin-bottom: 5px;
        font-weight: 700;
    }

    .team-basic-info .team-captain {
        color: #00ff85;
        font-size: 1rem;
        margin-bottom: 10px;
        font-weight: 600;
    }

    .team-details {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .team-details .team-founded,
    .team-details .team-stadium {
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.85rem;
        font-weight: 500;
    }

    .team-stats-section {
        margin-bottom: 20px;
    }

    .team-stats-section h4 {
        color: #00ff85;
        font-size: 1.1rem;
        margin-bottom: 15px;
        font-weight: 600;
    }

    .team-stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px;
        margin: 0;
    }

    .team-stat-item {
        text-align: center;
        padding: 10px 6px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 6px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        min-height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .team-stat-item .team-stat-value {
        display: block;
        color: #00ff85;
        font-size: 1.3rem;
        font-weight: bold;
        margin-bottom: 4px;
    }

    .team-stat-item .team-stat-label {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.8rem;
        font-weight: 500;
    }

    .team-squad-section {
        margin-bottom: 20px;
    }

    .team-squad-section h4 {
        color: #00ff85;
        font-size: 1.1rem;
        margin-bottom: 15px;
        font-weight: 600;
    }

    .squad-info {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 12px;
    }

    .squad-stat {
        text-align: center;
        padding: 10px 8px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .squad-stat .squad-value {
        display: block;
        color: #00ff85;
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 4px;
    }

    .squad-stat .squad-label {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.75rem;
        font-weight: 500;
    }

    .team-actions {
        display: flex;
        gap: 10px;
        margin-top: 20px;
    }

    .view-squad-btn, .view-fixtures-btn {
        flex: 1;
        padding: 10px 15px;
        border: 1px solid rgba(0, 255, 133, 0.3);
        background: rgba(0, 255, 133, 0.1);
        color: #00ff85;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .view-squad-btn:hover, .view-fixtures-btn:hover {
        background: rgba(0, 255, 133, 0.2);
        border-color: #00ff85;
        transform: translateY(-1px);
    }

    /* Mobile Responsive Styles */
    @media (max-width: 768px) {
        .stats-tabs {
            flex-direction: column;
            gap: 0;
            margin: 20px 0;
        }

        .stats-tab {
            padding: 12px 20px;
            font-size: 0.9rem;
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stats-tab.active {
            border-bottom-color: #00ff85;
            border-left: 4px solid #00ff85;
        }

        .points-breakdown {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        }

        .points-item {
            padding: 8px 12px;
            flex-direction: column;
            text-align: center;
            gap: 5px;
        }

        .points-item .points-value {
            font-size: 1rem;
        }

        .points-item .points-label {
            font-size: 0.8rem;
        }

        /* Points Dialog Mobile Styles */
        .points-dialog-overlay {
            padding: 10px;
        }

        .points-dialog {
            max-height: 90vh;
        }

        .points-dialog-header {
            padding: 15px;
        }

        .points-dialog-header h3 {
            font-size: 1.3rem;
        }

        .points-dialog-content {
            padding: 15px;
        }

        .total-points {
            font-size: 2.5rem;
        }

        /* Mobile Table Styles */
        .breakdown-table,
        .matches-table {
            font-size: 0.85rem;
        }

        .breakdown-table th,
        .matches-table th {
            padding: 8px 6px;
            font-size: 0.8rem;
        }

        .breakdown-table td,
        .matches-table td {
            padding: 8px 6px;
        }

        .action-total,
        .match-score,
        .match-result {
            font-size: 0.8rem;
        }

        .match-time {
            font-size: 0.75rem;
        }

        /* Hide extra columns on mobile - show only Rank, Player, Team, Points */
        .points-table th:nth-child(5),
        .points-table td:nth-child(5),
        .points-table th:nth-child(6),
        .points-table td:nth-child(6),
        .points-table th:nth-child(7),
        .points-table td:nth-child(7),
        .points-table th:nth-child(8),
        .points-table td:nth-child(8) {
            display: none;
        }

        .points-table th,
        .points-table td {
            padding: 10px 8px;
            font-size: 0.9rem;
        }

        .player-profile-header {
            flex-direction: column;
            text-align: center;
            gap: 15px;
        }

        .player-team-info {
            justify-content: center;
            flex-wrap: wrap;
        }

        .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        }

        .stat-item {
            min-height: 55px;
            padding: 8px 4px;
        }

        .player-actions {
            flex-direction: column;
            gap: 8px;
        }

        /* Team Profile Mobile Styles */
        .team-profile-header {
            flex-direction: column;
            text-align: center;
            gap: 15px;
        }

        .team-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        }

        .team-stat-item {
            min-height: 55px;
            padding: 8px 4px;
        }

        .squad-info {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
        }

        .team-actions {
            flex-direction: column;
            gap: 8px;
        }
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

    .stats-page-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }

    /* Stats Tabs */
    .stats-tabs {
        display: flex;
        gap: 0;
        margin: 30px 0;
        border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    }

    .stats-tab {
        background: transparent;
        border: none;
        padding: 15px 30px;
        color: rgba(255, 255, 255, 0.7);
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        border-bottom: 3px solid transparent;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .stats-tab:hover {
        color: rgba(255, 255, 255, 0.9);
        background: rgba(255, 255, 255, 0.05);
    }

    .stats-tab.active {
        color: #00ff85;
        border-bottom-color: #00ff85;
        background: rgba(0, 255, 133, 0.1);
    }

    .stats-tab-content {
        margin-top: 20px;
    }

    /* Points System */
    .points-system-info {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 30px;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .points-breakdown {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 15px;
        margin-top: 15px;
    }

    .points-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 15px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.05);
    }

    .points-item.positive {
        border-left: 4px solid #00ff85;
    }

    .points-item.negative {
        border-left: 4px solid #ff4757;
    }

    .points-item .points-value {
        font-weight: bold;
        font-size: 1.1rem;
        min-width: 40px;
    }

    .points-item.positive .points-value {
        color: #00ff85;
    }

    .points-item.negative .points-value {
        color: #ff4757;
    }

    .points-item .points-label {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.9rem;
    }

    /* Points Table */
    .points-table .points-value {
        color: #00ff85 !important;
        font-weight: bold;
        font-size: 1.1rem;
    }

    .points-table .team-name {
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.9rem;
    }

    .yellow-cards {
        color: #ffa502;
        font-weight: bold;
        margin-right: 5px;
    }

    .red-cards {
        color: #ff4757;
        font-weight: bold;
    }

    /* Clickable Player Names */
    .clickable-player {
        cursor: pointer;
        transition: all 0.3s ease;
        color: #00ff85;
    }

    .clickable-player:hover {
        color: #00cc6a;
        text-decoration: underline;
    }

    /* Points Dialog */
    .points-dialog-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(5px);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        padding: 20px;
        box-sizing: border-box;
    }

    .points-dialog {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        max-width: 600px;
        width: 100%;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }

    .points-dialog-header {
        padding: 20px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        position: relative;
    }

    .points-dialog-header h3 {
        color: #00ff85;
        font-size: 1.5rem;
        margin: 0 0 5px 0;
        font-weight: 700;
    }

    .points-dialog-header p {
        color: rgba(255, 255, 255, 0.8);
        margin: 0;
        font-size: 1rem;
    }

    .close-dialog-btn {
        position: absolute;
        top: 15px;
        right: 20px;
        background: none;
        border: none;
        color: rgba(255, 255, 255, 0.7);
        font-size: 2rem;
        cursor: pointer;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.3s ease;
    }

    .close-dialog-btn:hover {
        background: rgba(255, 255, 255, 0.1);
        color: #00ff85;
    }

    .points-dialog-content {
        padding: 20px;
    }

    .total-points-display {
        text-align: center;
        margin-bottom: 30px;
        padding: 20px;
        background: rgba(0, 255, 133, 0.1);
        border-radius: 12px;
        border: 1px solid rgba(0, 255, 133, 0.2);
    }

    .total-points {
        display: block;
        font-size: 3rem;
        font-weight: bold;
        color: #00ff85;
        line-height: 1;
    }

    .total-points-label {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .points-breakdown-section,
    .matches-section {
        margin-bottom: 25px;
    }

    .points-breakdown-section h4,
    .matches-section h4 {
        color: #00ff85;
        font-size: 1.2rem;
        margin: 0 0 15px 0;
        font-weight: 600;
    }

    /* Clean Table Layout */
    .breakdown-table,
    .matches-table {
        width: 100%;
        border-collapse: collapse;
        margin: 15px 0;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        overflow: hidden;
    }

    .breakdown-table th,
    .matches-table th {
        background: rgba(0, 255, 133, 0.1);
        color: #00ff85;
        padding: 12px 8px;
        text-align: left;
        font-weight: 600;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        border-bottom: 2px solid rgba(0, 255, 133, 0.2);
    }

    .breakdown-table td,
    .matches-table td {
        padding: 10px 8px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        color: rgba(255, 255, 255, 0.9);
    }

    .breakdown-table tr:hover,
    .matches-table tr:hover {
        background: rgba(0, 255, 133, 0.05);
    }

    .breakdown-table tr:last-child td,
    .matches-table tr:last-child td {
        border-bottom: none;
    }

    /* Breakdown Table Specific */
    .action-name {
        font-weight: 600;
        text-transform: capitalize;
    }

    .action-count {
        text-align: center;
        font-weight: bold;
        color: #ffffff;
    }

    .action-points {
        text-align: center;
        color: rgba(255, 255, 255, 0.7);
    }

    .action-total {
        text-align: center;
        font-weight: bold;
    }

    .action-total.positive {
        color: #00ff85;
    }

    .action-total.negative {
        color: #ff4757;
    }

    .positive-row {
        border-left: 3px solid #00ff85;
    }

    .negative-row {
        border-left: 3px solid #ff4757;
    }

    /* Matches Table Specific */
    .match-opponent {
        font-weight: 600;
    }

    .match-score {
        text-align: center;
        font-weight: bold;
        color: #00ff85;
    }

    .match-result {
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 0.85rem;
    }

    .match-result.W {
        color: #00ff85;
    }

    .match-result.L {
        color: #ff4757;
    }

    .match-result.D {
        color: #ffc107;
    }

    .match-time {
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.7);
    }

    .no-matches {
        text-align: center;
        color: rgba(255, 255, 255, 0.6);
        font-style: italic;
        padding: 20px;
    }

    // .stats-table {
    //     width: 100%;
    //     border-collapse: collapse;
    //     margin: 20px 0;
    //     background: rgba(255, 255, 255, 0.05);
    //     border-radius: 12px;
    //     overflow: hidden;
    //     box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    // }

    // .stats-table th {
    //     background: rgba(0, 255, 133, 0.1);
    //     color: #00ff85;
    //     padding: 15px 12px;
    //     text-align: left;
    //     font-weight: 600;
    //     font-size: 0.9rem;
    //     text-transform: uppercase;
    //     letter-spacing: 0.5px;
    //     border-bottom: 2px solid rgba(0, 255, 133, 0.2);
    // }

    .stats-table th:first-child {
        width: 50px;
        text-align: center;
    }

    .stats-table th:nth-child(2) {
        flex: 1;
    }

    .stats-table th:nth-child(3),
    .stats-table th:nth-child(4) {
        width: 100px;
        text-align: center;
    }

    .stats-table td {
        padding: 12px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        color: rgba(255, 255, 255, 0.9);
    }

    .stats-table tr:hover {
        background: rgba(0, 255, 133, 0.05);
    }

    .stats-table tr:last-child td {
        border-bottom: none;
    }

    .rank-badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        background: linear-gradient(135deg, #00ff85, #00cc6a);
        color: white;
        border-radius: 50%;
        font-weight: bold;
        font-size: 0.9rem;
    }

    .player-name {
        font-weight: 600;
        color: #ffffff;
        font-size: 1rem;
    }

    .stat-value {
        text-align: center;
        font-weight: 600;
        color: #00ff85 !important;
        font-size: 1rem;
    }

    /* Ensure all stat values are green regardless of table class */
    .stats-table .stat-value {
        color: #00ff85 !important;
    }

    /* Make matches column white */
    .stats-table td:nth-child(3) {
        color: #ffffff !important;
    }

    .stats-section-title {
        color: #00ff85;
        font-size: 1.5rem;
        font-weight: 700;
        margin: 40px 0 20px 0;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .stats-section-title:first-child {
        margin-top: 0;
    }

    .read-more-container {
        text-align: center;
        margin: 20px 0;
        padding: 15px 0;
    }

    .read-more-btn {
        background: rgba(0, 255, 133, 0.1);
        border: 1px solid rgba(0, 255, 133, 0.3);
        color: #00ff85;
        padding: 10px 20px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: all 0.3s ease;
        margin: 0 auto;
    }

    .read-more-btn:hover {
        background: rgba(0, 255, 133, 0.2);
        border-color: rgba(0, 255, 133, 0.5);
        transform: translateY(-1px);
    }

    .read-more-icon {
        width: 16px;
        height: 16px;
        transition: transform 0.3s ease;
    }

    .read-more-btn.expanded .read-more-icon {
        transform: rotate(180deg);
    }

    .hidden-stats {
        display: none;
    }

    .hidden-stats.show {
        display: table-row-group;
    }

    .view-more-container {
        text-align: center;
        margin: 20px 0;
        padding: 15px 0;
    }

    .view-more-btn {
        background: rgba(0, 255, 133, 0.1);
        border: 1px solid rgba(0, 255, 133, 0.3);
        color: #00ff85;
        padding: 10px 20px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: all 0.3s ease;
        margin: 0 auto;
    }

    .view-more-btn:hover {
        background: rgba(0, 255, 133, 0.2);
        border-color: rgba(0, 255, 133, 0.5);
        transform: translateY(-1px);
    }

    .view-more-icon {
        width: 16px;
        height: 16px;
        transition: transform 0.3s ease;
    }

    .stats-list-extra {
        margin-top: 10px;
        animation: fadeIn 0.3s ease-in;
    }

    .stats-list-extra.hidden {
        display: none;
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




    .countdown-section {
        text-align: center;
        padding: 40px 20px;
        background: linear-gradient(135deg, rgba(0, 255, 133, 0.1) 0%, rgba(55, 0, 60, 0.3) 100%);
        border-bottom: 2px solid #00ff85;
        transition: background 0.5s ease;
    }

    .live-matches-section {
        background: rgba(0, 0, 0, 0.2);
        border-bottom: 2px solid #ff4757;
        padding: 30px 20px;
        margin: 0;
    }

    .live-matches-section .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .live-matches-section .section-header h3 {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #ff4757;
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin: 0;
    }

    .live-icon {
        width: 24px;
        height: 24px;
        color: #ff4757;
        animation: pulse 2s infinite;
    }

    .live-indicator {
        background: #ff4757;
        color: white;
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 0.7rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        animation: pulse 2s infinite;
    }

    .live-matches-content {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .live-matches-section .fixture {
        border-color: rgba(255, 71, 87, 0.4);
    }

    .live-matches-section .fixture:hover {
        border-color: rgba(255, 71, 87, 0.6);
        box-shadow: 0 4px 20px rgba(255, 71, 87, 0.15);
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

        .live-matches-section {
            padding: 20px 15px;
        }

        .live-matches-section .section-header h3 {
            font-size: 1.3rem;
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
        padding: 25px 0;
        width: 96%;
        margin: 0 auto;
    }

    .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 1px solid rgba(0, 255, 133, 0.2);
        width: 96%;
        margin: 0 auto 20px auto;
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
        width: 100%;
        padding: 0;
    }

    .preview-subsection {
        padding: 15px 0;
        width: 100%;
    }

    .preview-subsection h4 {
        color: #00ff85;
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 10px;
        width: 96%;
        margin: 0 auto 10px auto;
    }

    /* Ensure all elements within preview sections have consistent width */
    .preview-section * {
        box-sizing: border-box;
    }

    .matches-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
    }

    .matches-list .fixture {
        width: 96%;
        margin: 0 auto;
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

    .match-teams .team-name-container {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .match-teams .team-name {
        font-weight: 500;
        color: #ffffff;
        font-size: 0.9rem;
    }

    .match-teams .team-name-container:first-child {
        justify-content: flex-end;
    }

    .match-teams .team-name-container:last-child {
        justify-content: flex-start;
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
        width: 96%;
        margin: 0 auto;
    }

    .stage-info {
        width: 96%;
        margin: 0 auto;
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
        width: 96%;
        margin: 0 auto;
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
            padding: 10px 15px;
        }

        .nav-links {
            display: none;
        }

        .desktop-search-container {
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
            height: 60px;
        }

        .page-title {
            font-size: 1.4rem;
            margin: 25px 0 20px 0;
            letter-spacing: 1px;
        }

        .page-title .live-indicator {
            margin-left: 10px;
        }

        .live-status-dot {
            width: 6px;
            height: 6px;
        }

        .team-name-with-status {
            gap: 6px;
        }

        .live-score-display {
            font-size: 10px;
            margin-left: 6px;
            padding: 1px 4px;
        }

        .team-basic-info .team-name-with-status {
            gap: 8px;
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
                (match.status === 'completed' || match.status === 'live') && matchCount < 5) {
                
                if (match.status === 'live') {
                    // Show "-" for live matches (pending)
                    form.push('<span class="form-pending">-</span>');
                } else if (match.status === 'completed') {
                    // Show result for completed matches
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
    
    // Process all completed and live matches
    leagueData.fixturesData.forEach(timeSlot => {
        timeSlot.matches.forEach(match => {
            if ((match.status === 'completed' || match.status === 'live') && match.homeScore !== null && match.awayScore !== null) {
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
    
    // Convert to array and sort by points (descending), then goal difference (descending), then alphabetically
    return Object.values(standings).sort((a, b) => {
        const aGoalDiff = a.goalsFor - a.goalsAgainst;
        const bGoalDiff = b.goalsFor - b.goalsAgainst;
        
        // First sort by points (descending)
        if (b.points !== a.points) {
            return b.points - a.points;
        }
        
        // If points are equal, sort by goal difference (descending)
        if (bGoalDiff !== aGoalDiff) {
            return bGoalDiff - aGoalDiff;
        }
        
        // If points and goal difference are equal, sort alphabetically (ascending)
        return a.name.localeCompare(b.name);
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
                { id: 'mbarara-van', number: 1, name: 'Van', position: 'Goalkeeper' },
                { id: 'mbarara-afande', number: 9, name: 'Afande', position: 'Forward' },
                { id: 'mbarara-ken', number: 20, name: 'Ken', position: 'Defender' },
                { id: 'mbarara-seka-barack', number: 13, name: 'Seka Barack', position: 'Forward' },
                { id: 'mbarara-amoblaze', number: 88, name: 'Amoblaze', position: 'Midfielder' },
                { id: 'mbarara-benard', number: 99, name: 'Benard', position: 'Midfielder' },
                { id: 'mbarara-cliff', number: 12, name: 'Cliff', position: 'Midfielder' },
                { id: 'mbarara-sharif', number: 8, name: 'Sharif', position: 'Midfielder' },
                { id: 'mbarara-tony', number: 14, name: 'Tony', position: 'Forward' },
                { id: 'mbarara-ivan', number: 3, name: 'Ivan', position: 'Defender' },
                { id: 'mbarara-elaisha', number: 5, name: 'Elaisha', position: 'Defender' },
                { id: 'mbarara-prokie', number: 11, name: 'Prokie', position: 'Forward' },
                { id: 'mbarara-tyron', number: 15, name: 'Tyron', position: 'Midfielder' },
                { id: 'mbarara-tiff', number: 6, name: 'Tiff', position: 'Midfielder' },
                { id: 'mbarara-yeta', number: 17, name: 'Yeta', position: 'Midfielder' },
                { id: 'mbarara-isaac-barunda', number: 25, name: 'Isaac Barunda', position: 'Forward' },
                { id: 'mbarara-ambrose', number: 10, name: 'Ambrose', position: 'Forward' },
                { id: 'mbarara-musinguzi', number: 4, name: 'Musinguzi', position: 'Defender' },
                { id: 'mbarara-muzora', number: 2, name: 'Muzora', position: 'Defender' }
            ]
        },
        { 
            id: "gulu", 
            name: "Gulu", 
            logo: "GU",
            logoFile: "gulu.svg",
            founded: 2024, 
            stadium: "Gulu Stadium", 
            captain: "Solomon",
            squad: [
                { id: 'gulu-salam', number: 1, name: 'Salam', position: 'Goalkeeper' },
                { id: 'gulu-solomon', number: 2, name: 'Solomon', position: 'Defender' },
                { id: 'gulu-sebastien', number: 20, name: 'Sebastien', position: 'Midfielder' },
                { id: 'gulu-allano', number: 9, name: 'Allano', position: 'Forward' },
                { id: 'gulu-francis', number: 11, name: 'Francis', position: 'Midfielder' },
                { id: 'gulu-walash', number: 7, name: 'Walash', position: 'Forward' },
                { id: 'gulu-jaguar', number: 100, name: 'Jaguar', position: 'Forward' },
                { id: 'gulu-trevor', number: 19, name: 'Trevor', position: 'Forward' },
                { id: 'gulu-kityo', number: 40, name: 'Kityo', position: 'Defender' },
                { id: 'gulu-george', number: 18, name: 'George', position: 'Defender' },
                { id: 'gulu-charles', number: 3, name: 'Charles', position: 'Defender' },
                { id: 'gulu-jose', number: 45, name: 'Jose', position: 'Midfielder' },
                { id: 'gulu-nelly', number: 16, name: 'Nelly', position: 'Forward' },
                { id: 'gulu-edgar', number: 12, name: 'Edgar', position: 'Midfielder' },
                { id: 'gulu-guma', number: 13, name: 'Guma', position: 'Midfielder' },
                { id: 'gulu-brian', number: 31, name: 'Brian', position: 'Midfielder' },
                { id: 'gulu-edson', number: 15, name: 'Edson', position: 'Midfielder' },
                { id: 'gulu-derrick', number: 23, name: 'Derrick', position: 'Midfielder' },
                { id: 'gulu-shabby', number: 17, name: 'Shabby', position: 'Midfielder' }
            ]
        },
        { 
            id: "arua", 
            name: "Arua", 
            logo: "AR",
            logoFile: "arua.svg",
            founded: 2024, 
            stadium: "Arua Stadium", 
            captain: "Okanya",
            squad: [
                { id: 'arua-yusuf', number: 1, name: 'Yusuf', position: 'Goalkeeper' },
                { id: 'arua-okanya', number: 9, name: 'Okanya', position: 'Forward' },
                { id: 'arua-keno', number: 11, name: 'Keno', position: 'Forward' },
                { id: 'arua-apedo', number: 20, name: 'Apedo', position: 'Forward' },
                { id: 'arua-emmy', number: 69, name: 'Emmy', position: 'Midfielder' },
                { id: 'arua-millio', number: 16, name: 'Millio', position: 'Midfielder' },
                { id: 'arua-franco', number: 12, name: 'Franco', position: 'Midfielder' },
                { id: 'arua-mykolo', number: 3, name: 'Mykolo', position: 'Defender' },
                { id: 'arua-obita', number: 19, name: 'Obita', position: 'Forward' },
                { id: 'arua-aggrey', number: 21, name: 'Aggrey', position: 'Midfielder' },
                { id: 'arua-delz', number: 13, name: 'Delz', position: 'Midfielder' },
                { id: 'arua-mark', number: 28, name: 'Mark', position: 'Midfielder' },
                { id: 'arua-victor', number: 5, name: 'Victor', position: 'Defender' },
                { id: 'arua-oscar', number: 22, name: 'Oscar', position: 'Forward' },
                { id: 'arua-asaph', number: 14, name: 'Asaph', position: 'Forward' },
                { id: 'arua-christian', number: 17, name: 'Christian', position: 'Forward' },
                { id: 'arua-thorhenry', number: 10, name: 'Thorhenry', position: 'Midfielder' },
                { id: 'arua-frebouy', number: 5, name: 'Frebouy', position: 'Defender' },
                { id: 'arua-urban-jnr', number: 29, name: 'Urban Jnr', position: 'Forward' },
                { id: 'arua-eddie', number: 13, name: 'Eddie', position: 'Defender' },
                { id: 'arua-stuart', number: 23, name: 'Stuart', position: 'Goalkeeper' }
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
                { id: 'masaka-roy', number: 1, name: 'Roy', position: 'Goalkeeper' },
                { id: 'masaka-kagame', number: 6, name: 'Kagame', position: 'Midfielder' },
                { id: 'masaka-ken', number: 14, name: 'Ken', position: 'Forward' },
                { id: 'masaka-barney', number: 3, name: 'Barney', position: 'Defender' },
                { id: 'masaka-pato', number: 12, name: 'Pato', position: 'Forward' },
                { id: 'masaka-chris', number: 2, name: 'Crish', position: 'Defender' },
                { id: 'masaka-ballack', number: 13, name: 'Ballack', position: 'Midfielder' },
                { id: 'masaka-bob', number: 8, name: 'Bob', position: 'Midfielder' },
                { id: 'masaka-lumala', number: 17, name: 'Lumala', position: 'Midfielder' },
                { id: 'masaka-sir-aludah', number: 10, name: 'Sir Aludah', position: 'Forward' },
                { id: 'masaka-fem-dj', number: 14, name: 'Fem DJ', position: 'Forward' },
                { id: 'masaka-ivan', number: 15, name: 'Ivan', position: 'Midfielder' },
                { id: 'masaka-lex', number: 16, name: 'Lex', position: 'Midfielder' },
                { id: 'masaka-shizzo', number: 40, name: 'Shizzo', position: 'Midfielder' },
                { id: 'masaka-brian', number: 11, name: 'Brian', position: 'Midfielder' },
                { id: 'masaka-chairman', number: 30, name: 'Chairman', position: 'Defender' },
                { id: 'masaka-felix-b', number: 4, name: 'Felix B', position: 'Midfielder' },
                { id: 'masaka-kagame-E', number: 26, name: 'Kagame E', position: 'Defender' },
                { id: 'masaka-ap', number: 22, name: 'AP', position: 'Forward' },
                { id: 'masaka-kelvin', number: 21, name: 'Kelvin', position: 'Midfielder' }
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
                { id: 'mbale-hakim', number: 1, name: 'Hakim', position: 'Goalkeeper' },
                { id: 'mbale-dejango', number: 22, name: 'Dejango', position: 'Forward' },
                { id: 'mbale-benja', number: 88, name: 'Benja', position: 'Defender' },
                { id: 'mbale-aldeine', number: 20, name: 'Aldrine', position: 'Forward' },
                { id: 'mbale-peter', number: 15, name: 'Peter', position: 'Defender' },
                { id: 'mbale-dee', number: 25, name: 'Dee', position: 'Defender' },
                { id: 'mbale-tush', number: 99, name: 'Tush', position: 'Forward' },
                { id: 'mbale-carrim', number: 6, name: 'Carrim', position: 'Defender' },
                { id: 'mbale-musisi', number: 14, name: 'Musisi', position: 'Midfielder' },
                { id: 'mbale-ivan', number: 11, name: 'Ivan', position: 'Midfielder' },
                { id: 'mbale-dembe', number: 15, name: 'Dembe', position: 'Defender' },
                { id: 'mbale-ephraim', number: 19, name: 'Ephraim', position: 'Midfielder' },
                { id: 'mbale-balikowa', number: 17, name: 'Balikowa', position: 'Forward' },
                { id: 'mbale-abbey', number: 25, name: 'Abbey', position: 'Midfielder' },
                { id: 'mbale-eric', number: 20, name: 'Eric', position: 'Midfielder' },
                { id: 'mbale-guvnor', number: 29, name: 'Guvnor', position: 'Defender' },
                { id: 'mbale-isaac', number: 24, name: 'Isaac', position: 'Forward' },
                { id: 'mbale-bobby', number: 7, name: 'Bobby', position: 'Forward' },
                { id: 'mbale-bruno', number: 10, name: 'Bruno', position: 'Forward' },
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
                { id: 'wakiso-peterson', number: 1, name: 'Peterson', position: 'Goalkeeper' },
                { id: 'wakiso-matayo', number: 9, name: 'Matayo', position: 'Forward' },
                { id: 'wakiso-herbert', number: 15, name: 'Herbert', position: 'Forward' },
                { id: 'wakiso-arafat', number: 46, name: 'Arafat', position: 'Midfielder' },
                { id: 'wakiso-gideon', number: 14, name: 'Gideon', position: 'Forward' },
                { id: 'wakiso-kyaruzi', number: 6, name: 'Kyaruzi', position: 'Midfielder' },
                { id: 'wakiso-victor', number: 19, name: 'Victor', position: 'Midfielder' },
                { id: 'wakiso-sirajje', number: 8, name: 'Sirajje Turyomwe', position: 'Midfielder' },
                { id: 'wakiso-eddie', number: 4, name: 'Coach Eddie', position: 'Midfielder' },
                { id: 'wakiso-mutungi', number: 12, name: 'Mutungi', position: 'Midfielder' },
                { id: 'wakiso-mo', number: 17, name: 'Mo', position: 'Midfielder' },
                { id: 'wakiso-uncle-mo', number: 40, name: 'Uncle Mo', position: 'Defender' },
                { id: 'wakiso-tugume', number: 10, name: 'Tugume', position: 'Midfielder' },
                { id: 'wakiso-mutyaba', number: 30, name: 'Mutyaba', position: 'Midfielder' },
                { id: 'wakiso-wills', number: 18, name: 'Wills', position: 'Forward' },
                { id: 'wakiso-smith', number: 16, name: 'Smith', position: 'Forward' },
                { id: 'wakiso-stone', number: 3, name: 'Stone', position: 'Defender' },
                { id: 'wakiso-jay', number: 5, name: 'Jay', position: 'Defender' },
                { id: 'wakiso-simon', number: 20, name: 'Simon', position: 'Midfielder' },
                { id: 'wakiso-anko', number: 25, name: 'Anko', position: 'Midfielder' },
                { id: 'wakiso-derrick', number: 26, name: 'Derrick', position: 'Forward' },
                { id: 'wakiso-chance', number: 21, name: 'Chance', position: 'Midfielder' },
                { id: 'wakiso-seith', number: 13, name: 'Seith', position: 'Defender' },
                { id: 'wakiso-mill', number: 22, name: 'Mill', position: 'Midfielder' },
                { id: 'wakiso-sam', number: 2, name: 'Sam', position: 'Defender' },
                { id: 'wakiso-justus', number: 27, name: 'justus', position: 'Midfielder' }
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
                { id: 'jinja-brave', number: 1, name: 'Brave', position: 'Goalkeeper' },
                { id: 'jinja-javan', number: 8, name: 'Javan', position: 'Midfielder' },
                { id: 'jinja-wesonga-brian', number: 2, name: 'Wesonga Brian', position: 'Defender' },
                { id: 'jinja-jeff', number: 22, name: 'Jeff', position: 'Midfielder' },
                { id: 'jinja-striker', number: 12, name: 'Striker', position: 'Defender' },
                { id: 'jinja-osbie', number: 27, name: 'Osbie', position: 'Defender' },
                { id: 'jinja-dario', number: 10, name: 'Dario', position: 'Forward' },
                { id: 'jinja-douglas', number: 15, name: 'Douglas', position: 'Forward' },
                { id: 'jinja-dero', number: 16, name: 'Dero', position: 'Forward' },
                { id: 'jinja-timo-kigozi', number: 30, name: 'Timo K', position: 'Defender' },
                { id: 'jinja-charlie', number: 14, name: 'Charlie', position: 'Midfielder' },
                { id: 'jinja-brian-engineer', number: 40, name: 'Brian Engineer', position: 'Defender' },
                { id: 'jinja-nana-brian', number: 17, name: 'Nana Brian', position: 'Midfielder' },
                { id: 'jinja-pato', number: 7, name: 'Pato', position: 'Forward' },
                { id: 'jinja-pius', number: 21, name: 'Pius', position: 'Midfielder' },
                { id: 'jinja-were-eria', number: 20, name: 'Were Eria', position: 'Forward' },
                { id: 'jinja-gerald-katiti', number: 11, name: 'Gerald Katiti', position: 'Forward' },
                { id: 'jinja-vasher', number: 3, name: 'Vasher', position: 'Defender' },
                { id: 'jinja-animal', number: 13, name: 'Animal', position: 'Forward' },
                { id: 'jinja-bishop', number: 19, name: 'Bishop', position: 'Midfielder' },
                { id: 'jinja-micheal', number: 18, name: 'Micheal', position: 'Midfielder' },
                { id: 'jinja-jonah', number: 4, name: 'Jonah', position: 'Midfielder' },
                { id: 'jinja-isubikalu-brian', number: 6, name: 'Isubikalu Brian', position: 'Midfielder' },
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
                { id: 'kabale-onana', number: 1, name: 'Onana', position: 'Goalkeeper' },
                { id: 'kabale-jemmy', number: 8, name: 'Jemmy', position: 'Midfielder' },
                { id: 'kabale-isaac', number: 88, name: 'Isaac', position: 'Midfielder' },
                { id: 'kabale-aziz', number: 40, name: 'Aziz', position: 'Defender' },
                { id: 'kabale-kipson', number: 1, name: 'Kipson', position: 'Forward' },
                { id: 'kabale-francis', number: 2, name: 'Francis', position: 'Defender' },
                { id: 'kabale-stephen', number: 15, name: 'Stephen', position: 'Midfielder' },
                { id: 'kabale-david', number: 12, name: 'David', position: 'Midfielder' },
                { id: 'kabale-josh-muzaaya', number: 8, name: 'Josh Muzaaya', position: 'Midfielder' },
                { id: 'kabale-fafa', number: 17, name: 'Fafa', position: 'Midfielder' },
                { id: 'kabale-russel', number: 16, name: 'Russel', position: 'Midfielder' },
                { id: 'kabale-myles', number: 69, name: 'Myles', position: 'Defender' },
                { id: 'kabale-timo', number: 30, name: 'Timo', position: 'Midfielder' },
                { id: 'kabale-kibalama', number: 5, name: 'Kibalama', position: 'Defender' },
                { id: 'kabale-tony', number: 11, name: 'Tony', position: 'Forward' },
                { id: 'kabale-kabox', number: 18, name: 'Kabox', position: 'Midfielder' },
                { id: 'kabale-marvin', number: 6, name: 'Marvin', position: 'Midfielder' },
                { id: 'kabale-brian', number: 3, name: 'Brian', position: 'Defender' },
                { id: 'kabale-ken-lato', number: 42, name: 'Ken Lato', position: 'Defender' }
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
                    homeScore: 0,
                    awayScore: 1,
                    playerOfTheMatch: "mbarara-tony",
                    home: {
                        starting: [
                            { playerId: "arua-yusuf", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-mykolo", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-victor", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-frebouy", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-emmy", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-millio", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-okanya", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false }
                        ],
                        substitutes: [
                            { playerId: "arua-keno", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-apedo", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-franco", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-obita", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-aggrey", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-delz", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-mark", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-oscar", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-asaph", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-christian", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-thorhenry", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cameOnFor: "", cleanSheet: false },
                            { playerId: "arua-urban-jnr", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-eddie", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-stuart", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false }
                        ]
                    },
                    away: {
                        starting: [
                            { playerId: "mbarara-van", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbarara-ken", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbarara-ivan", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbarara-elaisha", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbarara-amoblaze", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbarara-benard", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbarara-tony", captain: true, goals: true, goalMinutes: [31], goalTypes: ["open"], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true }
                        ],
                        substitutes: [
                            { playerId: "mbarara-cliff", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbarara-sharif", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbarara-afande", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbarara-seka-barack", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbarara-prokie", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbarara-tyron", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbarara-tiff", captain: false, goals: 0, goalMinutes: [], assists: 1, assistMinutes: [31], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbarara-yeta", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbarara-isaac-barunda", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbarara-ambrose", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbarara-musinguzi", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbarara-muzora", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true }
                        ]
                    }
                },
                {
                    homeTeam: 'Mbale',
                    awayTeam: 'Gulu',
                    venue: 'Maracanã Stadium',
                    status: 'completed',
                    homeScore: 1,
                    awayScore: 0,
                    playerOfTheMatch: "mbale-ivan",
                    home: {
                        starting: [
                            { playerId: "mbale-hakim", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-benja", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-peter", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-dee", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-musisi", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-ivan", captain: false, goals: 1, goalMinutes: [67], goalTypes: ["open"], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-dejango", captain: true, goals: 0, goalMinutes: [], assists: 1, assistMinutes: [67], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true }
                        ],
                        substitutes: [
                            { playerId: "mbale-aldeine", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-tush", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-carrim", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-dembe", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-ephraim", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-balikowa", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-abbey", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-eric", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-guvnor", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-isaac", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-bobby", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-bruno", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true }
                        ]
                    },
                    away: {
                        starting: [
                            { playerId: "gulu-salam", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-solomon", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-kityo", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-george", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-sebastien", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-lucky", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-allano", captain: true, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false }
                        ],
                        substitutes: [
                            { playerId: "gulu-walash", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-jaguar", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-trevor", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-charles", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-jose", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-nelly", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-edgar", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-guma", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-brian", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-edson", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-derrick", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-shabby", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false }
                        ]
                    }
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
                    status: 'completed',
                    homeScore: 1,
                    awayScore: 0,
                    playerOfTheMatch: "masaka-pato",
                    home: {
                        starting: [
                            { playerId: "masaka-roy", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-barney", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-chris", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-chairman", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-kagame", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-ballack", captain: false, goals: 0, goalMinutes: [], assists: 1, assistMinutes: [47], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-ken", captain: true, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 45, cleanSheet: true }
                        ],
                        substitutes: [
                            { playerId: "masaka-pato", captain: false, goals: 1, goalMinutes: [47], goalTypes: ["open"], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 45, cameOnFor: "masaka-ken", cleanSheet: true },
                            { playerId: "masaka-bob", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-lumala", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-sir-aludah", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-fem-dj", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-ivan", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-lex", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-shizzo", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-brian", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-felix-b", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-kagame-E", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-ap", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-kelvin", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true }
                        ]
                    },
                    away: {
                       starting: [
                            { playerId: "jinja-brave", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-wesonga-brian", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-striker", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-osbie", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-jeff", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-charlie", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-javan", captain: true, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 60, cleanSheet: false }
                        ],
                        substitutes: [
                            { playerId: "jinja-dario", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-douglas", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-dero", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 60, cameOnFor: "jinja-javan", cleanSheet: false },
                            { playerId: "jinja-timo-kigozi", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-brian-engineer", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-nana-brian", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-pato", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-pius", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-were-eria", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-gerald-katiti", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-vasher", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-animal", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-bishop", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-micheal", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-jonah", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-isubikalu-brian", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false }
                        ] 
                    }
                },
                {
                    homeTeam: 'Kabale',
                    awayTeam: 'Wakiso',
                    venue: 'Maracanã Stadium',
                    status: 'completed',
                    homeScore: 1,
                    awayScore: 1,
                    playerOfTheMatch: "kabale-kabox",
                    home: {
                        starting: [
                            { playerId: "kabale-onana", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "kabale-aziz", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "kabale-francis", captain: false, goals: 0, goalMinutes: [], assists: 1, assistMinutes: [14], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "kabale-myles", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "kabale-isaac", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "kabale-stephen", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "kabale-kabox", captain: true, goals: 1, goalMinutes: [14], goalTypes: ["open"], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true }
                        ],
                        substitutes: [
                            { playerId: "kabale-kipson", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "kabale-david", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "kabale-josh-muzaaya", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "kabale-fafa", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "kabale-russel", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "kabale-timo", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "kabale-kibalama", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "kabale-tony", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "kabale-jemmy", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "kabale-marvin", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "kabale-brian", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "kabale-ken-lato", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true }
                        ]
                    },
                    away: {
                        starting: [
                            { playerId: "wakiso-peterson", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-uncle-mo", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-stone", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-seith", captain: false, goals: 1, goalMinutes: [35],  goalTypes: ["open"], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-arafat", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-kyaruzi", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-matayo", captain: true, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true }
                        ],
                        substitutes: [
                            { playerId: "wakiso-herbert", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-gideon", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-victor", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-sirajje", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-eddie", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-mutungi", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-mo", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-tugume", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-mutyaba", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-wills", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-smith", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-simon", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-anko", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-derrick", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-chance", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-jay", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true }
                        ]
                    }
                    
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
                    status: 'completed',
                    homeScore: 0,
                    awayScore: 1,
                    playerOfTheMatch: "mbale-balikowa",
                    home: {
                        starting: [
                            { playerId: "arua-yusuf", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-mykolo", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-victor", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-frebouy", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-emmy", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-millio", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-okanya", captain: true, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false }
                        ],
                        substitutes: [
                            { playerId: "arua-keno", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-apedo", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-franco", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-obita", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-aggrey", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-delz", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-mark", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-oscar", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-asaph", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-christian", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-thorhenry", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-urban-jnr", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-eddie", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "arua-stuart", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false }
                        ]
                    },
                    away: {
                        starting: [
                            { playerId: "mbale-hakim", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-benja", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-peter", captain: false, goals: 0, goalMinutes: [], assists: 1, assistMinutes: [30], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-dee", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-balikowa", captain: false, goals: 1, goalMinutes: [30], goalTypes: ["open"], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-ivan", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-dejango", captain: true, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true }
                        ],
                        substitutes: [
                            { playerId: "mbale-aldeine", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-tush", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-carrim", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-dembe", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-ephraim", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-musisi", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-abbey", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-eric", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-guvnor", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-isaac", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-bobby", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "mbale-bruno", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true }
                        ]
                    }
                },
                {
                    homeTeam: 'Gulu',
                    awayTeam: 'Mbarara',
                    venue: 'Maracanã Stadium',
                    status: 'completed',
                    homeScore: 2,
                    awayScore: 1,
                    playerOfTheMatch: "gulu-francis",
                    home: {
                        starting: [
                            { playerId: "gulu-salam", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-solomon", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-kityo", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-george", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-sebastien", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: true, yellowCardMinutes: [55], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-francis", captain: false, goals: 2, goalMinutes: [23,65], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-allano", captain: true, goals: 0, goalMinutes: [], assists: 1, assistMinutes: [23], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false }
                        ],
                        substitutes: [
                            { playerId: "gulu-walash", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-jaguar", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-trevor", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-charles", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-jose", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-nelly", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-edgar", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-guma", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-brian", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-edson", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-derrick", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "gulu-shabby", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false }
                        ]
                    },
                    away: {
                        starting: [
                            { playerId: "mbarara-van", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "mbarara-ken", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 45, cleanSheet: false },
                            { playerId: "mbarara-ivan", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "mbarara-elaisha", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 45, cleanSheet: false },
                            { playerId: "mbarara-amoblaze", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "mbarara-benard", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "mbarara-tony", captain: true, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false }
                        ],
                        substitutes: [
                            { playerId: "mbarara-cliff", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "mbarara-sharif", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "mbarara-afande", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "mbarara-seka-barack", captain: false, goals: 1, goalMinutes: [70], goalTypes: ["open"], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 45, cameOnFor: "mbarara-elaisha", cleanSheet: false },
                            { playerId: "mbarara-prokie", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "mbarara-tyron", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "mbarara-tiff", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "mbarara-yeta", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "mbarara-isaac-barunda", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "mbarara-ambrose", captain: false, goals: 0, goalMinutes: [], assists: 1, assistMinutes: [70], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 45, cameOnFor: "mbarara-ken", cleanSheet: false },
                            { playerId: "mbarara-musinguzi", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "mbarara-muzora", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false }
                        ]
                    }
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
                    status: 'completed',
                    homeScore: 1,
                    awayScore: 0,
                    playerOfTheMatch: "masaka-ballack",
                    home: {
                        starting: [
                            { playerId: "masaka-roy", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-barney", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-chris", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-chairman", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-kagame", captain: false, goals: 0, goalMinutes: [], assists: 1, assistMinutes: [13], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-ballack", captain: false, goals: 1, goalMinutes: [13], goalTypes: ["open"], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-ken", captain: true, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true }
                        ],
                        substitutes: [
                            { playerId: "masaka-pato", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-bob", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-lumala", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-sir-aludah", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-fem-dj", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-ivan", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-lex", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-shizzo", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-brian", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-felix-b", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-kagame-E", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-ap", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "masaka-kelvin", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true }
                        ]
                    },
                    away: {
                        starting: [
                            { playerId: "wakiso-peterson", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-uncle-mo", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-stone", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-jay", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-arafat", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-kyaruzi", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-matayo", captain: true, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true }
                        ],
                        substitutes: [
                            { playerId: "wakiso-herbert", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-gideon", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-victor", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-sirajje", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-eddie", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-mutungi", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-mo", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-tugume", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-mutyaba", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-wills", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-smith", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-simon", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-anko", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-derrick", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-chance", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "wakiso-seith", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true }
                        ]
                    }
                },
                {
                    homeTeam: 'Jinja',
                    awayTeam: 'Kabale',
                    venue: 'Maracanã Stadium',
                    status: 'completed',
                    homeScore: 3,
                    awayScore: 2,
                    playerOfTheMatch: "jinja-gerald-katiti",
                    home: {
                        starting: [
                            { playerId: "jinja-brave", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "jinja-wesonga-brian", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "jinja-dario", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 50, cleanSheet: true },
                            { playerId: "jinja-osbie", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "jinja-jeff", captain: false, goals: 0, goalMinutes: [], assists: 1, assistMinutes: [4], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "jinja-pius", captain: false, goals: 1, goalMinutes: [34], goalTypes: ["open"], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "jinja-gerald-katiti", captain: true, goals: 2, goalMinutes: [4,86], goalTypes: ["open"], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true }
                        ],
                        substitutes: [
                            { playerId: "jinja-striker", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-douglas", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-dero", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-timo-kigozi", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-brian-engineer", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-nana-brian", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-pato", captain: false, goals: 0, goalMinutes: [], assists: 1, assistMinutes: [86], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 50, cameOnFor: "jinja-dario", cleanSheet: false },
                            { playerId: "jinja-charlie", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-were-eria", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-javan", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-vasher", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-animal", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-bishop", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-micheal", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-jonah", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "jinja-isubikalu-brian", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false }
                        ]
                    },
                    away: {
                        starting: [
                            { playerId: "kabale-onana", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "kabale-aziz", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "kabale-francis", captain: false, goals: 0, goalMinutes: [], assists: 1, assistMinutes: [42], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "kabale-myles", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 45, cleanSheet: false },
                            { playerId: "kabale-kabox", captain: false, goals: 1, goalMinutes: [71], goalTypes: ["open"], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "kabale-stephen", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "kabale-marvin", captain: true, goals: 1, goalMinutes: [42], goalTypes: ["open"], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false }
                        ],
                        substitutes: [
                            { playerId: "kabale-kipson", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "kabale-david", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "kabale-josh-muzaaya", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "kabale-fafa", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "kabale-russel", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "kabale-timo", captain: false, goals: 0, goalMinutes: [], assists: 1, assistMinutes: [71], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 45, cameOnFor: "kabale-myles", cleanSheet: false },
                            { playerId: "kabale-kibalama", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "kabale-tony", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "kabale-isaac", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "kabale-jemmy", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "kabale-brian", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false },
                            { playerId: "kabale-ken-lato", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: false }
                        ]
                    }
                    
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
                    status: 'completed',
                    homeScore: 0,
                    awayScore: 1,
                    playerOfTheMatch: "arua-keno",
                    home: {
                        starting: [
                            { playerId: "gulu-salam", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "gulu-solomon", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "gulu-kityo", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "gulu-george", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "gulu-sebastien", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "gulu-lucky", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "gulu-allano", captain: true, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true }
                        ],
                        substitutes: [
                            { playerId: "gulu-walash", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "gulu-jaguar", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "gulu-trevor", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "gulu-charles", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "gulu-jose", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "gulu-nelly", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "gulu-edgar", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "gulu-guma", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "gulu-brian", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "gulu-edson", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "gulu-derrick", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "gulu-shabby", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true }
                        ]
                    },
                    away: {
                        starting: [
                            { playerId: "arua-yusuf", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "arua-mykolo", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "arua-victor", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "arua-frebouy", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "arua-emmy", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 1, assistMinutes: [33], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "arua-millio", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "arua-keno", captain: true, goals: 1, goalMinutes: [33], goalTypes: ["open"], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true }
                        ],
                        substitutes: [
                            { playerId: "arua-okanya", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "arua-apedo", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "arua-franco", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "arua-obita", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "arua-aggrey", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "arua-delz", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "arua-mark", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "arua-oscar", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "arua-asaph", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "arua-christian", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "arua-thorhenry", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "arua-urban-jnr", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "arua-eddie", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true },
                            { playerId: "arua-stuart", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null, cleanSheet: true }
                        ]
                    }
                },
                {
                    homeTeam: 'Mbarara',
                    awayTeam: 'Mbale',
                    venue: 'Maracanã Stadium',
                    status: 'completed',
                    homeScore: 1,
                    awayScore: 0,
                    playerOfTheMatch: "mbarara-davie"
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
                    status: 'completed',
                    homeScore: 1,
                    awayScore: 0
                },
                {
                    homeTeam: 'Kabale',
                    awayTeam: 'Masaka',
                    venue: 'Maracanã Stadium',
                    status: 'completed',
                    homeScore: 0,
                    awayScore: 1
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
                    status: 'completed',
                    homeScore: 1,
                    awayScore: 0
                },
                {
                    homeTeam: 'Arua',
                    awayTeam: 'Wakiso',
                    venue: 'Maracanã Stadium',
                    status: 'completed',
                    homeScore: 1,
                    awayScore: 0
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
                    status: 'completed',
                    homeScore: 0,
                    awayScore: 0
                },
                {
                    homeTeam: 'Jinja',
                    awayTeam: 'Mbarara',
                    venue: 'Maracanã Stadium',
                    status: 'completed',
                    homeScore: 0,
                    awayScore: 0
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
                    status: 'completed',
                    homeScore: 1,
                    awayScore: 1
                },
                {
                    homeTeam: 'Wakiso',
                    awayTeam: 'Mbale',
                    venue: 'Maracanã Stadium',
                    status: 'completed',
                    homeScore: 0,
                    awayScore: 1
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
                    status: 'completed',
                    homeScore: 0,
                    awayScore: 3
                },
                {
                    homeTeam: 'Gulu',
                    awayTeam: 'Jinja',
                    venue: 'Maracanã Stadium',
                    status: 'completed',
                    homeScore: 0,
                    awayScore: 1
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
                    status: 'completed',
                    homeScore: 2,
                    awayScore: 2
                },
                {
                    homeTeam: 'Arua',
                    awayTeam: 'Jinja',
                    venue: 'Maracanã Stadium',
                    status: 'completed',
                    homeScore: 0,
                    awayScore: 0
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
                    status: 'completed',
                    homeScore: 0,
                    awayScore: 7
                },
                {
                    homeTeam: 'Gulu',
                    awayTeam: 'Wakiso',
                    venue: 'Maracanã Stadium',
                    status: 'completed',
                    homeScore: 0,
                    awayScore: 1
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
                    status: 'completed',
                    homeScore: 0,
                    awayScore: 1
                },
                {
                    homeTeam: 'Jinja',
                    awayTeam: 'Mbale',
                    venue: 'Maracanã Stadium',
                    status: 'completed',
                    homeScore: 1,
                    awayScore: 0
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
                    status: 'live',
                    homeScore: 0,
                    awayScore: 0
                },
                {
                    homeTeam: 'Mbarara',
                    awayTeam: 'Wakiso',
                    venue: 'Maracanã Stadium',
                    status: 'live',
                    homeScore: 0,
                    awayScore: 0
                }
            ]
        }
    ],
    knockout: {
        quarterFinals: [
            { 
                homeTeam: "TBD", 
                awayTeam: "TBD", 
                homeScore: 3, 
                awayScore: 3, 
                status: "scheduled",
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
            { homeTeam: "TBD", awayTeam: "TBD", homeScore: 2, awayScore: 0, status: "scheduled" },
            { homeTeam: "TBD", awayTeam: "TBD", homeScore: 1, awayScore: 1, status: "scheduled" },
            { homeTeam: "TBD", awayTeam: "TBD", homeScore: 2, awayScore: 1, status: "scheduled" }
        ],
        semiFinals: [
            { homeTeam: "TBD", awayTeam: "TBD", homeScore: null, awayScore: null, status: "scheduled" },
            { homeTeam: "TBD", awayTeam: "TBD", homeScore: null, awayScore: null, status: "scheduled" }
        ],
        thirdPlace: [
            { homeTeam: "TBD", awayTeam: "TBD", homeScore: null, awayScore: null, status: "scheduled" }
        ],
        final: [
            { homeTeam: "TBD", awayTeam: "TBD", homeScore: null, awayScore: null, status: "scheduled" }
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
    loadMobileSponsors();
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

// Navigate to home page function
function navigateToHome() {
    setActivePage('home');
    loadPage('home');
    currentPage = 'home';
    
    // Close mobile menu if it's open
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.hamburger');
    if (mobileMenu && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Remove any lingering active states from the home button
    const homeBtn = document.querySelector('.home-icon-btn');
    if (homeBtn) {
        homeBtn.blur(); // Remove focus
        homeBtn.style.background = 'none'; // Force remove background
        setTimeout(() => {
            homeBtn.style.background = '';
        }, 100);
    }
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

// Load sponsors into mobile menu
async function loadMobileSponsors() {
    try {
        const sponsors = await getSponsorLogos();
        const mobileSponsorsGrid = document.getElementById('mobileSponsorsGrid');
        
        console.log('Loading mobile sponsors:', sponsors);
        console.log('Mobile sponsors grid element:', mobileSponsorsGrid);
        
        if (mobileSponsorsGrid && sponsors && sponsors.length > 0) {
            mobileSponsorsGrid.innerHTML = sponsors.map(sponsor => `
                <div class="mobile-sponsor-item">
                    <img src="assets/sponsors/${sponsor.file}" alt="${sponsor.name}" class="mobile-sponsor-logo" onerror="console.error('Failed to load sponsor image:', '${sponsor.file}')">
                </div>
            `).join('');
            console.log('Mobile sponsors loaded successfully');
        } else {
            console.warn('Mobile sponsors grid not found or no sponsors available');
            if (mobileSponsorsGrid) {
                mobileSponsorsGrid.innerHTML = '<div class="mobile-sponsor-item">No sponsors available</div>';
            }
        }
    } catch (error) {
        console.error('Error loading mobile sponsors:', error);
        const mobileSponsorsGrid = document.getElementById('mobileSponsorsGrid');
        if (mobileSponsorsGrid) {
            mobileSponsorsGrid.innerHTML = '<div class="mobile-sponsor-item">Error loading sponsors</div>';
        }
    }
}




// Countdown timer function
function startCountdown() {
    const targetDate = new Date('October 5, 2025 09:00:00 GMT+0300').getTime();
    const countdownSection = document.querySelector('.countdown-section');
    
    // Calculate total duration for gradient calculation (assuming ~30 days max)
    const totalDuration = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds
    
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
        
        // Safely update elements if they exist
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        
        if (daysElement) daysElement.innerHTML = days.toString().padStart(2, '0');
        if (hoursElement) hoursElement.innerHTML = hours.toString().padStart(2, '0');
        if (minutesElement) minutesElement.innerHTML = minutes.toString().padStart(2, '0');
        if (secondsElement) secondsElement.innerHTML = seconds.toString().padStart(2, '0');
        
        // Calculate gradient progress (0 = far away, 1 = very close)
        const progress = Math.min(1, Math.max(0, (totalDuration - distance) / totalDuration));
        
        // Dynamic gradient colors based on countdown progress
        let gradientColors;
        if (progress < 0.3) {
            // Far away - calm green gradient
            gradientColors = {
                start: 'rgba(0, 255, 133, 0.1)',
                end: 'rgba(55, 0, 60, 0.3)'
            };
        } else if (progress < 0.6) {
            // Getting closer - orange/yellow gradient
            const intensity = (progress - 0.3) / 0.3;
            gradientColors = {
                start: `rgba(${255}, ${165 + intensity * 90}, ${0}, 0.15)`,
                end: `rgba(${55 + intensity * 200}, ${0}, ${60 + intensity * 40}, 0.4)`
            };
        } else if (progress < 0.8) {
            // Very close - red/orange gradient
            const intensity = (progress - 0.6) / 0.2;
            gradientColors = {
                start: `rgba(${255}, ${165 - intensity * 65}, ${0}, 0.2)`,
                end: `rgba(${255 - intensity * 100}, ${0}, ${0}, 0.5)`
            };
        } else {
            // Critical - intense red gradient
            const intensity = (progress - 0.8) / 0.2;
            gradientColors = {
                start: `rgba(${255}, ${100 - intensity * 50}, ${0}, 0.25)`,
                end: `rgba(${255}, ${0}, ${0}, 0.6)`
            };
        }
        
        // Apply dynamic gradient to countdown section
        if (countdownSection) {
            countdownSection.style.background = `linear-gradient(135deg, ${gradientColors.start} 0%, ${gradientColors.end} 100%)`;
        }
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
            // Apply current view state and render fixtures
            setTimeout(() => {
                applyFilters();
                // Update toggle button state
                const toggleBtn = document.querySelector('.view-toggle-btn');
                if (toggleBtn) {
                    toggleBtn.classList.toggle('active', currentFixturesView === 'grid');
                    const svg = toggleBtn.querySelector('svg');
                    if (svg) {
                        if (currentFixturesView === 'grid') {
                            svg.innerHTML = `
                                <rect x="3" y="3" width="7" height="7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <rect x="14" y="3" width="7" height="7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <rect x="14" y="14" width="7" height="7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <rect x="3" y="14" width="7" height="7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            `;
                        } else {
                            svg.innerHTML = `
                                <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            `;
                        }
                    }
                }
            }, 100);
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
        case 'search':
            content.innerHTML = generateSearchPage();
            break;
        case 'awards':
            content.innerHTML = generateAwardsPage();
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
        'success-motors.svg',
        'thorvisual.svg'
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
    const liveMatches = getLiveMatches(4);
    const upcomingMatches = getUpcomingMatches(4);
    const latestResults = getLatestResults(4);
    const topTeams = calculateStandings().slice(0, 4);
    const playerStats = calculatePlayerStats();
    const topScorers = getTopScorers(playerStats).slice(0, 3);
    const topAssists = getTopAssists(playerStats).slice(0, 3);
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
            
            ${liveMatches.length > 0 ? `
            <div class="live-matches-section">
                <div class="section-header">
                    <h3>
                        <svg class="live-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                            <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        Live Matches
                    </h3>
                    <span class="live-indicator">LIVE</span>
                </div>
                <div class="live-matches-content">
                    ${liveMatches.map(match => `
                        <section class="fixture" onclick="viewMatchDetails('${match.source === 'knockout' ? 'knockout' : match.time}', '${match.homeTeam}', '${match.awayTeam}')">
                            <div class="teams">
                                <div class="team-match">
                                    <div class="team-name-container">
                                        <span>${match.homeTeam}</span>
                                        ${(match.status === 'live' || match.status === 'completed') && getTeamRedCards(match, match.homeTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
                                    </div>
                                    ${getTeamLogoElement(leagueData.teams.find(t => t.name === match.homeTeam)?.id || '', '40px')}
                                </div>
                                <div class="score-container">
                                    <span class="vs-score">${match.homeScore} - ${match.awayScore}</span>
                                    <div class="match-status live">LIVE</div>
                                </div>
                                <div class="team-match">
                                    ${getTeamLogoElement(leagueData.teams.find(t => t.name === match.awayTeam)?.id || '', '40px')}
                                    <div class="team-name-container">
                                        <span>${match.awayTeam}</span>
                                        ${(match.status === 'live' || match.status === 'completed') && getTeamRedCards(match, match.awayTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
                                    </div>
                                </div>
                            </div>
                            <div class="fixture-details">
                                <span class="match-status live">LIVE</span>
                                ${match.venue ? `<span class="match-venue">${match.venue}</span>` : ''}
                            </div>
                        </section>
                    `).join('')}
                </div>
            </div>
            ` : ''}
            
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
                                    <section class="fixture" onclick="viewMatchDetails('${match.source === 'knockout' ? 'knockout' : match.time}', '${match.homeTeam}', '${match.awayTeam}')">
                                        <div class="teams">
                                            <div class="team-match">
                                                <div class="team-name-container">
                                                    <span>${match.homeTeam}</span>
                                                </div>
                                                ${getTeamLogoElement(leagueData.teams.find(t => t.name === match.homeTeam)?.id || '', '40px')}
                                            </div>
                                            <div class="score-container">
                                                <span class="vs-score">vs</span>
                                                <div class="match-time">${match.time}</div>
                                            </div>
                                            <div class="team-match">
                                                ${getTeamLogoElement(leagueData.teams.find(t => t.name === match.awayTeam)?.id || '', '40px')}
                                                <div class="team-name-container">
                                                    <span>${match.awayTeam}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                `).join('') : '<div class="no-data">No upcoming matches</div>'}
                            </div>
                        </div>
                        <div class="preview-subsection">
                            <h4>Latest Results</h4>
                            <div class="matches-list">
                                ${latestResults.length > 0 ? latestResults.map(match => `
                                    <section class="fixture" onclick="viewMatchDetails('${match.source === 'knockout' ? 'knockout' : match.time}', '${match.homeTeam}', '${match.awayTeam}')">
                                        <div class="teams">
                                            <div class="team-match">
                                                <div class="team-name-container">
                                                    <span>${match.homeTeam}</span>
                                                    ${(match.status === 'live' || match.status === 'completed') && getTeamRedCards(match, match.homeTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
                                                </div>
                                                ${getTeamLogoElement(leagueData.teams.find(t => t.name === match.homeTeam)?.id || '', '40px')}
                                            </div>
                                            <div class="score-container">
                                                <span class="vs-score">${match.homeScore} - ${match.awayScore}</span>
                                                <div class="match-status ft">FT</div>
                                            </div>
                                            <div class="team-match">
                                                ${getTeamLogoElement(leagueData.teams.find(t => t.name === match.awayTeam)?.id || '', '40px')}
                                                <div class="team-name-container">
                                                    <span>${match.awayTeam}</span>
                                                    ${(match.status === 'live' || match.status === 'completed') && getTeamRedCards(match, match.awayTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </section>
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
                                                    <span class="team-name-with-status">
                                                        ${team.name}
                                                        ${(() => {
                                                            const liveStatus = getTeamLiveGameStatus(team.name);
                                                            const liveScore = getTeamLiveScore(team.name);
                                                            let display = '';
                                                            if (liveStatus) {
                                                                display += `<span class="live-status-dot ${liveStatus}"></span>`;
                                                            }
                                                            if (liveScore) {
                                                                display += `<span class="live-score-display">${liveScore.teamScore}-${liveScore.opponentScore}</span>`;
                                                            }
                                                            return display;
                                                        })()}
                                                    </span>
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
        
                ${areAllGroupStageMatchesCompleted() ? (() => {
                    const currentStage = getCurrentKnockoutStage();
                    const displayMatches = currentStage.matches.slice(0, 2);
                    return `
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
                                <p>${currentStage.title}</p>
                </div>
                            <div class="knockout-matches">
                                ${displayMatches.map((match, index) => `
                                    <section class="fixture" onclick="viewMatchDetails('knockout', '${match.homeTeam}', '${match.awayTeam}')">
                                        <div class="teams">
                                            <div class="team-match">
                                                <div class="team-name-container">
                                                    <span>${match.homeTeam}</span>
                                                    ${match.home && (match.status === 'live' || match.status === 'completed') && getTeamRedCards(match, match.homeTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
                                                </div>
                                                ${getTeamLogoElement(match.homeTeam === 'TBD' ? 'TBD' : (leagueData.teams.find(t => t.name === match.homeTeam)?.id || ''), '40px')}
                                            </div>
                                            <div class="score-container">
                                                <span class="vs-score">${match.status === 'completed' ? `${match.homeScore} - ${match.awayScore}` : 'vs'}</span>
                                                ${match.status === 'completed' ? '<div class="match-status ft">FT</div>' : 
                                                  match.status === 'live' ? '<div class="match-status live">LIVE</div>' :
                                                  match.status === 'postponed' ? '<div class="match-status postponed">POSTPONED</div>' : ''}
                                            </div>
                                            <div class="team-match">
                                                ${getTeamLogoElement(match.awayTeam === 'TBD' ? 'TBD' : (leagueData.teams.find(t => t.name === match.awayTeam)?.id || ''), '40px')}
                                                <div class="team-name-container">
                                                    <span>${match.awayTeam}</span>
                                                    ${match.away && (match.status === 'live' || match.status === 'completed') && getTeamRedCards(match, match.awayTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </section>
            `).join('')}
                            </div>
                        </div>
                    </div>
        </div>
                `;
                })() : ''}
        
                ${matchStats.completedMatches > 0 ? `
                <div class="preview-section">
                    <div class="section-header">
                        <h3>Statistics</h3>
                        <a href="#" class="view-more-link" onclick="loadPage('stats')">View all stats</a>
                    </div>
                    <div class="preview-content">
                        <h3 class="stats-section-title">Top Scorers</h3>
                        <table class="stats-table goals-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Players</th>
                                    <th>Matches</th>
                                    <th>Goals</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${topScorers.slice(0, 5).map((player, index) => `
                                    <tr>
                                        <td><div class="rank-badge">${index + 1}</div></td>
                                        <td><div class="player-name">${player.name}</div></td>
                                        <td class="stat-value">${player.matches}</td>
                                        <td class="stat-value">${player.goals}</td>
                                    </tr>
                                    `).join('')}
                            </tbody>
                        </table>
                        
                        <h3 class="stats-section-title">Top Assists</h3>
                        <table class="stats-table assists-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Players</th>
                                    <th>Matches</th>
                                    <th>Assists</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${topAssists.slice(0, 5).map((player, index) => `
                                    <tr>
                                        <td><div class="rank-badge">${index + 1}</div></td>
                                        <td><div class="player-name">${player.name}</div></td>
                                        <td class="stat-value">${player.matches}</td>
                                        <td class="stat-value">${player.assists}</td>
                                    </tr>
                                    `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
                ` : ''}
                
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
            
            <button class="view-toggle-btn" onclick="toggleFixturesView()" title="Toggle View">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
        
        <hr class="horizontal-divider">
        
        <div id="fixtures-content" class="${currentFixturesView === 'grid' ? 'fixtures-grid-view' : ''}">
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
                                ${(match.status === 'live' || match.status === 'completed') && getTeamRedCards(match, match.homeTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
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
                                ${(match.status === 'live' || match.status === 'completed') && getTeamRedCards(match, match.awayTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
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
    const liveMatches = getLiveMatches();
    const hasLiveMatches = liveMatches.length > 0;
    
    return `
        <h2 class="page-title">
            League Table
            ${hasLiveMatches ? `
                <span class="live-indicator">
                    <svg class="live-icon" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="20" height="12" rx="2" ry="2" fill="#ff4757"/>
                        <text x="12" y="11" text-anchor="middle" fill="white" font-size="7" font-weight="bold">LIVE</text>
                    </svg>
                </span>
            ` : ''}
        </h2>
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
                                                <span class="team-name-with-status">
                                                    ${team.name}
                                                    ${(() => {
                                                        const liveStatus = getTeamLiveGameStatus(team.name);
                                                        const liveScore = getTeamLiveScore(team.name);
                                                        let display = '';
                                                        if (liveStatus) {
                                                            display += `<span class="live-status-dot ${liveStatus}"></span>`;
                                                        }
                                                        if (liveScore) {
                                                            display += `<span class="live-score-display">${liveScore.teamScore}-${liveScore.opponentScore}</span>`;
                                                        }
                                                        return display;
                                                    })()}
                                                </span>
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
                                                        <span class="team-name-with-status">
                                                            ${team.name}
                                                            ${(() => {
                                                                const liveStatus = getTeamLiveGameStatus(team.name);
                                                                const liveScore = getTeamLiveScore(team.name);
                                                                let display = '';
                                                                if (liveStatus) {
                                                                    display += `<span class="live-status-dot ${liveStatus}"></span>`;
                                                                }
                                                                if (liveScore) {
                                                                    display += `<span class="live-score-display">${liveScore.teamScore}-${liveScore.opponentScore}</span>`;
                                                                }
                                                                return display;
                                                            })()}
                                                        </span>
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
                                                <span class="team-name-with-status">
                                                    ${team.name}
                                                    ${(() => {
                                                        const liveStatus = getTeamLiveGameStatus(team.name);
                                                        const liveScore = getTeamLiveScore(team.name);
                                                        let display = '';
                                                        if (liveStatus) {
                                                            display += `<span class="live-status-dot ${liveStatus}"></span>`;
                                                        }
                                                        if (liveScore) {
                                                            display += `<span class="live-score-display">${liveScore.teamScore}-${liveScore.opponentScore}</span>`;
                                                        }
                                                        return display;
                                                    })()}
                                                </span>
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
                <input type="text" id="teamSearch" class="team-search-input" placeholder="Search teams, players, positions..." onkeyup="filterTeams()">
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
                            <h3 class="team-name-with-status">
                                ${team.name}
                                ${(() => {
                                    const liveStatus = getTeamLiveGameStatus(team.name);
                                    const liveScore = getTeamLiveScore(team.name);
                                    let display = '';
                                    if (liveStatus) {
                                        display += `<span class="live-status-dot ${liveStatus}"></span>`;
                                    }
                                    if (liveScore) {
                                        display += `<span class="live-score-display">${liveScore.teamScore}-${liveScore.opponentScore}</span>`;
                                    }
                                    return display;
                                })()}
                            </h3>
                            <div class="team-record">
                                <span class="points">${team.points} pts</span>
                                <span class="record ${(() => {
                                    const liveStatus = getTeamLiveGameStatus(team.name);
                                    return liveStatus ? 'live-record' : '';
                                })()}">${(() => {
                                    const liveStatus = getTeamLiveGameStatus(team.name);
                                    return liveStatus ? 'live' : `${team.played} played`;
                                })()}</span>
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
                                            <span class="info-value">${team.founded}</span>
                                </div>
                                <div class="info-item">
                                            <span class="info-label">Stadium</span>
                                            <span class="info-value">${team.stadium}</span>
                                </div>
                                <div class="info-item">
                                            <span class="info-label">Captain</span>
                                            <span class="info-value">${team.captain}</span>
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
    // Check if all group stage matches are completed
    if (!areAllGroupStageMatchesCompleted()) {
        return `
            <h2 class="page-title">Knockout Stage</h2>
            
            <div class="knockout-pending">
                <div class="knockout-pending-content">
                    <div class="knockout-pending-icon">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="rgba(0, 255, 133, 0.3)" stroke-width="2"/>
                            <path d="M12 6v6l4 2" stroke="rgba(0, 255, 133, 0.5)" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <h3 class="knockout-pending-title">Knockout Stage Coming Soon</h3>
                    <p class="knockout-pending-message">
                        The knockout stage will begin once all group stage matches are completed.
                    </p>
                    <div class="knockout-pending-details">
                        <p>Complete all fixtures to unlock the knockout bracket and see which teams advance to the next round.</p>
                    </div>
                </div>
            </div>
        `;
    }
    
    return `
        <h2 class="page-title">Knockout Stage</h2>
        
        <div class="knockout-bracket">
            <div class="bracket-round">
                <h3>Quarter Finals</h3>
                ${leagueData.knockout.quarterFinals.map(match => `
                    <section class="fixture" onclick="viewMatchDetails('knockout', '${match.homeTeam}', '${match.awayTeam}')">
                        <div class="teams">
                            <div class="team-match">
                                <div class="team-name-container">
                                    <span>${match.homeTeam}</span>
                                    ${match.home && (match.status === 'live' || match.status === 'completed') && getTeamRedCards(match, match.homeTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
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
                                    ${match.away && (match.status === 'live' || match.status === 'completed') && getTeamRedCards(match, match.awayTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
                                </div>
                            </div>
                        </div>
                        ${match.status === 'completed' || match.status === 'live' ? `
                        <div class="fixture-footer">
                            <span class="overview-link">Overview</span>
                        </div>
                        ` : ''}
                    </section>
                `).join('')}
            </div>
            
            <hr class="horizontal-divider">
            
            <div class="bracket-round">
                <h3>Semi Finals</h3>
                ${leagueData.knockout.semiFinals.map(match => `
                    <section class="fixture" onclick="viewMatchDetails('knockout', '${match.homeTeam}', '${match.awayTeam}')">
                        <div class="teams">
                            <div class="team-match">
                                <div class="team-name-container">
                                    <span>${match.homeTeam}</span>
                                    ${match.home && (match.status === 'live' || match.status === 'completed') && getTeamRedCards(match, match.homeTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
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
                                    ${match.away && (match.status === 'live' || match.status === 'completed') && getTeamRedCards(match, match.awayTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
                                </div>
                            </div>
                        </div>
                        ${match.status === 'completed' || match.status === 'live' ? `
                        <div class="fixture-footer">
                            <span class="overview-link">Overview</span>
                        </div>
                        ` : ''}
                    </section>
                `).join('')}
            </div>
            
            <hr class="horizontal-divider">
            
            <div class="bracket-round">
                <h3>Third Place Playoff</h3>
                ${leagueData.knockout.thirdPlace.map(match => `
                    <section class="fixture" onclick="viewMatchDetails('knockout', '${match.homeTeam}', '${match.awayTeam}')">
                        <div class="teams">
                            <div class="team-match">
                                <div class="team-name-container">
                                    <span>${match.homeTeam}</span>
                                    ${match.home && (match.status === 'live' || match.status === 'completed') && getTeamRedCards(match, match.homeTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
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
                                    ${match.away && (match.status === 'live' || match.status === 'completed') && getTeamRedCards(match, match.awayTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
                                </div>
                            </div>
                        </div>
                        ${match.status === 'completed' || match.status === 'live' ? `
                        <div class="fixture-footer">
                            <span class="overview-link">Overview</span>
                        </div>
                        ` : ''}
                    </section>
                `).join('')}
            </div>
            
            <hr class="horizontal-divider">
            
            <div class="bracket-round">
                <h3>Final</h3>
                ${leagueData.knockout.final.map(match => `
                    <section class="fixture" onclick="viewMatchDetails('knockout', '${match.homeTeam}', '${match.awayTeam}')">
                        <div class="teams">
                            <div class="team-match">
                                <div class="team-name-container">
                                    <span>${match.homeTeam}</span>
                                    ${match.home && (match.status === 'live' || match.status === 'completed') && getTeamRedCards(match, match.homeTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
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
                                    ${match.away && (match.status === 'live' || match.status === 'completed') && getTeamRedCards(match, match.awayTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
                                </div>
                            </div>
                        </div>
                        ${match.status === 'completed' || match.status === 'live' ? `
                        <div class="fixture-footer">
                            <span class="overview-link">Overview</span>
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
    
    // First, initialize all players from all squads with zero stats
    leagueData.teams.forEach(team => {
        team.squad.forEach(player => {
            playerStats[player.id] = {
                playerId: player.id,
                name: player.name,
                team: team.name,
                goals: 0,
                assists: 0,
                yellowCards: 0,
                redCards: 0,
                cleanSheets: 0,
                matches: 0
            };
        });
    });
    
    // Then, process fixtures data to update stats for players who have played
    leagueData.fixturesData.forEach(timeSlot => {
        timeSlot.matches.forEach(match => {
            if ((match.status === 'completed' || match.status === 'live') && match.home && match.away) {
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
        if ((match.status === 'completed' || match.status === 'live') && match.home && match.away) {
            processMatchPlayers(match, playerStats);
        }
    });
    
    return playerStats;
}

function processMatchPlayers(match, playerStats) {
    // Process home team players
    [...(match.home.starting || []), ...(match.home.substitutes || [])].forEach(player => {
        // Player should already exist from squad initialization, but check just in case
        if (!playerStats[player.playerId]) {
            playerStats[player.playerId] = {
                playerId: player.playerId,
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
        const ownGoals = player.goalTypes ? player.goalTypes.filter(type => type === 'own').length : 0;
        
        playerStats[player.playerId].goals += nonOwnGoals;
        // Track own goals separately
        if (!playerStats[player.playerId].ownGoals) {
            playerStats[player.playerId].ownGoals = 0;
        }
        playerStats[player.playerId].ownGoals += ownGoals;
        
        playerStats[player.playerId].assists += player.assists || 0;
        playerStats[player.playerId].yellowCards += player.yellowCard ? 1 : 0;
        playerStats[player.playerId].redCards += player.redCard ? 1 : 0;
        playerStats[player.playerId].cleanSheets += player.cleanSheet ? 1 : 0;
        
        // Only count match if player was in starting lineup or came on as a substitute
        const isStarting = match.home.starting.some(p => p.playerId === player.playerId);
        const wasSubstitutedOn = match.home.substitutes.some(p => p.playerId === player.playerId && p.substitutionMinute !== null);
        
        if (isStarting || wasSubstitutedOn) {
            playerStats[player.playerId].matches += 1;
        }
    });
    
    // Process away team players
    [...(match.away.starting || []), ...(match.away.substitutes || [])].forEach(player => {
        // Player should already exist from squad initialization, but check just in case
        if (!playerStats[player.playerId]) {
            playerStats[player.playerId] = {
                playerId: player.playerId,
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
        const ownGoals = player.goalTypes ? player.goalTypes.filter(type => type === 'own').length : 0;
        
        playerStats[player.playerId].goals += nonOwnGoals;
        // Track own goals separately
        if (!playerStats[player.playerId].ownGoals) {
            playerStats[player.playerId].ownGoals = 0;
        }
        playerStats[player.playerId].ownGoals += ownGoals;
        
        playerStats[player.playerId].assists += player.assists || 0;
        playerStats[player.playerId].yellowCards += player.yellowCard ? 1 : 0;
        playerStats[player.playerId].redCards += player.redCard ? 1 : 0;
        playerStats[player.playerId].cleanSheets += player.cleanSheet ? 1 : 0;
        
        // Only count match if player was in starting lineup or came on as a substitute
        const isStarting = match.away.starting.some(p => p.playerId === player.playerId);
        const wasSubstitutedOn = match.away.substitutes.some(p => p.playerId === player.playerId && p.substitutionMinute !== null);
        
        if (isStarting || wasSubstitutedOn) {
            playerStats[player.playerId].matches += 1;
        }
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

function isPlayerGoalkeeper(playerId) {
    for (const team of leagueData.teams) {
        const player = team.squad.find(p => p.id === playerId);
        if (player && player.position === 'Goalkeeper') {
            return true;
        }
    }
    return false;
}

function calculateMatchStats() {
    let totalGoals = 0;
    let totalMatches = 0;
    let completedMatches = 0;
    
    // Process fixtures data
    leagueData.fixturesData.forEach(timeSlot => {
        timeSlot.matches.forEach(match => {
            totalMatches++;
            if ((match.status === 'completed' || match.status === 'live') && match.homeScore !== null && match.awayScore !== null) {
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
        if ((match.status === 'completed' || match.status === 'live') && match.homeScore !== null && match.awayScore !== null) {
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

function getTopScorers(playerStats) {
    return Object.values(playerStats)
        .sort((a, b) => {
            // Primary: Goals (descending)
            if (b.goals !== a.goals) return b.goals - a.goals;
            // Secondary: Matches played (descending)
            if (b.matches !== a.matches) return b.matches - a.matches;
            // Tertiary: Alphabetical by name (ascending)
            return a.name.localeCompare(b.name);
        });
}

function getTopAssists(playerStats) {
    return Object.values(playerStats)
        .sort((a, b) => {
            // Primary: Assists (descending)
            if (b.assists !== a.assists) return b.assists - a.assists;
            // Secondary: Matches played (descending)
            if (b.matches !== a.matches) return b.matches - a.matches;
            // Tertiary: Alphabetical by name (ascending)
            return a.name.localeCompare(b.name);
        });
}

function getMostCards(playerStats, limit = 5) {
    return Object.values(playerStats)
        .filter(p => (p.yellowCards + p.redCards) > 0)
        .sort((a, b) => (b.yellowCards + b.redCards) - (a.yellowCards + a.redCards))
        .slice(0, limit);
}

function getMostYellowCards(playerStats) {
    return Object.values(playerStats)
        .sort((a, b) => {
            // Primary: Yellow cards (descending)
            if (b.yellowCards !== a.yellowCards) return b.yellowCards - a.yellowCards;
            // Secondary: Matches played (descending)
            if (b.matches !== a.matches) return b.matches - a.matches;
            // Tertiary: Alphabetical by name (ascending)
            return a.name.localeCompare(b.name);
        });
}

function getMostRedCards(playerStats) {
    return Object.values(playerStats)
        .sort((a, b) => {
            // Primary: Red cards (descending)
            if (b.redCards !== a.redCards) return b.redCards - a.redCards;
            // Secondary: Matches played (descending)
            if (b.matches !== a.matches) return b.matches - a.matches;
            // Tertiary: Alphabetical by name (ascending)
            return a.name.localeCompare(b.name);
        });
}

function getTopCleanSheets(playerStats) {
    return Object.values(playerStats)
        .sort((a, b) => {
            // Primary: Goalkeepers first
            const aIsGoalkeeper = isPlayerGoalkeeper(a.playerId);
            const bIsGoalkeeper = isPlayerGoalkeeper(b.playerId);
            if (aIsGoalkeeper && !bIsGoalkeeper) return -1;
            if (!aIsGoalkeeper && bIsGoalkeeper) return 1;
            
            // Secondary: Clean sheets (descending)
            if (b.cleanSheets !== a.cleanSheets) return b.cleanSheets - a.cleanSheets;
            // Tertiary: Matches played (descending)
            if (b.matches !== a.matches) return b.matches - a.matches;
            // Quaternary: Alphabetical by name (ascending)
            return a.name.localeCompare(b.name);
        });
}

// Helper function to generate stats list with view more functionality
function generateStatsList(players, statType, statValue, statLabel) {
    const allPlayers = players;
    const visiblePlayers = allPlayers.slice(0, 5);
    const hasMore = allPlayers.length > 5;
    
    return `
        <div class="stats-list" id="${statType}-list">
            ${visiblePlayers.map((player, index) => `
                <div class="stat-item">
                    <div class="stat-rank">${index + 1}</div>
                    <div class="stat-player">
                        <div class="player-name">${player.name}</div>
                        <div class="player-team">${player.team}</div>
                    </div>
                    <div class="stat-matches">${player.matches}</div>
                    <div class="stat-value">${player[statValue]} ${statLabel}</div>
                </div>
            `).join('')}
            ${hasMore ? `
                <div class="view-more-container">
                    <button class="view-more-btn" onclick="toggleViewMore('${statType}')">
                        <span class="view-more-text">View More</span>
                        <svg class="view-more-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div class="stats-list-extra hidden" id="${statType}-extra">
                    ${allPlayers.slice(5).map((player, index) => `
                        <div class="stat-item">
                            <div class="stat-rank">${index + 6}</div>
                            <div class="stat-player">
                                <div class="player-name">${player.name}</div>
                                <div class="player-team">${player.team}</div>
                            </div>
                            <div class="stat-matches">${player.matches}</div>
                            <div class="stat-value">${player[statValue]} ${statLabel}</div>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `;
}

// Function to toggle view more for stats
function toggleViewMore(statType) {
    const extraList = document.getElementById(`${statType}-extra`);
    const viewMoreBtn = document.querySelector(`#${statType}-list .view-more-btn`);
    const viewMoreText = viewMoreBtn.querySelector('.view-more-text');
    const viewMoreIcon = viewMoreBtn.querySelector('.view-more-icon');
    
    if (extraList.classList.contains('hidden')) {
        // Show more
        extraList.classList.remove('hidden');
        viewMoreText.textContent = 'View Less';
        viewMoreIcon.style.transform = 'rotate(180deg)';
    } else {
        // Show less
        extraList.classList.add('hidden');
        viewMoreText.textContent = 'View More';
        viewMoreIcon.style.transform = 'rotate(0deg)';
    }
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

function getLiveMatches(limit = 4) {
    const liveMatches = [];
    
    // Get live matches from fixtures
    leagueData.fixturesData.forEach(timeSlot => {
        timeSlot.matches.forEach(match => {
            if (match.status === 'live') {
                liveMatches.push({
                    ...match,
                    time: timeSlot.time,
                    source: 'fixtures'
                });
            }
        });
    });
    
    // Get live matches from knockout
    const allKnockoutMatches = [
        ...leagueData.knockout.quarterFinals,
        ...leagueData.knockout.semiFinals,
        ...leagueData.knockout.thirdPlace,
        ...leagueData.knockout.final
    ];
    
    allKnockoutMatches.forEach(match => {
        if (match.status === 'live') {
            liveMatches.push({
                ...match,
                time: 'Knockout Stage',
                source: 'knockout'
            });
        }
    });
    
    // Return limited results
    return liveMatches.slice(0, limit);
}

function getTeamLiveGameStatus(teamName) {
    // Check fixtures for live matches
    for (let timeSlot of leagueData.fixturesData) {
        for (let match of timeSlot.matches) {
            if (match.status === 'live' && (match.homeTeam === teamName || match.awayTeam === teamName)) {
                const isHomeTeam = match.homeTeam === teamName;
                const teamScore = isHomeTeam ? match.homeScore : match.awayScore;
                const opponentScore = isHomeTeam ? match.awayScore : match.homeScore;
                
                if (teamScore > opponentScore) {
                    return 'win';
                } else if (teamScore < opponentScore) {
                    return 'loss';
                } else {
                    return 'draw';
                }
            }
        }
    }
    
    // Check knockout stages for live matches
    const allKnockoutMatches = [
        ...leagueData.knockout.quarterFinals,
        ...leagueData.knockout.semiFinals,
        ...leagueData.knockout.thirdPlace,
        ...leagueData.knockout.final
    ];
    
    for (let match of allKnockoutMatches) {
        if (match.status === 'live' && (match.homeTeam === teamName || match.awayTeam === teamName)) {
            const isHomeTeam = match.homeTeam === teamName;
            const teamScore = isHomeTeam ? match.homeScore : match.awayScore;
            const opponentScore = isHomeTeam ? match.awayScore : match.homeScore;
            
            if (teamScore > opponentScore) {
                return 'win';
            } else if (teamScore < opponentScore) {
                return 'loss';
            } else {
                return 'draw';
            }
        }
    }
    
    return null; // No live game
}

function getTeamLiveScore(teamName) {
    // Check fixtures for live matches
    for (let timeSlot of leagueData.fixturesData) {
        for (let match of timeSlot.matches) {
            if (match.status === 'live' && (match.homeTeam === teamName || match.awayTeam === teamName)) {
                const isHomeTeam = match.homeTeam === teamName;
                const teamScore = isHomeTeam ? match.homeScore : match.awayScore;
                const opponentScore = isHomeTeam ? match.awayScore : match.homeScore;
                const opponent = isHomeTeam ? match.awayTeam : match.homeTeam;
                
                return {
                    teamScore: teamScore,
                    opponentScore: opponentScore,
                    opponent: opponent,
                    isHome: isHomeTeam
                };
            }
        }
    }
    
    // Check knockout stages for live matches
    const allKnockoutMatches = [
        ...leagueData.knockout.quarterFinals,
        ...leagueData.knockout.semiFinals,
        ...leagueData.knockout.thirdPlace,
        ...leagueData.knockout.final
    ];
    
    for (let match of allKnockoutMatches) {
        if (match.status === 'live' && (match.homeTeam === teamName || match.awayTeam === teamName)) {
            const isHomeTeam = match.homeTeam === teamName;
            const teamScore = isHomeTeam ? match.homeScore : match.awayScore;
            const opponentScore = isHomeTeam ? match.awayScore : match.homeScore;
            const opponent = isHomeTeam ? match.awayTeam : match.homeTeam;
            
            return {
                teamScore: teamScore,
                opponentScore: opponentScore,
                opponent: opponent,
                isHome: isHomeTeam
            };
        }
    }
    
    return null;
}

function areAllGroupStageMatchesCompleted() {
    // Check all fixtures data for group stage matches
    for (let timeSlot of leagueData.fixturesData) {
        for (let match of timeSlot.matches) {
            // If any match is not completed, return false
            if (match.status !== 'completed') {
                return false;
            }
        }
    }
    return true;
}

function getCurrentKnockoutStage() {
    // Determine the current knockout stage based on match statuses
    const { quarterFinals, semiFinals, thirdPlace, final } = leagueData.knockout;
    
    // Check if final is completed
    if (final[0].status === 'completed') {
        return { stage: 'final', title: 'Final', matches: final };
    }
    
    // Check if third place playoff is completed or in progress
    if (thirdPlace[0].status === 'completed' || thirdPlace[0].status === 'live') {
        return { stage: 'thirdPlace', title: 'Third Place Playoff', matches: thirdPlace };
    }
    
    // Check if semi-finals are completed or in progress
    const semiFinalsCompleted = semiFinals.every(match => match.status === 'completed');
    const semiFinalsInProgress = semiFinals.some(match => match.status === 'live' || match.status === 'completed');
    
    if (semiFinalsCompleted) {
        return { stage: 'thirdPlace', title: 'Third Place Playoff', matches: thirdPlace };
    } else if (semiFinalsInProgress) {
        return { stage: 'semiFinals', title: 'Semi Finals', matches: semiFinals };
    }
    
    // Check if quarter-finals are completed or in progress
    const quarterFinalsCompleted = quarterFinals.every(match => match.status === 'completed');
    const quarterFinalsInProgress = quarterFinals.some(match => match.status === 'live' || match.status === 'completed');
    
    if (quarterFinalsCompleted) {
        return { stage: 'semiFinals', title: 'Semi Finals', matches: semiFinals };
    } else if (quarterFinalsInProgress) {
        return { stage: 'quarterFinals', title: 'Quarter Finals', matches: quarterFinals };
    }
    
    // Default to quarter finals if no matches have started
    return { stage: 'quarterFinals', title: 'Quarter Finals', matches: quarterFinals };
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
    
    // Get all completed and live matches for the team
    leagueData.fixturesData.forEach(timeSlot => {
        timeSlot.matches.forEach(match => {
            if ((match.status === 'completed' || match.status === 'live') && (match.homeTeam === teamName || match.awayTeam === teamName)) {
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
        if ((match.status === 'completed' || match.status === 'live') && (match.homeTeam === teamName || match.awayTeam === teamName)) {
            allMatches.push(match);
        }
    });
    
    // Get last 3 matches
    const recentMatches = allMatches.slice(-3);
    
    if (recentMatches.length === 0) return 'No matches played';
    
    return recentMatches.map(match => {
        if (match.status === 'live') {
            // Show "-" for live matches (pending)
            return '<span class="form-pending">-</span>';
        } else if (match.status === 'completed') {
            // Show result for completed matches
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
        }
        return '';
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
        let teamMatches = teamName.includes(searchTerm) || teamId.includes(searchTerm);
        
        // Also search through players in the squad
        let playerMatches = false;
        const playerItems = card.querySelectorAll('.player-item');
        
        // Clear all highlights first
        playerItems.forEach(playerItem => {
            playerItem.classList.remove('search-highlight');
        });
        
        if (searchTerm.length > 0) {
            playerItems.forEach(playerItem => {
                const playerName = playerItem.querySelector('.player-name')?.textContent.toLowerCase() || '';
                const playerPosition = playerItem.querySelector('.player-position')?.textContent.toLowerCase() || '';
                const playerNumber = playerItem.querySelector('.player-number')?.textContent.toLowerCase() || '';
                
                if (playerName.includes(searchTerm) || 
                    playerPosition.includes(searchTerm) || 
                    playerNumber.includes(searchTerm)) {
                    playerMatches = true;
                    playerItem.classList.add('search-highlight');
                }
            });
            
            // Auto-expand team card and switch to squad tab if players match
            if (playerMatches) {
                const teamId = card.id.replace('team-', '');
                const details = document.getElementById(`details-${teamId}`);
                const button = details?.nextElementSibling;
                
                // Expand the team details if not already expanded
                if (details && !details.classList.contains('expanded')) {
                    details.classList.add('expanded');
                    if (button) {
                        const text = button.querySelector('.read-more-text');
                        const icon = button.querySelector('.read-more-icon');
                        if (text) text.textContent = 'Read Less';
                        if (icon) icon.textContent = '▲';
                    }
                }
                
                // Switch to squad tab
                switchTab(teamId, 'squad');
                
                // Auto-scroll to the first highlighted player after a short delay
                setTimeout(() => {
                    // First, ensure the team card is visible
                    card.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest'
                    });
                    
                    // Then scroll to the first highlighted player
                    setTimeout(() => {
                        const firstHighlightedPlayer = card.querySelector('.player-item.search-highlight');
                        if (firstHighlightedPlayer) {
                            firstHighlightedPlayer.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center',
                                inline: 'nearest'
                            });
                        }
                    }, 200); // Additional delay to let team card scroll complete
                }, 100); // Small delay to ensure tab switch and expansion are complete
            }
        }
        
        if (teamMatches || playerMatches) {
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
    
    // If search is cleared, collapse all expanded team cards
    if (searchTerm.length === 0) {
        teamCards.forEach(card => {
            const teamId = card.id.replace('team-', '');
            const details = document.getElementById(`details-${teamId}`);
            const button = details?.nextElementSibling;
            
            if (details && details.classList.contains('expanded')) {
                details.classList.remove('expanded');
                if (button) {
                    const text = button.querySelector('.read-more-text');
                    const icon = button.querySelector('.read-more-icon');
                    if (text) text.textContent = 'Read More';
                    if (icon) icon.textContent = '▼';
                }
            }
        });
    }
    
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
                <p class="no-results-suggestion">Try searching by team name, player name, position, or jersey number</p>
            </div>
        `;
        teamsContainer.appendChild(noResultsMessage);
    }
}

function navigateToSearchPage() {
    // Navigate to search page immediately when tapped/focused
    loadPage('search');
    
    // Wait for page to load, then focus the search input
    setTimeout(() => {
        const globalSearchInput = document.getElementById('globalSearch');
        if (globalSearchInput) {
            globalSearchInput.focus();
        }
    }, 100);
}

function searchSuggestion(searchTerm) {
    // Navigate to search page if not already there
    if (currentPage !== 'search') {
        loadPage('search');
    }
    
    // Wait for page to load, then populate search and trigger results
    setTimeout(() => {
        const globalSearchInput = document.getElementById('globalSearch');
        if (globalSearchInput) {
            // Set the search term
            globalSearchInput.value = searchTerm;
            
            // Trigger the search
            performGlobalSearch();
        }
    }, 100);
}

function getPlayerNews(playerName, playerStat, teamName, isCaptain) {
    const news = [];
    
    // Check if the player's team has played any matches (completed or live)
    const teamHasPlayedMatches = leagueData.fixturesData.some(timeSlot => 
        timeSlot.matches.some(match => 
            (match.homeTeam === teamName || match.awayTeam === teamName) && 
            (match.status === 'completed' || match.status === 'live')
        )
    );
    
    // If team hasn't played any matches yet, show tournament status message
    if (!teamHasPlayedMatches) {
        news.push({
            icon: 'form',
            iconText: 'T',
            title: 'Tournament Status',
            description: `${teamName} hasn't played any matches yet. Updates will appear here once the team's matches begin.`,
            time: 'Tournament info'
        });
        
        // Still show captain status if applicable
        if (isCaptain) {
            news.push({
                icon: 'award',
                iconText: 'C',
                title: 'Team Captain',
                description: `Leading ${teamName} as captain, bringing experience and leadership to the squad.`,
                time: 'Current role'
            });
        }
        
        return news;
    }
    
    // Recent form based on stats
    if (playerStat.goals > 0) {
        news.push({
            icon: 'goal',
            iconText: 'G',
            title: 'Goal Scorer',
            description: `Scored ${playerStat.goals} goal${playerStat.goals > 1 ? 's' : ''} this tournament, showing excellent finishing ability.`,
            time: 'Recent form'
        });
    }
    
    if (playerStat.assists > 0) {
        news.push({
            icon: 'match',
            iconText: 'A',
            title: 'Creative Playmaker',
            description: `Provided ${playerStat.assists} assist${playerStat.assists > 1 ? 's' : ''}, demonstrating great vision and passing ability.`,
            time: 'Recent form'
        });
    }
    
    // Captain status
    if (isCaptain) {
        news.push({
            icon: 'award',
            iconText: 'C',
            title: 'Team Captain',
            description: `Leading ${teamName} as captain, bringing experience and leadership to the squad.`,
            time: 'Current role'
        });
    }
    
    // Match appearances
    if (playerStat.matches > 0) {
        const matchText = playerStat.matches === 1 ? 'match' : 'matches';
        news.push({
            icon: 'match',
            iconText: 'M',
            title: 'Active Player',
            description: `Featured in ${playerStat.matches} ${matchText} this tournament, showing consistent availability.`,
            time: 'Tournament record'
        });
    }
    
    // Discipline record
    if (playerStat.yellowCards === 0 && playerStat.redCards === 0) {
        news.push({
            icon: 'form',
            iconText: '✓',
            title: 'Clean Record',
            description: 'Maintained excellent discipline with no cards received this tournament.',
            time: 'Discipline'
        });
    } else if (playerStat.yellowCards > 0) {
        news.push({
            icon: 'form',
            iconText: '!',
            title: 'Discipline Note',
            description: `Received ${playerStat.yellowCards} yellow card${playerStat.yellowCards > 1 ? 's' : ''} this tournament.`,
            time: 'Discipline'
        });
    }
    
    // Goalkeeper specific news
    if (playerStat.cleanSheets > 0) {
        news.push({
            icon: 'award',
            iconText: 'S',
            title: 'Defensive Wall',
            description: `Kept ${playerStat.cleanSheets} clean sheet${playerStat.cleanSheets > 1 ? 's' : ''}, showing excellent goalkeeping skills.`,
            time: 'Recent form'
        });
    }
    
    // Return top 3 most relevant news items
    return news.slice(0, 3);
}

function getTeamNews(teamName, teamStats, teamPosition) {
    const news = [];
    
    // Check if the team has played any matches (completed or live)
    const teamHasPlayedMatches = leagueData.fixturesData.some(timeSlot => 
        timeSlot.matches.some(match => 
            (match.homeTeam === teamName || match.awayTeam === teamName) && 
            (match.status === 'completed' || match.status === 'live')
        )
    );
    
    // If team hasn't played any matches yet, show tournament status message
    if (!teamHasPlayedMatches) {
        news.push({
            icon: 'form',
            iconText: 'T',
            title: 'Tournament Status',
            description: `${teamName} hasn't played any matches yet. Updates will appear here once the team's matches begin.`,
            time: 'Tournament info'
        });
        
        return news;
    }
    
    // League position
    if (teamPosition) {
        const positionText = teamPosition === 1 ? '1st' : teamPosition === 2 ? '2nd' : teamPosition === 3 ? '3rd' : `${teamPosition}th`;
        news.push({
            icon: 'award',
            iconText: 'P',
            title: 'League Position',
            description: `Currently in ${positionText} place with ${teamStats.points} points from ${teamStats.played} matches.`,
            time: 'Current standing'
        });
    }
    
    // Recent form based on results
    if (teamStats.won > 0) {
        news.push({
            icon: 'goal',
            iconText: 'W',
            title: 'Winning Form',
            description: `Won ${teamStats.won} match${teamStats.won > 1 ? 'es' : ''} this tournament, showing strong competitive spirit.`,
            time: 'Recent form'
        });
    }
    
    // Goal scoring ability
    if (teamStats.goalsFor > 0) {
        news.push({
            icon: 'match',
            iconText: 'G',
            title: 'Attacking Threat',
            description: `Scored ${teamStats.goalsFor} goal${teamStats.goalsFor > 1 ? 's' : ''} this tournament, demonstrating good attacking play.`,
            time: 'Attacking stats'
        });
    }
    
    // Defensive record
    if (teamStats.goalsAgainst === 0 && teamStats.played > 0) {
        news.push({
            icon: 'form',
            iconText: 'D',
            title: 'Solid Defense',
            description: 'Conceded no goals so far, showing excellent defensive organization.',
            time: 'Defensive record'
        });
    } else if (teamStats.goalsAgainst > 0) {
        const goalDiff = teamStats.goalsFor - teamStats.goalsAgainst;
        if (goalDiff > 0) {
            news.push({
                icon: 'form',
                iconText: '+',
                title: 'Positive Goal Difference',
                description: `Goal difference of +${goalDiff}, showing good balance between attack and defense.`,
                time: 'Team balance'
            });
        }
    }
    
    // Match consistency
    if (teamStats.played > 0) {
        news.push({
            icon: 'match',
            iconText: 'M',
            title: 'Active Participation',
            description: `Played ${teamStats.played} match${teamStats.played > 1 ? 'es' : ''} this tournament, showing consistent participation.`,
            time: 'Tournament record'
        });
    }
    
    // Return top 3 most relevant news items
    return news.slice(0, 3);
}

function performDesktopSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();
    
    if (searchTerm.length === 0) {
        return;
    }
    
    // Navigate to search page and perform search
    loadPage('search');
    
    // Wait for page to load, then set the search term and perform search
    setTimeout(() => {
        const globalSearchInput = document.getElementById('globalSearch');
        if (globalSearchInput) {
            globalSearchInput.value = searchTerm;
            performGlobalSearch();
        }
    }, 100);
}

function performMobileSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();
    
    if (searchTerm.length === 0) {
        return;
    }
    
    // Navigate to search page and perform search
    loadPage('search');
    
    // Wait for page to load, then set the search term and perform search
    setTimeout(() => {
        const globalSearchInput = document.getElementById('globalSearch');
        if (globalSearchInput) {
            globalSearchInput.value = searchTerm;
            performGlobalSearch();
        }
    }, 100);
}

function getPlayerAwards(playerName) {
    const awards = [];
    
    // Check if player is Player of the Tournament
    if (leagueData.tournamentAwards.playerOfTheTournament === playerName) {
        awards.push("Player of the Tournament");
    }
    
    // Check if player is in Team of the Tournament
    if (leagueData.tournamentAwards.teamOfTheTournament && 
        leagueData.tournamentAwards.teamOfTheTournament.includes(playerName)) {
        awards.push("Team of the Tournament");
    }
    
    // Check for top scorer
    const playerStats = calculatePlayerStats();
    const topScorers = getTopScorers(playerStats);
    if (topScorers.length > 0 && topScorers[0].name === playerName) {
        awards.push("Top Scorer");
    }
    
    // Check for top assists
    const topAssists = getTopAssists(playerStats);
    if (topAssists.length > 0 && topAssists[0].name === playerName) {
        awards.push("Top Assists");
    }
    
    return awards;
}

function performGlobalSearch() {
    const searchInput = document.getElementById('globalSearch');
    const searchTerm = searchInput.value.toLowerCase().trim();
    const resultsContainer = document.getElementById('searchResultsContainer');
    
    if (searchTerm.length === 0) {
        // Show placeholder when search is empty
        resultsContainer.innerHTML = `
            <div class="search-placeholder">
                <div class="search-placeholder-content">
                    <h3>Search Everything</h3>
                    <p>Search across all teams, players, positions, and matches in the tournament</p>
                    <div class="search-suggestions">
                        <div class="suggestion-category">
                            <h4>Teams</h4>
                            <span class="suggestion-tag" onclick="searchSuggestion('Mbarara')">Mbarara</span>
                            <span class="suggestion-tag" onclick="searchSuggestion('Gulu')">Gulu</span>
                            <span class="suggestion-tag" onclick="searchSuggestion('Arua')">Arua</span>
                        </div>
                        <div class="suggestion-category">
                            <h4>Players</h4>
                            <span class="suggestion-tag" onclick="searchSuggestion('Van')">Van</span>
                            <span class="suggestion-tag" onclick="searchSuggestion('Afande')">Afande</span>
                            <span class="suggestion-tag" onclick="searchSuggestion('Salam')">Salam</span>
                        </div>
                        <div class="suggestion-category">
                            <h4>Positions</h4>
                            <span class="suggestion-tag" onclick="searchSuggestion('Forward')">Forward</span>
                            <span class="suggestion-tag" onclick="searchSuggestion('Midfielder')">Midfielder</span>
                            <span class="suggestion-tag" onclick="searchSuggestion('Goalkeeper')">Goalkeeper</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return;
    }
    
    // Collect all teams data
    const teams = leagueData.teams;
    const playerStats = calculatePlayerStats();
    const standings = calculateStandings();
    
    // Search results
    const teamResults = [];
    const playerResults = [];
    const matchResults = [];
    
    // Search teams
    teams.forEach(team => {
        if (team.name.toLowerCase().includes(searchTerm) || 
            team.id.toLowerCase().includes(searchTerm) ||
            team.captain.toLowerCase().includes(searchTerm)) {
            teamResults.push({
                type: 'team',
                data: team,
                matchType: 'name'
            });
        }
        
        // Search players in team
        if (team.squad) {
            team.squad.forEach(player => {
                if (player.name.toLowerCase().includes(searchTerm) ||
                    player.position.toLowerCase().includes(searchTerm) ||
                    player.number.toString().includes(searchTerm)) {
                    playerResults.push({
                        type: 'player',
                        data: player,
                        team: team,
                        matchType: player.name.toLowerCase().includes(searchTerm) ? 'name' : 
                                  player.position.toLowerCase().includes(searchTerm) ? 'position' : 'number'
                    });
                }
            });
        }
    });
    
    // Search matches
    leagueData.fixturesData.forEach(timeSlot => {
        timeSlot.matches.forEach(match => {
            if (match.homeTeam.toLowerCase().includes(searchTerm) ||
                match.awayTeam.toLowerCase().includes(searchTerm)) {
                matchResults.push({
                    type: 'match',
                    data: match,
                    timeSlot: timeSlot.time
                });
            }
        });
    });
    
    // Display results
    displayGlobalSearchResults(teamResults, playerResults, matchResults, searchTerm);
}

function displayGlobalSearchResults(teamResults, playerResults, matchResults, searchTerm) {
    const resultsContainer = document.getElementById('searchResultsContainer');
    const totalResults = teamResults.length + playerResults.length + matchResults.length;
    
    if (totalResults === 0) {
        resultsContainer.innerHTML = `
            <div class="search-placeholder">
                <div class="search-placeholder-content">
                    <h3>No Results Found</h3>
                    <p>No matches found for "<strong>${searchTerm}</strong>"</p>
                    <p>Try searching for team names, player names, positions, or jersey numbers</p>
                </div>
            </div>
        `;
        return;
    }
    
    let resultsHTML = `
        <div class="search-results">
            <div class="search-results-header">
                <h3>Search Results for "${searchTerm}"</h3>
                <p>Found ${totalResults} result${totalResults !== 1 ? 's' : ''}</p>
            </div>
    `;
    
    // Display team results
    if (teamResults.length > 0) {
        resultsHTML += `
            <div class="results-section">
                <h4 class="results-section-title">Teams (${teamResults.length})</h4>
                <div class="team-results-grid">
                    ${teamResults.map(result => {
                        const standings = calculateStandings();
                        const teamStanding = standings.find(team => team.name === result.data.name);
                        const teamPosition = teamStanding ? standings.indexOf(teamStanding) + 1 : null;
                        const teamStats = teamStanding || {
                            points: 0,
                            played: 0,
                            won: 0,
                            drawn: 0,
                            lost: 0,
                            goalsFor: 0,
                            goalsAgainst: 0
                        };
                        const goalDifference = teamStats.goalsFor - teamStats.goalsAgainst;
                        const squadSize = result.data.squad ? result.data.squad.length : 0;
                        
                        return `
                            <div class="team-profile-card">
                                <div class="team-profile-header">
                                    <div class="team-logo-large">
                                        ${getTeamLogoElement(result.data.id, '60px')}
                                        ${teamPosition ? `<div class="team-position-badge">#${teamPosition}</div>` : ''}
                                    </div>
                                    <div class="team-basic-info">
                                        <h3 class="team-name">${result.data.name}</h3>
                                        <p class="team-captain">Captain: ${result.data.captain}</p>
                                        <div class="team-details">
                                            <span class="team-founded">Founded: ${result.data.founded || 'N/A'}</span>
                                            <span class="team-stadium">Stadium: ${result.data.stadium || 'N/A'}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="team-stats-section">
                                    <h4>Tournament Performance</h4>
                                    <div class="team-stats-grid">
                                        <div class="team-stat-item">
                                            <span class="team-stat-value">${teamStats.points}</span>
                                            <span class="team-stat-label">Points</span>
                                        </div>
                                        <div class="team-stat-item">
                                            <span class="team-stat-value">${teamStats.played}</span>
                                            <span class="team-stat-label">Matches</span>
                                        </div>
                                        <div class="team-stat-item">
                                            <span class="team-stat-value">${teamStats.won}</span>
                                            <span class="team-stat-label">Won</span>
                                        </div>
                                        <div class="team-stat-item">
                                            <span class="team-stat-value">${teamStats.drawn}</span>
                                            <span class="team-stat-label">Drawn</span>
                                        </div>
                                        <div class="team-stat-item">
                                            <span class="team-stat-value">${teamStats.lost}</span>
                                            <span class="team-stat-label">Lost</span>
                                        </div>
                                        <div class="team-stat-item">
                                            <span class="team-stat-value">${teamStats.goalsFor}</span>
                                            <span class="team-stat-label">Goals For</span>
                                        </div>
                                        <div class="team-stat-item">
                                            <span class="team-stat-value">${teamStats.goalsAgainst}</span>
                                            <span class="team-stat-label">Goals Against</span>
                                        </div>
                                        <div class="team-stat-item">
                                            <span class="team-stat-value">${goalDifference >= 0 ? '+' : ''}${goalDifference}</span>
                                            <span class="team-stat-label">Goal Diff</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="team-squad-section">
                                    <h4>Squad Information</h4>
                                    <div class="squad-info">
                                        <div class="squad-stat">
                                            <span class="squad-value">${squadSize}</span>
                                            <span class="squad-label">Total Players</span>
                                        </div>
                                        <div class="squad-stat">
                                            <span class="squad-value">${result.data.squad ? result.data.squad.filter(p => p.position === 'Goalkeeper').length : 0}</span>
                                            <span class="squad-label">Goalkeepers</span>
                                        </div>
                                        <div class="squad-stat">
                                            <span class="squad-value">${result.data.squad ? result.data.squad.filter(p => p.position === 'Defender').length : 0}</span>
                                            <span class="squad-label">Defenders</span>
                                        </div>
                                        <div class="squad-stat">
                                            <span class="squad-value">${result.data.squad ? result.data.squad.filter(p => p.position === 'Midfielder').length : 0}</span>
                                            <span class="squad-label">Midfielders</span>
                                        </div>
                                        <div class="squad-stat">
                                            <span class="squad-value">${result.data.squad ? result.data.squad.filter(p => p.position === 'Forward').length : 0}</span>
                                            <span class="squad-label">Forwards</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="team-news-section">
                                    <h4>Latest Updates</h4>
                                    <div class="news-list">
                                        ${getTeamNews(result.data.name, teamStats, teamPosition).map(newsItem => `
                                            <div class="news-item">
                                                <div class="news-icon ${newsItem.icon}">${newsItem.iconText}</div>
                                                <div class="news-content">
                                                    <div class="news-title">${newsItem.title}</div>
                                                    <div class="news-description">${newsItem.description}</div>
                                                    <div class="news-time">${newsItem.time}</div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                                
                                <div class="team-actions">
                                    <button class="view-squad-btn" onclick="loadPage('teams')">
                                        View Full Squad
                                    </button>
                                    <button class="view-fixtures-btn" onclick="loadPage('fixtures')">
                                        View Fixtures
                                    </button>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }
    
    // Display player results
    if (playerResults.length > 0) {
        resultsHTML += `
            <div class="results-section">
                <h4 class="results-section-title">Players (${playerResults.length})</h4>
                <div class="player-results-grid">
                    ${playerResults.map(result => {
                                    const playerStat = calculatePlayerStats()[result.data.id] || {
                                        goals: 0,
                                        assists: 0,
                                        yellowCards: 0,
                                        redCards: 0,
                                        cleanSheets: 0,
                                        matches: 0
                                    };
                                    
                                    // Calculate player points
                                    const position = result.data.position.toLowerCase();
                                    let goalPoints = 0;
                                    if (position === 'goalkeeper') goalPoints = 10;
                                    else if (position === 'defender') goalPoints = 6;
                                    else if (position === 'midfielder') goalPoints = 5;
                                    else if (position === 'forward' || position === 'striker') goalPoints = 4;
                                    else goalPoints = 4;
                                    
                                    const totalPoints = (playerStat.goals * goalPoints) + 
                                                      (playerStat.assists * 3) + 
                                                      ((position === 'goalkeeper' || position === 'defender') ? playerStat.cleanSheets * 4 : 0) + 
                                                      (playerStat.matches * 1) + 
                                                      (playerStat.yellowCards * -1) + 
                                                      (playerStat.redCards * -2) +
                                                      ((playerStat.ownGoals || 0) * -2); // Deduct 2 points for each own goal
                        const isCaptain = result.team.captain === result.data.name;
                        const standings = calculateStandings();
                        const teamStanding = standings.find(team => team.name === result.team.name);
                        const teamPosition = teamStanding ? standings.indexOf(teamStanding) + 1 : null;
                        const playerAwards = getPlayerAwards(result.data.name);
                        
                        return `
                            <div class="player-profile-card">
                                <div class="player-profile-header">
                                    <div class="player-avatar">
                                        <div class="player-number-large">${result.data.number}</div>
                                        ${isCaptain ? '<div class="captain-badge">C</div>' : ''}
                                    </div>
                                    <div class="player-basic-info">
                                        <h3 class="player-name">${result.data.name}</h3>
                                        <p class="player-position">${result.data.position}</p>
                                        <div class="player-team-info">
                                            ${getTeamLogoElement(result.team.id, '24px')}
                                            <span class="team-name">${result.team.name}</span>
                                            ${teamPosition ? `<span class="team-position">#${teamPosition}</span>` : ''}
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="player-stats-section">
                                    <h4>Tournament Stats</h4>
                                    <div class="stats-grid">
                                        <div class="stat-item">
                                            <span class="stat-value">${playerStat.goals}</span>
                                            <span class="stat-label">Goals</span>
                                        </div>
                                        <div class="stat-item">
                                            <span class="stat-value">${playerStat.assists}</span>
                                            <span class="stat-label">Assists</span>
                                        </div>
                                        <div class="stat-item">
                                            <span class="stat-value">${playerStat.matches}</span>
                                            <span class="stat-label">Matches</span>
                                        </div>
                                        <div class="stat-item points-highlight">
                                            <span class="stat-value">${totalPoints}</span>
                                            <span class="stat-label">Points</span>
                                        </div>
                                        <div class="stat-item">
                                            <span class="stat-value">${playerStat.yellowCards}</span>
                                            <span class="stat-label">Yellow Cards</span>
                                        </div>
                                        <div class="stat-item">
                                            <span class="stat-value">${playerStat.redCards}</span>
                                            <span class="stat-label">Red Cards</span>
                                        </div>
                                        <div class="stat-item">
                                            <span class="stat-value">${playerStat.ownGoals || 0}</span>
                                            <span class="stat-label">Own Goals</span>
                                        </div>
                                        ${result.data.position === 'Goalkeeper' ? `
                                        <div class="stat-item">
                                            <span class="stat-value">${playerStat.cleanSheets}</span>
                                            <span class="stat-label">Clean Sheets</span>
                                        </div>
                                        ` : ''}
                                    </div>
                                </div>
                                
                                ${playerAwards.length > 0 ? `
                                <div class="player-awards-section">
                                    <h4>Awards & Achievements</h4>
                                    <div class="awards-list">
                                        ${playerAwards.map(award => `
                                            <div class="award-item">
                                                <span class="award-icon">🏆</span>
                                                <span class="award-text">${award}</span>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                                ` : ''}
                                
                                <div class="player-news-section">
                                    <h4>Recent Updates</h4>
                                    <div class="news-list">
                                        ${getPlayerNews(result.data.name, playerStat, result.team.name, isCaptain).map(newsItem => `
                                            <div class="news-item">
                                                <div class="news-icon ${newsItem.icon}">${newsItem.iconText}</div>
                                                <div class="news-content">
                                                    <div class="news-title">${newsItem.title}</div>
                                                    <div class="news-description">${newsItem.description}</div>
                                                    <div class="news-time">${newsItem.time}</div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                                
                                <div class="player-actions">
                                    <button class="view-team-btn" onclick="loadPage('teams')">
                                        View Team
                                    </button>
                                    <button class="view-stats-btn" onclick="loadPage('stats')">
                                        View All Stats
                                    </button>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }
    
    // Display match results
    if (matchResults.length > 0) {
        resultsHTML += `
            <div class="results-section">
                <h4 class="results-section-title">Matches (${matchResults.length})</h4>
                <div class="results-grid">
                    ${matchResults.map(result => `
                        <div class="result-card match-result" onclick="loadPage('fixtures')">
                            <div class="result-header">
                                <div class="result-info">
                                    <h5>${result.data.homeTeam} vs ${result.data.awayTeam}</h5>
                                    <p>${result.timeSlot}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    resultsHTML += `</div>`;
    resultsContainer.innerHTML = resultsHTML;
}

function calculatePlayerPoints() {
    const playerStats = calculatePlayerStats();
    const points = [];
    
    // Updated Points system:
    // Goals by position: Goalkeeper 10, Defender 6, Midfielder 5, Forward/Striker 4
    // Assist: 3 points flat
    // Clean Sheet: 4 points for Goalkeeper and Defender only
    // Yellow Card: -1 point
    // Red Card: -2 points
    // Own Goal: -2 points
    // Match Played: 1 point
    
    for (const [playerId, stats] of Object.entries(playerStats)) {
        const player = leagueData.teams.flatMap(team => team.squad).find(p => p.id === playerId);
        if (!player) continue;
        
        let totalPoints = 0;
        
        // Goals by position
        const position = player.position.toLowerCase();
        let goalPoints = 0;
        if (position === 'goalkeeper') {
            goalPoints = 10;
        } else if (position === 'defender') {
            goalPoints = 6;
        } else if (position === 'midfielder') {
            goalPoints = 5;
        } else if (position === 'forward' || position === 'striker') {
            goalPoints = 4;
        } else {
            goalPoints = 4; // Default for other positions
        }
        totalPoints += stats.goals * goalPoints;
        
        // Assists (3 points flat)
        totalPoints += stats.assists * 3;
        
        // Clean Sheets (only for Goalkeeper and Defender)
        if (position === 'goalkeeper' || position === 'defender') {
            totalPoints += stats.cleanSheets * 4;
        }
        
        // Cards
        totalPoints -= stats.yellowCards * 1; // Yellow Cards
        totalPoints -= stats.redCards * 2; // Red Cards (updated from -3 to -2)
        
        // Own Goals (-2 points each)
        totalPoints -= (stats.ownGoals || 0) * 2; // Deduct 2 points for each own goal
        
        // Match Played
        totalPoints += stats.matches * 1;
        
        points.push({
            name: player.name,
            team: leagueData.teams.find(team => team.squad.some(p => p.id === playerId))?.name || 'Unknown',
            position: player.position,
            points: totalPoints,
            goals: stats.goals,
            assists: stats.assists,
            cleanSheets: stats.cleanSheets,
            yellowCards: stats.yellowCards,
            redCards: stats.redCards,
            matches: stats.matches
        });
    }
    
    return points.sort((a, b) => b.points - a.points);
}

function generateStatsPage() {
    const playerStats = calculatePlayerStats();
    const matchStats = calculateMatchStats();
    
    // Check if there are any completed matches
    if (matchStats.completedMatches === 0) {
    return `
        <div class="stats-page-container">
        <h2 class="page-title">Statistics</h2>
        
            <div class="stats-pending">
                <div class="stats-pending-content">
                    <div class="stats-pending-icon">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="rgba(0, 255, 133, 0.3)" stroke-width="2"/>
                            <path d="M12 6v6l4 2" stroke="rgba(0, 255, 133, 0.5)" stroke-width="2" stroke-linecap="round"/>
                        </svg>
            </div>
                    <h3 class="stats-pending-title">Statistics Coming Soon</h3>
                    <p class="stats-pending-message">
                        Player statistics and performance data will be available once matches begin and are completed.
                    </p>
                    <div class="stats-pending-details">
                        <p>Check back after the first games to see:</p>
                        <ul>
                            <li>Top Scorers</li>
                            <li>Assist Leaders</li>
                            <li>Clean Sheet Records</li>
                            <li>Disciplinary Records</li>
                        </ul>
            </div>
            </div>
            </div>
        </div>
        `;
    }
    
    const topScorers = getTopScorers(playerStats);
    const topAssists = getTopAssists(playerStats);
    const mostYellowCards = getMostYellowCards(playerStats);
    const mostRedCards = getMostRedCards(playerStats);
    const topCleanSheets = getTopCleanSheets(playerStats);
    const playerPoints = calculatePlayerPoints();
    
    return `
        <div class="stats-page-container">
            <h2 class="page-title">Statistics</h2>

            <div class="stats-tabs">
                <button class="stats-tab active" onclick="switchStatsTab('statistics')">Statistics</button>
                <button class="stats-tab" onclick="switchStatsTab('points')">Player Points</button>
                </div>
            
            <div class="stats-tab-content" id="statistics-tab">

            <h3 class="stats-section-title">Top Scorers</h3>
            <table class="stats-table goals-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Players</th>
                        <th>Matches</th>
                        <th>Goals</th>
                    </tr>
                </thead>
                <tbody>
                    ${topScorers.slice(0, 5).map((player, index) => `
                        <tr>
                            <td><div class="rank-badge">${index + 1}</div></td>
                            <td><div class="player-name">${player.name}</div></td>
                            <td class="stat-value">${player.matches}</td>
                            <td class="stat-value">${player.goals}</td>
                        </tr>
                    `).join('')}
                    ${topScorers.length > 5 ? `
                        <tbody class="hidden-stats" id="scorers-more">
                            ${topScorers.slice(5).map((player, index) => `
                                <tr>
                                    <td><div class="rank-badge">${index + 6}</div></td>
                                    <td><div class="player-name">${player.name}</div></td>
                                    <td class="stat-value">${player.matches}</td>
                                    <td class="stat-value">${player.goals}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    ` : ''}
                </tbody>
            </table>
            ${topScorers.length > 5 ? `
                <div class="read-more-container">
                    <button class="read-more-btn" onclick="toggleStats('scorers-more', this)">
                        <span>Read More</span>
                        <svg class="read-more-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
            </div>
            ` : ''}
            
            <h3 class="stats-section-title">Top Assists</h3>
            <table class="stats-table assists-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Players</th>
                        <th>Matches</th>
                        <th>Assists</th>
                    </tr>
                </thead>
                <tbody>
                    ${topAssists.slice(0, 5).map((player, index) => `
                        <tr>
                            <td><div class="rank-badge">${index + 1}</div></td>
                            <td><div class="player-name">${player.name}</div></td>
                            <td class="stat-value">${player.matches}</td>
                            <td class="stat-value">${player.assists}</td>
                        </tr>
                    `).join('')}
                    ${topAssists.length > 5 ? `
                        <tbody class="hidden-stats" id="assists-more">
                            ${topAssists.slice(5).map((player, index) => `
                                <tr>
                                    <td><div class="rank-badge">${index + 6}</div></td>
                                    <td><div class="player-name">${player.name}</div></td>
                                    <td class="stat-value">${player.matches}</td>
                                    <td class="stat-value">${player.assists}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    ` : ''}
                </tbody>
            </table>
            ${topAssists.length > 5 ? `
                <div class="read-more-container">
                    <button class="read-more-btn" onclick="toggleStats('assists-more', this)">
                        <span>Read More</span>
                        <svg class="read-more-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
            </div>
            ` : ''}
            
            <h3 class="stats-section-title">Most Clean Sheets</h3>
            <table class="stats-table cleanSheets-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Players</th>
                        <th>Matches</th>
                        <th>Clean Sheets</th>
                    </tr>
                </thead>
                <tbody>
                    ${topCleanSheets.slice(0, 5).map((player, index) => `
                        <tr>
                            <td><div class="rank-badge">${index + 1}</div></td>
                            <td><div class="player-name">${player.name}</div></td>
                            <td class="stat-value">${player.matches}</td>
                            <td class="stat-value">${player.cleanSheets}</td>
                        </tr>
                    `).join('')}
                    ${topCleanSheets.length > 5 ? `
                        <tbody class="hidden-stats" id="cleanSheets-more">
                            ${topCleanSheets.slice(5).map((player, index) => `
                                <tr>
                                    <td><div class="rank-badge">${index + 6}</div></td>
                                    <td><div class="player-name">${player.name}</div></td>
                                    <td class="stat-value">${player.matches}</td>
                                    <td class="stat-value">${player.cleanSheets}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    ` : ''}
                </tbody>
            </table>
            ${topCleanSheets.length > 5 ? `
                <div class="read-more-container">
                    <button class="read-more-btn" onclick="toggleStats('cleanSheets-more', this)">
                        <span>Read More</span>
                        <svg class="read-more-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            ` : ''}
            
            <h3 class="stats-section-title">Most Yellow Cards</h3>
            <table class="stats-table yellowCards-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Players</th>
                        <th>Matches</th>
                        <th>Yellow Cards</th>
                    </tr>
                </thead>
                <tbody>
                    ${mostYellowCards.slice(0, 5).map((player, index) => `
                        <tr>
                            <td><div class="rank-badge">${index + 1}</div></td>
                            <td><div class="player-name">${player.name}</div></td>
                            <td class="stat-value">${player.matches}</td>
                            <td class="stat-value">${player.yellowCards}</td>
                        </tr>
                    `).join('')}
                    ${mostYellowCards.length > 5 ? `
                        <tbody class="hidden-stats" id="yellowCards-more">
                            ${mostYellowCards.slice(5).map((player, index) => `
                                <tr>
                                    <td><div class="rank-badge">${index + 6}</div></td>
                                    <td><div class="player-name">${player.name}</div></td>
                                    <td class="stat-value">${player.matches}</td>
                                    <td class="stat-value">${player.yellowCards}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    ` : ''}
                </tbody>
            </table>
            ${mostYellowCards.length > 5 ? `
                <div class="read-more-container">
                    <button class="read-more-btn" onclick="toggleStats('yellowCards-more', this)">
                        <span>Read More</span>
                        <svg class="read-more-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
            </div>
            ` : ''}
            
            <h3 class="stats-section-title">Most Red Cards</h3>
            <table class="stats-table redCards-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Players</th>
                        <th>Matches</th>
                        <th>Red Cards</th>
                    </tr>
                </thead>
                <tbody>
                    ${mostRedCards.slice(0, 5).map((player, index) => `
                        <tr>
                            <td><div class="rank-badge">${index + 1}</div></td>
                            <td><div class="player-name">${player.name}</div></td>
                            <td class="stat-value">${player.matches}</td>
                            <td class="stat-value">${player.redCards}</td>
                        </tr>
                    `).join('')}
                    ${mostRedCards.length > 5 ? `
                        <tbody class="hidden-stats" id="redCards-more">
                            ${mostRedCards.slice(5).map((player, index) => `
                                <tr>
                                    <td><div class="rank-badge">${index + 6}</div></td>
                                    <td><div class="player-name">${player.name}</div></td>
                                    <td class="stat-value">${player.matches}</td>
                                    <td class="stat-value">${player.redCards}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    ` : ''}
                </tbody>
            </table>
            ${mostRedCards.length > 5 ? `
                <div class="read-more-container">
                    <button class="read-more-btn" onclick="toggleStats('redCards-more', this)">
                        <span>Read More</span>
                        <svg class="read-more-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
            </div>
            ` : ''}
            </div>
            
            <div class="stats-tab-content" id="points-tab" style="display: none;">
                <div class="points-system-info">
                    <h3 class="stats-section-title">Points System</h3>
                    <div class="points-breakdown">
                        <div class="points-item positive">
                            <span class="points-value">+10</span>
                            <span class="points-label">Goal (GK)</span>
                </div>
                        <div class="points-item positive">
                            <span class="points-value">+6</span>
                            <span class="points-label">Goal (DEF)</span>
                        </div>
                        <div class="points-item positive">
                            <span class="points-value">+5</span>
                            <span class="points-label">Goal (MID)</span>
                        </div>
                        <div class="points-item positive">
                            <span class="points-value">+4</span>
                            <span class="points-label">Goal (FWD)</span>
                        </div>
                        <div class="points-item positive">
                            <span class="points-value">+3</span>
                            <span class="points-label">Assist</span>
                        </div>
                        <div class="points-item positive">
                            <span class="points-value">+4</span>
                            <span class="points-label">Clean Sheet (GK/DEF)</span>
                        </div>
                        <div class="points-item positive">
                            <span class="points-value">+1</span>
                            <span class="points-label">Match Played</span>
                        </div>
                        <div class="points-item negative">
                            <span class="points-value">-1</span>
                            <span class="points-label">Yellow Card</span>
                        </div>
                        <div class="points-item negative">
                            <span class="points-value">-2</span>
                            <span class="points-label">Red Card</span>
                        </div>
                        <div class="points-item negative">
                            <span class="points-value">-2</span>
                            <span class="points-label">Own Goal</span>
                        </div>
                    </div>
            </div>
            
                <h3 class="stats-section-title">Player Points Leaderboard</h3>
                <table class="stats-table points-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Player</th>
                            <th>Team</th>
                            <th>Points</th>
                            <th>Goals</th>
                            <th>Assists</th>
                            <th>Clean Sheets</th>
                            <th>Cards</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${playerPoints.slice(0, 10).map((player, index) => `
                            <tr>
                                <td><div class="rank-badge">${index + 1}</div></td>
                                <td><div class="player-name clickable-player" onclick="showPlayerPointsDialog('${player.name}', '${player.team}', '${player.position}')">${player.name}</div></td>
                                <td><div class="team-name">${player.team}</div></td>
                                <td class="stat-value points-value">${player.points}</td>
                                <td class="stat-value">${player.goals}</td>
                                <td class="stat-value">${player.assists}</td>
                                <td class="stat-value">${player.cleanSheets}</td>
                                <td class="stat-value">
                                    ${player.yellowCards > 0 ? `<span class="yellow-cards">${player.yellowCards}Y</span>` : ''}
                                    ${player.redCards > 0 ? `<span class="red-cards">${player.redCards}R</span>` : ''}
                                    ${player.yellowCards === 0 && player.redCards === 0 ? '0' : ''}
                                </td>
                            </tr>
                        `).join('')}
                        ${playerPoints.length > 10 ? `
                            <tbody class="hidden-stats" id="points-more">
                                ${playerPoints.slice(10).map((player, index) => `
                                    <tr>
                                        <td><div class="rank-badge">${index + 11}</div></td>
                                        <td><div class="player-name clickable-player" onclick="showPlayerPointsDialog('${player.name}', '${player.team}', '${player.position}')">${player.name}</div></td>
                                        <td><div class="team-name">${player.team}</div></td>
                                        <td class="stat-value points-value">${player.points}</td>
                                        <td class="stat-value">${player.goals}</td>
                                        <td class="stat-value">${player.assists}</td>
                                        <td class="stat-value">${player.cleanSheets}</td>
                                        <td class="stat-value">
                                            ${player.yellowCards > 0 ? `<span class="yellow-cards">${player.yellowCards}Y</span>` : ''}
                                            ${player.redCards > 0 ? `<span class="red-cards">${player.redCards}R</span>` : ''}
                                            ${player.yellowCards === 0 && player.redCards === 0 ? '0' : ''}
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        ` : ''}
                    </tbody>
                </table>
                ${playerPoints.length > 10 ? `
                    <div class="read-more-container">
                        <button class="read-more-btn" onclick="toggleStats('points-more', this)">
                            <span>Read More</span>
                            <svg class="read-more-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                </div>
                ` : ''}
            </div>
        </div>
    `;
}

function getPlayerDetailedPoints(playerName, teamName, position) {
    console.log('getPlayerDetailedPoints called with:', playerName, teamName, position);
    const playerStats = calculatePlayerStats();
    console.log('Available teams:', leagueData.teams.map(t => t.name));
    const player = leagueData.teams.flatMap(team => team.squad.map(p => ({...p, teamName: team.name}))).find(p => p.name === playerName && p.teamName === teamName);
    console.log('Found player:', player);
    if (!player) {
        console.log('Player not found, trying alternative search...');
        // Try to find player by name only
        const altPlayer = leagueData.teams.flatMap(team => team.squad.map(p => ({...p, teamName: team.name}))).find(p => p.name === playerName);
        console.log('Alternative player found:', altPlayer);
        if (altPlayer) {
            console.log('Alternative team found:', altPlayer.teamName);
            return getPlayerDetailedPoints(playerName, altPlayer.teamName, position);
        }
        return null;
    }
    
    const stats = playerStats[player.id] || {
        goals: 0, assists: 0, cleanSheets: 0, yellowCards: 0, redCards: 0, matches: 0
    };
    
    // Get match details for this player
    const matchDetails = [];
    const actualTeamName = player.teamName || teamName;
    leagueData.fixturesData.forEach(timeSlot => {
        timeSlot.matches.forEach(match => {
            if (match.status === 'completed' && (match.homeTeam === actualTeamName || match.awayTeam === actualTeamName)) {
                const isHome = match.homeTeam === actualTeamName;
                const opponent = isHome ? match.awayTeam : match.homeTeam;
                const score = isHome ? `${match.homeScore}-${match.awayScore}` : `${match.awayScore}-${match.homeScore}`;
                const result = isHome ? 
                    (match.homeScore > match.awayScore ? 'W' : match.homeScore < match.awayScore ? 'L' : 'D') :
                    (match.awayScore > match.homeScore ? 'W' : match.awayScore < match.homeScore ? 'L' : 'D');
                
                matchDetails.push({
                    opponent,
                    score,
                    result,
                    date: timeSlot.date,
                    time: timeSlot.time
                });
            }
        });
    });
    
    // Calculate points breakdown
    const positionLower = position.toLowerCase();
    let goalPoints = 0;
    if (positionLower === 'goalkeeper') goalPoints = 10;
    else if (positionLower === 'defender') goalPoints = 6;
    else if (positionLower === 'midfielder') goalPoints = 5;
    else if (positionLower === 'forward' || positionLower === 'striker') goalPoints = 4;
    else goalPoints = 4;
    
    const breakdown = {
        goals: {
            count: stats.goals,
            pointsPer: goalPoints,
            total: stats.goals * goalPoints
        },
        assists: {
            count: stats.assists,
            pointsPer: 3,
            total: stats.assists * 3
        },
        cleanSheets: {
            count: stats.cleanSheets,
            pointsPer: (positionLower === 'goalkeeper' || positionLower === 'defender') ? 4 : 0,
            total: (positionLower === 'goalkeeper' || positionLower === 'defender') ? stats.cleanSheets * 4 : 0
        },
        matches: {
            count: stats.matches,
            pointsPer: 1,
            total: stats.matches * 1
        },
        yellowCards: {
            count: stats.yellowCards,
            pointsPer: -1,
            total: stats.yellowCards * -1
        },
        redCards: {
            count: stats.redCards,
            pointsPer: -2,
            total: stats.redCards * -2
        }
    };
    
    return {
        player: { name: playerName, team: actualTeamName, position },
        stats,
        breakdown,
        matchDetails,
        totalPoints: Object.values(breakdown).reduce((sum, item) => sum + item.total, 0)
    };
}

function showPlayerPointsDialog(playerName, teamName, position) {
    console.log('showPlayerPointsDialog called with:', playerName, teamName, position);
    const details = getPlayerDetailedPoints(playerName, teamName, position);
    console.log('Player details:', details);
    if (!details) {
        console.log('No details found for player');
        return;
    }
    
    const dialogHTML = `
        <div class="points-dialog-overlay" onclick="closePlayerPointsDialog()">
            <div class="points-dialog" onclick="event.stopPropagation()">
                <div class="points-dialog-header">
                    <h3>${details.player.name}</h3>
                    <p>${details.player.team} • ${details.player.position}</p>
                    <button class="close-dialog-btn" onclick="closePlayerPointsDialog()">×</button>
                </div>
                
                <div class="points-dialog-content">
                    <div class="total-points-display">
                        <span class="total-points">${details.totalPoints}</span>
                        <span class="total-points-label">Total Points</span>
            </div>
            
                    <div class="points-breakdown-section">
                        <h4>Points Breakdown</h4>
                        <table class="breakdown-table">
                            <thead>
                                <tr>
                                    <th>Action</th>
                                    <th>Count</th>
                                    <th>Points Each</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${Object.entries(details.breakdown).map(([key, item]) => `
                                    <tr class="${item.total < 0 ? 'negative-row' : 'positive-row'}">
                                        <td class="action-name">${key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</td>
                                        <td class="action-count">${item.count}</td>
                                        <td class="action-points">${item.pointsPer}</td>
                                        <td class="action-total ${item.total < 0 ? 'negative' : 'positive'}">${item.total}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="matches-section">
                        <h4>Matches Played (${details.matchDetails.length})</h4>
                        <table class="matches-table">
                            <thead>
                                <tr>
                                    <th>Opponent</th>
                                    <th>Score</th>
                                    <th>Result</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${details.matchDetails.length > 0 ? 
                                    details.matchDetails.map(match => `
                                        <tr>
                                            <td class="match-opponent">${match.opponent}</td>
                                            <td class="match-score">${match.score}</td>
                                            <td class="match-result ${match.result}">${match.result}</td>
                                            <td class="match-time">${match.time || 'N/A'}</td>
                                        </tr>
                                    `).join('') :
                                    '<tr><td colspan="4" class="no-matches">No completed matches yet</td></tr>'
                                }
                            </tbody>
                        </table>
                </div>
                </div>
            </div>
        </div>
    `;
    
    console.log('Adding dialog to DOM...');
    document.body.insertAdjacentHTML('beforeend', dialogHTML);
    document.body.style.overflow = 'hidden';
    console.log('Dialog added, checking if it exists...');
    const dialog = document.querySelector('.points-dialog-overlay');
    console.log('Dialog element found:', dialog);
}

function closePlayerPointsDialog() {
    const dialog = document.querySelector('.points-dialog-overlay');
    if (dialog) {
        dialog.remove();
        document.body.style.overflow = '';
    }
}

function switchStatsTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.stats-tab-content');
    tabContents.forEach(content => {
        content.style.display = 'none';
    });
    
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.stats-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected tab content
    const selectedTab = document.getElementById(tabName + '-tab');
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }
    
    // Add active class to clicked tab
    const clickedTab = event.target;
    clickedTab.classList.add('active');
}

function toggleStats(elementId, button) {
    const hiddenStats = document.getElementById(elementId);
    const span = button.querySelector('span');
    
    if (hiddenStats.classList.contains('show')) {
        hiddenStats.classList.remove('show');
        span.textContent = 'Read More';
        button.classList.remove('expanded');
    } else {
        hiddenStats.classList.add('show');
        span.textContent = 'Read Less';
        button.classList.add('expanded');
    }
}

function generateSearchPage() {
    return `
        <h2 class="page-title">Search</h2>
        
        <div class="search-page-container">
            <div class="global-search-container">
                <div class="search-input-wrapper">
                    <input type="text" id="globalSearch" class="global-search-input" placeholder="Search teams, players, positions, matches..." onkeyup="performGlobalSearch()">
                    <div class="search-icon">⌕</div>
                </div>
                            </div>
            
            <div class="search-results-container" id="searchResultsContainer">
                <div class="search-placeholder">
                    <div class="search-placeholder-content">
                        <h3>Search Everything</h3>
                        <p>Search across all teams, players, positions, and matches in the tournament</p>
                        <div class="search-suggestions">
                            <div class="suggestion-category">
                                <h4>Teams</h4>
                                <span class="suggestion-tag" onclick="searchSuggestion('Mbarara')">Mbarara</span>
                                <span class="suggestion-tag" onclick="searchSuggestion('Gulu')">Gulu</span>
                                <span class="suggestion-tag" onclick="searchSuggestion('Arua')">Arua</span>
                </div>
                            <div class="suggestion-category">
                                <h4>Players</h4>
                                <span class="suggestion-tag" onclick="searchSuggestion('Van')">Van</span>
                                <span class="suggestion-tag" onclick="searchSuggestion('Afande')">Afande</span>
                                <span class="suggestion-tag" onclick="searchSuggestion('Salam')">Salam</span>
            </div>
                            <div class="suggestion-category">
                                <h4>Positions</h4>
                                <span class="suggestion-tag" onclick="searchSuggestion('Forward')">Forward</span>
                                <span class="suggestion-tag" onclick="searchSuggestion('Midfielder')">Midfielder</span>
                                <span class="suggestion-tag" onclick="searchSuggestion('Goalkeeper')">Goalkeeper</span>
                </div>
                        </div>
                    </div>
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
    const mobileSponsorsSection = document.querySelector('.mobile-sponsors-section');
    
    if (mobileMenu && hamburger) {
        const isActive = mobileMenu.classList.contains('active');
        
        if (isActive) {
            // Closing animation
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
            
            // Re-enable body scrolling
            document.body.style.overflow = '';
            document.body.style.position = '';
            
            // Reset button animations
            mobileNavBtns.forEach(btn => {
                btn.style.animation = 'none';
                btn.style.transform = 'translateY(30px)';
                btn.style.opacity = '0';
            });
            
            // Reset sponsors section animation
            if (mobileSponsorsSection) {
                mobileSponsorsSection.style.animation = 'none';
                mobileSponsorsSection.style.transform = 'translateY(30px)';
                mobileSponsorsSection.style.opacity = '0';
            }
        } else {
            // Opening animation
            mobileMenu.classList.add('active');
            hamburger.classList.add('active');
            
            // Prevent body scrolling
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            
            // Try to load sponsors when opening menu (fallback)
            const mobileSponsorsGrid = document.getElementById('mobileSponsorsGrid');
            if (mobileSponsorsGrid && mobileSponsorsGrid.children.length === 0) {
                console.log('Attempting to reload mobile sponsors...');
                loadMobileSponsors();
            }
            
            // Trigger button animations with delay
            setTimeout(() => {
                mobileNavBtns.forEach((btn, index) => {
                    btn.style.animation = `slideInFromBottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.08 + 0.2}s forwards`;
                });
                
                // Animate sponsors section after navigation buttons
                if (mobileSponsorsSection) {
                    setTimeout(() => {
                        mobileSponsorsSection.style.animation = `slideInFromBottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s forwards`;
                    }, 100);
                }
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
        
        // Re-enable body scrolling
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
    }
});

// Fixtures filtering functions
let currentFilters = {
    team: 'all',
    time: 'all',
    status: 'all'
};

// Team badges mapping
const teamBadges = {
    'Gulu': 'GLU',
    'Arua': 'ARU',
    'Wakiso': 'WAK',
    'Kabale': 'KBL',
    'Mbale': 'MBL',
    'Jinja': 'JNJ',
    'Mbarara': 'MBA',
    'Masaka': 'MSK'
};

// Fixtures view state
let currentFixturesView = 'list';

function toggleFixturesView() {
    // Toggle between list and grid view
    currentFixturesView = currentFixturesView === 'list' ? 'grid' : 'list';
    
    // Update toggle button
    const toggleBtn = document.querySelector('.view-toggle-btn');
    if (toggleBtn) {
        toggleBtn.classList.toggle('active', currentFixturesView === 'grid');
        
        // Update icon based on current view
        const svg = toggleBtn.querySelector('svg');
        if (svg) {
            if (currentFixturesView === 'grid') {
                svg.innerHTML = `
                    <rect x="3" y="3" width="7" height="7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <rect x="14" y="3" width="7" height="7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <rect x="14" y="14" width="7" height="7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <rect x="3" y="14" width="7" height="7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                `;
            } else {
                svg.innerHTML = `
                    <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                `;
            }
        }
    }
    
    // Update fixtures content
    applyFilters();
}

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
    
    // Update CSS class for view type
    fixturesContent.className = currentFixturesView === 'grid' ? 'fixtures-grid-view' : '';
    
    // Debug: Log the current view state
    console.log('Current fixtures view:', currentFixturesView);
    console.log('Fixtures content class:', fixturesContent.className);
    
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
    if (currentFixturesView === 'grid') {
        fixturesContent.innerHTML = filteredFixtures.map(timeSlot => `
            <h3 class="time-slot-title">
                <svg class="time-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                ${timeSlot.time}
            </h3>
            <div class="time-slot-grid">
                ${timeSlot.matches.map(match => {
                    const homeTeamBadge = teamBadges[match.homeTeam] || match.homeTeam.substring(0, 3).toUpperCase();
                    const awayTeamBadge = teamBadges[match.awayTeam] || match.awayTeam.substring(0, 3).toUpperCase();
                    const homeScore = (match.homeScore !== undefined && match.homeScore !== null) ? match.homeScore : '-';
                    const awayScore = (match.awayScore !== undefined && match.awayScore !== null) ? match.awayScore : '-';
                    const scoreDisplay = (match.status === 'upcoming' || match.status === 'scheduled' || homeScore === '-' || awayScore === '-') ? 'VS' : `${homeScore} - ${awayScore}`;
                    
                    return `
                        <div class="fixture" onclick="viewMatchDetails('${timeSlot.time}', '${match.homeTeam}', '${match.awayTeam}')">
                            <div class="fixture-teams">
                                <div class="team-badge">
                                    ${getTeamLogoElement(leagueData.teams.find(t => t.name === match.homeTeam)?.id || match.homeTeam, '16px')}
                                    <span>${homeTeamBadge}</span>
                                    ${(match.status === 'live' || match.status === 'completed') && (getTeamRedCards(match, match.homeTeam) || 0) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
                                </div>
                                <span class="vs-separator">${scoreDisplay}</span>
                                <div class="team-badge">
                                    ${getTeamLogoElement(leagueData.teams.find(t => t.name === match.awayTeam)?.id || match.awayTeam, '16px')}
                                    <span>${awayTeamBadge}</span>
                                    ${(match.status === 'live' || match.status === 'completed') && (getTeamRedCards(match, match.awayTeam) || 0) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `).join('');
    } else {
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
            <section class="fixture${resultClass}" onclick="viewMatchDetails('${timeSlot.time}', '${match.homeTeam}', '${match.awayTeam}')">
                <div class="teams">
                    <div class="team-match">
                        <div class="team-name-container">
                            <span>${match.homeTeam}</span>
                            ${(match.status === 'live' || match.status === 'completed') && getTeamRedCards(match, match.homeTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
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
                            ${(match.status === 'live' || match.status === 'completed') && getTeamRedCards(match, match.awayTeam) > 0 ? `<span class="red-card-indicator">${getRedCardSVG()}</span>` : ''}
                        </div>
                    </div>
                </div>
                ${match.status === 'completed' || match.status === 'live' ? `
                <div class="fixture-footer">
                    <span class="overview-link">Overview</span>
                </div>
                ` : ''}
            </section>
        `;
        }).join('')}
    `).join('');
    }
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
                
                ${(match.status === 'scheduled' || match.status === 'upcoming' || match.status === 'pending' || match.status === 'postponed') ? `
                <div class="match-status-message">
                    <div class="status-message-content">
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="rgba(0, 255, 133, 0.3)" stroke-width="2"/>
                            <path d="M12 6v6l4 2" stroke="rgba(0, 255, 133, 0.5)" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        <div class="status-message-text">
                            <h4>${match.status === 'postponed' ? 'Match Postponed' : 
                                  match.status === 'scheduled' ? 'Match Scheduled' :
                                  match.status === 'upcoming' ? 'Upcoming Match' : 'Match Pending'}</h4>
                            <p>${match.status === 'postponed' ? 'This match has been postponed. Please check back later for updates.' :
                               match.status === 'scheduled' ? 'This match is scheduled to take place. Lineup and analysis will be available closer to kickoff.' :
                               match.status === 'upcoming' ? 'This match is coming up soon. Stay tuned for live updates and detailed analysis.' :
                               'This match is currently pending. More information will be available soon.'}</p>
                            <div class="status-message-details">
                                <p>Detailed match information will be available when the match is:</p>
                                <ul>
                                    <li>Live (real-time updates)</li>
                                    <li>Completed (full analysis and statistics)</li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
                ` : `
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
                `}
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
    
    const hasManyEvents = stats.length >= 3;
    const wrapClass = hasManyEvents ? ' player-item-wrap' : '';
    
    return `
        <div class="player-item${itemClass}${wrapClass}">
            <div class="player-info">
                <div class="player-number" style="font-size: 0.55rem;">${playerData.number}</div>
                <div class="player-name" style="font-size: 0.55rem;">${playerData.name}${player.captain ? getCaptainSVG() : ''}${substitutionArrow}</div>
                <span class="player-stats">
                    ${stats.join('')}
                </span>
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

// Loader functionality
function hideLoader() {
    const loader = document.getElementById('loader');
    const app = document.getElementById('app');
    
    if (loader && app) {
        // Add loaded class to app
        app.classList.add('loaded');
        
        // Hide loader after a short delay
        setTimeout(() => {
            loader.classList.add('hidden');
            
            // Remove loader from DOM after transition completes
            setTimeout(() => {
                if (loader.parentNode) {
                    loader.parentNode.removeChild(loader);
                }
            }, 800); // Match the CSS transition duration
        }, 1200); // Show loader for at least 1.2 seconds
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the app
    initApp();
    
    // Hide loader when everything is ready
    hideLoader();
});

// Force browser reload - live status dots added
