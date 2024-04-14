import React from 'react'
import { Card } from 'react-bootstrap'
import useCopy from 'use-copy'

interface Props {
  children: string
  header: string
}

const CopyText: React.FC<Props> = ({ children, header }) => {
  const [copied, copy, setCopied] = useCopy(children);

  const copyWithTimeout = () => {
    copy();
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <>
      <Card.Text><strong>{header}</strong></Card.Text>
      <Card.Text
        onClick={copyWithTimeout}
        style={{ cursor: 'pointer' }}
      >
        {children}
        { copied && <div className="alert alert-success" style={{ width: 'fit-content' }}>Copied!</div> }        
      </Card.Text>
    </>
  );
}

export default CopyText
