import React from 'react'
import { Badge } from 'react-bootstrap'
import useCopy from 'use-copy'

interface Props {
  children: string
}

const CopyText: React.FC<Props> = ({ children }) => {
  const [copied, copy, setCopied] = useCopy(children);

  const copyWithTimeout = () => {
    copy();
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div>
      <p onClick={copyWithTimeout} style={{ cursor: 'pointer' }}>{children}{ copied && <Badge pill variant="success">Copied!</Badge> }</p>
    </div>
  );
}

export default CopyText
