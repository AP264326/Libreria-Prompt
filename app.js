// Prompt Library Application - JavaScript

// Preloaded prompts data
const PROMPTS_DATA = [
  {
    "id": "s1",
    "title": "Scouting – Elenco aziende B2B",
    "category": "Scouting",
    "description": "Genera un elenco dettagliato di aziende B2B nel settore scelto e nella provincia indicata, con filtri su dipendenti e output in Excel.",
    "text": "Genera un elenco dettagliato di aziende B2B nel settore [settore/categoria] situate nella provincia di [nome provincia] con un consumo energetico annuo superiore a [kWh]. Per ogni azienda, includi le seguenti informazioni:\n• Nome azienda\n• Settore specifico\n• Numero di dipendenti \n• Indirizzo completo\n• Sito web\n• Indirizzo e-mail\n• Numero di telefono\n• Ruolo delle persone chiave (es. responsabile vendite, marketing, acquisti)\n• Profili LinkedIn delle persone chiave (CEO o Energy Manager)\n• Valutazione del potenziale interesse per soluzioni di risparmio energetico\nRequisiti:\n1. Filtro: aziende con almeno [n. dipendenti], localizzate nella provincia di [nome provincia].\n2. Presenta i risultati in formato tabellare, con una colonna per ogni campo richiesto.\n3. Al termine, crea un file Excel contenente tutti i dati raccolti e fornisci un link per scaricarlo."
  },
  {
    "id": "p1",
    "title": "Profilazione Cliente B2B (Identikit)",
    "category": "Profilazione Cliente B2B (Identikit)",
    "description": "Analizza un'azienda target e redigi un identikit energetico completo con opportunità commerciali.",
    "text": "Analizza l'azienda [NOME AZIENDA] e crea un identikit approfondito orientato alla consulenza energetica. Raccogli e sintetizza le seguenti informazioni (se disponibili da fonti pubbliche):\n🔹 Profilo generale dell'azienda\n– Ragione sociale, anno di fondazione, struttura societaria\n– Storia e sviluppo aziendale\n– Settore merceologico / categoria ATECO\n– Sedi operative, stabilimenti e presenza territoriale\n🔹 Dimensioni e struttura economica\n– Numero dipendenti\n– Fatturato annuo e trend economico (ultimi 3 anni)\n– Presenza di stabilimenti energivori o grandi superfici\n🔹 Consumo e fabbisogno energetico potenziale\n– Indizi sulla potenza impegnata / consumi elettrici stimati\n– Tipologia di utenze: produttive, logistiche, direzionali, commerciali\n– Presenza di turnazioni h24 o lavorazioni energivore\n🔹 Stato attuale dell'approvvigionamento energetico\n– Indizi su contratti luce/gas\n– Presenza di sistemi di monitoraggio energetico\n– Presenza di impianti di autoproduzione (es. fotovoltaico, cogenerazione)\n– Presenza di colonnine EV o politiche ESG\n🔹 Altri elementi strategici o opportunità commerciali\n– Eventuali criticità energetiche o opportunità di ottimizzazione\n– Progetti recenti di efficienza energetica, sostenibilità o digitalizzazione\n– Collaborazioni con ESCo o consulenti energetici\nFornisci il profilo sotto forma di scheda strutturata (tipo report operativo per consulente). Evidenzia opportunità di intervento commerciale, criticità e punti di forza. Se i dati non sono disponibili, segnala l'informazione come non reperita."
  },
  {
    "id": "pr1",
    "title": "Prospecting – Pacchetto primo contatto",
    "category": "Prospecting",
    "description": "Email di presentazione, script telefonico, domande e obiezioni per il primo contatto con cliente potenziale.",
    "text": "Crea un pacchetto completo con i miei dati [nome e cognome, ruolo, sede di lavoro e contatti], per un primo contatto con il potenziale cliente [nome cliente], includendo:\n1. Un'email di presentazione efficace che offra gratuitamente un'analisi dettagliata della bolletta elettrica e un check-up energetico personalizzato.\n2. Uno script telefonico strutturato per il follow-up, orientato a coinvolgere il cliente e fissare un appuntamento.\n3. Tre domande chiave da porre durante la telefonata per valutare la qualificazione del cliente rispetto a un'offerta fotovoltaica o a una consulenza sulla bolletta.\n4. Tre obiezioni comuni che il cliente potrebbe sollevare, con relative risposte persuasive e professionali per superarle."
  },
  {
    "id": "pp1",
    "title": "Proposition – Offerta impianto FV",
    "category": "Proposition",
    "description": "Proposta commerciale fotovoltaico con ROI e confronto bolletta.",
    "text": "Crea una proposta commerciale per il cliente [nome azienda], evidenziando i benefici di un impianto fotovoltaico da [kWp], ROI stimato in [X] anni, e confronto con il costo attuale in bolletta."
  },
  {
    "id": "se1",
    "title": "Simulatore Elettrico – Estrazione fattura",
    "category": "Simulatore Elettrico",
    "description": "Estrai e riassumi dati di consumo da fattura PDF.",
    "text": "Ruolo: Estrattore dati da fattura cliente.\nInput: file PDF contenente la fattura.\nAttività:\n- Estrai i seguenti dati dalla fattura:\n  • Consumi (kWh) suddivisi per fascia oraria, se disponibili (F1, F2, F3).\n  • Tipologie di prodotti/servizi utilizzati.\n  • Quantità di ciascun prodotto/servizio.\n  • Prezzi attuali applicati.\n  • Condizioni contrattuali rilevabili (durata contratto, penali, ecc.).\nOutput:\n- Restituisci un riepilogo strutturato in formato tabellare con i dati sopra elencati.\n- Evidenzia eventuali dati mancanti o ambigui da verificare.\nNota: presta attenzione alle unità di misura e ai dettagli contrattuali."
  },
  {
    "id": "se2",
    "title": "Simulatore Elettrico – Analizzatore offerte",
    "category": "Simulatore Elettrico",
    "description": "Analizza offerte da file Excel e prepara tabella confronto.",
    "text": "Ruolo: Analizzatore offerte da file Excel.\nInput: file Excel contenente le offerte prodotti per fornitura elettrica, con colonne dettagliate.\nAttività:\n- Leggi e struttura i dati del file Excel.\n- Per ogni offerta, interpreta correttamente le formule di prezzo: PUN, MIX, ABB+PUN, FIX.\n- Evidenzia offerte con PCV pari a zero e come trattarle.\n- Fornisci una tabella strutturata con tutte le informazioni pronte per il confronto.\nOutput:\n- Tabella con tutte le offerte pronte per analisi.\n- Eventuali note su vincoli o particolarità delle offerte."
  },
  {
    "id": "se3",
    "title": "Simulatore Elettrico – Confronto offerte",
    "category": "Simulatore Elettrico",
    "description": "Confronta offerte e identifica la migliore opzione.",
    "text": "Ruolo: Simulatore per confronto offerte e identificazione della migliore opzione.\nInput:\n- Dati estratti dalla fattura cliente (Prompt 1).\n- Tabella offerte strutturata (Prompt 2).\nAttività:\n- Confronta i prodotti/servizi attualmente usati dal cliente con le offerte presenti.\n- Valuta prezzo unitario, condizioni contrattuali e durata contratto.\n- Calcola il costo stimato per ogni offerta basandoti sui consumi reali.\n- Genera una lista ordinata delle offerte alternative potenzialmente migliori.\n- Evidenzia vincoli o particolarità rilevanti.\nOutput: Tabella riepilogativa e sintesi raccomandazioni."
  },
  {
    "id": "se4",
    "title": "Simulatore Elettrico – Report finale",
    "category": "Simulatore Elettrico",
    "description": "Genera report finale con raccomandazioni.",
    "text": "Ruolo: Generatore di report finale e raccomandazioni.\nInput: tabella riepilogativa delle offerte.\nAttività: analizza e redigi sintesi chiara con offerta consigliata, risparmio, miglioramenti contrattuali, vincoli.\nSuggerisci azioni successive.\nOutput: report testuale; possibili grafici o tabelle."
  },
  {
    "id": "fv1",
    "title": "Preventivatore FV – Pre-preventivo",
    "category": "Preventivatore Simulatore FV",
    "description": "Calcola pre-preventivo fotovoltaico con scenari e ROI.",
    "text": "Genera un pre-preventivo fotovoltaico per [azienda B2B]. L'utente fornirà: consumi annui per fasce, superficie, località, tipologia pannello, costi unitari, ecc. Il sistema deve calcolare costi, produzione, autoconsumo, risparmio, ROI, incentivi 2025, grafico scenari (base, accumulo, accumulo+colonnina), numero pannelli, report PDF scaricabile, salvataggio dati."
  },
  {
    "id": "lc1",
    "title": "Lettura Consumi Next – Analisi fasce",
    "category": "Lettura Consumi Next",
    "description": "Calcola consumi annui per fasce orarie e genera grafico.",
    "text": "1. Calcola il consumo annuo per ciascuna delle tre fasce orarie (F1, F2, F3) e il consumo totale annuo, espressi in MWh, utilizzando le letture di Next che ti fornisco in allegato.\n2. Crea una tabella Excel scaricabile con colonne: Consumo fascia F1, Consumo fascia F2, Consumo fascia F3, Consumo totale annuo.\n3. Genera un grafico a linee dei consumi mensili in kWh suddivisi per fascia oraria e totale e fornisci analisi dettagliata."
  },
  {
    "id": "nf1",
    "title": "Negoziazione – Follow-up cliente",
    "category": "Negoziazione/Follow-up",
    "description": "Email e script telefonico per follow-up dopo proposta inviata.",
    "text": "Crea un pacchetto completo con i miei dati, per [nome cliente] che ha ricevuto la proposta tre giorni fa:\n1. E-mail di follow-up professionale.\n2. Script telefonico per follow-up.\n3. Tre domande chiave per la telefonata.\n4. Tre obiezioni comuni con risposte."
  },
  {
    "id": "cb1",
    "title": "Gestione Customer Base – Email post installazione",
    "category": "Gestione Customer Base",
    "description": "Email di ringraziamento, assistenza e richiesta feedback post installazione.",
    "text": "Crea una e-mail post installazione per ringraziare il cliente, offrire assistenza e richiedere feedback."
  }
];

// Global state
let currentPrompts = [...PROMPTS_DATA];
let favorites = new Set();
let showOnlyFavorites = false;
let searchDebounceTimer = null;

// DOM elements
let promptsGrid, searchInput, categoryFilter, favoritesToggle, importDocxBtn, fileInput, noResults, toast, toastMessage;

// Initialize app
function initializeApp() {
  // Get DOM elements
  promptsGrid = document.getElementById('prompts-grid');
  searchInput = document.getElementById('search-input');
  categoryFilter = document.getElementById('category-filter');
  favoritesToggle = document.getElementById('favorites-toggle');
  importDocxBtn = document.getElementById('import-docx');
  fileInput = document.getElementById('file-input');
  noResults = document.getElementById('no-results');
  toast = document.getElementById('toast');
  toastMessage = document.getElementById('toast-message');

  // Check if all elements exist
  if (!promptsGrid || !searchInput || !categoryFilter || !favoritesToggle) {
    console.error('Required DOM elements not found');
    return;
  }

  // Load data and render
  loadFavorites();
  renderPrompts(currentPrompts);
  initializeEventListeners();
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

// Load favorites from sessionStorage
function loadFavorites() {
  try {
    const savedFavorites = sessionStorage.getItem('promptFavorites');
    if (savedFavorites) {
      favorites = new Set(JSON.parse(savedFavorites));
    }
  } catch (e) {
    console.warn('Could not load favorites from sessionStorage');
    favorites = new Set();
  }
}

// Save favorites to sessionStorage
function saveFavorites() {
  try {
    sessionStorage.setItem('promptFavorites', JSON.stringify([...favorites]));
  } catch (e) {
    console.warn('Could not save favorites to sessionStorage');
  }
}

// Initialize event listeners
function initializeEventListeners() {
  // Search input with debounce
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(() => {
      applyFilters();
    }, 200);
  });

  // Category filter
  categoryFilter.addEventListener('change', applyFilters);

  // Favorites toggle
  favoritesToggle.addEventListener('click', () => {
    showOnlyFavorites = !showOnlyFavorites;
    favoritesToggle.classList.toggle('active', showOnlyFavorites);
    favoritesToggle.textContent = showOnlyFavorites ? '⭐ Tutti i prompt' : '⭐ I miei preferiti';
    applyFilters();
  });

  // Import DOCX
  importDocxBtn.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      handleDocx(file);
    }
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.export-dropdown')) {
      closeAllDropdowns();
    }
  });
}

// Apply filters and render prompts
function applyFilters() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const selectedCategory = categoryFilter.value;

  let filteredPrompts = currentPrompts.filter(prompt => {
    // Search filter
    const matchesSearch = !searchTerm || 
      prompt.title.toLowerCase().includes(searchTerm) ||
      prompt.description.toLowerCase().includes(searchTerm) ||
      prompt.category.toLowerCase().includes(searchTerm);

    // Category filter
    const matchesCategory = !selectedCategory || prompt.category === selectedCategory;

    // Favorites filter
    const matchesFavorites = !showOnlyFavorites || favorites.has(prompt.id);

    return matchesSearch && matchesCategory && matchesFavorites;
  });

  renderPrompts(filteredPrompts);
}

// Render prompts in grid
function renderPrompts(prompts) {
  if (!promptsGrid) {
    console.error('Prompts grid element not found');
    return;
  }

  if (prompts.length === 0) {
    promptsGrid.innerHTML = '';
    if (noResults) {
      noResults.classList.remove('hidden');
    }
    return;
  }

  if (noResults) {
    noResults.classList.add('hidden');
  }
  
  promptsGrid.innerHTML = prompts.map(prompt => `
    <div class="prompt-card">
      <div class="prompt-card__header">
        <h3 class="prompt-card__title">${escapeHtml(prompt.title)}</h3>
        <span class="prompt-card__category">${escapeHtml(prompt.category)}</span>
      </div>
      <div class="prompt-card__description">
        ${escapeHtml(prompt.description)}
      </div>
      <div class="prompt-card__actions">
        <button class="btn-blue copy-btn" onclick="copyPrompt('${prompt.id}')" aria-label="Copia prompt">
          📋 Copia
        </button>
        <button class="btn-blue favorite-btn ${favorites.has(prompt.id) ? 'active' : ''}" 
                onclick="toggleFavorite('${prompt.id}')" 
                aria-label="${favorites.has(prompt.id) ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}">
          ${favorites.has(prompt.id) ? '⭐' : '☆'}
        </button>
        <div class="export-dropdown">
          <button class="btn-blue export-btn" onclick="toggleExportDropdown('${prompt.id}')" aria-label="Esporta prompt">
            📤 Export
          </button>
          <div class="export-dropdown-content" id="export-dropdown-${prompt.id}">
            <button onclick="exportPrompt('${prompt.id}', 'txt')">📄 Esporta come .txt</button>
            <button onclick="exportPrompt('${prompt.id}', 'md')">📝 Esporta come .md</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Copy prompt to clipboard
async function copyPrompt(id) {
  const prompt = currentPrompts.find(p => p.id === id);
  if (!prompt) return;

  try {
    await navigator.clipboard.writeText(prompt.text);
    showToast('Prompt copiato negli appunti!');
  } catch (err) {
    // Fallback for browsers that don't support clipboard API
    const textArea = document.createElement('textarea');
    textArea.value = prompt.text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    textArea.style.top = '-9999px';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      showToast('Prompt copiato negli appunti!');
    } catch (fallbackErr) {
      showToast('Errore durante la copia. Riprova.');
    }
    
    document.body.removeChild(textArea);
  }
}

// Toggle favorite status
function toggleFavorite(id) {
  if (favorites.has(id)) {
    favorites.delete(id);
  } else {
    favorites.add(id);
  }
  
  saveFavorites();
  applyFilters(); // Re-render to update favorite buttons
}

// Toggle export dropdown
function toggleExportDropdown(id) {
  closeAllDropdowns();
  const dropdown = document.getElementById(`export-dropdown-${id}`);
  if (dropdown) {
    dropdown.classList.toggle('show');
  }
}

// Close all export dropdowns
function closeAllDropdowns() {
  const dropdowns = document.querySelectorAll('.export-dropdown-content');
  dropdowns.forEach(dropdown => {
    dropdown.classList.remove('show');
  });
}

// Export prompt as file
function exportPrompt(id, format) {
  const prompt = currentPrompts.find(p => p.id === id);
  if (!prompt) return;

  let content = '';
  let filename = '';
  let mimeType = '';

  if (format === 'txt') {
    content = `${prompt.title}\n${'='.repeat(prompt.title.length)}\n\nCategoria: ${prompt.category}\n\nDescrizione: ${prompt.description}\n\nPrompt:\n${prompt.text}`;
    filename = `${sanitizeFilename(prompt.title)}.txt`;
    mimeType = 'text/plain';
  } else if (format === 'md') {
    content = `# ${prompt.title}\n\n**Categoria:** ${prompt.category}\n\n**Descrizione:** ${prompt.description}\n\n## Prompt\n\n${prompt.text}`;
    filename = `${sanitizeFilename(prompt.title)}.md`;
    mimeType = 'text/markdown';
  }

  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  closeAllDropdowns();
  showToast(`File ${format.toUpperCase()} scaricato!`);
}

// Handle DOCX import
async function handleDocx(file) {
  try {
    showToast('Caricamento file in corso...');
    
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer });
    
    const newPrompts = parseDocxContent(result.value);
    
    if (newPrompts.length === 0) {
      showToast('Nessun prompt valido trovato nel file.');
      return;
    }

    // Replace current prompts with new ones
    currentPrompts = newPrompts;
    
    // Clear favorites since we have new prompts
    favorites.clear();
    saveFavorites();
    showOnlyFavorites = false;
    favoritesToggle.classList.remove('active');
    favoritesToggle.textContent = '⭐ I miei preferiti';
    
    // Reset filters
    searchInput.value = '';
    categoryFilter.value = '';
    
    // Render new prompts
    renderPrompts(currentPrompts);
    
    showToast(`${newPrompts.length} prompt caricati dal file!`);
    
  } catch (error) {
    console.error('Errore durante il caricamento del file:', error);
    showToast('Errore durante il caricamento del file.');
  }
}

// Parse DOCX content to extract prompts
function parseDocxContent(text) {
  const prompts = [];
  const lines = text.split('\n').map(line => line.trim()).filter(line => line);
  
  let currentPrompt = null;
  let contentBuffer = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if this looks like a title (shorter line, possibly followed by category info)
    if (line.length < 100 && !line.includes('\t') && !line.startsWith('-') && !line.startsWith('•')) {
      // Save previous prompt if exists
      if (currentPrompt && currentPrompt.title) {
        currentPrompt.text = contentBuffer.join('\n').trim();
        if (currentPrompt.text && currentPrompt.category) {
          prompts.push(currentPrompt);
        }
      }
      
      // Start new prompt
      currentPrompt = {
        id: `imported_${Date.now()}_${prompts.length}`,
        title: line,
        category: '',
        description: '',
        text: ''
      };
      contentBuffer = [];
      
      // Try to find category in next few lines
      for (let j = i + 1; j < Math.min(i + 3, lines.length); j++) {
        const nextLine = lines[j];
        if (nextLine.length < 50 && !nextLine.includes('.') && !nextLine.includes(':')) {
          currentPrompt.category = nextLine;
          i = j; // Skip processed lines
          break;
        }
      }
      
      // If no category found, use default
      if (!currentPrompt.category) {
        currentPrompt.category = 'Importato';
      }
      
    } else {
      // Add to content buffer
      contentBuffer.push(line);
      
      // Use first content line as description if not set
      if (currentPrompt && !currentPrompt.description && contentBuffer.length === 1) {
        currentPrompt.description = line.substring(0, 150) + (line.length > 150 ? '...' : '');
      }
    }
  }
  
  // Save last prompt
  if (currentPrompt && currentPrompt.title) {
    currentPrompt.text = contentBuffer.join('\n').trim();
    if (currentPrompt.text && currentPrompt.category) {
      prompts.push(currentPrompt);
    }
  }
  
  return prompts;
}

// Show toast notification
function showToast(message) {
  if (!toast || !toastMessage) return;
  
  toastMessage.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Utility functions
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function sanitizeFilename(filename) {
  return filename.replace(/[^a-z0-9\s\-_]/gi, '_').toLowerCase();
}

// Make functions available globally for onclick handlers
window.copyPrompt = copyPrompt;
window.toggleFavorite = toggleFavorite;
window.toggleExportDropdown = toggleExportDropdown;
window.exportPrompt = exportPrompt;