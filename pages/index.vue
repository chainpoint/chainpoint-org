<template>
  <main class="page-container">
    <div class="page-chainpoint">
      <section class="section section-hero">
        <div class="cta-hero container background-chainpoint">
          <div class="container">
            <div class="row justify-content-md-center">
              <div class="section-title col col-md-8">
                <h1>For developers</h1>
                <h2>Chainpoint</h2>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row ">
              <div class="col col-md-7">
                <p class="paragraph-large">
                  Chainpoint is an open standard for linking data to the blockchain to create a timestamp proof.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section section-network">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="section-title col col-md-8">
              <h1>Chainpoint network</h1>
              <h2>
                Chainpoint is the world’s largest and fastest network for anchoring data to the blockchain
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section class="section section-developertools">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="section-title col col-md-8">
              <h1>Developer Tools</h1>
              <h2>Get started in minutes</h2>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row justify-content-center developer-tools">
            <CardLink
              v-for="cardLink in cardLinks"
              :key="cardLink.title"
              :title="cardLink.title"
              :path="cardLink.path"
              :icon="cardLink.icon"
              :description="cardLink.description"
            />
          </div>
        </div>
      </section>
      <section class="section section-benefits">
        <div class="container">
          <div class="row ">
            <div class="feature-list-outer-0 col col-md-5">
              <div class="feature-list">
                <div class="feature-list-inner">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NyIgaGVpZ2h0PSI3MCIgdmlld0JveD0iMCAwIDg3IDcwIj4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjIuODkxJSIgeTE9IjUwJSIgeTI9IjUwJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM3NDJCRDgiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjM0YxM0IwIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9IjU0LjMyOSUiIHgyPSI0MS4yOTklIiB5MT0iOTMuMzcxJSIgeTI9IjI2LjExOSUiPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNzQyQkQ4Ii8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzNGMTNCMCIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzIC0xNCkiPgogICAgICAgIDxyZWN0IHdpZHRoPSI3MCIgaGVpZ2h0PSI3MCIgeD0iMjMiIHk9IjE0IiBmaWxsPSIjMkEyNDU4IiByeD0iMzUiLz4KICAgICAgICA8cmVjdCB3aWR0aD0iNzAiIGhlaWdodD0iNzAiIHg9IjMwIiB5PSIxNCIgZmlsbD0idXJsKCNhKSIgcng9IjM1Ii8+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjcwIiBoZWlnaHQ9IjcwIiB4PSIxMyIgeT0iMTQiIGZpbGw9InVybCgjYSkiIHJ4PSIzNSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgOTYgMCkiLz4KICAgICAgICA8cmVjdCB3aWR0aD0iNzAiIGhlaWdodD0iNzAiIHg9IjE0IiB5PSIxNCIgZmlsbD0idXJsKCNiKSIgcng9IjM1IiB0cmFuc2Zvcm09InJvdGF0ZSgtMTIyIDQ5IDQ5KSIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGOUZERkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTgwLjQ0NSA0NS4yNjNhMTEuMTc0IDExLjE3NCAwIDAgMC00LjA4OC00Ljg3M2MtLjktLjU5Ny0xLjg5Ni0xLjA3LTIuOTU3LTEuMzk1YTExLjQ1NSAxMS40NTUgMCAwIDAtMy4zNTYtLjVjLS43OTUgMC0xLjU2OS4wODktMi4zMDcuMjU2LTEuMzkuMzEtMi42NTQuODg3LTMuNzk2IDEuNjEyLTEgLjYzNC0xLjkxNiAxLjM4My0yLjc3NSAyLjE5MS0uODU3LjgxLTEuNjYgMS42ODUtMi40MzIgMi41ODQuNjQ4Ljc3NyAxLjI3NCAxLjU2MyAxLjg4NyAyLjMzMmwuMDQ5LjA2MmMuMzA3LjM4NS42MTUuNzczLjkyNyAxLjE2bC4xOTUtLjIzM2MuNjk1LS44MyAxLjM4OS0xLjYxIDIuMDgtMi4zYTE3LjYwNyAxNy42MDcgMCAwIDEgMS41NTItMS4zODljLjc3NC0uNjA4IDEuNTM3LTEuMDcgMi4yOS0xLjM3Ni4zOC0uMTUyLjc1Ny0uMjcgMS4xNC0uMzQ2LjM4NC0uMDguNzc3LS4xMiAxLjE5LS4xMi45NDIgMCAxLjgyNi4xODYgMi42MzQuNTIzYTYuNzgyIDYuNzgyIDAgMCAxIDIuOTg0IDIuNDExIDYuNTIgNi41MiAwIDAgMSAxLjE1OCAzLjcxNWMwIC45MjYtLjE5IDEuNzkzLS41MyAyLjU4OGE2LjcyMyA2LjcyMyAwIDAgMS0yLjQ1NyAyLjkyN2MtLjU0LjM2LTEuMTM3LjY0MS0xLjc3LjgzNy0uNjM1LjE5NC0xLjMwOC4zLTIuMDE1LjMtLjQ1MyAwLS44ODItLjA1LTEuMzAzLS4xNDNhNi44OCA2Ljg4IDAgMCAxLTEuNjQ1LS42MDggOS4yOCA5LjI4IDAgMCAxLS41NS0uMzA5IDEyLjMxMSAxMi4zMTEgMCAwIDEtMS42NjktMS4yMzVjLS4yMS0uMTgzLS40MjItLjM3Mi0uNjMtLjU3M2EyOS4xMTEgMjkuMTExIDAgMCAxLTEuOS0yLjAxIDY1LjQzIDY1LjQzIDAgMCAxLTEuNTk2LTEuOTJjLS4zMi0uNC0uNjQ0LS44MDUtLjk2OS0xLjIxNC0uODgyLTEuMTA4LTEuNzgxLTIuMjQyLTIuNzMtMy4zMzJhMzIuODgzIDMyLjg4MyAwIDAgMC0yLjIzNy0yLjM1IDE5LjczMyAxOS43MzMgMCAwIDAtMi4yMjgtMS44MjQgMTMuMjMxIDEzLjIzMSAwIDAgMC0yLjg0LTEuNTE1IDEwLjc3NiAxMC43NzYgMCAwIDAtMy43ODYtLjY5OGMtMS41NTIgMC0zLjA0Mi4zMDgtNC4zOTUuODcyYTExLjI5IDExLjI5IDAgMCAwLTQuOTY1IDQuMDEzIDEwLjk1MyAxMC45NTMgMCAwIDAtMS40MiAyLjkwMiAxMC41NTYgMTAuNTU2IDAgMCAwLS41MTggMy4yOTNjMCAxLjUyNC4zMTYgMi45ODYuODg4IDQuMzE0Ljg2IDEuOTkgMi4yODkgMy42OCA0LjA4OCA0Ljg3NC45LjU5NyAxLjg5NiAxLjA3IDIuOTU3IDEuMzk2IDEuMDYxLjMyNCAyLjE5Mi40OTggMy4zNTYuNDk4Ljc5NSAwIDEuNTY5LS4wODggMi4zMDctLjI1MyAxLjM5MS0uMzEgMi42NTQtLjg4OCAzLjc5OC0xLjYxMyAxLjAwMS0uNjM0IDEuOTE2LTEuMzgzIDIuNzczLTIuMTkzLjg1Ny0uODEgMS42Ni0xLjY4NSAyLjQzMi0yLjU4My0uNjUtLjc4Mi0xLjI4LTEuNTctMS44OTUtMi4zNDRsLS4wNC0uMDVhMTg4LjU4IDE4OC41OCAwIDAgMC0uOTI3LTEuMTYxbC0uMTk2LjIzM2EzNi4zNTggMzYuMzU4IDAgMCAxLTIuMDgyIDIuM2MtLjUxOC41MTctMS4wMzYuOTg0LTEuNTUyIDEuMzktLjc3NC42MDctMS41MzcgMS4wNy0yLjI5IDEuMzc2LS4zOC4xNTQtLjc1Ny4yNjktMS4xNC4zNDZhNS45ODkgNS45ODkgMCAwIDEtMS4xODguMTE5IDYuODIyIDYuODIyIDAgMCAxLTIuNjM2LS41MjIgNi43NjMgNi43NjMgMCAwIDEtMi45ODEtMi40MTIgNi41MiA2LjUyIDAgMCAxLTEuMTU1LTMuNzE1YzAtLjkyNS4xODgtMS43OTMuNTI5LTIuNTg4YTYuNzc3IDYuNzc3IDAgMCAxIDQuMjI3LTMuNzY0IDYuODczIDYuODczIDAgMCAxIDIuMDE0LS4zYy40NTMgMCAuODgyLjA1MSAxLjMwNC4xNDQuNzM2LjE2NSAxLjQ1OC40NjkgMi4xOTQuOTE2LjU1Mi4zMzUgMS4xMS43NDkgMS42NyAxLjIzNS44NC43MjcgMS42ODQgMS42MSAyLjUzIDIuNTg2Ljg0OC45NzYgMS42OTYgMi4wNDQgMi41NjQgMy4xMzQuODgyIDEuMTA4IDEuNzgyIDIuMjQyIDIuNzMgMy4zMzJhMzMuMzkgMzMuMzkgMCAwIDAgMi4yMzggMi4zNTIgMjAuMDY5IDIwLjA2OSAwIDAgMCAxLjg1OCAxLjU2MWMuOTc4LjcxOSAyLjA0MSAxLjMzOCAzLjIxIDEuNzguMDc0LjAyNy4xNDYuMDU1LjIyLjA4IDEuMTA4LjM5MSAyLjMwOC42MTYgMy41NjUuNjE2IDEuNTUyIDAgMy4wNDItLjMwOCA0LjM5NS0uODcyYTExLjI5IDExLjI5IDAgMCAwIDQuOTY1LTQuMDEzIDEwLjk2IDEwLjk2IDAgMCAwIDEuOTM2LTYuMmMwLTEuNTIzLS4zMTQtMi45ODgtLjg4OC00LjMxNHoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                    alt="Feature list icon"
                  />
                  <h2 class="feature-list-title">Hundreds of use cases</h2>
                  <p class="paragraph">
                    Chainpoint is being used by thousands of organizations. Here are some common use cases.
                  </p>
                  <div class="feature-list-item">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDM2IDM2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiBmaWxsPSIjRUVFRUY3IiByeD0iNSIvPgogICAgICAgIDxnIGZpbGw9IiM5MDkwQjkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyIDcpIj4KICAgICAgICAgICAgPHBhdGggZD0iTTkuMDc3IDEwLjI0N2wyLjY1IDExLjQxNC02LjQxNy0yLjY2OS00LjUxMSAyLjY3TDIuNzcgMTAuMjQ2eiIvPgogICAgICAgICAgICA8ZWxsaXBzZSBjeD0iNS45NTgiIGN5PSI1LjkyMyIgc3Ryb2tlPSIjRUVFRUY2IiBzdHJva2Utd2lkdGg9Ii45MSIgcng9IjUuOTU4IiByeT0iNS45MjMiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="
                      alt="Item icon"
                    />Create an audit trail for business processes.
                  </div>
                  <div class="feature-list-item">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDM2IDM2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiBmaWxsPSIjRUVFRUY3IiByeD0iNSIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM5RDlEQzMiIGQ9Ik0xOS4wMDkgMjcuNjI1aC0xLjM2NXYtMi4zMzFjLTMuMzQtLjE2OC00Ljg1MS0yLjM1Mi00LjkxNC00LjgzaDIuNTJjLjEwNSAxLjMyMy44NiAyLjMxIDIuMzk0IDIuNDk5di00LjQzMWwtLjkwMy0uMjczYy0yLjM3My0uNzE0LTMuNTUtMi4yMDUtMy41NS00LjIyMSAwLTIuMjY4IDEuNzg2LTMuOTkgNC40NTMtNC4yMjFWNy40NjVoMS4zNjV2Mi4zNTJjMi44NzcuMjk0IDQuMzg5IDIuMjY4IDQuNDUyIDQuNzg4SDIwLjkyYy0uMDYzLTEuMTEzLS42NTEtMi4xMjEtMS45MTEtMi40MTV2NC4xMTZsLjQ4My4xMjZjMi43OTMuNzc3IDMuOTY5IDIuMjY4IDMuOTY5IDQuNTE1IDAgMi4yNjgtMS42NiAzLjk5LTQuNDUyIDQuMzA1djIuMzczem0tMy4yNzYtMTMuNjcxYzAgMS4xNTUuNjA5IDEuNDcgMS45MSAxLjk3NHYtMy44MDFjLTEuMTc1LjE0Ny0xLjkxLjgxOS0xLjkxIDEuODI3em01LjE0NSA3LjAxNGMwLS45NjYtLjQ4My0xLjYxNy0xLjg3LTIuMDU4djQuMDExYzEuMTM1LS4xODkgMS44Ny0uODYxIDEuODctMS45NTN6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="
                      alt="Item icon"
                    />Timestamp important documents and data.
                  </div>
                  <div class="feature-list-item">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDM2IDM2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiBmaWxsPSIjRUVFRUY3IiByeD0iNSIvPgogICAgICAgIDxnIGZpbGw9IiM5MDkwQjkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMC4yNDMgMjMuMDc5bC0xLjA3MSAzLjc1IDMuNzUtMS4wNzJ6TTI2Ljg2MyAxMS44MjNsLTEuNzggMS43OC0yLjY1MS0yLjY1MiAxLjc4LTEuNzh6TTExLjA1OCAyMi4yODdsMTAuNjA2LTEwLjYwNiAyLjY1MiAyLjY1MkwxMy43MSAyNC45Mzl6Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
                      alt="Item icon"
                    />Add a blockchain proof to your digital signatures.
                  </div>
                  <div class="feature-list-item">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNyIgdmlld0JveD0iMCAwIDM2IDM3Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAuOTk2KSI+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiBmaWxsPSIjRUVFRUY3IiByeD0iNSIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM5MDkwQjkiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTguODc0IDE2LjQyNUw3IDE1LjY1IDE4LjIzOCAxMWwxMS4yMzYgNC42NS0xMS4yMzYgNC42NS04LjQyOS0zLjQ4OFYyNWgtLjkzNnYtOC41NzV6bTkuMzY0IDQuOTg1bC01LjYyLTIuNXY0LjEzMlMxNC42MyAyNSAxOC4yMzkgMjVjMy42MDggMCA1LjYxOS0xLjk1OCA1LjYxOS0xLjk1OHYtNC4xMzFsLTUuNjIgMi41eiIvPgogICAgPC9nPgo8L3N2Zz4K"
                      alt="Item icon"
                    />Issue blockchain verifiable education credentials.
                  </div>
                  <div class="feature-list-item">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDM2IDM2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiBmaWxsPSIjRUVFRUY3IiByeD0iNSIvPgogICAgICAgIDxnIGZpbGw9IiM5MDkwQjkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik02LjIyNSAyNi42MWgyMy41NDl2MS4yMDhINi4yMjV6TTguNTg0IDIzLjI0MWgxOC44MzF2MS4yMDlIOC41ODR6TTcuMzc5IDI0Ljg5NEgyOC42MlYyNi4xSDcuMzh6TTEwLjcwNSAxNC43MDZoMi4xMnY4LjA3OGgtMi4xMnpNMTYuOTQgMTQuNzA2aDIuMTJ2OC4wNzhoLTIuMTJ6TTIzLjE3NyAxNC43MDZoMi4xMnY4LjA3OGgtMi4xMnpNOS40ODIgMTMuMDA3SDI2LjUydjEuMjA4SDkuNDgyek04LjM3OCAxMi42NzFoMTkuMjQ0TDE4IDguMTgxeiIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
                      alt="Item icon"
                    />Prove compliance with regulations.
                  </div>
                </div>
              </div>
            </div>
            <div class="feature-list-outer-1 col col-md-5">
              <div class="feature-list">
                <div class="feature-list-inner">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5NSIgaGVpZ2h0PSI3MCIgdmlld0JveD0iMCAwIDk1IDcwIj4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODkuMjU4JSIgeTE9IjAlIiB5Mj0iMTAwJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGM0MwODIiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRUYzOTAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSI1MCUiIHgyPSI1MCUiIHkxPSIwJSIgeTI9Ijg2LjQ3JSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRjc2NzYiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGNUIzNEUiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDE9IjUwJSIgeDI9IjUwJSIgeTE9IjAlIiB5Mj0iODYuNDclIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0ZGNzY3NiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGNUIzNEUiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNMCAxLjE2N2gyMi4xNjd2MjIuMTY3SDB6TTAgMjQuNWgyMi4xNjd2MjIuMTY3SDB6TTAgNDcuODMzaDIyLjE2N1Y3MEgwek0yMy4zMzMgNDcuODMzSDQ1LjVWNzBIMjMuMzMzek00Ni42NjcgNDcuODMzaDIyLjE2N1Y3MEg0Ni42Njd6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNiKSIgZD0iTTYzIDEwLjVoMjIuMTY3djIyLjE2N0g2M3oiIHRyYW5zZm9ybT0icm90YXRlKDMwIDc0LjA4MyAyMS41ODMpIi8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNiKSIgZD0iTTY3LjY2NyA0LjY2N2gyMi4xNjd2MjIuMTY3SDY3LjY2N3oiIG9wYWNpdHk9Ii4zODkiIHRyYW5zZm9ybT0icm90YXRlKDM2IDc4Ljc1IDE1Ljc1KSIvPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjYykiIGQ9Ik02NC43NTQgMTUuMTY3TDg0IDI2LjI4NSA3Mi45MTMgNDUuNSA1My42NjcgMzQuMzgxeiIvPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjYSkiIGQ9Ik0yMy4zMzMgMjQuNUg0NS41djIyLjE2N0gyMy4zMzN6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="
                    alt="Feature list icon"
                  />
                  <h2 class="feature-list-title">Built with developers in mind</h2>
                  <p class="paragraph">
                    Chainpoint is simple to use and can scale to meet the needs of any application
                  </p>
                  <div class="feature-list-item">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjUwJSIgeDI9IjUwJSIgeTE9IjEwMCUiIHkyPSIwJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNBOUI3QzEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjQUJDM0Q4IiBzdG9wLW9wYWNpdHk9Ii4yNDgiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9IjUwJSIgeDI9IjUwJSIgeTE9IjEwMCUiIHkyPSIwJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNBOUI3QzEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNzA4MDhEIiBzdG9wLW9wYWNpdHk9Ii4xOTkiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDE9IjUwJSIgeDI9IjUwJSIgeTE9IjAlIiB5Mj0iMTAwJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGM0FDODIiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkY1MDBGIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImQiIHgxPSI1MCUiIHgyPSI1MCUiIHkxPSIwJSIgeTI9Ijg2LjQ3JSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRjc2NzYiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGNUIzNEUiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1IDIpIj4KICAgICAgICA8cmVjdCB3aWR0aD0iMzkuNTEiIGhlaWdodD0iMzkuODUzIiB4PSI1LjI0NSIgeT0iMTAuMjAyIiBzdHJva2U9InVybCgjYSkiIHN0cm9rZS13aWR0aD0iMS42NjciIHJ4PSIyIi8+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjQ4LjMzMyIgaGVpZ2h0PSI0OC43NSIgeD0iLjgzMyIgeT0iNS4xMzkiIHN0cm9rZT0idXJsKCNiKSIgc3Ryb2tlLXdpZHRoPSIxLjY2NyIgcng9IjIiLz4KICAgICAgICA8cmVjdCB3aWR0aD0iMzUuMjk0IiBoZWlnaHQ9IjM1LjU4OCIgeD0iNy4zNTMiIHk9IjEyLjMzNSIgcng9IjIiLz4KICAgICAgICA8cmVjdCB3aWR0aD0iMzEuODE4IiBoZWlnaHQ9IjMyLjA4MyIgeD0iOS4xNTgiIHk9IjE0LjE1NCIgZmlsbD0idXJsKCNjKSIgcng9IjIiLz4KICAgICAgICA8cmVjdCB3aWR0aD0iMzEuODE4IiBoZWlnaHQ9IjMyLjA4MyIgeD0iOS4wOTEiIGZpbGw9InVybCgjZCkiIHJ4PSIyIi8+CiAgICA8L2c+Cjwvc3ZnPgo="
                      alt="Item icon"
                    />Chainpoint is easy to integrate with your existing applications
                  </div>
                  <div class="feature-list-item">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjAiIGhlaWdodD0iNjMiIHZpZXdCb3g9IjAgMCA2MCA2MyI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTEwLjIwNiA1My40OTRWNjIuMkg0MC4xNWwxMC4wNTYtMS42NTV2LTcuMDV6Ii8+CiAgICAgICAgPHBhdGggaWQ9ImIiIGQ9Ik0xMC4yMDYgNDkuNjk0VjU4LjRINDAuMTVsMTAuMDU2LTEuNjU1di03LjA1eiIvPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZCIgeDE9IjUwJSIgeDI9IjUwJSIgeTE9IjEwMCUiIHkyPSIwJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNBOUI3QzEiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjQUJDM0Q4IiBzdG9wLW9wYWNpdHk9Ii40NSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPHBhdGggaWQ9ImMiIGQ9Ik0xMCAuMTA0djU0LjRoNDB2LTQ0LjM1TDM5LjU0MiAweiIvPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZSIgeDE9Ii0yNi45NjglIiB4Mj0iODkuMjU4JSIgeTE9IjYwLjUzMiUiIHkyPSIwJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGM0MwODIiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRUYzOTAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIuMjU2IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDExNS42OTQpIj4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjMTkxMDMyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhsaW5rOmhyZWY9IiNhIi8+CiAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iIzcxODE4RSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTEuMjA2IDU0LjQ5NFY2MS4yaDI4Ljg2M2w5LjEzNy0xLjUwNHYtNS4yMDJoLTM4eiIvPgogICAgICAgIDwvZz4KICAgICAgICA8ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMTA4LjA5NCkiPgogICAgICAgICAgICA8dXNlIGZpbGw9IiMxQTEwMzMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgeGxpbms6aHJlZj0iI2IiLz4KICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSIjNTg2NDZFIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMS4yMDYgNTAuNjk0VjU3LjRoMjguODYzbDkuMTM3LTEuNTA0di01LjIwMmgtMzh6Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDx1c2UgZmlsbD0iIzFBMTAzMyIgeGxpbms6aHJlZj0iI2MiLz4KICAgICAgICA8cGF0aCBzdHJva2U9InVybCgjZCkiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTExIDEuMXY1Mi40MDRoMzhWMTAuNTc4TDM5LjEzOCAxIDExIDEuMTAxeiIvPgogICAgICAgIDxwYXRoIHN0cm9rZT0idXJsKCNlKSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0yMy44MTYgMzMuMzUxTDE4IDI3LjkzN2w2LTUuNTg2IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDU1LjcwMykiLz4KICAgICAgICA8cGF0aCBzdHJva2U9InVybCgjZSkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNDIuODE2IDMzLjM1MUwzNyAyNy45MzdsNi01LjU4NiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDQwIDI3Ljg1MSkiLz4KICAgICAgICA8cGF0aCBzdHJva2U9InVybCgjZSkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMjggMjEuNjJsNC42NDcgMTIuMTQyIiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDU1LjM4MikiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                      alt="Item icon"
                    />Clear documentation and APIs.
                  </div>
                  <div class="feature-list-item">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI0MSIgdmlld0JveD0iMCAwIDYwIDQxIj4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9IjkwLjE0JSIgeDI9IjExLjU5NyUiIHkxPSIwJSIgeTI9IjEwMCUiPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRjNBQzgyIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0ZGNDUwMCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iNTAlIiB4Mj0iNTAlIiB5MT0iMCUiIHkyPSIxMDAlIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0YzQUM4MiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGRjRFMEQiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDE9IjE4Ljc3NyUiIHgyPSIxMjAuMTE3JSIgeTE9IjgxLjM0JSIgeTI9Ii0xNS44MTYlIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0ZGNzY3NiIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0Y1QjM0RSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJkIiB4MT0iMCUiIHkxPSI1MCUiIHkyPSI1MCUiPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRENGMkZGIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjQzdEREZGIiBzdG9wLW9wYWNpdHk9Ii40NTEiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI2IpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0idXJsKCNhKSIgc3Ryb2tlLXdpZHRoPSIxLjIiIGQ9Ik0xMS4zMiAzNC4xNjd2LTIuODE1YzYuMjA0IDAgMTIuMDQtMi40OSAxNi40MjgtNy4wMWwxMC40OTgtMTAuODE1YzQuOTA1LTUuMDUzIDExLjQyNC03LjgzMyAxOC4zNTgtNy44MzNWOC41MWMtNi4yMDMgMC0xMi4wNCAyLjQ5LTE2LjQyOCA3LjAxTDI5LjY3OCAyNi4zMzRjLTQuOSA1LjA0OS0xMS40MjQgNy44MzMtMTguMzU3IDcuODMzeiIvPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjYykiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIuMjY0IDM1LjMwNlYzMi40OWM2LjIwMyAwIDEyLjA0LTIuNDkgMTYuNDI4LTcuMDFMMjkuMTkgMTQuNjY2YzQuOTA1LTUuMDUzIDExLjQyNC03LjgzMyAxOC4zNTctNy44MzN2Mi44MTVjLTYuMjAzIDAtMTIuMDQgMi40OS0xNi40MjcgNy4wMUwyMC42MjIgMjcuNDczYy00LjkwMSA1LjA0OS0xMS40MjQgNy44MzMtMTguMzU4IDcuODMzeiIvPgogICAgICAgIDxlbGxpcHNlIGN4PSIxMC4xODkiIGN5PSIzMy4wMjgiIGZpbGw9IiNGRkYiIHJ4PSI0LjUyOCIgcnk9IjQuNTU2Ii8+CiAgICAgICAgPGVsbGlwc2UgY3g9IjU1LjQ3MiIgY3k9IjYuODMzIiBmaWxsPSIjRkZGIiByeD0iNC41MjgiIHJ5PSI0LjU1NiIvPgogICAgICAgIDxlbGxpcHNlIGN4PSI1Mi42NDIiIGN5PSI3LjQwMyIgZmlsbD0idXJsKCNkKSIgcng9IjcuMzU4IiByeT0iNy40MDMiLz4KICAgICAgICA8ZWxsaXBzZSBjeD0iNy4zNTgiIGN5PSIzMy41OTciIGZpbGw9InVybCgjZCkiIHJ4PSI3LjM1OCIgcnk9IjcuNDAzIi8+CiAgICA8L2c+Cjwvc3ZnPgo="
                      alt="Item icon"
                    />Chainpoint proofs can be verified independently using open source tools.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import CardLink from '@/components/CardLink.vue'

export default {
  components: { CardLink },
  data() {
    return {
      cardLinks: [
        {
          title: 'Chainpoint Node API',
          path:
            'https://github.com/chainpoint/chainpoint-node/wiki/Chainpoint-Node-API:-How-to-Create-a-Chainpoint-Proof',
          icon: 'icon-chainpoint-api',
          description: 'Learn how to interact with a public network of Chainpoint Nodes. Each node has a REST API.'
        },
        {
          title: 'Chainpoint Client Library',
          path: 'https://github.com/chainpoint/chainpoint-client-js',
          icon: 'icon-chainpoint-client-library',
          description: 'A full-featured client that works in both Browser and Node.js based Javascript applications.'
        },
        {
          title: 'Run a Chainpoint Node',
          path: 'https://github.com/chainpoint/chainpoint-node',
          icon: 'icon-chainpoint-node',
          description:
            'Join the over 7,000 nodes that are part of the public Chainpoint Network, or run a private Chainpoint node.'
        },
        {
          title: 'Chainpoint CLI',
          path: 'https://github.com/chainpoint/chainpoint-cli',
          icon: 'icon-chainpoint-cli',
          description: 'A Command Line Interface (CLI) for creating and verifying Chainpoint proofs.'
        }
      ]
    }
  },
  head() {
    return {
      title: 'Chainpoint - Blockchain Proof & Anchoring Standard'
    }
  }
}
</script>

<style></style>
