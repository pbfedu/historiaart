window.QuestionBank = {

    // ==========================================
    // 1. JOC: FITXA TÈCNICA (GameFitxaTecnica)
    // ==========================================
    getFitxa: function(chapterId, gameKey) {
      const data = {
        'colosseu_fitxa': {
          imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-0Plh1yJ_CvhOnUjsAViK0R6bIu8-Z1DDEPjv32n_-A&s=10",
          exp: "Recorda repassar sempre autor/promotor, cronologia, tipologia, materials i localització del Colosseu.",
          fields: [
            { id: 'obra', label: 'Edifici', type: 'input', model: 'Colosseu o Amfiteatre Flavi', keywords: ['colosseu', 'amfiteatre flavi'] },
            { id: 'autor', label: 'Autor / Promotor', type: 'input', model: 'Desconegut (Inaugurat per Flavi Vespasià / Tit)', keywords: ['vespasià', 'tit', 'desconegut', 'flavi'] },
            { id: 'cronologia', label: 'Cronologia', type: 'input', model: '72-80 dC', keywords: ['72', '80'] },
            { id: 'tipologia', label: 'Tipologia', type: 'input', model: 'Amfiteatre', keywords: ['amfiteatre'] },
            { id: 'material', label: 'Materials', type: 'textarea', model: 'Marbre travertí, formigó, maó, pedra i estuc', keywords: ['marbre', 'travertí', 'formigó', 'maó', 'pedra'] },
            { id: 'estil', label: 'Estil', type: 'input', model: 'Romà Imperial', keywords: ['romà', 'imperial'] },
            { id: 'localitzacio', label: 'Localització', type: 'input', model: 'Roma', keywords: ['roma'] }
          ]
        },
        'panteo_fitxa': {
          imgUrl: "https://www.barcelo.com/guia-turismo/wp-content/uploads/2020/01/panteon-pal.jpg",
          exp: "El Panteó va ser promogut inicialment per Agripa i reconstruït en època imperial.",
          fields: [
            { id: 'obra', label: 'Edifici', type: 'input', model: 'Panteó', keywords: ['panteó', 'panteo'] },
            { id: 'autor', label: 'Autor / Promotor', type: 'input', model: 'Desconegut (Promogut per Agripa)', keywords: ['agripa', 'desconegut'] },
            { id: 'cronologia', label: 'Cronologia', type: 'input', model: '118-125 dC', keywords: ['118', '125'] },
            { id: 'tipologia', label: 'Tipologia', type: 'input', model: 'Temple', keywords: ['temple'] },
            { id: 'material', label: 'Materials', type: 'textarea', model: 'Formigó, granit, maons, marbre i fusta', keywords: ['formigó', 'granit', 'maons', 'marbre', 'fusta'] },
            { id: 'estil', label: 'Estil', type: 'input', model: 'Romà Imperial', keywords: ['romà', 'imperial'] },
            { id: 'localitzacio', label: 'Localització', type: 'input', model: 'Camp de Mart (Roma)', keywords: ['camp de mart', 'roma'] }
          ]
        }
      };
      return data[gameKey] || null;
    },
  
    // ==========================================
    // 2. JOC: BUITS + REDACCIÓ LLIURE (GameObraSeccio)
    // ==========================================
    getObraSeccio: function(chapterId, gameKey) {
      const data = {
        // 1. Context Històric Roma
        'roma_context': {
          title: "1. Context Històric de Roma",
          imgUrl: "https://content-historia.nationalgeographic.com.es/medio/2019/12/12/foro-romano-roma_c50eb2f2_1280x720.jpg",
          blanksData: {
            text: "La història de Roma es divideix en tres períodes: Monarquia, ______ i Imperi. L'any 313, Constantí va promulgar l'Edicte de ______ per concedir llibertat religiosa, i el 380 Teodosi va declarar el cristianisme religió oficial amb l'Edicte de ______.",
            blanks: [
              { id: "b1", answer: "República", options: ["República", "Dictadura", "Tardoromà"] },
              { id: "b2", answer: "Milà", options: ["Tessalònica", "Milà", "Roma"] },
              { id: "b3", answer: "Tessalònica", options: ["Milà", "Tessalònica", "Tarragona"] }
            ]
          },
          writingData: {
            prompt: "Explica com es va produir la fi de l'Imperi Romà d'Occident l'any 476 dC.",
            keywords: ['476', 'odoacre', 'hèruls', 'ròmul augústul', 'bàrbares'],
            modelAnswer: "L'any 476 dC, Odoacre, rei dels hèruls, va derrotar l'últim emperador Ròmul Augústul, posant fi a l'Imperi Romà d'Occident després de segles d'assetjament de les tribus bàrbares."
          }
        },
  
        // 2. Contingut General i Urbanisme
        'roma_urbanisme': {
          title: "2. Urbanisme i Vies Romanes",
          imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwvXw6yCrtz13LXksNMX3rQ3vNg_gIQy0dU3mo0uvlH9b7MGtCcoyPRApz&s=10",
          blanksData: {
            text: "Les ciutats romanes de nova planta s'organitzaven en quadricular seguint el traçat dels campaments militars. Es dividien per dos carrers principals: el ______ (nord-sud) i el Decumanus (est-oest). A la cruïlla se situava el ______. La via de comunicació més important a Hispània va ser la Via ______.",
            blanks: [
              { id: "b1", answer: "cardo", options: ["cardo", "pòrtic", "fòrum"] },
              { id: "b2", answer: "fòrum", options: ["àgora", "fòrum", "teatre"] },
              { id: "b3", answer: "Augusta", options: ["Trajana", "Augusta", "Appia"] }
            ]
          },
          writingData: {
            prompt: "Quins elements públics i religiosos s'aixecaven habitualment al fòrum romà?",
            keywords: ['temples', 'basíliques', 'cúria', 'arxiu', 'monuments', 'trajà'],
            modelAnswer: "Al fòrum s'hi construïen els temples, les basíliques, la cúria, l'arxiu i monuments commemoratius com columnes i arcs de triomf (destacant el fòrum de Trajà)."
          }
        },
  
        // 3. Arquitectura Romana
        'roma_arquitectura': {
          title: "3. Tipologies i Tècniques Arquitectòniques",
          imgUrl: "https://images.jpost.com/image/upload/f_auto,fl_lossy/q_auto/c_fill,g_faces:center,h_720,w_1280/641369",
          blanksData: {
            text: "Els romans van utilitzar un nou parament anomenat opus ______, equiparable al formigó actual. Pel que fa als ordres arquitectònics, van afegir l'ordre toscà i l'ordre ______, que barrejava volutes jòniques i fulles d'acant corínties.",
            blanks: [
              { id: "b1", answer: "caementicium", options: ["tessellatum", "caementicium", "sectile"] },
              { id: "b2", answer: "compost", options: ["compost", "dòric", "hel·lenístic"] }
            ]
          },
          writingData: {
            prompt: "Diferencia breument les tipologies d'habitatge privat romà (domus i insulae).",
            keywords: ['domus', 'unifamiliar', 'insulae', 'veïns', 'pisos'],
            modelAnswer: "Les domus eren cases unifamiliars destinades a famílies acomodades, mentre que les insulae eren blocs de veïns de diversos pisos per a les classes populars."
          }
        },
  
        // 4. Escultura Romana
        'roma_escultura': {
          title: "4. El Retrat i el Relleu Històric",
          imgUrl: "https://www.worldhistory.org/uploads/images/1162.jpg",
          blanksData: {
            text: "L'escultura romana destaca pel seu gust pel ______. El retrat imperial va passar de l'idealisme clàssic del segle I dC cap a una esquematització i rigidesa en el Baix Imperi. L'estàtua eqüestre de Marc ______ va ser el model per al Renaixement.",
            blanks: [
              { id: "b1", answer: "realisme", options: ["idealisme", "realisme", "abstracció"] },
              { id: "b2", answer: "Aureli", options: ["Constantí", "Aureli", "Trajà"] }
            ]
          },
          writingData: {
            prompt: "Explica quines característiques té el relleu històric romà i cita un monument on s'apliqui.",
            keywords: ['narratiu', 'realisme', 'bèl·liques', 'columna trajana', 'ara pacis'],
            modelAnswer: "El relleu històric té caràcter narratiu i realista, recreant escenes bèl·liques o cerimònies oficials per magnificar l'Imperi (ex: Columna Trajana o Ara Pacis)."
          }
        },
  
        // 5. Pintura i Mosaics
        'roma_pintura': {
          title: "5. Estils Pictòrics i Mosaics",
          imgUrl: "https://content-historia.nationalgeographic.com.es/medio/2019/12/12/mosaico-romano-del-siglo-ii-del-alcazar-de-cordoba-espana_47665ff4_1280x720.jpg",
          blanksData: {
            text: "Gràcies a l'erupció del Vesuvi l'any 79 dC es van conservar els frescos de Pompeia i Herculà. El primer estil s'anomena d'______; el segon estil és l'arquitectònic. Els mosaics es construïen amb petites peces anomenades ______.",
            blanks: [
              { id: "b1", answer: "incrustació", options: ["incrustació", "ornamental", "il·lusionista"] },
              { id: "b2", answer: "tessel·les", options: ["tessel·les", "frescos", "estucs"] }
            ]
          },
          writingData: {
            prompt: "Quines diferències hi ha entre les tècniques de mosaic opus tessellatum i opus sectile?",
            keywords: ['tessellatum', 'grec', 'sectile', 'marbre', 'sumptuós', 'grans'],
            modelAnswer: "L'opus tessellatum feia servir petites tessel·les regulars d'herència grega, mentre que l'opus sectile utilitzava fragments més grans de marbre de diferent mida per a decoracions sumptuoses."
          }
        },
  
        // 6.2 Descripció Formal Colosseu
        'colosseu_formal': {
          title: "6.2 Descripció Formal del Colosseu",
          imgUrl: "https://pasaportenomada.es/wp-content/uploads/2020/05/roma-guia-visitar-coliseo-romano.jpg",
          blanksData: {
            text: "La façana del Colosseu consta de quatre nivells: els tres primers tenen 80 arcs de ______ punt on superposen els ordres toscà, jònic i corinti. El quart nivell o ______ té lesenes corínties i pals per al velàrium.",
            blanks: [
              { id: "b1", answer: "mig", options: ["mig", "apuntat", "trabat"] },
              { id: "b2", answer: "àtic", options: ["frontó", "àtic", "entaulament"] }
            ]
          },
          writingData: {
            prompt: "Descriu el subsòl del Colosseu i la seva funció tècnica.",
            keywords: ['subsòl', 'maons', 'cel·les', 'feres', 'aigua', 'piscina', 'impermeabilitzat'],
            modelAnswer: "Sota la sorra hi havia un subsòl de maons amb galeries, cel·les per a feres, magatzems i un sistema impermeable d'aigua per omplir la sorra i fer naumàquies (batalles navals)."
          }
        },
  
        // 6.3 Entorn Colosseu
        'colosseu_entorn': {
          title: "6.3 Entorn i Integració Urbanística del Colosseu",
          imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcvCMMITgJTjSOlJ3_z0TfXFcoZCpTBtNVXh1QmGElVSoTUAR_7DO5Rwg&s=10",
          blanksData: {
            text: "El Colosseu es va construir sobre l'antic llac del palau de Neró, conegut com la Domus ______. L'any 1936 el seu entorn va ser modificat per la construcció de la Via del Fòrum Imperial promoguda per ______.",
            blanks: [
              { id: "b1", answer: "Aurea", options: ["Aurea", "Augusta", "Flàvia"] },
              { id: "b2", answer: "Mussolini", options: ["Mussolini", "Cèsar", "August"] }
            ]
          },
          writingData: {
            prompt: "Quina intenció política tenia la dinastia Flàvia en ubicar el Colosseu a la Domus Aurea?",
            keywords: ['poble', 'retornar', 'neró', 'popularitat', 'públic'],
            modelAnswer: "Vespasià i la dinastia Flàvia volien guanyar-se el favor del poble tornant a l'ús públic un espai privat que l'odiat emperador Neró s'havia après per a la seva vila."
          }
        },
  
        // 6.4 Funció Colosseu
        'colosseu_funcio': {
          title: "6.4 Funció, Contingut i Significat del Colosseu",
          imgUrl: "https://muyinteresante.okdiario.com/wp-content/uploads/sites/5/2024/04/15/661d0fa5446cc.jpeg",
          blanksData: {
            text: "L'edifici podia acollir fins a ______ espectadors. El nom popular de 'Colosseu' prové de la propera estàtua colossal de ______ que feia 40 metres d'alçada.",
            blanks: [
              { id: "b1", answer: "50.000", options: ["10.000", "50.000", "100.000"] },
              { id: "b2", answer: "Neró", options: ["August", "Neró", "Trajà"] }
            ]
          },
          writingData: {
            prompt: "Quines classes d'espectacles s'hi organitzaven?",
            keywords: ['gladiadors', 'feres', 'venationes', 'naumàquies', 'batalles'],
            modelAnswer: "S'hi feien combats de gladiadors, caceres de feres (venationes) i simulacres de batalles històriques o navals (naumàquies)."
          }
        },
  
        // 6.5 Models i Influències Colosseu
        'colosseu_models': {
          title: "6.5 Models i Influències del Colosseu",
          imgUrl: "https://upload.wikimedia.org/wikipedia/commons/5/54/Theatre_of_Epidaurus_OLC.jpg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original",
          blanksData: {
            text: "La planta el·líptica de l'amfiteatre neix de la unió de dos ______ grecs. La superposició d'ordres a les façanes va ser posteriorment imitada per arquitectes del Renaixement com ______.",
            blanks: [
              { id: "b1", answer: "teatres", options: ["teatres", "temples", "estadis"] },
              { id: "b2", answer: "Alberti", options: ["Alberti", "Miquel Àngel", "Brunelleschi"] }
            ]
          },
          writingData: {
            prompt: "En quins edificis de l'actualitat es pot veure la influència del disseny del Colosseu?",
            keywords: ['estadis', 'esportius', 'futbol', 'graderies', 'accessos'],
            modelAnswer: "El disseny en càvea el·líptica i el sistema d'evacuació per vomitoris ha inspirat els estadis esportius moderns i camps de futbol."
          }
        },
  
        // 7.2 Descripció Formal Panteó
        'panteo_formal': {
          title: "7.2 Descripció Formal del Panteó",
          imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUts79KDACR-rzbyDmrc8uTuiCRK-GIJ0e73RX2hDznHhay93mx0Hmhp0&s=10",
          blanksData: {
            text: "El Panteó presenta un pòrtic o pronaos octàstil amb columnes d'ordre ______. La cel·la està coberta per una gran cúpula hemisfèrica de ______ metres d'alçada coronada per un òcul de 9 metres.",
            blanks: [
              { id: "b1", answer: "corinti", options: ["dòric", "jònic", "corinti"] },
              { id: "b2", answer: "43", options: ["30", "43", "50"] }
            ]
          },
          writingData: {
            prompt: "Explica la funció de l'òcul central de la cúpula del Panteó.",
            keywords: ['òcul', 'llum', 'il·luminar', 'ventilar', 'cúpula', 'celeste'],
            modelAnswer: "L'òcul de 9 metres situat al capdamunt de la cúpula permet la il·luminació natural de l'interior i la ventilació de l'edifici."
          }
        },
  
        // 7.3 Entorn Panteó
        'panteo_entorn': {
          title: "7.3 Entorn i Integració Urbanística del Panteó",
          imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXr9he2zHxg7t7b_q9MKOFrtQtpzQmalW-QJ-I2AUi1vzCp8c1rvHVX6Qz&s=10",
          blanksData: {
            text: "El Panteó està ubicat a la ciutat de Roma, concretament a la zona coneguda com el Camp de ______.",
            blanks: [
              { id: "b1", answer: "Mart", options: ["Mart", "Fòrum", "Palatí"] }
            ]
          },
          writingData: {
            prompt: "Com s'integra la façana del Panteó en la plaça urbana?",
            keywords: ['pronaos', 'frontó', 'inscripció', 'agripa', 'pòrtic'],
            modelAnswer: "El Panteó presenta un pòrtic d'estil grec que amaga la gran cúpula circular posterior, integrant-se com un temple tradicional vist des de la plaça."
          }
        },
  
        // 7.4 Funció Panteó
        'panteo_funcio': {
          title: "7.4 Funció, Contingut i Significat del Panteó",
          imgUrl: "https://fotografias-2.larazon.es/clipping/cmsimages02/2021/01/07/95596D96-31B7-4624-B54E-EFDF2797AF14/58.jpg?crop=1330,754,x135,y0&width=1000&height=567&optimize=high&format=webply",
          blanksData: {
            text: "La paraula Panteó prové del grec i significa dedicat a ______ els déus.",
            blanks: [
              { id: "b1", answer: "tots", options: ["tots", "un", "tres"] }
            ]
          },
          writingData: {
            prompt: "Quin simbolisme cosmic o religiós s'atribueix a l'espai interior del Panteó?",
            keywords: ['esfera', 'cúpula', 'cosmos', 'cel', 'òcul', 'sol'],
            modelAnswer: "L'interior simula una esfera perfecta (diàmetre igual a l'alçada de 43m) que representa el cosmos i la meitat celestial il·luminada pel Sol a través de l'òcul."
          }
        },
  
        // 7.5 Models i Influències Panteó
        'panteo_models': {
          title: "7.5 Models i Influències del Panteó",
          imgUrl: "https://i0.wp.com/www.glosarioarquitectonico.com/wp-content/uploads/2016/01/tholos4.jpg?ssl=1",
          blanksData: {
            text: "El Panteó s'inspira en les estructures circulars____________, anomenades tholos, però elevant-les a una escala colossal amb cúpula.",
            blanks: [
              { id: "b1", answer: "mesopotàmiques i gregues", options: ["egipcies", "mesopotàmiques i gregues", "gregues"] }
            ]
          },
          writingData: {
            prompt: "Quina influència va tenir la cúpula del Panteó en l'arquitectura del Renaixement?",
            keywords: ['brunelleschi', 'florencia', 'miquel àngel', 'sant pere', 'renaixement'],
            modelAnswer: "La cúpula del Panteó va servir de model directe per a les cúpules del Renaixement, com la de Santa Maria del Fiore de Brunelleschi i la de Sant Pere del Vaticà de Miquel Àngel."
          }
        }
      };
      return data[gameKey] || null;
    },
  
    // ==========================================
    // 3. JOC: VERITAT O FALS (GameQuizTF)
    // ==========================================
    getQuizTF: function(chapterId, gameKey) {
      const questionsList = {
        // 1. Context Històric
        'tf_c1': {
          question: "L'Edicte de Milà de l'any 313 va declarar el cristianisme com a única religió oficial de l'Imperi Romà.",
          correctAnswer: false,
          exp: "Fals. L'Edicte de Milà (313) va concedir la llibertat de culte. Va ser l'Edicte de Tessalònica (380) el que el va fer oficial."
        },
        'tf_c2': {
          question: "El primer emperador de Roma va ser Octavi August.",
          correctAnswer: true,
          exp: "Cert. Després de la caiguda de la República i la dictadura de Juli Cèsar, Octavi August va ser el primer emperador."
        },
        'tf_c3': {
          question: "Els tres darrers reis de l'etapa de la Monarquia romana eren d'origen etrusc.",
          correctAnswer: true,
          exp: "Cert. La Toscana etrusca va tenir una forta influència en la Monarquia romana fins a la República el 509 aC."
        },
  
        // 2. Contingut General / Urbanisme
        'tf_u1': {
          question: "El cardo era el carrer principal que creuava la ciutat de romana d'Est a Oest.",
          correctAnswer: false,
          exp: "Fals. El cardo anava de Nord a Sud; el carrer d'Est a Oest era el Decumanus."
        },
        'tf_u2': {
          question: "La Via Augusta connectava la ciutat de Roma amb Cadis passant per Tarragona.",
          correctAnswer: true,
          exp: "Cert. La Via Augusta era la principal eix de comunicació de la península Ibèrica cap a la capital de l'Imperi."
        },
  
        // 3. Arquitectura Romana
        'tf_a1': {
          question: "L'ordre compost és un ordre original romà que combina el capitell jònic i el corinti.",
          correctAnswer: true,
          exp: "Cert. Barreja les volutes de l'ordre jònic amb les fulles d'acant del corinti."
        },
        'tf_a2': {
          question: "Els teatres romans s'aixecaven aprofitant sempre el desnivell natural d'una muntanya, igual que els grecs.",
          correctAnswer: false,
          exp: "Fals. Els romans van aprendre a construir teatres exèmpts sobre galeries d'arcs sense necessitat de turons."
        },
        'tf_a3': {
          question: "Les basíliques romanes eren temples dedicats al culte de la deessa Vesta.",
          correctAnswer: false,
          exp: "Fals. La basílica romana era un edifici civil dedicat a l'administració de justícia i operacions comercials."
        },
  
        // 4. Escultura Romana
        'tf_e1': {
          question: "L'estàtua eqüestre de Marc Aureli va servir de model per als escultors del Renaixement.",
          correctAnswer: true,
          exp: "Cert. És un dels grans retrats eqüestres de bronze conservats de l'antiguitat."
        },
        'tf_e2': {
          question: "La Columna Trajana destaca per la seva decoració en relleus helicoidals que narren campanyes bèl·liques.",
          correctAnswer: true,
          exp: "Cert. Narra les victories de l'emperador Trajà a la Dàcia de forma continua al voltant del fust."
        },
  
        // 5. Pintura i Mosaics
        'tf_p1': {
          question: "El segon estil pictòric romà destaca per la imitació de lloses de marbre de colors.",
          correctAnswer: false,
          exp: "Fals. La imitació de marbres és el primer estil o d'incrustació. El segon estil és l'arquitectònic."
        },
        'tf_p2': {
          question: "L'opus sectile és una tècnica de mosaic feta amb grans peces tallades de marbre per a interiors luxosos.",
          correctAnswer: true,
          exp: "Cert. Utilitzava plaques de marbre tallades a mida en comptes de petites tessel·les quadrades."
        },
  
        // 6. El Colosseu
        'tf_col1': {
          question: "El Colosseu va ser inaugurat durant el regnat de l'emperador Juli Cèsar.",
          correctAnswer: false,
          exp: "Fals. Es va iniciar amb Vespasià i va ser inaugurat pel seu fill Tit entre els anys 72 i 80 dC."
        },
        'tf_col2': {
          question: "Al quart nivell o àtic del Colosseu hi havia 250 pals per sostener el velàrium.",
          correctAnswer: true,
          exp: "Cert. Servien per ancorar l'enorme lona que protegia el públic del sol i la pluja."
        },
        'tf_col3': {
          question: "Els vomitòria eren sales del subsòl on es guardaven els animals abans de la lluita.",
          correctAnswer: false,
          exp: "Fals. Els vomitoris eren les portes d'accés i eixida ràpida cap a les graderies de la càvea."
        },
  
        // 7. El Panteó
        'tf_pan1': {
          question: "El Panteó de Roma té un pòrtic octàstil amb columnes d'ordre corinti monolítiques de granit.",
          correctAnswer: true,
          exp: "Cert. El pronaos té 8 columnes en primera línia fetes d'un sol bloc de granit."
        },
        'tf_pan2': {
          question: "L'alçada interior del Panteó des del sòl fins a l'òcul és exactament igual al diàmetre de la seva cúpula (43 m).",
          correctAnswer: true,
          exp: "Cert. Això permet inscriure una esfera perfecta a l'interior de la cel·la circular."
        }
      };
      return questionsList[gameKey] || null;
    },
  
    // ==========================================
    // 4. JOC: ELECCIÓ MÚLTIPLE (GameQuizMC)
    // ==========================================
    getQuizMC: function(chapterId, gameKey) {
      const mcData = {
        // 1. Context Històric
        'mc_c1': {
          question: "Quin emperador va promulgar l'Edicte de Tessalònica l'any 380 dC?",
          options: ["Octavi August", "Constantí", "Teodosi", "Nerva"],
          correctAnswer: 2,
          exp: "Teodosi va convertir el cristianisme en la religió oficial de l'Imperi Romà."
        },
        'mc_c2': {
          question: "Quin fet marca la fi de l'Imperi Romà d'Occident l'any 476 dC?",
          options: [
            "L'erupció del Vesuvi",
            "La derrota de Ròmul Augústul a mans d'Odoacre",
            "La signatura de l'Edicte de Milà",
            "L'assassinat de Juli Cèsar"
          ],
          correctAnswer: 1,
          exp: "Odoacre, rei dels hèruls, va destituir el darrer emperador romà d'Occident."
        },
  
        // 2. Urbanisme
        'mc_u1': {
          question: "Quin nom rebia la plaça pública situada a la cruïlla del cardo i el decumanus?",
          options: ["Àgora", "Fòrum", "Circ", "Cúria"],
          correctAnswer: 1,
          exp: "El fòrum era el centre polític, comercial i religiós de la ciutat romana."
        },
        'mc_u2': {
          question: "Quin d'aquests fòrums de Roma és considerat el més complex i grandiós de tots?",
          options: ["Fòrum de Trajà", "Fòrum d'August", "Fòrum de Juli Cèsar", "Fòrum Boari"],
          correctAnswer: 0,
          exp: "El Fòrum de Trajà és el conjunt foral més gran i elaborat de la capital."
        },
  
        // 3. Arquitectura
        'mc_a1': {
          question: "Com s'anomena el formigó romà fet amb calç, sorra, aigua i pedres petites?",
          options: ["Opus reticulatum", "Opus caementicium", "Opus incertum", "Opus mixtum"],
          correctAnswer: 1,
          exp: "L'opus caementicium va permetre aixecar grans voltes i cúpules monumentals."
        },
        'mc_a2': {
          question: "Quin temple romà de planta rectangular i ben conservat es troba a la ciutat de Nimes?",
          options: ["Temple de Vesta", "Maison Carrée", "Panteó", "Ara Pacis"],
          correctAnswer: 1,
          exp: "La Maison Carrée de Nimes és l'exemple millor conservat de temple romà augusti."
        },
        'mc_a3': { 
          question: "En quina sala de les termes romanes els ciutadans prendrien un bany d'aigua freda?",
          options: ["Caldarium", "Tepidarium", "Frigidarium", "Nàrtex"],
          correctAnswer: 2,
          exp: "El frigidarium albergava les piscines d'aigua freda."
        },
  
        // 4. Escultura
        'mc_e1': {
          question: "En quin període de l'escultura romana el retrat es torna més solemne, rígid i esquemàtic?",
          options: ["Època Etrusca", "República", "Alt Imperi", "Baix Imperi / Tardoromà"],
          correctAnswer: 3,
          exp: "A partir del segle III-V dC s'esquematitzen les formes anticipant l'art bizantí."
        },
  
        // 5. Pintura i Mosaics
        'mc_p1': { 
          question: "Quin estil de pintura mural romà es caracteritza per obrir la paret amb arquitectures fantàstiques com finestres a mons imaginaris?",
          options: ["Primer estil (Incrustació)", "Segon estil (Arquitectònic)", "Tercer estil (Ornamental)", "Quart estil (Il·lusionista)"],
          correctAnswer: 2,
          exp: "El tercer estil o ornamental crea arquitectures impossibles i delicades de tipus fantàstic."
        },
  
        // 6. El Colosseu
        'mc_col1': { 
          question: "Quina superposició d'ordres presenta la façana exterior del Colosseu de baix a dalt?",
          options: [
            "Dòric, Jònic, Corinti",
            "Toscà, Jònic, Corinti",
            "Corinti, Jònic, Toscà",
            "Compost, Toscà, Dòric"
          ],
          correctAnswer: 1,
          exp: "En el primer pis s'usa l'ordre toscà, en el segon el jònic i en el tercer el corinti."
        },
        'mc_col2': {
          question: "Quins tipus d'espectacles no s'organitzaven a l'amfiteatre?",
          options: ["Lluites de gladiadors", "Curses de quadrigues (carros)", "Naumàquies", "Venationes (lluita amb feres)"],
          correctAnswer: 1,
          exp: "Les curses de carros o quadrigues es feien al Circ (com el Circ Màxim), no a l'amfiteatre."
        },
  
        // 7. El Panteó
        'mc_pan1': {
          question: "Quin personatge històric s'indica com a promotor en la inscripció del fris del Panteó?",
          options: ["Octavi August", "Marco Vipsani Agripa", "Adrià", "Trajà"],
          correctAnswer: 1,
          exp: "La inscripció diu: 'M. AGRIPPA L. F. COS. TERTIUM FECIT'."
        },
        'mc_pan2': {
          question: "Quin element permet la il·luminació natural directa a l'interior de la cel·la del Panteó?",
          options: ["Finestrals a l'àtic", "Un òcul a la cúpula", "Rosasses laterals", "Llanternó d'estil gòtic"],
          correctAnswer: 1,
          exp: "Un gran òcul central de gairebé 9 metres de diàmetre situat al coronament de la cúpula."
        }
      };
      return mcData[gameKey] || null;
    }
  };
