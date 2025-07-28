<p align="center">
  <img src="readme_assets/images/presenton-logo.png" height="90" alt="SCHWARM Logo" />
</p>

<p align="center">
  <a href="https://discord.gg/9ZsKKxudNE">
    <img src="https://img.shields.io/badge/Discord-Community%20beitreten-5865F2?logo=discord&style=for-the-badge" alt="Tritt unserem Discord bei" />
  </a>
  &nbsp;
  <a href="https://x.com/schwarm_ai">
    <img src="https://img.shields.io/badge/X-Folge%20uns-000000?logo=twitter&style=for-the-badge" alt="Folge uns auf X" />
  </a>
</p>

# Open-Source KI-Präsentationsgenerator und API (Gamma, Beautiful AI, Decktopus Alternative)


**SCHWARM** ist eine Open-Source-Anwendung zur Generierung von Präsentationen mit KI — alles läuft lokal auf Ihrem Gerät. Behalten Sie die Kontrolle über Ihre Daten und Privatsphäre, während Sie Modelle wie OpenAI und Gemini verwenden oder Ihre eigenen gehosteten Modelle über Ollama nutzen.

![Demo](readme_assets/demo.gif)


> [!NOTE]
> **Unternehmensanfragen:**
> Für Unternehmensnutzung, individuelle Bereitstellungen oder Partnerschaftsmöglichkeiten kontaktieren Sie uns unter **[kontakt@schwarm.ai](mailto:kontakt@schwarm.ai)**.

> [!IMPORTANT]
> Gefällt Ihnen SCHWARM? Ein ⭐ Stern zeigt Ihre Unterstützung und ermutigt uns weiterzumachen!

> [!TIP]
> Für detaillierte Einrichtungsanleitungen, API-Dokumentation und erweiterte Konfigurationsoptionen besuchen Sie unsere **[Offizielle Dokumentation](https://docs.schwarm.ai)**


## ✨ Mehr Freiheit mit KI-Präsentationen

* ✅ **Individuelle Layouts/Vorlagen/Themen** — Erstellen Sie individuelle Layouts mit HTML und Tailwind, unterstützen Sie jedes Präsentationsdesign
* ✅ **Bring Your Own Key** — Zahlen Sie nur für das, was Sie nutzen. OpenAI, Gemini (Weitere folgen...)
* ✅ **API-Präsentationsgenerierung** — Hosten Sie als API zur Generierung von Präsentationen über Anfragen
* ✅ **Ollama-Unterstützung** — Führen Sie Open-Source-Modelle lokal mit Ollama-Integration aus
* ✅ **OpenAI API-Kompatibilität** — Verwenden Sie jeden OpenAI-kompatiblen API-Endpunkt mit Ihren eigenen Modellen
* ✅ **Vielseitige Bildgenerierung** — Wählen Sie zwischen DALL-E 3, Gemini Flash, Pexels oder Pixabay für Ihre Visualisierungen
* ✅ **Läuft lokal** — Der gesamte Code läuft auf Ihrem Gerät
* ✅ **Datenschutz-First** — Kein Tracking, keine Datenspeicherung durch uns
* ✅ **Flexibel** — Generieren Sie Präsentationen aus Prompts oder Gliederungen
* ✅ **Export-bereit** — Speichern als PowerPoint (PPTX) und PDF
* ✅ **Vollständig Open-Source** — Apache 2.0 lizenziert

## In der Cloud bereitstellen (Ein-Klick-Bereitstellung)
[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/schwarm-ai-presentations?referralCode=ubp0kk)

## SCHWARM Docker ausführen

#### 1. SCHWARM starten

##### Linux/MacOS (Bash/Zsh Shell):
```bash
docker run -it --name schwarm -p 5000:80 -v "./app_data:/app_data" ghcr.io/schwarm/schwarm:latest
```

##### Windows (PowerShell):
```bash
docker run -it --name schwarm -p 5000:80 -v "${PWD}\app_data:/app_data" ghcr.io/schwarm/schwarm:latest
```

#### 2. SCHWARM öffnen
Öffnen Sie http://localhost:5000 in Ihrem bevorzugten Browser, um SCHWARM zu verwenden.

> **Hinweis: Sie können 5000 durch eine beliebige andere Portnummer ersetzen, um SCHWARM auf einem anderen Port auszuführen.**

## Bereitstellungskonfigurationen

Möglicherweise möchten Sie Ihre API-Schlüssel direkt als Umgebungsvariablen bereitstellen und sie verborgen halten. Sie können diese Umgebungsvariablen setzen, um dies zu erreichen.

- **CAN_CHANGE_KEYS=[true/false]**: Setzen Sie dies auf **false**, wenn Sie API-Schlüssel verborgen halten und unveränderbar machen möchten.
- **LLM=[openai/google/ollama/custom]**: Wählen Sie das **LLM** Ihrer Wahl.
- **OPENAI_API_KEY=[Ihr OpenAI API-Schlüssel]**: Geben Sie dies an, wenn **LLM** auf **openai** gesetzt ist
- **GOOGLE_API_KEY=[Ihr Google API-Schlüssel]**: Geben Sie dies an, wenn **LLM** auf **google** gesetzt ist
- **OLLAMA_URL=[Benutzerdefinierte Ollama URL]**: Geben Sie dies an, wenn Sie eine benutzerdefinierte Ollama URL verwenden möchten und **LLM** auf **ollama** gesetzt ist
- **OLLAMA_MODEL=[Ollama Modell-ID]**: Geben Sie dies an, wenn **LLM** auf **ollama** gesetzt ist
- **CUSTOM_LLM_URL=[Custom OpenAI Compatible URL]**: Provide this if **LLM** is set to **custom**
- **CUSTOM_LLM_API_KEY=[Custom OpenAI Compatible API KEY]**: Provide this if **LLM** is set to **custom**
- **CUSTOM_MODEL=[Custom Model ID]**: Provide this if **LLM** is set to **custom**

You can also set the following environment variables to customize the image generation provider and API keys:

- **IMAGE_PROVIDER=[pexels/pixabay/gemini_flash/dall-e-3]**: Select the image provider of your choice.
  - Defaults to **dall-e-3** for OpenAI models, **gemini_flash** for Google models if not set.
- **PEXELS_API_KEY=[Your Pexels API Key]**: Required if using **pexels** as the image provider.
- **PIXABAY_API_KEY=[Your Pixabay API Key]**: Required if using **pixabay** as the image provider.
- **GOOGLE_API_KEY=[Your Google API Key]**: Required if using **gemini_flash** as the image provider.
- **OPENAI_API_KEY=[Your OpenAI API Key]**: Required if using **dall-e-3** as the image provider.

> **Note:** You can freely choose both the LLM (text generation) and the image provider. Supported image providers: **pexels**, **pixabay**, **gemini_flash** (Google), and **dall-e-3** (OpenAI).

### Using OpenAI
```bash
docker run -it --name schwarm -p 5000:80 -e LLM="openai" -e OPENAI_API_KEY="******" -e IMAGE_PROVIDER="dall-e-3" -e CAN_CHANGE_KEYS="false" -v "./app_data:/app_data" ghcr.io/schwarm/schwarm:latest
```

### Using Ollama
```bash
docker run -it --name schwarm -p 5000:80 -e LLM="ollama" -e OLLAMA_MODEL="llama3.2:3b" -e IMAGE_PROVIDER="pexels" -e PEXELS_API_KEY="*******" -e CAN_CHANGE_KEYS="false" -v "./app_data:/app_data" ghcr.io/schwarm/schwarm:latest
```

### Using OpenAI Compatible API
```bash
docker run -it -p 5000:80 -e CAN_CHANGE_KEYS="false"  -e LLM="custom" -e CUSTOM_LLM_URL="http://*****" -e CUSTOM_LLM_API_KEY="*****" -e CUSTOM_MODEL="llama3.2:3b" -e IMAGE_PROVIDER="pexels" -e  PEXELS_API_KEY="********" -v "./app_data:/app_data" ghcr.io/schwarm/schwarm:latest
```

#### Running SCHWARM with GPU Support

To use GPU acceleration with Ollama models, you need to install and configure the NVIDIA Container Toolkit. This allows Docker containers to access your NVIDIA GPU.

Once the NVIDIA Container Toolkit is installed and configured, you can run SCHWARM with GPU support by adding the `--gpus=all` flag:

```bash
docker run -it --name schwarm --gpus=all -p 5000:80 -e LLM="ollama" -e OLLAMA_MODEL="llama3.2:3b" -e IMAGE_PROVIDER="pexels" -e PEXELS_API_KEY="*******" -e CAN_CHANGE_KEYS="false" -v "./app_data:/app_data" ghcr.io/schwarm/schwarm:latest
```

> **Note:** GPU acceleration significantly improves the performance of Ollama models, especially for larger models. Make sure you have sufficient GPU memory for your chosen model.

## Generate Presentation over API

### Generate Presentation

Endpoint: `/api/v1/ppt/generate/presentation`

Method: `POST`

Content-Type: `multipart/form-data`

> **Note**: Make sure to set `Content-Type` as `multipart/form-data` and not `application/json`.

#### Request Body

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| prompt | string | Yes | The main topic or prompt for generating the presentation |
| n_slides | integer | No | Number of slides to generate (default: 8, min: 5, max: 15) |
| language | string | No | Language for the presentation (default: "English") |
| layout | string | No | Presentation theme (default: "general"). Available options: "classic", "general", "modern", "professional" + Custom layouts |
| documents | File[] | No | Optional list of document files to include in the presentation. Supported file types: PDF, TXT, PPTX, DOCX |
| export_as | string | No | Export format ("pptx" or "pdf", default: "pptx") |

#### Response

```json
{
    "presentation_id": "string",
    "path": "string",
    "edit_path": "string"
}
```

#### Example Request

```bash
curl -X POST http://localhost:5000/api/v1/ppt/generate/presentation \
  -F "prompt=Introduction to Machine Learning" \
  -F "n_slides=5" \
  -F "language=English" \
  -F "layout=general" \
  -F "theme=light" \
  -F "export_as=pptx"
```

#### Example Response

```json
{
  "presentation_id": "d3000f96-096c-4768-b67b-e99aed029b57",
  "path": "/static/user_data/d3000f96-096c-4768-b67b-e99aed029b57/Introduction_to_Machine_Learning.pptx",
  "edit_path": "/presentation?id=d3000f96-096c-4768-b67b-e99aed029b57"
}
```

> **Note:** Make sure to prepend your server's root URL to the path and edit_path fields in the response to construct valid links.

For detailed info checkout [API documentation](https://docs.schwarm.ai/using-schwarm-api).

### API Tutorials
- [Generate Presentations via API in 5 minutes](https://docs.schwarm.ai/tutorial/generate-presentation-over-api)
- [Create Presentations from CSV using AI](https://docs.schwarm.ai/tutorial/generate-presentation-from-csv)
- [Create Data Reports Using AI](https://docs.schwarm.ai/tutorial/create-data-reports-using-ai)

## Roadmap
- [x] Support for custom HTML templates by developers
- [x] Support for accessing custom templates over API
- [ ] Implement MCP server
- [ ] Ability for users to change system prompt
- [X] Support external SQL database


## UI Features

### 1. Add prompt, select number of slides and language
![Demo](readme_assets/images/prompting.png)

### 2. Select theme
![Demo](readme_assets/images/select-theme.png)

### 3. Review and edit outline
![Demo](readme_assets/images/outline.png)

### 4. Select theme
![Demo](readme_assets/images/select-theme.png)

### 5. Present on app
![Demo](readme_assets/images/present.png)

### 6. Change theme
![Demo](readme_assets/images/change-theme.png)

### 7. Export presentation as PDF and PPTX
![Demo](readme_assets/images/export-presentation.png)

## Community
[Discord](https://discord.gg/9ZsKKxudNE)

## License

Apache 2.0
