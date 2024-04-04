import React, { useState, useEffect, useRef } from 'react';
import socketIOClient from 'socket.io-client';
import { List, CellMeasurer, CellMeasurerCache } from 'react-virtualized';
import 'react-virtualized/styles.css';

const ENDPOINT = 'http://localhost:3001';

function App() {
    const [logLines, setLogLines] = useState([]);
    const [autoScroll, setAutoScroll] = useState(true);
    const logContainerRef = useRef(null);
    const cache = useRef(new CellMeasurerCache({
        fixedWidth: true,
        defaultHeight: 100 // Initial estimated row height
    }));

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);

        // Function to handle receiving log data from the backend
        const handleLogData = (line) => {
            setLogLines((prevLines) => [...prevLines, line]);
        };

        // Listen for log data from backend
        socket.on('logData', handleLogData);

        // Signal end of log data received
        socket.on('logDataEnd', () => {
            // Optionally, perform any cleanup or additional actions
        });

        // Cleanup function
        return () => {
            socket.off('logData', handleLogData);
            socket.disconnect();
        };
    }, []);

    useEffect(() => {
        if (autoScroll && logContainerRef.current) {
            logContainerRef.current.scrollToRow(logLines.length - 1);
        }

    }, [logLines, autoScroll]);


    const toggleAutoScroll = () => {
        setAutoScroll((prevAutoScroll) => !prevAutoScroll);
    };

    const rowRenderer = ({ index, key, style, parent }) => {
        const content = logLines[index];
        return (
            <CellMeasurer
                cache={cache.current}
                columnIndex={0}
                key={key}
                parent={parent}
                rowIndex={index}
            >
                <div style={{ ...style, whiteSpace: 'pre-wrap' }}>
                    {content}
                </div>
            </CellMeasurer>
        );
    }

    const rowStyle = {
        fontFamily: 'monospace',
        padding: '100px',
        height: 768,
        overflow: 'scroll',
        whiteSpace: 'pre-wrap',
    };

    return (
        <div className="app" style={rowStyle}>
            <List
                ref={logContainerRef}
                width={1024}
                height={768}
                rowCount={logLines.length}
                rowHeight={cache.current.rowHeight}
                rowRenderer={rowRenderer}
                overscanRowCount={200}
            />
            <button onClick={toggleAutoScroll} className="toggle-button" style={{
                position: 'fixed',
                top: 0,
                right: 0
            }}>
                {autoScroll ? 'Disable Auto Scroll' : 'Enable Auto Scroll'}
            </button>
        </div>
    );
}

export default App;
