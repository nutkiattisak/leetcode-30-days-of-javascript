```mermaid
flowchart TD
  A(Start) --> B[Create Promise]
  B --> C[Set timeout]
  C --> D[Wait for milliseconds]
  D --> E[Resolve Promise]
  E --> F(End)

  style A fill:#52bc94, stroke:#ffffff, stroke-width:1px, color:#ffffff
  style B fill:#101841, stroke:#ffffff, stroke-width:1px, color:#ffffff
  style C fill:#101841, stroke:#ffffff, stroke-width:1px, color:#ffffff
  style D fill:#101841, stroke:#ffffff, stroke-width:1px, color:#ffffff
  style E fill:#101841, stroke:#ffffff, stroke-width:1px, color:#ffffff
  style F fill:#d14243, stroke:#ffffff, stroke-width:1px, color:#ffffff