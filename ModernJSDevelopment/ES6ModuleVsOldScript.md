# ES6 Modules

- Modules stored in files, **exaclty one module per file.**

|                        | ES6 Module              |        Script |
| :--------------------: | :---------------------- | ------------: |
| **Top-level varibles** | Scoped to module        |        Global |
|    **Default mode**    | strict mode             | "Sloppy" mode |
|   **Top-level this**   | undefined               |        window |
| **Import and exports** | Yes                     |            No |
|    **HTML linking**    | \<script type="module"> |      <script> |
|  **File downloading**  | Async                   |          Sync |


## How ES6 modules are imported

- Modules are **imported synchoronusly**
- Possible thanks to top-level ("static") imports, which 
make **imports known before execution**
- This makes **bundling** and **dead code elimination** possible 