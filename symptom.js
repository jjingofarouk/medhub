// Define symptom weights
const symptomWeights = {
    "fever": {
        "malaria": 10,
        "typhoid fever": 9,
        "dengue fever": 8,
        "COVID-19": 8,
        "flu": 7,
        "chikungunya": 7,
        "sepsis": 6,
        "endocarditis": 6,
        "autoimmune disease": 5,
        "pneumonia": 5
    },
    "cough": {
        "bronchitis": 9,
        "pneumonia": 8,
        "asthma": 7,
        "COVID-19": 7,
        "flu": 6,
        "tuberculosis": 6,
        "allergy": 5,
        "chronic obstructive pulmonary disease (COPD)": 5,
        "whooping cough": 4,
        "common cold": 4
    },
    "sore throat": {
        "strep throat": 10,
        "tonsillitis": 9,
        "flu": 8,
        "COVID-19": 7,
        "allergy": 6,
        "laryngitis": 6,
        "chronic pharyngitis": 5,
        "infectious mononucleosis": 5,
        "bacterial pharyngitis": 4,
        "common cold": 4
    },
    "headache": {
        "migraine": 10,
        "tension headache": 8,
        "sinusitis": 7,
        "flu": 6,
        "cluster headache": 6,
        "dehydration": 5,
        "hypertension": 5,
        "anemia": 4,
        "temporal arteritis": 4,
        "cervical spondylosis": 4
    },
    "fatigue": {
        "anemia": 10,
        "chronic fatigue syndrome": 9,
        "hypothyroidism": 8,
        "depression": 7,
        "flu": 6,
        "malaria": 6,
        "diabetes mellitus": 5,
        "HIV/AIDS": 5,
        "autoimmune disease": 4,
        "kidney disease": 4
    },
    "nausea": {
        "gastroenteritis": 10,
        "food poisoning": 9,
        "pregnancy": 8,
        "migraine": 7,
        "motion sickness": 6,
        "hepatitis": 5,
        "peptic ulcer": 5,
        "pancreatitis": 4,
        "appendicitis": 4,
        "gallbladder disease": 4
    },
    "muscle pain": {
        "fibromyalgia": 10,
        "flu": 9,
        "COVID-19": 8,
        "myositis": 7,
        "rheumatoid arthritis": 6,
        "lupus": 6,
        "malaria": 5,
        "scleroderma": 5,
        "vitamin D deficiency": 4,
        "chronic fatigue syndrome": 4
    },
    "shortness of breath": {
        "asthma": 10,
        "pneumonia": 9,
        "COPD": 8,
        "COVID-19": 8,
        "heart failure": 7,
        "bronchitis": 6,
        "pulmonary embolism": 5,
        "anemia": 5,
        "interstitial lung disease": 4,
        "tuberculosis": 4
    },
    "runny nose": {
        "common cold": 10,
        "allergy": 9,
        "viral rhinitis": 8,
        "sinusitis": 7,
        "flu": 6,
        "COVID-19": 5,
        "bacterial rhinitis": 4,
        "hay fever": 4,
        "non-allergic rhinitis": 4,
        "nasal polyps": 3
    },
    "diarrhea": {
        "gastroenteritis": 10,
        "food poisoning": 9,
        "irritable bowel syndrome": 8,
        "inflammatory bowel disease": 7,
        "typhoid fever": 7,
        "cholera": 6,
        "giardiasis": 6,
        "dysentery": 5,
        "lactose intolerance": 5,
        "celiac disease": 4
    },
    "vomiting": {
        "gastroenteritis": 10,
        "food poisoning": 9,
        "pregnancy": 8,
        "migraine": 7,
        "appendicitis": 6,
        "peptic ulcer": 6,
        "pancreatitis": 5,
        "gallbladder disease": 5,
        "cholecystitis": 4,
        "gastritis": 4
    },
    "abdominal pain": {
        "gastroenteritis": 10,
        "typhoid fever": 9,
        "peptic ulcer": 8,
        "malaria": 7,
        "appendicitis": 7,
        "schistosomiasis": 6,
        "hepatitis": 6,
        "intestinal worms": 5,
        "pancreatitis": 5,
        "cholera": 4
    },
    "rash": {
        "measles": 10,
        "chickenpox": 9,
        "scabies": 8,
        "dengue fever": 7,
        "typhoid fever": 7,
        "lupus": 6,
        "syphilis": 6,
        "fungal infections": 5,
        "allergy": 5,
        "HIV/AIDS": 4
    },
    "joint pain": {
        "arthritis": 10,
        "rheumatic fever": 9,
        "lupus": 8,
        "malaria": 7,
        "dengue fever": 6,
        "chikungunya": 6,
        "gout": 5,
        "HIV/AIDS": 5,
        "fibromyalgia": 4,
        "syphilis": 4
    },
    "swollen lymph nodes": {
        "lymphadenitis": 10,
        "HIV/AIDS": 9,
        "tuberculosis": 8,
        "typhoid fever": 7,
        "leptospirosis": 7,
        "brucellosis": 6,
        "rheumatic fever": 6,
        "mononucleosis": 5,
        "leprosy": 5,
        "cancer": 4
    },
    "itching": {
        "scabies": 10,
        "fungal infections": 9,
        "allergy": 8,
        "eczema": 7,
        "insect bites": 6,
        "contact dermatitis": 6,
        "chickenpox": 5,
        "HIV/AIDS": 5,
        "psoriasis": 4,
        "liver disease": 4
    },
    "weight loss": {
        "HIV/AIDS": 10,
        "tuberculosis": 9,
        "cancer": 8,
        "chronic infections": 7,
        "diabetes mellitus": 7,
        "hyperthyroidism": 6,
        "malabsorption": 6,
        "peptic ulcer": 5,
        "anorexia": 5,
        "chronic liver disease": 4
    },
    "dizziness": {
        "hypotension": 10,
        "anemia": 9,
        "malaria": 8,
        "dehydration": 7,
        "inner ear infection": 6,
        "vertigo": 6,
        "stroke": 5,
        "chronic fatigue syndrome": 5,
        "medication side effects": 4,
        "ear infection": 4
    },
    "back pain": {
        "muscle strain": 10,
        "sciatica": 9,
        "herniated disc": 8,
        "osteoporosis": 7,
        "kidney stones": 7,
        "spinal stenosis": 6,
        "rheumatoid arthritis": 6,
        "spondylitis": 5,
        "chronic kidney disease": 5,
        "malaria": 4
    },
    "urinary symptoms": {
        "urinary tract infection (UTI)": 10,
        "kidney stones": 9,
        "bladder infection": 8,
        "prostatitis": 7,
        "sexually transmitted infections (STIs)": 7,
        "diabetes mellitus": 6,
        "chronic kidney disease": 6,
        "cystitis": 5,
        "pyelonephritis": 5,
        "glomerulonephritis": 4
    },
    "chest pain": {
        "angina": 10,
        "myocardial infarction": 9,
        "pneumonia": 8,
        "pleuritis": 7,
        "gastroesophageal reflux disease (GERD)": 7,
        "pulmonary embolism": 6,
        "costochondritis": 6,
        "pericarditis": 5,
        "muscle strain": 5,
        "asthma": 4
    },
    "confusion": {
        "stroke": 10,
        "encephalitis": 9,
        "meningitis": 8,
        "sepsis": 7,
        "hypoglycemia": 7,
        "delirium": 6,
        "dementia": 6,
        "malaria": 5,
        "HIV/AIDS": 5,
        "severe dehydration": 4
    },
    "abdominal pain": {
        "gastroenteritis": 10,
        "appendicitis": 9,
        "typhoid fever": 8,
        "peptic ulcer": 7,
        "malaria": 7,
        "intestinal worms": 6,
        "chronic pancreatitis": 6,
        "hepatitis": 5,
        "endometriosis": 5,
        "irritable bowel syndrome (IBS)": 4
    },
    "joint pain": {
        "rheumatic fever": 10,
        "arthritis": 9,
        "gout": 8,
        "malaria": 7,
        "lupus": 7,
        "dengue fever": 6,
        "osteoarthritis": 6,
        "typhoid fever": 5,
        "chronic fatigue syndrome": 5,
        "bacterial infection": 4
    },
    "rash": {
        "chickenpox": 10,
        "measles": 9,
        "dengue fever": 8,
        "typhoid fever": 7,
        "scabies": 7,
        "ringworm": 6,
        "hives": 6,
        "herpes simplex": 5,
        "fungal infections": 5,
        "syphilis": 4
    },
    "swelling": {
        "lymphatic filariasis": 10,
        "elephantiasis": 9,
        "cellulitis": 8,
        "heart failure": 7,
        "renal failure": 7,
        "chronic venous insufficiency": 6,
        "trauma": 6,
        "allergic reactions": 5,
        "arthritis": 5,
        "diabetes mellitus": 4
    },
    "yellowing of skin": {
        "hepatitis": 10,
        "jaundice": 9,
        "malaria": 8,
        "liver cirrhosis": 7,
        "sickle cell disease": 7,
        "cholestasis": 6,
        "gallbladder disease": 6,
        "pancreatitis": 5,
        "typhoid fever": 5,
        "neonatal jaundice": 4
    },
    "itchy eyes": {
        "allergic conjunctivitis": 10,
        "dry eyes": 9,
        "eye infections": 8,
        "pollen allergies": 7,
        "contact dermatitis": 7,
        "blepharitis": 6,
        "foreign body in eye": 6,
        "viral conjunctivitis": 5,
        "bacterial conjunctivitis": 5,
        "chlamydial infections": 4
    },
    "night sweats": {
        "tuberculosis": 10,
        "HIV/AIDS": 9,
        "malaria": 8,
        "lymphoma": 7,
        "chronic infections": 7,
        "menopause": 6,
        "hyperthyroidism": 6,
        "fever": 5,
        "chronic fatigue syndrome": 5,
        "endocrine disorders": 4
    },
    "weight loss": {
        "cancer": 10,
        "tuberculosis": 9,
        "HIV/AIDS": 8,
        "hyperthyroidism": 7,
        "diabetes mellitus": 7,
        "chronic infections": 6,
        "malaria": 6,
        "peptic ulcer": 5,
        "gastrointestinal disorders": 5,
        "kidney disease": 4
    },
    "difficulty swallowing": {
        "esophageal cancer": 10,
        "gastroesophageal reflux disease (GERD)": 9,
        "esophagitis": 8,
        "stroke": 7,
        "dysphagia": 7,
        "esophageal strictures": 6,
        "food allergies": 6,
        "thyroid disorders": 5,
        "neuromuscular disorders": 5,
        "oral infections": 4
    },
    "frequent urination": {
        "diabetes mellitus": 10,
        "urinary tract infection (UTI)": 9,
        "prostate enlargement": 8,
        "bladder infection": 7,
        "diuretic use": 7,
        "overactive bladder": 6,
        "kidney stones": 6,
        "cystitis": 5,
        "pregnancy": 5,
        "hypercalcemia": 4
    },
    "bleeding gums": {
        "gum disease": 10,
        "vitamin C deficiency (scurvy)": 9,
        "medication side effects": 8,
        "blood disorders": 7,
        "platelet disorders": 7,
        "oral infections": 6,
        "leukemia": 6,
        "poor dental hygiene": 5,
        "hormonal changes": 5,
        "systemic diseases": 4
    },
    "red spots on skin": {
        "allergic reaction": 10,
        "petechiae": 9,
        "measles": 8,
        "chickenpox": 7,
        "dengue fever": 7,
        "typhoid fever": 6,
        "scabies": 6,
        "heat rash": 5,
        "eczema": 5,
        "impetigo": 4
    },
    "restlessness": {
        "anxiety": 10,
        "restless legs syndrome": 9,
        "caffeine overdose": 8,
        "hyperthyroidism": 7,
        "withdrawal symptoms": 6,
        "ADHD": 6,
        "sleep apnea": 5,
        "stress": 5,
        "chronic fatigue syndrome": 4,
        "hormonal imbalances": 4
    },
    "rib pain": {
        "costochondritis": 10,
        "rib fracture": 9,
        "pleurisy": 8,
        "muscle strain": 7,
        "pneumonia": 7,
        "bronchitis": 6,
        "gastroesophageal reflux disease (GERD)": 5,
        "shingles": 5,
        "heart attack": 4,
        "fibromyalgia": 4
    },
    "ringing in ears (tinnitus)": {
        "loud noise exposure": 10,
        "ear infection": 9,
        "hearing loss": 8,
        "Meniere's disease": 7,
        "acoustic neuroma": 7,
        "earwax buildup": 6,
        "medication side effects": 6,
        "high blood pressure": 5,
        "age-related hearing loss": 5,
        "TMJ disorder": 4
    },
    "shoulder pain": {
        "rotator cuff injury": 10,
        "bursitis": 9,
        "frozen shoulder": 8,
        "shoulder dislocation": 7,
        "tendonitis": 7,
        "arthritis": 6,
        "impingement syndrome": 6,
        "muscle strain": 5,
        "referred pain from neck": 5,
        "labral tear": 4
    },
    "skin peeling": {
        "sunburn": 10,
        "contact dermatitis": 9,
        "eczema": 8,
        "psoriasis": 7,
        "seborrheic dermatitis": 7,
        "fungal infection": 6,
        "vitamin deficiencies": 6,
        "allergic reaction": 5,
        "dry skin": 5,
        "chemical burn": 4
    },
    "skin sores": {
        "herpes simplex": 10,
        "impetigo": 9,
        "pressure ulcers": 8,
        "cellulitis": 7,
        "athlete's foot": 7,
        "fungal infection": 6,
        "venous ulcers": 6,
        "shingles": 5,
        "bacterial infections": 5,
        "eczema herpeticum": 4
    },
    "slow wound healing": {
        "diabetes mellitus": 10,
        "circulatory disorders": 9,
        "nutritional deficiencies": 8,
        "chronic infections": 7,
        "venous insufficiency": 7,
        "autoimmune disorders": 6,
        "poor nutrition": 6,
        "liver disease": 5,
        "chronic inflammation": 5,
        "medication side effects": 4
    },
    "sore mouth": {
        "oral thrush": 10,
        "canker sores": 9,
        "herpes simplex": 8,
        "burning mouth syndrome": 7,
        "vitamin deficiencies": 7,
        "gum disease": 6,
        "bacterial infections": 6,
        "allergic reactions": 5,
        "irritation from dentures": 5,
        "acid reflux": 4
    },
    "speech difficulties": {
        "stroke": 10,
        "neurological disorders": 9,
        "vocal cord paralysis": 8,
        "laryngitis": 7,
        "Parkinson's disease": 7,
        "trauma": 6,
        "tumors": 6,
        "muscle disorders": 5,
        "voice overuse": 5,
        "brain injuries": 4
    },
    "spinal pain": {
        "spinal stenosis": 10,
        "herniated disc": 9,
        "arthritis": 8,
        "scoliosis": 7,
        "muscle strain": 7,
        "osteoporosis": 6,
        "postural issues": 6,
        "spinal cord injury": 5,
        "fractures": 5,
        "fibromyalgia": 4
    },
    "swallowing difficulties": {
        "esophageal stricture": 10,
        "stroke": 9,
        "thyroid disorders": 8,
        "esophageal cancer": 7,
        "Parkinson's disease": 7,
        "gastroesophageal reflux disease (GERD)": 6,
        "muscle disorders": 6,
        "esophagitis": 5,
        "nerve damage": 5,
        "allergic reactions": 4
    },
    "swollen glands": {
        "infection": 10,
        "mononucleosis": 9,
        "lymphoma": 8,
        "HIV/AIDS": 7,
        "tuberculosis": 7,
        "autoimmune diseases": 6,
        "glandular fever": 6,
        "thyroid disorders": 5,
        "leukemia": 5,
        "chronic sinusitis": 4
    },
    "swollen hands or feet": {
        "heart failure": 10,
        "kidney disease": 9,
        "lymphedema": 8,
        "venous insufficiency": 7,
        "pregnancy": 7,
        "arthritis": 6,
        "trauma": 6,
        "cirrhosis": 5,
        "infections": 5,
        "hypothyroidism": 4
    },
    "taste changes": {
        "COVID-19": 10,
        "chemotherapy": 9,
        "nutritional deficiencies": 8,
        "dry mouth": 7,
        "oral infections": 7,
        "medication side effects": 6,
        "hormonal changes": 6,
        "gastroesophageal reflux disease (GERD)": 5,
        "age-related changes": 5,
        "dental issues": 4
    },
    "tingling sensations": {
        "peripheral neuropathy": 10,
        "carpal tunnel syndrome": 9,
        "multiple sclerosis": 8,
        "diabetes mellitus": 7,
        "vitamin deficiencies": 7,
        "stroke": 6,
        "pinched nerve": 6,
        "autoimmune disorders": 5,
        "injury": 5,
        "Raynaud's phenomenon": 4
    },
    "toothache": {
        "dental cavity": 10,
        "gum disease": 9,
        "tooth infection": 8,
        "tooth abscess": 7,
        "dental trauma": 7,
        "bruxism": 6,
        "sinus infection": 6,
        "tooth sensitivity": 5,
        "wisdom teeth issues": 5,
        "jaw disorders": 4
    },
    "unexplained bruising": {
        "bleeding disorders": 10,
        "leukemia": 9,
        "vitamin deficiencies": 8,
        "blood thinners": 7,
        "trauma": 7,
        "platelet disorders": 6,
        "liver disease": 6,
        "autoimmune diseases": 5,
        "blood vessel issues": 5,
        "anemia": 4
    },
    "unexplained fatigue": {
        "chronic fatigue syndrome": 10,
        "depression": 9,
        "anemia": 8,
        "thyroid disorders": 7,
        "sleep apnea": 7,
        "chronic infections": 6,
        "autoimmune diseases": 6,
        "fibromyalgia": 5,
        "stress": 5,
        "nutritional deficiencies": 4
    },
    "unexplained fever": {
        "infection": 10,
        "cancer": 9,
        "autoimmune disorders": 8,
        "tuberculosis": 7,
        "HIV/AIDS": 7,
        "chronic inflammatory conditions": 6,
        "endocrine disorders": 6,
        "medication reactions": 5,
        "systemic diseases": 5,
        "rheumatic fever": 4
    },
    "vaginal itching": {
        "yeast infection": 10,
        "bacterial vaginosis": 9,
        "sexually transmitted infections (STIs)": 8,
        "allergic reactions": 7,
        "vulvitis": 7,
        "hormonal changes": 6,
        "irritants": 6,
        "vaginal dryness": 5,
        "skin conditions": 5,
        "chemical irritants": 4
    },
    "vomiting": {
        "gastroenteritis": 10,
        "food poisoning": 9,
        "migraine": 8,
        "pregnancy": 7,
        "motion sickness": 7,
        "ulcers": 6,
        "medication side effects": 6,
        "gastroesophageal reflux disease (GERD)": 5,
        "appendicitis": 5,
        "stress": 4
    },
    "weight loss": {
        "cancer": 10,
        "hyperthyroidism": 9,
        "diabetes mellitus": 8,
        "gastrointestinal disorders": 7,
        "chronic infections": 7,
        "eating disorders": 6,
        "malabsorption": 6,
        "chronic obstructive pulmonary disease (COPD)": 5,
        "heart failure": 5,
        "mental health issues": 4
    },
    "abdominal bloating": {
        "gastritis": 10,
        "irritable bowel syndrome (IBS)": 9,
        "constipation": 8,
        "food intolerance": 7,
        "gastroesophageal reflux disease (GERD)": 7,
        "ovarian cysts": 6,
        "peptic ulcer": 6,
        "abdominal hernia": 5,
        "intestinal obstruction": 5,
        "pancreatitis": 4
    },
    "abdominal cramps": {
        "IBS": 10,
        "menstrual cramps": 9,
        "gastroenteritis": 8,
        "gastritis": 7,
        "constipation": 7,
        "appendicitis": 6,
        "diverticulitis": 6,
        "peptic ulcer": 5,
        "ovarian cysts": 5,
        "endometriosis": 4
    },
    "chills": {
        "flu": 10,
        "infection": 9,
        "pneumonia": 8,
        "malaria": 7,
        "sepsis": 7,
        "typhoid fever": 6,
        "endocarditis": 6,
        "chronic infections": 5,
        "autoimmune diseases": 5,
        "hyperthyroidism": 4
    },
    "difficulty concentrating": {
        "ADHD": 10,
        "depression": 9,
        "anxiety": 8,
        "sleep disorders": 7,
        "chronic fatigue syndrome": 7,
        "thyroid disorders": 6,
        "medication side effects": 6,
        "neurological disorders": 5,
        "vitamin deficiencies": 5,
        "stress": 4
    },
    "dry cough": {
        "chronic bronchitis": 10,
        "asthma": 9,
        "allergic rhinitis": 8,
        "post-nasal drip": 7,
        "GERD": 7,
        "whooping cough": 6,
        "pneumonia": 6,
        "medication side effects": 5,
        "lung cancer": 5,
        "sinusitis": 4
    },
    "ear discharge": {
        "ear infection": 10,
        "otitis externa": 9,
        "chronic otitis media": 8,
        "ruptured eardrum": 7,
        "earwax buildup": 7,
        "mastoiditis": 6,
        "allergic reactions": 6,
        "fungal infection": 5,
        "eczema": 5,
        "foreign object in ear": 4
    },
    "fainting": {
        "orthostatic hypotension": 10,
        "dehydration": 9,
        "vasovagal syncope": 8,
        "hypoglycemia": 7,
        "arrhythmias": 7,
        "seizures": 6,
        "heart conditions": 6,
        "anemia": 5,
        "panic attacks": 5,
        "neurological disorders": 4
    },
    "feeling faint": {
        "anemia": 10,
        "dehydration": 9,
        "low blood pressure": 8,
        "orthostatic hypotension": 7,
        "hypoglycemia": 7,
        "heart problems": 6,
        "anxiety": 6,
        "medication side effects": 5,
        "chronic fatigue syndrome": 5,
        "seizures": 4
    },
    "hair loss": {
        "alopecia areata": 10,
        "androgenetic alopecia": 9,
        "thyroid disorders": 8,
        "iron deficiency": 7,
        "vitamin deficiencies": 7,
        "stress": 6,
        "autoimmune diseases": 6,
        "scalp infections": 5,
        "hormonal imbalances": 5,
        "medication side effects": 4
    },
    "heart palpitations": {
        "arrhythmias": 10,
        "anxiety": 9,
        "hyperthyroidism": 8,
        "caffeine intake": 7,
        "anemia": 7,
        "heart disease": 6,
        "medication side effects": 6,
        "dehydration": 5,
        "electrolyte imbalances": 5,
        "stress": 4
    },
    "indigestion": {
        "GERD": 10,
        "peptic ulcer": 9,
        "gastritis": 8,
        "irritable bowel syndrome (IBS)": 7,
        "food intolerance": 7,
        "gas": 6,
        "pancreatitis": 6,
        "gallbladder disease": 5,
        "hiatal hernia": 5,
        "stress": 4
    },
    "jaundice": {
        "hepatitis": 10,
        "liver disease": 9,
        "gallstones": 8,
        "pancreatitis": 7,
        "hemolytic anemia": 7,
        "cirrhosis": 6,
        "medication side effects": 6,
        "biliary obstruction": 5,
        "genetic disorders": 5,
        "viral infections": 4
    },
    "joint stiffness": {
        "rheumatoid arthritis": 10,
        "osteoarthritis": 9,
        "gout": 8,
        "fibromyalgia": 7,
        "lupus": 7,
        "psoriatic arthritis": 6,
        "muscle strain": 6,
        "bursitis": 5,
        "tendonitis": 5,
        "injury": 4
    },
    "leg swelling": {
        "venous insufficiency": 10,
        "heart failure": 9,
        "kidney disease": 8,
        "lymphedema": 7,
        "pregnancy": 7,
        "injury": 6,
        "cirrhosis": 6,
        "medication side effects": 5,
        "infections": 5,
        "thyroid disorders": 4
    },
    "loss of appetite": {
        "depression": 10,
        "gastrointestinal disorders": 9,
        "chronic infections": 8,
        "cancer": 7,
        "anxiety": 7,
        "thyroid disorders": 6,
        "medication side effects": 6,
        "liver disease": 5,
        "kidney disease": 5,
        "malnutrition": 4
    },
    "muscle spasms": {
        "dehydration": 10,
        "electrolyte imbalances": 9,
        "muscle strain": 8,
        "cramps": 7,
        "neuromuscular disorders": 7,
        "chronic fatigue syndrome": 6,
        "medication side effects": 6,
        "overuse injuries": 5,
        "poor circulation": 5,
        "vitamin deficiencies": 4
    },
    "painful urination": {
        "urinary tract infection (UTI)": 10,
        "bladder infection": 9,
        "sexually transmitted infections (STIs)": 8,
        "kidney stones": 7,
        "urethritis": 7,
        "prostatitis": 6,
        "vaginal infections": 6,
        "medication side effects": 5,
        "interstitial cystitis": 5,
        "allergic reactions": 4
    },
    "persistent cough": {
        "chronic bronchitis": 10,
        "asthma": 9,
        "post-nasal drip": 8,
        "GERD": 7,
        "chronic sinusitis": 7,
        "lung infection": 6,
        "COPD": 6,
        "lung cancer": 5,
        "medication side effects": 5,
        "allergies": 4
    },
    "red eyes": {
        "conjunctivitis": 10,
        "dry eyes": 9,
        "blepharitis": 8,
        "allergic reactions": 7,
        "glaucoma": 7,
        "irritation": 6,
        "subconjunctival hemorrhage": 6,
        "eye infection": 5,
        "corneal ulcers": 5,
        "uveitis": 4
    },
    "shortness of breath": {
        "asthma": 10,
        "COPD": 9,
        "heart failure": 8,
        "pneumonia": 7,
        "pulmonary embolism": 7,
        "anxiety": 6,
        "chronic bronchitis": 6,
        "lung cancer": 5,
        "allergic reactions": 5,
        "fibrosis": 4
    },
    "sneezing": {
        "allergic rhinitis": 10,
        "common cold": 9,
        "sinusitis": 8,
        "flu": 7,
        "irritants": 7,
        "asthma": 6,
        "nasal infections": 6,
        "hay fever": 5,
        "medication side effects": 5,
        "foreign body in nose": 4
    },
    "tinnitus": {
        "ear infection": 10,
        "exposure to loud noises": 9,
        "age-related hearing loss": 8,
        "earwax buildup": 7,
        "medication side effects": 7,
        "Meniere's disease": 6,
        "temporal mandibular joint (TMJ) disorder": 6,
        "cardiovascular problems": 5,
        "noise-induced hearing loss": 5,
        "head or neck injuries": 4
    },
    "painful swallowing": {
        "esophagitis": 10,
        "stomach ulcer": 9,
        "pharyngitis": 8,
        "tonsillitis": 7,
        "laryngitis": 7,
        "acid reflux": 6,
        "gastroesophageal reflux disease (GERD)": 6,
        "throat cancer": 5,
        "esophageal stricture": 5,
        "viral infection": 4
    },
    "itchy rash": {
        "eczema": 10,
        "contact dermatitis": 9,
        "hives": 8,
        "psoriasis": 7,
        "fungal infections": 7,
        "insect bites": 6,
        "urticaria": 6,
        "allergic reactions": 5,
        "scabies": 5,
        "shingles": 4
    },
    "nausea after eating": {
        "gastroesophageal reflux disease (GERD)": 10,
        "food poisoning": 9,
        "gastritis": 8,
        "peptic ulcer": 7,
        "gastroparesis": 7,
        "pancreatitis": 6,
        "indigestion": 6,
        "food intolerance": 5,
        "chronic liver disease": 5,
        "pregnancy": 4
    },
    "painful urination with blood": {
        "urinary tract infection (UTI)": 10,
        "kidney stones": 9,
        "bladder infection": 8,
        "urethritis": 7,
        "prostatitis": 7,
        "sexually transmitted infections (STIs)": 6,
        "interstitial cystitis": 6,
        "renal trauma": 5,
        "medication side effects": 5,
        "bladder cancer": 4
    },
    "persistent dizziness": {
        "vertigo": 10,
        "inner ear disorders": 9,
        "orthostatic hypotension": 8,
        "low blood pressure": 7,
        "dehydration": 7,
        "anxiety disorders": 6,
        "medication side effects": 6,
        "migraine": 5,
        "stroke": 5,
        "neurological conditions": 4
    },
    "burning sensation in chest": {
        "gastroesophageal reflux disease (GERD)": 10,
        "esophagitis": 9,
        "peptic ulcer": 8,
        "angina": 7,
        "heartburn": 7,
        "hiatal hernia": 6,
        "esophageal spasm": 6,
        "pneumonia": 5,
        "costochondritis": 5,
        "anxiety": 4
    },
    "swollen lymph nodes": {
        "infection": 10,
        "lymphoma": 9,
        "leukemia": 8,
        "mononucleosis": 7,
        "tuberculosis": 7,
        "autoimmune diseases": 6,
        "HIV/AIDS": 6,
        "chronic inflammation": 5,
        "localized infections": 5,
        "medication reactions": 4
    },
    "red, itchy eyes": {
        "allergic conjunctivitis": 10,
        "viral conjunctivitis": 9,
        "bacterial conjunctivitis": 8,
        "dry eyes": 7,
        "blepharitis": 7,
        "irritants": 6,
        "contact lens issues": 6,
        "sinusitis": 5,
        "glaucoma": 5,
        "corneal infection": 4
    },
    "frequent urination at night": {
        "benign prostatic hyperplasia (BPH)": 10,
        "diabetes mellitus": 9,
        "urinary tract infection (UTI)": 8,
        "bladder infection": 7,
        "overactive bladder": 7,
        "chronic kidney disease": 6,
        "heart failure": 6,
        "medication side effects": 5,
        "pregnancy": 5,
        "prostatitis": 4
    },
    "painful joints in the morning": {
        "rheumatoid arthritis": 10,
        "osteoarthritis": 9,
        "ankylosing spondylitis": 8,
        "gout": 7,
        "psoriatic arthritis": 7,
        "lupus": 6,
        "fibromyalgia": 6,
        "bursitis": 5,
        "tendonitis": 5,
        "osteomyelitis": 4
    },
    "chronic fatigue": {
        "chronic fatigue syndrome": 10,
        "depression": 9,
        "sleep disorders": 8,
        "hypothyroidism": 7,
        "anemia": 7,
        "fibromyalgia": 6,
        "chronic infections": 6,
        "autoimmune diseases": 5,
        "medication side effects": 5,
        "malnutrition": 4
    },
    "severe headache with nausea": {
        "migraine": 10,
        "cluster headache": 9,
        "tension headache": 8,
        "brain tumor": 7,
        "sinusitis": 7,
        "cervicogenic headache": 6,
        "intracranial pressure changes": 6,
        "meningitis": 5,
        "medication side effects": 5,
        "stroke": 4
    },
    "yellowing of the skin": {
        "jaundice": 10,
        "liver disease": 9,
        "hepatitis": 8,
        "gallbladder disease": 7,
        "hemolytic anemia": 7,
        "pancreatitis": 6,
        "biliary obstruction": 6,
        "medication side effects": 5,
        "genetic disorders": 5,
        "viral infections": 4
    },
    "difficulty breathing when lying down": {
        "heart failure": 10,
        "chronic obstructive pulmonary disease (COPD)": 9,
        "asthma": 8,
        "pulmonary edema": 7,
        "sleep apnea": 7,
        "gastroesophageal reflux disease (GERD)": 6,
        "pneumonia": 6,
        "anxiety disorders": 5,
        "pleural effusion": 5,
        "lung cancer": 4
    },
    "persistent abdominal pain after eating": {
        "gastritis": 10,
        "peptic ulcer": 9,
        "gastroesophageal reflux disease (GERD)": 8,
        "pancreatitis": 7,
        "gallbladder disease": 7,
        "food intolerance": 6,
        "irritable bowel syndrome (IBS)": 6,
        "gallstones": 5,
        "constipation": 5,
        "chronic liver disease": 4
    },
    "persistent ringing in the ears": {
        "tinnitus": 10,
        "hearing loss": 9,
        "ear infections": 8,
        "exposure to loud noises": 7,
        "Meniere's disease": 7,
        "medication side effects": 6,
        "temporal mandibular joint (TMJ) disorder": 6,
        "cardiovascular problems": 5,
        "noise-induced hearing loss": 5,
        "head or neck injuries": 4
    },
    "sharp chest pain": {
        "angina": 10,
        "myocardial infarction (heart attack)": 9,
        "pulmonary embolism": 8,
        "pneumothorax": 7,
        "aortic dissection": 7,
        "pericarditis": 6,
        "costochondritis": 6,
        "gastroesophageal reflux disease (GERD)": 5,
        "esophageal spasm": 5,
        "muscle strain": 4
    },
    "yellowing of the eyes": {
        "jaundice": 10,
        "hepatitis": 9,
        "liver disease": 8,
        "gallbladder issues": 7,
        "pancreatic cancer": 7,
        "biliary obstruction": 6,
        "hemolytic anemia": 6,
        "genetic disorders": 5,
        "medication side effects": 5,
        "viral infections": 4
    },
    "difficulty swallowing liquids": {
        "esophageal stricture": 10,
        "esophagitis": 9,
        "achalasia": 8,
        "gastroesophageal reflux disease (GERD)": 7,
        "throat cancer": 7,
        "esophageal spasm": 6,
        "neurological disorders": 6,
        "laryngitis": 5,
        "stroke": 5,
        "oral infections": 4
    },
    "persistent cough with blood": {
        "lung cancer": 10,
        "tuberculosis": 9,
        "bronchitis": 8,
        "pneumonia": 7,
        "pulmonary embolism": 7,
        "chronic obstructive pulmonary disease (COPD)": 6,
        "autoimmune disorders": 6,
        "esophageal bleeding": 5,
        "pleural effusion": 5,
        "medication side effects": 4
    },
    "pain in the lower abdomen": {
        "appendicitis": 10,
        "ovarian cysts": 9,
        "endometriosis": 8,
        "irritable bowel syndrome (IBS)": 7,
        "diverticulitis": 7,
        "pelvic inflammatory disease (PID)": 6,
        "hernia": 6,
        "gastroenteritis": 5,
        "constipation": 5,
        "kidney stones": 4
    },
    "excessive thirst and frequent urination": {
        "diabetes mellitus": 10,
        "diabetes insipidus": 9,
        "hypercalcemia": 8,
        "chronic kidney disease": 7,
        "medication side effects": 7,
        "hyperglycemia": 6,
        "urinary tract infection (UTI)": 6,
        "cushing's syndrome": 5,
        "pregnancy": 5,
        "dehydration": 4
    },
    "swollen, painful joints": {
        "rheumatoid arthritis": 10,
        "gout": 9,
        "osteoarthritis": 8,
        "psoriatic arthritis": 7,
        "lupus": 7,
        "bursitis": 6,
        "tendonitis": 6,
        "reactive arthritis": 5,
        "infectious arthritis": 5,
        "rheumatic fever": 4
    },
    "rapid weight loss": {
        "hyperthyroidism": 10,
        "cancer": 9,
        "chronic infections": 8,
        "diabetes mellitus": 7,
        "malabsorption disorders": 7,
        "eating disorders": 6,
        "tuberculosis": 6,
        "addison's disease": 5,
        "chronic obstructive pulmonary disease (COPD)": 5,
        "medication side effects": 4
    },
    "intense abdominal cramping": {
        "irritable bowel syndrome (IBS)": 10,
        "gastroenteritis": 9,
        "food poisoning": 8,
        "endometriosis": 7,
        "diverticulitis": 7,
        "peptic ulcer": 6,
        "gallbladder disease": 6,
        "constipation": 5,
        "inflammatory bowel disease (IBD)": 5,
        "appendicitis": 4
    },
    "persistent itchy scalp": {
        "dandruff": 10,
        "seborrheic dermatitis": 9,
        "psoriasis": 8,
        "fungal infections": 7,
        "head lice": 7,
        "contact dermatitis": 6,
        "eczema": 6,
        "allergic reactions": 5,
        "scalp folliculitis": 5,
        "dry skin": 4
    },
    "painful, swollen legs": {
        "deep vein thrombosis (DVT)": 10,
        "cellulitis": 9,
        "varicose veins": 8,
        "chronic venous insufficiency": 7,
        "lymphedema": 7,
        "congestive heart failure": 6,
        "kidney disease": 6,
        "trauma or injury": 5,
        "medication side effects": 5,
        "venous ulcer": 4
    },
    "persistent sneezing and congestion": {
        "allergic rhinitis": 10,
        "common cold": 9,
        "sinusitis": 8,
        "flu": 7,
        "nasal polyps": 7,
        "chronic sinusitis": 6,
        "deviated septum": 6,
        "upper respiratory infections": 5,
        "environmental irritants": 5,
        "medication side effects": 4
    },
    "severe back pain radiating to legs": {
        "herniated disc": 10,
        "sciatica": 9,
        "spinal stenosis": 8,
        "degenerative disc disease": 7,
        "muscle strain": 7,
        "spinal arthritis": 6,
        "osteoporosis": 6,
        "kidney stones": 5,
        "scoliosis": 5,
        "spinal infections": 4
    },
    "painful, swollen hands": {
        "rheumatoid arthritis": 10,
        "osteoarthritis": 9,
        "gout": 8,
        "psoriatic arthritis": 7,
        "lupus": 7,
        "bursitis": 6,
        "tendonitis": 6,
        "reactive arthritis": 5,
        "infectious arthritis": 5,
        "medication side effects": 4
    },
    "severe, persistent heartburn": {
        "gastroesophageal reflux disease (GERD)": 10,
        "peptic ulcer": 9,
        "hiatal hernia": 8,
        "esophagitis": 7,
        "esophageal spasm": 7,
        "stomach cancer": 6,
        "chronic gastritis": 6,
        "medication side effects": 5,
        "food intolerances": 5,
        "pneumonia": 4
    },
    "recurrent mouth ulcers": {
        "aphthous ulcers": 10,
        "vitamin deficiencies": 9,
        "Behçet's disease": 8,
        "crohn's disease": 7,
        "autoimmune disorders": 7,
        "stress": 6,
        "viral infections": 6,
        "medication side effects": 5,
        "allergic reactions": 5,
        "gum disease": 4
    },
    "constant headache": {
        "migraine": 10,
        "tension headache": 9,
        "cluster headache": 8,
        "sinus headache": 7,
        "dehydration": 6,
        "eyestrain": 6,
        "high blood pressure": 5,
        "temporomandibular joint (TMJ) disorder": 5,
        "stroke": 4,
        "brain tumor": 4
    },
    "feeling dizzy": {
        "vertigo": 10,
        "low blood pressure": 9,
        "dehydration": 8,
        "inner ear infection": 7,
        "migraine": 7,
        "anemia": 6,
        "anxiety": 6,
        "medication side effects": 5,
        "hypoglycemia": 5,
        "stroke": 4
    },
    "persistent nausea": {
        "gastroenteritis": 10,
        "morning sickness": 9,
        "food poisoning": 8,
        "acid reflux": 7,
        "migraine": 7,
        "medication side effects": 6,
        "gallbladder issues": 6,
        "stomach ulcers": 5,
        "kidney stones": 5,
        "pancreatitis": 4
    },
    "feeling bloated": {
        "gastritis": 10,
        "irritable bowel syndrome (IBS)": 9,
        "food intolerance": 8,
        "constipation": 7,
        "gastroenteritis": 7,
        "ascites": 6,
        "peptic ulcer": 6,
        "celiac disease": 5,
        "overeating": 5,
        "gallbladder disease": 4
    },
    "sudden mood swings": {
        "bipolar disorder": 10,
        "depression": 9,
        "anxiety disorder": 8,
        "hormonal changes": 7,
        "stress": 7,
        "pre-menstrual syndrome (PMS)": 6,
        "thyroid disorders": 6,
        "medication side effects": 5,
        "substance abuse": 5,
        "schizophrenia": 4
    },
    "painful urination": {
        "urinary tract infection (UTI)": 10,
        "bladder infection": 9,
        "kidney infection": 8,
        "sexually transmitted infection (STI)": 7,
        "prostatitis": 7,
        "urethritis": 6,
        "vaginitis": 6,
        "kidney stones": 5,
        "medication side effects": 5,
        "bladder cancer": 4
    },
    "dry, flaky skin": {
        "eczema": 10,
        "psoriasis": 9,
        "contact dermatitis": 8,
        "dry climate": 7,
        "hypothyroidism": 7,
        "keratosis pilaris": 6,
        "vitamin deficiencies": 6,
        "seborrheic dermatitis": 5,
        "allergic reactions": 5,
        "aging": 4
    },
    "frequent headaches": {
        "tension headache": 10,
        "migraine": 9,
        "cluster headache": 8,
        "sinusitis": 7,
        "eyestrain": 7,
        "dehydration": 6,
        "stress": 6,
        "high blood pressure": 5,
        "hormonal changes": 5,
        "medication overuse": 4
    },
    "chronic fatigue": {
        "chronic fatigue syndrome": 10,
        "sleep apnea": 9,
        "depression": 8,
        "anemia": 7,
        "hypothyroidism": 7,
        "fibromyalgia": 6,
        "medication side effects": 6,
        "vitamin deficiencies": 5,
        "stress": 5,
        "diabetes": 4
    },
    "swollen feet and ankles": {
        "edema": 10,
        "heart failure": 9,
        "kidney issues": 8,
        "liver disease": 7,
        "venous insufficiency": 7,
        "medication side effects": 6,
        "pregnancy": 6,
        "lymphatic obstruction": 5,
        "trauma": 5,
        "hypertension": 4
    },
    "sudden weight gain": {
        "hypothyroidism": 10,
        "heart failure": 9,
        "fluid retention": 8,
        "medication side effects": 7,
        "polycystic ovary syndrome (PCOS)": 7,
        "cushing's syndrome": 6,
        "kidney disease": 6,
        "pregnancy": 5,
        "lifestyle changes": 5,
        "diabetes": 4
    },
    "recurrent nosebleeds": {
        "dry air": 10,
        "allergic rhinitis": 9,
        "sinusitis": 8,
        "nasal trauma": 7,
        "high blood pressure": 7,
        "medication side effects": 6,
        "blood disorders": 6,
        "nasal tumors": 5,
        "chronic infections": 5,
        "bleeding disorders": 4
    },
    "persistent ringing in the ears": {
        "tinnitus": 10,
        "hearing loss": 9,
        "ear infection": 8,
        "exposure to loud noise": 7,
        "medication side effects": 7,
        "earwax buildup": 6,
        "high blood pressure": 6,
        "Meniere's disease": 5,
        "TMJ disorder": 5,
        "age-related changes": 4
    },
    "painful rash": {
        "shingles": 10,
        "eczema": 9,
        "contact dermatitis": 8,
        "psoriasis": 7,
        "impetigo": 7,
        "allergic reactions": 6,
        "fungal infections": 6,
        "herpes simplex": 5,
        "bacterial infections": 5,
        "hives": 4
    },
    "painful, red eyes": {
        "conjunctivitis (pink eye)": 10,
        "dry eyes": 9,
        "blepharitis": 8,
        "uveitis": 7,
        "corneal abrasion": 7,
        "glaucoma": 6,
        "irritants or allergens": 6,
        "eye infections": 5,
        "contact lens issues": 5,
        "foreign body in eye": 4
    },
    "persistent cough": {
        "tuberculosis (TB)": 10,
        "chronic bronchitis": 9,
        "asthma": 8,
        "pneumonia": 7,
        "chronic obstructive pulmonary disease (COPD)": 7,
        "whooping cough": 6,
        "postnasal drip": 6,
        "HIV-related infections": 5,
        "lung cancer": 5,
        "respiratory infections": 4
    },
    "night sweats": {
        "tuberculosis (TB)": 10,
        "HIV/AIDS": 9,
        "malaria": 8,
        "lymphoma": 7,
        "chronic infections": 7,
        "menopause": 6,
        "fever": 6,
        "hyperthyroidism": 5,
        "autoimmune disorders": 5,
        "stress": 4
    },
    "unexplained weight loss": {
        "HIV/AIDS": 10,
        "tuberculosis (TB)": 9,
        "cancer": 8,
        "chronic infections": 7,
        "malnutrition": 7,
        "diabetes": 6,
        "hyperthyroidism": 6,
        "gastrointestinal disorders": 5,
        "chronic diarrhea": 5,
        "depression": 4
    },
    "frequent diarrhea": {
        "gastroenteritis": 10,
        "dysentery": 9,
        "typhoid fever": 8,
        "cholera": 7,
        "parasitic infections": 7,
        "malaria": 6,
        "food poisoning": 6,
        "IBS (Irritable Bowel Syndrome)": 5,
        "medication side effects": 5,
        "antibiotic-associated diarrhea": 4
    },
    "fever with chills": {
        "malaria": 10,
        "typhoid fever": 9,
        "dengue fever": 8,
        "chikungunya": 7,
        "flu (influenza)": 7,
        "HIV/AIDS": 6,
        "tuberculosis (TB)": 6,
        "bacterial infections": 5,
        "parasitic infections": 5,
        "sepsis": 4
    },
    "joint pain": {
        "malaria": 10,
        "rheumatic fever": 9,
        "arthritis": 8,
        "gout": 7,
        "dengue fever": 7,
        "lupus": 6,
        "osteomyelitis": 6,
        "HIV/AIDS": 5,
        "rheumatoid arthritis": 5,
        "injuries": 4
    },
    "abdominal pain": {
        "typhoid fever": 10,
        "gastroenteritis": 9,
        "appendicitis": 8,
        "peptic ulcer disease": 7,
        "malaria": 7,
        "intestinal worms": 6,
        "gallbladder disease": 6,
        "HIV-related conditions": 5,
        "abdominal tuberculosis": 5,
        "gastrointestinal infections": 4
    },
    "skin rash": {
        "fungal infections": 10,
        "scabies": 9,
        "eczema": 8,
        "impetigo": 7,
        "chickenpox": 7,
        "allergic reactions": 6,
        "syphilis": 6,
        "HIV-related skin conditions": 5,
        "herpes simplex": 5,
        "tropical ulcers": 4
    },
    "swollen legs": {
        "kwashiorkor": 10,
        "heart failure": 9,
        "kidney disease": 8,
        "venous insufficiency": 7,
        "lymphatic obstruction": 7,
        "malaria": 6,
        "pregnancy": 6,
        "medication side effects": 5,
        "liver disease": 5,
        "injury": 4
    },
    "shortness of breath": {
        "asthma": 10,
        "pneumonia": 9,
        "chronic bronchitis": 8,
        "heart failure": 7,
        "chronic obstructive pulmonary disease (COPD)": 7,
        "pulmonary embolism": 6,
        "tuberculosis (TB)": 6,
        "malaria": 5,
        "anemia": 5,
        "allergic reactions": 4
    },
    "painful urination": {
        "urinary tract infection (UTI)": 10,
        "sexually transmitted infections (STIs)": 9,
        "bladder infection": 8,
        "kidney infection": 7,
        "prostatitis": 7,
        "urethritis": 6,
        "vaginitis": 6,
        "kidney stones": 5,
        "medication side effects": 5,
        "bladder cancer": 4
    },
    "dry cough": {
        "tuberculosis (TB)": 10,
        "asthma": 9,
        "chronic bronchitis": 8,
        "postnasal drip": 7,
        "whooping cough": 7,
        "HIV-related respiratory issues": 6,
        "GERD": 6,
        "allergies": 5,
        "medication side effects": 5,
        "chronic obstructive pulmonary disease (COPD)": 4
    },
    "itchy skin": {
        "eczema": 10,
        "fungal infections": 9,
        "scabies": 8,
        "allergic reactions": 7,
        "contact dermatitis": 7,
        "insect bites": 6,
        "hives": 6,
        "psoriasis": 5,
        "chickenpox": 5,
        "HIV-related skin conditions": 4
    },
    "swelling of joints": {
        "brucellosis": 8,
        "rheumatic fever": 7,
        "arthritis": 6
    },
    "numbness in extremities": {
        "leprosy": 9,
        "diabetic neuropathy": 8,
        "multiple sclerosis": 7
    },
    "painful skin lesions": {
        "onchocerciasis (river blindness)": 8,
        "buruli ulcer": 9,
        "chronic skin infections": 7
    },
    "chronic cough": {
        "schistosomiasis (bilharzia)": 6,
        "tuberculosis (TB)": 10,
        "chronic bronchitis": 8
    },
    "jaundice": {
        "yellow fever": 9,
        "hepatitis B": 10,
        "hepatitis E": 8
    },
    "muscle weakness": {
        "guinea worm disease (dracunculiasis)": 7,
        "kwashiorkor": 8,
        "myasthenia gravis": 6
    },
    "abdominal pain": {
        "amoebiasis": 8,
        "cryptosporidiosis": 7,
        "gastroenteritis": 6
    },
    "night sweats": {
        "tuberculosis (TB)": 10,
        "malaria": 8,
        "HIV/AIDS": 7
    },
    "chronic diarrhea": {
        "cryptosporidiosis": 9,
        "amoebiasis": 8,
        "bacterial gastroenteritis": 7
    },
    "pain behind the eyes": {
        "dengue fever": 8,
        "sinusitis": 7,
        "migraine": 6
    },
    "severe headache": {
        "dengue fever": 9,
        "meningitis": 8,
        "cluster headache": 7
    },
    "flaking skin": {
        "eczema": 8,
        "psoriasis": 9,
        "seborrheic dermatitis": 7
    },
    "skin discoloration": {
        "leprosy": 7,
        "melasma": 6,
        "vitiligo": 5
    },
    "itchy, watery eyes": {
        "trachoma": 9,
        "allergic conjunctivitis": 8,
        "dry eye syndrome": 7
    },
    "painful urination": {
        "schistosomiasis (bilharzia)": 7,
        "urinary tract infection": 8,
        "bladder infection": 6
    },
    "abnormal blood tests": {
        "hepatitis B": 9,
        "anemia": 7,
        "leukemia": 6
    },
    "persistent fever": {
        "malaria": 9,
        "typhoid fever": 8,
        "HIV/AIDS": 7
    },
    "visual disturbances": {
        "onchocerciasis (river blindness)": 9,
        "toxoplasmosis": 8,
        "retinitis pigmentosa": 7
    },
    "swollen lymph nodes": {
        "lymphoma": 8,
        "brucellosis": 7,
        "HIV/AIDS": 6
    },
    "persistent itchiness": {
        "Buruli ulcer": 8,
        "lymphatic filariasis": 7,
        "chronic eczema": 6
    },
    "unexplained weight loss": {
        "tuberculosis (TB)": 9,
        "HIV/AIDS": 8,
        "cancer": 7
    },
    "difficulty swallowing": {
        "esophageal cancer": 8,
        "schistosomiasis (esophageal form)": 7,
        "diphtheria": 6
    },
    "uncontrolled bleeding": {
        "hemophilia": 9,
        "liver cirrhosis": 8,
        "platelet disorders": 7
    },
    "high fever with rash": {
        "smallpox": 9,
        "measles": 8,
        "Kawasaki disease": 7
    },
    "chronic fatigue": {
        "Chronic Fatigue Syndrome": 9,
        "HIV/AIDS": 8,
        "leptospirosis": 7
    },
    "joint deformities": {
        "rheumatic fever": 8,
        "gout": 7,
        "psoriatic arthritis": 6
    },
    "confusion or delirium": {
        "cerebral malaria": 9,
        "meningitis": 8,
        "encephalitis": 7
    },
    "severe abdominal bloating": {
        "ascitic cirrhosis": 8,
        "intestinal obstruction": 7,
        "nephrotic syndrome": 6
    },
    "sensory abnormalities": {
        "neurocysticercosis": 9,
        "multiple sclerosis": 8,
        "Vitamin B12 deficiency": 7
    },
    "strange or abnormal skin growths": {
        "Kaposi's sarcoma": 9,
        "skin cancers": 8,
        "actinic keratosis": 7
    },
    "extreme thirst": {
        "diabetes mellitus": 9,
        "diabetic ketoacidosis": 8,
        "hypercalcemia": 7
    },
    "persistent dry cough": {
        "interstitial lung disease": 9,
        "chronic obstructive pulmonary disease (COPD)": 8,
        "sarcoidosis": 7
    },
    "sudden onset of joint pain": {
        "gout": 9,
        "rheumatic fever": 8,
        "septic arthritis": 7
    },
    "night sweats": {
        "tuberculosis": 9,
        "HIV/AIDS": 8,
        "lymphoma": 7
    },
    "chronic cough": {
        "chronic bronchitis": 9,
        "asthma": 8,
        "tuberculosis": 7
    },
    "muscle weakness": {
        "myasthenia gravis": 9,
        "muscular dystrophy": 8,
        "Guillain-Barre syndrome": 7
    },
    "abdominal pain": {
        "appendicitis": 9,
        "peptic ulcer": 8,
        "gastroenteritis": 7
    },
    "weight gain": {
        "hypothyroidism": 9,
        "Cushing's syndrome": 8,
        "polycystic ovary syndrome": 7
    },
    "breathing difficulty": {
        "asthma": 9,
        "chronic obstructive pulmonary disease (COPD)": 8,
        "pneumonia": 7
    },
    "persistent fever": {
        "typhoid fever": 9,
        "malaria": 8,
        "dengue fever": 7
    },
    "joint pain": {
        "rheumatoid arthritis": 9,
        "gout": 8,
        "osteoarthritis": 7
    },
    "dry mouth": {
        "dehydration": 9,
        "Sjogren's syndrome": 8,
        "medication side effect": 7
    },
    "sudden dizziness": {
        "vertigo": 9,
        "low blood pressure": 8,
        "dehydration": 7
    },
    "skin rash": {
        "eczema": 9,
        "psoriasis": 8,
        "contact dermatitis": 7
    },
    "headaches": {
        "migraine": 9,
        "tension headache": 8,
        "cluster headache": 7
    },
    "chest pain": {
        "angina": 9,
        "heart attack": 8,
        "pericarditis": 7
    },
    "swollen abdomen": {
        "ascites": 9,
        "liver cirrhosis": 8,
        "kidney failure": 7
    },
    "blurry vision": {
        "glaucoma": 9,
        "diabetic retinopathy": 8,
        "cataracts": 7
    },
    "nausea vomiting": {
        "gastroenteritis": 9,
        "food poisoning": 8,
        "migraine": 7
    },
    "shortness of breath": {
        "asthma": 10,
        "chronic obstructive pulmonary disease (COPD)": 9,
        "heart failure": 8
    },
    "persistent abdominal pain": {
        "gastritis": 10,
        "appendicitis": 9,
        "peptic ulcer": 8
    },
    "frequent urination": {
        "diabetes mellitus": 10,
        "urinary tract infection": 9,
        "overactive bladder": 8
    },
    "unexplained weight loss": {
        "cancer": 10,
        "hyperthyroidism": 9,
        "tuberculosis": 8
    },
    "persistent headache pain": {
        "migraine": 10,
        "tension headache": 9,
        "cluster headache": 8
    },
    "joint stiffness": {
        "rheumatoid arthritis": 10,
        "osteoarthritis": 9,
        "gout": 8
    },
    "feeling nauseous frequently": {
        "gastroenteritis": 10,
        "food poisoning": 9,
        "pregnancy": 8
    },
    "painful urination": {
        "urinary tract infection": 10,
        "bladder infection": 9,
        "sexually transmitted infection": 8
    },
    "severe chest tightness": {
        "angina": 10,
        "heart attack": 9,
        "panic attack": 8
    },
    "frequent nosebleeds": {
        "allergies": 10,
        "sinusitis": 9,
        "high blood pressure": 8
    },
    "swollen lymph nodes": {
        "lymphoma": 10,
        "infectious mononucleosis": 9,
        "tuberculosis": 8
    },
    "persistent cough with blood": {
        "lung cancer": 10,
        "tuberculosis": 9,
        "pneumonia": 8
    },
    "extreme fatigue levels": {
        "chronic fatigue syndrome": 10,
        "hypothyroidism": 9,
        "anemia": 8
    },
    "yellowing of skin": {
        "jaundice": 10,
        "hepatitis": 9,
        "cirrhosis": 8
    },
    "painful rash outbreak": {
        "shingles": 10,
        "herpes simplex": 9,
        "contact dermatitis": 8
    },
    "persistent itchy eyes": {
        "allergic conjunctivitis": 10,
        "dry eye syndrome": 9,
        "blepharitis": 8
    },
    "dizziness": {
        "vertigo": 10,
        "inner ear infection": 9,
        "dehydration": 8
    },
    "tremors": {
        "Parkinson's disease": 10,
        "essential tremor": 9,
        "multiple sclerosis": 8
    },
    "numbness": {
        "peripheral neuropathy": 10,
        "stroke": 9,
        "carpal tunnel syndrome": 8
    },
    "bleeding": {
        "hemophilia": 10,
        "platelet disorder": 9,
        "gastrointestinal bleeding": 8
    },
    "swelling": {
        "edema": 10,
        "heart failure": 9,
        "kidney disease": 8
    },
    "fatigue": {
        "chronic fatigue syndrome": 10,
        "anemia": 9,
        "hypothyroidism": 8
    },
    "confusion": {
        "delirium": 10,
        "dementia": 9,
        "brain tumor": 8
    },
    "feeling faint": {
        "orthostatic hypotension": 10,
        "dehydration": 9,
        "anemia": 8
    },
    "sweating": {
        "hyperhidrosis": 10,
        "menopause": 9,
        "infection": 8
    },
    "pain": {
        "fibromyalgia": 10,
        "arthritis": 9,
        "muscle strain": 8
    },
    "paralysis": {
        "stroke": 10,
        "spinal cord injury": 9,
        "multiple sclerosis": 8
    },
    "jaundice": {
        "hepatitis": 10,
        "gallstones": 9,
        "liver cirrhosis": 8
    },
    "cyanosis": {
        "cardiac disease": 10,
        "chronic lung disease": 9,
        "asthma": 8
    },
    "seizures": {
        "epilepsy": 10,
        "brain tumor": 9,
        "stroke": 8
    },
    "hematuria": {
        "kidney stones": 10,
        "bladder infection": 9,
        "renal cancer": 8
    },
    "blepharospasm": {
        "dry eyes": 10,
        "blepharitis": 9,
        "neurological disorder": 8
    },
    "tinnitus": {
        "ear infection": 10,
        "acoustic neuroma": 9,
        "exposure to loud noise": 8
    },
    "myoclonus": {
        "neurological disorder": 10,
        "seizure disorder": 9,
        "medication side effect": 8
    },
    "dysphagia": {
        "esophageal disorder": 10,
        "stroke": 9,
        "muscle disorder": 8
    },
    "urticaria": {
        "allergic reaction": 10,
        "hives": 9,
        "chronic idiopathic urticaria": 8
    },
    "chronic fatigue": {
        "chronic fatigue syndrome": 10,
        "fibromyalgia": 9,
        "depression": 8,
        "hypothyroidism": 7,
        "anemia": 6
    },
    "muscle weakness": {
        "myasthenia gravis": 10,
        "muscular dystrophy": 9,
        "chronic fatigue syndrome": 8,
        "hypothyroidism": 7,
        "vitamin D deficiency": 6
    },
    "dizziness": {
        "vertigo": 10,
        "dehydration": 9,
        "inner ear infection": 8,
        "low blood pressure": 7,
        "anxiety": 6
    },
    "abdominal bloating": {
        "irritable bowel syndrome (IBS)": 10,
        "gastric ulcers": 9,
        "lactose intolerance": 8,
        "celiac disease": 7,
        "chronic constipation": 6
    },
    "night sweats": {
        "tuberculosis": 10,
        "lymphoma": 9,
        "menopause": 8,
        "hyperthyroidism": 7,
        "chronic infections": 6
    },
    "joint pain": {
        "rheumatoid arthritis": 10,
        "osteoarthritis": 9,
        "gout": 8,
        "lupus": 7,
        "bursitis": 6
    },
    "persistent cough": {
        "chronic bronchitis": 10,
        "asthma": 9,
        "gastroesophageal reflux disease (GERD)": 8,
        "post-nasal drip": 7,
        "lung cancer": 6
    },
    "weight loss": {
        "hyperthyroidism": 10,
        "diabetes": 9,
        "cancer": 8,
        "chronic infection": 7,
        "malabsorption issues": 6
    },
    "rash": {
        "eczema": 10,
        "psoriasis": 9,
        "allergic reaction": 8,
        "lupus": 7,
        "drug reaction": 6
    },
    "chronic headaches": {
        "migraine": 10,
        "tension headaches": 9,
        "cluster headaches": 8,
        "sinusitis": 7,
        "hypertension": 6
    },
    "chronic pain": {
        "fibromyalgia": 10,
        "chronic fatigue syndrome": 9,
        "rheumatoid arthritis": 8,
        "depression": 7,
        "somatic symptom disorder": 6
    },
    "brain fog": {
        "chronic fatigue syndrome": 10,
        "fibromyalgia": 9,
        "multiple sclerosis": 8,
        "depression": 7,
        "hypothyroidism": 6
    },
    "insomnia": {
        "sleep apnea": 10,
        "restless legs syndrome": 9,
        "chronic stress": 8,
        "anxiety disorder": 7,
        "depression": 6
    },
    "irregular heartbeat": {
        "atrial fibrillation": 10,
        "anxiety": 9,
        "thyroid disorders": 8,
        "electrolyte imbalances": 7,
        "premenstrual syndrome (PMS)": 6
    },
    "digestive disturbances": {
        "irritable bowel syndrome (IBS)": 10,
        "food intolerances": 9,
        "gastroesophageal reflux disease (GERD)": 8,
        "chronic stress": 7,
        "peptic ulcers": 6
    },
    "unexplained weight gain": {
        "hypothyroidism": 10,
        "polycystic ovary syndrome (PCOS)": 9,
        "depression": 8,
        "insulin resistance": 7,
        "cushing's syndrome": 6
    },
    "frequent urination": {
        "diabetes": 10,
        "urinary tract infection (UTI)": 9,
        "overactive bladder": 8,
        "prostate issues": 7,
        "anxiety": 6
    },
    "muscle twitching": {
        "benign fasciculation syndrome": 10,
        "electrolyte imbalances": 9,
        "multiple sclerosis": 8,
        "anxiety": 7,
        "neuropathy": 6
    },
    "persistent nausea": {
        "gastroesophageal reflux disease (GERD)": 10,
        "chronic gastritis": 9,
        "migraine": 8,
        "anxiety": 7,
        "pregnancy": 6
    },
    "memory loss": {
        "early-onset dementia": 10,
        "depression": 9,
        "chronic stress": 8,
        "vitamin deficiencies": 7,
        "sleep disorders": 6
    },
    "chronic fatigue": {
        "fibromyalgia": 10,
        "chronic fatigue syndrome": 9,
        "hypothyroidism": 8,
        "adrenal insufficiency": 7,
        "depression": 6
    },
    "dizziness": {
        "vestibular disorders": 10,
        "anxiety": 9,
        "dehydration": 8,
        "low blood pressure": 7,
        "inner ear infections": 6
    },
    "joint stiffness": {
        "rheumatoid arthritis": 10,
        "osteoarthritis": 9,
        "fibromyalgia": 8,
        "lupus": 7,
        "gout": 6
    },
    "skin rashes": {
        "eczema": 10,
        "psoriasis": 9,
        "contact dermatitis": 8,
        "hives": 7,
        "systemic lupus erythematosus": 6
    },
    "shortness of breath": {
        "asthma": 10,
        "chronic obstructive pulmonary disease (COPD)": 9,
        "heart failure": 8,
        "pulmonary embolism": 7,
        "anxiety": 6
    },
    "feeling lightheaded": {
        "orthostatic hypotension": 10,
        "anxiety": 9,
        "anemia": 8,
        "dehydration": 7,
        "cardiac arrhythmias": 6
    },
    "visual disturbances": {
        "migraine": 10,
        "diabetic retinopathy": 9,
        "glaucoma": 8,
        "macular degeneration": 7,
        "optic neuritis": 6
    },
    "persistent cough": {
        "chronic bronchitis": 10,
        "asthma": 9,
        "post-nasal drip": 8,
        "gastroesophageal reflux disease (GERD)": 7,
        "chronic obstructive pulmonary disease (COPD)": 6
    },
    "muscle weakness": {
        "multiple sclerosis": 10,
        "amyotrophic lateral sclerosis (ALS)": 9,
        "myasthenia gravis": 8,
        "hypothyroidism": 7,
        "chronic fatigue syndrome": 6
    },
    "numbness": {
        "peripheral neuropathy": 10,
        "carpal tunnel syndrome": 9,
        "stroke": 8,
        "multiple sclerosis": 7,
        "diabetes": 6
    }

};
// Define guidance and educational content
const guidance = {
    "malaria": {
        "steps": "Visit a healthcare professional for a blood test to confirm malaria. Immediate treatment with antimalarial medication is crucial. Rest and stay hydrated to recover faster.",
        "content": "Malaria is caused by parasites transmitted through mosquito bites. Symptoms include fever, chills, and flu-like illness. Preventive measures include sleeping under mosquito nets, using insect repellents, and taking antimalarial prophylaxis when traveling to high-risk areas."
    },
    "typhoid fever": {
        "steps": "Consult a doctor for a blood culture test. Early diagnosis is important for effective treatment. Antibiotics are commonly prescribed for treatment, and in severe cases, hospitalization may be necessary. Ensure proper hydration during recovery.",
        "content": "Typhoid fever is caused by Salmonella typhi bacteria, often spread through contaminated food and water. Symptoms include prolonged fever, weakness, abdominal pain, and headaches. Preventive steps include ensuring safe drinking water, practicing good hygiene, and getting vaccinated in high-risk areas."
    },
    "dengue fever": {
        "steps": "Seek medical advice immediately for a dengue test if you suspect an infection. Stay hydrated, rest, and monitor your symptoms closely. Avoid taking aspirin or ibuprofen to prevent complications. Hospitalization may be required in severe cases for IV fluids and monitoring.",
        "content": "Dengue is a mosquito-borne viral infection. Common symptoms include high fever, severe headache, pain behind the eyes, joint and muscle pain, and rash. Preventive measures include using mosquito repellents, wearing long-sleeved clothing, and eliminating stagnant water sources where mosquitoes breed."
    },
    "COVID-19": {
        "steps": "Get tested for COVID-19 and follow isolation guidelines to prevent spreading the virus. If symptoms are mild, manage at home with hydration, rest, and over-the-counter medications. For severe symptoms like difficulty breathing, seek emergency medical attention.",
        "content": "COVID-19 is caused by the SARS-CoV-2 virus. It spreads through respiratory droplets and can cause a range of symptoms, from mild fever and cough to severe respiratory issues. Preventative measures include vaccination, wearing masks in crowded areas, maintaining social distance, and frequent handwashing."
    },
    "eczema": {
        "steps": "Visit a dermatologist to confirm the diagnosis and explore treatment options. Moisturize regularly and use topical steroids as prescribed to reduce inflammation. Avoid known irritants and allergens that may trigger flare-ups.",
        "content": "Eczema is a chronic skin condition that causes inflammation, itching, and dryness. It often occurs in people with a family history of allergies or asthma. Treatment focuses on managing symptoms, avoiding triggers, and keeping the skin moisturized. Severe cases may require prescription medications."
    },
    "fungal infections": {
        "steps": "Consult a healthcare provider for proper diagnosis, especially if the infection persists. Use antifungal creams, ointments, or oral medications as prescribed. Keep the affected area clean and dry, and avoid sharing personal items to prevent the spread of infection.",
        "content": "Fungal infections can affect the skin, nails, or scalp and are commonly caused by dermatophytes. Symptoms include redness, itching, and scaling. Preventing fungal infections involves maintaining good hygiene, keeping skin dry, and avoiding prolonged exposure to moist environments."
    },
    "influenza": {
        "steps": "Visit a healthcare provider for a flu test and begin antiviral treatment if necessary. Rest, drink plenty of fluids, and use fever-reducing medications to manage symptoms. Seek immediate medical attention if you experience difficulty breathing or chest pain.",
        "content": "Influenza, commonly known as the flu, is a contagious respiratory illness caused by influenza viruses. Symptoms include fever, chills, cough, sore throat, and body aches. Annual flu vaccination is the best preventive measure, especially for those at high risk of complications."
    },
    "peptic ulcer": {
        "steps": "Consult a gastroenterologist for diagnostic tests, such as an endoscopy. Treatment usually involves proton pump inhibitors (PPIs) to reduce stomach acid and antibiotics if Helicobacter pylori bacteria are present. Avoid smoking, alcohol, and nonsteroidal anti-inflammatory drugs (NSAIDs) to prevent further damage.",
        "content": "Peptic ulcers are open sores that develop on the inner lining of the stomach, small intestine, or esophagus due to excessive stomach acid or bacterial infections (H. pylori). Symptoms include burning stomach pain, bloating, and nausea. Lifestyle changes and medications can help manage and prevent ulcers."
    },
    "allergic rhinitis": {
        "steps": "Consult an allergist for allergy testing and treatment options, which may include antihistamines, nasal corticosteroids, and immunotherapy. Avoid exposure to known allergens, such as pollen, dust mites, or pet dander. Use air purifiers to reduce airborne allergens at home.",
        "content": "Allergic rhinitis, also known as hay fever, is an allergic response to airborne particles like pollen, dust mites, or animal dander. Symptoms include sneezing, runny or stuffy nose, and itchy eyes. Managing allergic rhinitis involves avoiding triggers and using medications to control symptoms."
    },
    "conjunctivitis": {
        "steps": "Consult an eye specialist to determine whether conjunctivitis is bacterial, viral, or allergic. For bacterial conjunctivitis, antibiotic eye drops or ointments may be prescribed. For viral or allergic cases, treatment typically focuses on symptom relief. Maintain good hygiene to avoid spreading the infection.",
        "content": "Conjunctivitis, commonly known as pink eye, is an inflammation or infection of the conjunctiva (the outermost layer of the eye). It can be caused by viruses, bacteria, or allergens. Symptoms include redness, itching, and discharge. Good hygiene and avoiding contact with contaminated surfaces can help prevent spread."
    },
    "gastroenteritis": {
        "steps": "Consult a healthcare provider if symptoms are severe or persistent. Stay hydrated by drinking plenty of fluids or using oral rehydration solutions to replace lost electrolytes. Avoid solid foods until symptoms improve, and gradually reintroduce a bland diet. Seek medical attention if dehydration occurs.",
        "content": "Gastroenteritis, also known as stomach flu, is an inflammation of the stomach and intestines caused by viruses, bacteria, or parasites. Common symptoms include nausea, vomiting, diarrhea, and abdominal cramps. Prevention involves good hygiene, such as regular handwashing, and avoiding contaminated food and water."
    },
    "asthma": {
        "steps": "Use a rescue inhaler immediately during an asthma attack. Visit your doctor for a long-term management plan, including maintenance inhalers and lifestyle changes. Avoid known triggers like smoke, allergens, and cold air.",
        "content": "Asthma is a chronic respiratory condition characterized by inflamed airways, causing difficulty breathing, wheezing, and coughing. It can be triggered by allergens, physical activity, or respiratory infections. Managing asthma involves medications and avoiding known triggers."
    },
    "pneumonia": {
        "steps": "Seek immediate medical attention for a chest X-ray and blood tests. Antibiotics or antiviral medications may be required. Rest, stay hydrated, and follow your doctor’s recommendations for recovery.",
        "content": "Pneumonia is a lung infection caused by bacteria, viruses, or fungi. Symptoms include cough, fever, difficulty breathing, and chest pain. Prevention includes vaccination, practicing good hygiene, and avoiding smoking."
    },
    "anemia": {
        "steps": "Consult a healthcare provider for blood tests to determine the type of anemia. Treatment may include iron supplements, dietary changes, or treating underlying conditions. Ensure a diet rich in iron, folic acid, and vitamin B12.",
        "content": "Anemia is a condition where the body lacks enough healthy red blood cells to carry oxygen, leading to fatigue, weakness, and pale skin. Causes include iron deficiency, chronic diseases, and vitamin deficiencies. Treatment depends on the cause and severity."
    },
    "hypertension (high blood pressure)": {
        "steps": "Visit a healthcare provider for blood pressure monitoring and possible medication. Adopt a healthy lifestyle by reducing salt intake, exercising regularly, and managing stress. Follow up regularly to monitor your blood pressure.",
        "content": "Hypertension is a condition in which the force of the blood against the artery walls is too high, leading to heart disease and stroke if untreated. It is often asymptomatic, but some may experience headaches or dizziness. Lifestyle changes and medications can effectively control it."
    },
    "diabetes": {
        "steps": "Get tested for blood sugar levels and consult a doctor for diagnosis. Depending on the type of diabetes, treatment may involve insulin, oral medications, and lifestyle changes such as dietary modifications and regular exercise.",
        "content": "Diabetes is a chronic condition where the body is unable to properly regulate blood sugar levels. It can lead to complications such as nerve damage, kidney disease, and cardiovascular problems. Management involves monitoring blood sugar, medication, and a healthy lifestyle."
    },
    "migraine": {
        "steps": "Consult a doctor for proper diagnosis and treatment options, including pain relievers, triptans, or preventive medications. Rest in a quiet, dark room during an attack and apply cold or hot compresses. Identify and avoid potential triggers like stress, certain foods, or strong smells.",
        "content": "Migraine is a neurological condition characterized by intense, throbbing headaches, often accompanied by nausea, sensitivity to light, and visual disturbances. Triggers vary from person to person but can include stress, hormonal changes, or environmental factors. Managing migraines involves medication and lifestyle adjustments."
    },
    "tuberculosis (TB)": {
        "steps": "Seek medical attention for a TB skin test or blood test if you suspect exposure. TB is treatable with a course of antibiotics, but it requires long-term treatment. Follow your healthcare provider's instructions and ensure proper medication adherence to prevent drug-resistant TB.",
        "content": "Tuberculosis is a bacterial infection that primarily affects the lungs but can also impact other parts of the body. Symptoms include a persistent cough, weight loss, night sweats, and fever. TB spreads through the air when an infected person coughs or sneezes. Preventive measures include vaccination and avoiding close contact with infected individuals."
    },
    "chronic obstructive pulmonary disease (COPD)": {
        "steps": "Visit a healthcare provider for a pulmonary function test and chest X-ray. Treatment includes bronchodilators, inhaled steroids, and oxygen therapy for severe cases. Avoid smoking and other lung irritants to slow disease progression.",
        "content": "COPD is a group of lung diseases, including chronic bronchitis and emphysema, that cause breathing difficulties. Symptoms include shortness of breath, wheezing, and chronic cough. The leading cause of COPD is long-term exposure to irritating gases, especially from smoking. Early detection and management can improve quality of life."
    },
    "kidney stones": {
        "steps": "Consult a healthcare provider for imaging tests such as an ultrasound or CT scan to confirm the presence of stones. Drink plenty of water to help pass small stones, and take pain relief medications as prescribed. In some cases, surgical procedures may be required to remove larger stones.",
        "content": "Kidney stones are hard deposits of minerals and salts that form inside the kidneys. Symptoms include severe pain in the back or side, nausea, and blood in the urine. Prevention includes staying hydrated and limiting salt and oxalate-rich foods."
    },
    "gout": {
        "steps": "Visit a healthcare provider for a diagnosis through a joint fluid test or blood test. Treatment includes nonsteroidal anti-inflammatory drugs (NSAIDs) or colchicine. Long-term management may involve medications to lower uric acid levels and lifestyle changes such as avoiding alcohol and purine-rich foods.",
        "content": "Gout is a form of arthritis caused by the buildup of uric acid crystals in the joints, leading to sudden and severe pain, swelling, and redness. It commonly affects the big toe but can occur in other joints. Managing gout involves medication and lifestyle changes."
    },
    "osteoporosis": {
        "steps": "Consult a doctor for a bone density test to assess your risk of fractures. Treatment may include calcium and vitamin D supplements, weight-bearing exercises, and medications to strengthen bones. Fall prevention strategies should be implemented to avoid fractures.",
        "content": "Osteoporosis is a condition in which bones become weak and brittle, increasing the risk of fractures. It commonly affects older adults, especially postmenopausal women. Preventive measures include a calcium-rich diet, regular exercise, and avoiding smoking and excessive alcohol consumption."
    },
    "depression": {
        "steps": "Reach out to a mental health professional for diagnosis and treatment, which may include therapy, medication, or lifestyle changes. Engage in regular physical activity, maintain social connections, and avoid isolation. In case of severe symptoms, such as thoughts of self-harm, seek immediate help.",
        "content": "Depression is a mood disorder characterized by persistent feelings of sadness, loss of interest in activities, and low energy. It can affect daily functioning and overall well-being. Treatment includes therapy, medications such as antidepressants, and support from friends and family."
    },
    "appendicitis": {
        "steps": "Seek emergency medical attention if you experience sudden, severe abdominal pain, particularly in the lower right abdomen. Diagnosis may involve a physical exam, blood tests, and imaging. Surgery is the standard treatment to remove the inflamed appendix.",
        "content": "Appendicitis is the inflammation of the appendix, a small pouch attached to the large intestine. Symptoms include sharp abdominal pain, nausea, and fever. It is a medical emergency, as a ruptured appendix can lead to life-threatening infections."
    },
    "urinary tract infection (UTI)": {
        "steps": "Consult a healthcare provider for a urine test to confirm the infection. Treatment typically involves antibiotics. Drink plenty of water to help flush out the bacteria and avoid irritating the bladder with caffeine or alcohol.",
        "content": "A UTI is an infection of the urinary system, including the bladder, kidneys, or urethra. Symptoms include a frequent urge to urinate, burning sensation during urination, and cloudy or strong-smelling urine. Preventive measures include staying hydrated, practicing good hygiene, and urinating after sexual activity."
    },
    "hepatitis": {
        "steps": "Consult a doctor for blood tests to diagnose the type of hepatitis (A, B, C, etc.). Treatment may involve antiviral medications and lifestyle changes, including avoiding alcohol. Get vaccinated for hepatitis A and B to prevent infection.",
        "content": "Hepatitis is an inflammation of the liver caused by viruses, alcohol use, or other factors. Symptoms include jaundice, fatigue, abdominal pain, and dark urine. Some forms of hepatitis, like B and C, can lead to chronic liver disease. Preventive measures include vaccination, safe sexual practices, and avoiding contaminated needles."
    },
    "bronchitis": {
        "steps": "Consult a healthcare provider for a diagnosis. Treatment often includes rest, fluids, and avoiding smoke or fumes. In some cases, an inhaler or medication may be prescribed to open airways or reduce inflammation.",
        "content": "Bronchitis is an inflammation of the bronchial tubes, leading to coughing, mucus production, fatigue, and chest discomfort. Acute bronchitis is usually caused by viral infections, while chronic bronchitis is often linked to smoking or long-term irritant exposure."
    },
    "sinusitis": {
        "steps": "Seek medical advice if symptoms persist for more than 10 days. Over-the-counter decongestants, nasal sprays, or antibiotics may be recommended depending on the cause.",
        "content": "Sinusitis is the inflammation of the sinuses, often due to infection, allergies, or other irritants. Symptoms include facial pain, pressure, nasal congestion, and headaches. Keeping nasal passages moist with saline sprays and staying hydrated can help alleviate symptoms."
    },
    "gastroenteritis": {
        "steps": "Stay hydrated by drinking fluids with electrolytes to prevent dehydration. Avoid solid foods until symptoms improve, then gradually reintroduce a bland diet. If symptoms persist, consult a doctor for further testing.",
        "content": "Gastroenteritis, also known as the stomach flu, is an inflammation of the stomach and intestines caused by viruses, bacteria, or parasites. Symptoms include diarrhea, vomiting, stomach cramps, and fever. Prevention includes good hand hygiene and avoiding contaminated food or water."
    },
    "conjunctivitis (pink eye)": {
        "steps": "Visit a healthcare provider for a diagnosis to determine if it's viral, bacterial, or allergic conjunctivitis. Apply warm compresses and use eye drops or ointment as prescribed. Avoid touching or rubbing your eyes to prevent spreading the infection.",
        "content": "Conjunctivitis is an inflammation of the conjunctiva, the thin tissue covering the white part of the eye. It causes redness, itching, and discharge. Bacterial conjunctivitis can be treated with antibiotics, while viral and allergic types are managed with supportive care or antihistamines."
    },
    "irritable bowel syndrome (IBS)": {
        "steps": "Consult a doctor for diagnosis through symptom assessment. Managing IBS often involves dietary changes, stress reduction, and medications such as fiber supplements or antispasmodics.",
        "content": "IBS is a common digestive disorder that affects the large intestine. Symptoms include abdominal pain, bloating, gas, and alternating periods of diarrhea and constipation. Triggers can vary, but common ones include stress, certain foods, and hormonal changes."
    },
    "peptic ulcer disease": {
        "steps": "Consult a doctor for a diagnosis, usually through an endoscopy or a breath test for H. pylori bacteria. Treatment includes medications such as proton pump inhibitors (PPIs) to reduce stomach acid and antibiotics if an infection is present.",
        "content": "Peptic ulcers are sores that develop on the lining of the stomach, small intestine, or esophagus. They are often caused by H. pylori infection or long-term use of nonsteroidal anti-inflammatory drugs (NSAIDs). Symptoms include burning stomach pain, bloating, and nausea."
    },
    "celiac disease": {
        "steps": "Consult a healthcare provider for a blood test and a possible intestinal biopsy to confirm the diagnosis. Treatment involves adhering to a strict gluten-free diet to avoid triggers and reduce symptoms.",
        "content": "Celiac disease is an autoimmune disorder in which the ingestion of gluten leads to damage in the small intestine. Symptoms include diarrhea, weight loss, fatigue, and anemia. Managing the disease involves lifelong avoidance of gluten, a protein found in wheat, barley, and rye."
    },
    "lactose intolerance": {
        "steps": "Consult a doctor for a lactose tolerance test. Managing lactose intolerance typically involves avoiding dairy products or using lactase supplements to aid digestion.",
        "content": "Lactose intolerance occurs when the body cannot properly digest lactose, a sugar found in milk and dairy products. Symptoms include bloating, gas, diarrhea, and stomach cramps after consuming dairy. Many people can manage symptoms by avoiding lactose or using lactase enzyme products."
    },
    "herpes zoster (shingles)": {
        "steps": "Consult a healthcare provider for antiviral medications to shorten the duration of symptoms. Pain relievers or corticosteroids may be prescribed to manage pain and inflammation.",
        "content": "Shingles is caused by the reactivation of the varicella-zoster virus, which also causes chickenpox. Symptoms include a painful rash, itching, and blisters, often on one side of the body. Vaccination can prevent shingles, especially in older adults."
    },
    "rheumatoid arthritis": {
        "steps": "Consult a healthcare provider for a diagnosis and treatment plan. Treatment may include disease-modifying antirheumatic drugs (DMARDs) and biologics to slow the progression of the disease. Regular physical therapy and exercise can help manage symptoms.",
        "content": "Rheumatoid arthritis is an autoimmune disorder that causes chronic inflammation of the joints. Symptoms include joint pain, swelling, and stiffness, often affecting both sides of the body. Early diagnosis and treatment are essential to prevent joint damage and improve quality of life."
    },
    "psoriasis": {
        "steps": "Visit a dermatologist for an accurate diagnosis and treatment, which may include topical treatments, light therapy, or systemic medications. Moisturizing the skin and avoiding triggers like stress can help manage symptoms.",
        "content": "Psoriasis is a chronic skin condition where skin cells multiply rapidly, leading to thick, red, scaly patches, often on the elbows, knees, and scalp. The exact cause is unknown, but it is believed to be linked to the immune system. There is no cure, but treatments can manage symptoms."
    },
    "meningitis": {
        "steps": "Seek emergency medical attention if you experience symptoms like severe headache, stiff neck, fever, or confusion. Diagnosis involves a spinal tap to test for infection. Depending on the cause, treatment may include antibiotics or antiviral drugs.",
        "content": "Meningitis is the inflammation of the membranes surrounding the brain and spinal cord. It can be caused by bacterial, viral, or fungal infections. Symptoms include sudden fever, headache, stiff neck, and sensitivity to light. Bacterial meningitis is a medical emergency, while viral forms may resolve on their own."
    },
    "hepatitis C": {
        "steps": "Consult a healthcare provider for a blood test to confirm hepatitis C infection. Treatment involves antiviral medications that can cure the infection in most cases. Avoid alcohol and get vaccinated against hepatitis A and B.",
        "content": "Hepatitis C is a viral infection that causes liver inflammation, potentially leading to serious liver damage. Many people with hepatitis C do not have symptoms until the disease is advanced. The virus spreads through contaminated blood, often through shared needles or improper tattooing practices."
    },
    "chlamydia": {
        "steps": "Consult a doctor for a urine test or swab to confirm diagnosis. Treatment involves a course of antibiotics, and it’s important to avoid sexual activity until treatment is completed. Inform all recent sexual partners so they can get tested and treated.",
        "content": "Chlamydia is a sexually transmitted infection caused by the bacterium Chlamydia trachomatis. It often presents no symptoms but can lead to serious reproductive health issues if untreated. Regular screening and practicing safe sex are important preventive measures."
    },
    "gallstones": {
        "steps": "Consult a healthcare provider for imaging tests, such as an ultrasound, to diagnose gallstones. If gallstones are causing symptoms, surgical removal of the gallbladder may be necessary. Pain management and dietary changes may also help.",
        "content": "Gallstones are hardened deposits of digestive fluid that can form in the gallbladder. They can block the bile ducts, leading to pain, nausea, and indigestion. Risk factors include obesity, a high-fat diet, and certain medical conditions. Surgery is often the treatment for symptomatic gallstones."
    },
    "thyroid disorders (hyperthyroidism/hypothyroidism)": {
        "steps": "Consult a healthcare provider for blood tests to check thyroid hormone levels. Treatment for hyperthyroidism may include medications, radioactive iodine, or surgery. Hypothyroidism is usually managed with daily thyroid hormone replacement therapy.",
        "content": "Thyroid disorders occur when the thyroid gland produces too much or too little thyroid hormone, affecting metabolism. Hyperthyroidism causes symptoms like weight loss, rapid heartbeat, and anxiety, while hypothyroidism leads to fatigue, weight gain, and depression. Proper treatment can help regulate thyroid function."
    },
    "schistosomiasis (bilharzia)": {
        "steps": "Visit a healthcare provider for a stool or urine test to detect the presence of the parasites. Treatment with praziquantel is effective and widely available. Avoid contact with contaminated water to prevent reinfection.",
        "content": "Schistosomiasis is caused by parasitic worms found in freshwater in tropical and subtropical regions, including Uganda. Symptoms include blood in urine, abdominal pain, and diarrhea. Preventive measures include avoiding swimming or wading in potentially contaminated water."
    },
    "tuberculosis (TB)": {
        "steps": "Consult a healthcare provider for a TB skin test or chest X-ray. If diagnosed, treatment usually involves a long course of antibiotics. It's important to complete the full treatment to avoid drug-resistant TB.",
        "content": "Tuberculosis is a bacterial infection that primarily affects the lungs. Symptoms include a persistent cough, weight loss, fever, and night sweats. It spreads through the air when an infected person coughs or sneezes. TB is preventable and treatable with timely medical intervention."
    },
    "yellow fever": {
        "steps": "Seek medical attention immediately if you suspect yellow fever. Rest, fluids, and supportive care are the primary treatments. Vaccination is the most effective preventive measure and is recommended for travelers and residents of endemic areas.",
        "content": "Yellow fever is a viral disease transmitted by mosquitoes. Symptoms include fever, chills, jaundice (yellowing of the skin), and muscle pain. Vaccination is highly effective in preventing yellow fever and is required for entry into certain countries."
    },
    "trachoma": {
        "steps": "Consult an eye specialist for a proper diagnosis and treatment, which may include antibiotics or surgery in advanced cases. Practice good hygiene and ensure access to clean water to prevent transmission.",
        "content": "Trachoma is a bacterial infection that affects the eyes and can lead to blindness if untreated. It is common in areas with poor sanitation and limited access to clean water. Symptoms include eye pain, swelling, and discharge. Prevention includes improved hygiene and access to clean water."
    },
    "onchocerciasis (river blindness)": {
        "steps": "Visit a healthcare provider for a skin biopsy or blood test to confirm diagnosis. Treatment includes ivermectin, which helps kill the parasites and reduce symptoms.",
        "content": "Onchocerciasis is a parasitic disease caused by the filarial worm transmitted through the bite of infected blackflies. It is prevalent in rural areas of Uganda. Symptoms include intense itching, skin nodules, and vision loss. Mass drug administration programs using ivermectin have helped control the disease."
    },
    "brucellosis": {
        "steps": "Consult a doctor for blood tests to confirm the infection. Antibiotics are typically prescribed for treatment. Avoid consuming unpasteurized dairy products to reduce the risk of infection.",
        "content": "Brucellosis is a bacterial infection transmitted from animals to humans, usually through contaminated dairy products or direct contact with infected animals. Symptoms include fever, joint pain, and fatigue. Prevention includes avoiding unpasteurized dairy and using protective measures when handling livestock."
    },
    "leishmaniasis": {
        "steps": "Seek medical attention for a skin biopsy or blood test. Treatment usually involves antimonial drugs, which are provided by healthcare professionals.",
        "content": "Leishmaniasis is a parasitic disease transmitted by the bite of infected sandflies. There are two main forms: cutaneous (affecting the skin) and visceral (affecting internal organs). Symptoms include skin sores, fever, and weight loss. Preventive measures include using insect repellent and sleeping under treated nets."
    },
    "buruli ulcer": {
        "steps": "Consult a healthcare provider for a diagnosis through a skin biopsy. Treatment may involve antibiotics, surgery, and wound care to manage the condition.",
        "content": "Buruli ulcer is a bacterial infection that causes large, ulcerative skin lesions. It primarily affects people in rural areas near water bodies. The cause is Mycobacterium ulcerans, and without proper treatment, it can cause permanent disability or disfigurement."
    },
    "hepatitis B": {
        "steps": "Consult a doctor for a blood test to confirm infection. Treatment may include antiviral medications, and vaccination is the most effective prevention method.",
        "content": "Hepatitis B is a viral infection that affects the liver and is highly endemic in Uganda. It spreads through contact with infectious body fluids, such as blood and semen. Symptoms include jaundice, fatigue, and abdominal pain. Vaccination is essential for preventing hepatitis B infection."
    },
    "kwashiorkor": {
        "steps": "Consult a healthcare provider for proper diagnosis and nutritional intervention. Treatment involves reintroducing protein-rich foods and managing complications such as infections.",
        "content": "Kwashiorkor is a form of severe malnutrition caused by protein deficiency. It is common in children in developing countries, including Uganda. Symptoms include swelling, irritability, an enlarged liver, and thinning hair. Proper nutrition and early intervention are critical to recovery."
    },
    "leprosy": {
        "steps": "Visit a healthcare provider for a skin biopsy or other diagnostic tests. Treatment involves a combination of antibiotics for an extended period. Early detection and treatment can prevent long-term complications.",
        "content": "Leprosy is a chronic bacterial infection that affects the skin, nerves, and mucous membranes. It can cause severe disfigurement and disability if left untreated. Symptoms include skin lesions, numbness, and muscle weakness. Leprosy is curable with timely and proper treatment."
    },
    "hydrocele": {
        "steps": "Consult a healthcare provider for an ultrasound to confirm the diagnosis. Treatment may involve surgery to remove the fluid or drainage if necessary.",
        "content": "A hydrocele is a swelling in the scrotum caused by fluid accumulation around the testicles. It is commonly associated with infections such as lymphatic filariasis in endemic areas like Uganda. It usually causes discomfort and, in severe cases, requires surgical intervention."
    },
    "goiter": {
        "steps": "Consult a doctor for a physical exam and blood tests to check thyroid function. Treatment may involve iodine supplementation or, in some cases, surgery.",
        "content": "A goiter is the abnormal enlargement of the thyroid gland. In Uganda, it is often related to iodine deficiency. Symptoms include visible swelling at the base of the neck, difficulty swallowing, and breathing problems. Iodine supplementation can prevent the development of goiters."
    },
    "pelvic inflammatory disease (PID)": {
        "steps": "Consult a healthcare provider for a pelvic exam and possibly an ultrasound. Treatment usually involves a course of antibiotics, and sexual partners may also need to be treated.",
        "content": "Pelvic inflammatory disease is an infection of the female reproductive organs, often caused by sexually transmitted bacteria. Symptoms include pelvic pain, fever, and abnormal vaginal discharge. Early treatment is important to prevent complications such as infertility."
    },
    "anemia (iron deficiency)": {
        "steps": "Consult a healthcare provider for a blood test to confirm anemia. Treatment may involve iron supplements and dietary changes to increase iron intake.",
        "content": "Anemia occurs when the body lacks enough red blood cells to carry oxygen to tissues. In Uganda, iron deficiency is a common cause, especially among children and pregnant women. Symptoms include fatigue, pale skin, and shortness of breath. Eating iron-rich foods, such as spinach and meat, can help prevent it."
    },
    "pneumonia": {
        "steps": "Seek immediate medical attention for diagnosis via chest X-ray and blood tests. Treatment may include antibiotics, antivirals, or supportive care, depending on the cause.",
        "content": "Pneumonia is an infection that inflames the air sacs in one or both lungs, which may fill with fluid. It is a leading cause of death in children in Uganda. Symptoms include chest pain, cough, fever, and difficulty breathing. Vaccines can help prevent some types of pneumonia."
    },
    "yaws": {
        "steps": "Consult a healthcare provider for a diagnosis through a skin biopsy or blood test. Treatment usually involves a single dose of antibiotics like penicillin.",
        "content": "Yaws is a chronic bacterial infection affecting the skin, bones, and joints. It is common in warm, tropical regions and spreads through direct contact with the fluid from a yaws sore. Early treatment can prevent severe complications, including disfigurement."
    },
    "measles": {
        "steps": "Seek medical attention for a measles diagnosis through a blood test. Rest, hydration, and supportive care can help alleviate symptoms. Vaccination is key to preventing measles.",
        "content": "Measles is a highly contagious viral disease that causes fever, cough, runny nose, and a rash. It spreads through respiratory droplets. Vaccination is the best way to prevent measles outbreaks, which remain a concern in Uganda."
    },
    "cholera": {
        "steps": "Visit a healthcare provider immediately if symptoms appear. Rehydration is critical, and antibiotics may be prescribed. Ensure access to clean drinking water and proper sanitation.",
        "content": "Cholera is an acute diarrheal illness caused by the Vibrio cholerae bacteria. It is usually contracted from contaminated water or food. Symptoms include watery diarrhea, vomiting, and dehydration. Preventive measures include safe water practices and vaccination."
    },
    "meningitis": {
        "steps": "Seek immediate medical attention for a lumbar puncture or blood test to diagnose meningitis. Treatment includes antibiotics or antivirals, depending on the cause. Vaccination is a preventive option.",
        "content": "Meningitis is an inflammation of the membranes surrounding the brain and spinal cord, commonly caused by bacterial or viral infections. Symptoms include sudden fever, headache, and neck stiffness. Meningitis outbreaks are common in parts of sub-Saharan Africa, including Uganda."
    },
    "whooping cough (pertussis)": {
        "steps": "Visit a doctor for diagnostic tests such as a throat swab or blood test. Treatment may include antibiotics and supportive care. Vaccination is effective for prevention.",
        "content": "Whooping cough is a bacterial infection that causes severe coughing fits, making it hard to breathe. It is highly contagious and can be especially dangerous for infants. Vaccination is the most effective method for prevention."
    },
    "rheumatic heart disease": {
        "steps": "Consult a healthcare provider for an echocardiogram and blood tests to diagnose and monitor the condition. Treatment may include long-term antibiotics and medication to manage symptoms.",
        "content": "Rheumatic heart disease results from untreated strep throat or scarlet fever leading to inflammation of the heart valves. Symptoms include chest pain, shortness of breath, and heart murmurs. Early treatment of strep throat with antibiotics can prevent it."
    },
    "hookworm infection": {
        "steps": "Consult a healthcare provider for a stool test to confirm the presence of hookworms. Treatment typically involves antiparasitic medications. Wearing shoes and improving sanitation can help prevent infection.",
        "content": "Hookworm infection is caused by parasitic worms that live in the small intestine. It is transmitted through contact with contaminated soil. Symptoms include abdominal pain, diarrhea, and anemia. Improved hygiene and wearing protective footwear can help reduce the risk."
    },
    "intestinal worms": {
        "steps": "Consult a healthcare provider for a stool test to diagnose the specific type of worm. Treatment typically involves deworming medications.",
        "content": "Intestinal worm infections, including roundworms and tapeworms, are common in regions with poor sanitation. Symptoms may include abdominal pain, diarrhea, and malnutrition. Preventive measures include regular deworming programs and improved hygiene practices."
    },
    "gastroenteritis": {
        "steps": "Consult a healthcare provider for a stool test to identify the cause. Stay hydrated and use oral rehydration salts if necessary. Antibiotics may be prescribed if the infection is bacterial.",
        "content": "Gastroenteritis, commonly known as stomach flu, is an inflammation of the stomach and intestines caused by viruses, bacteria, or parasites. Symptoms include diarrhea, vomiting, and abdominal pain. Prevention includes safe food handling and access to clean water."
    },
    "leptospirosis": {
        "steps": "Seek medical attention for a blood test to diagnose leptospirosis. Treatment usually involves antibiotics. Avoid contact with contaminated water to reduce the risk of infection.",
        "content": "Leptospirosis is a bacterial infection transmitted through water contaminated by the urine of infected animals. It is common in rural areas with poor sanitation. Symptoms include fever, muscle pain, and headaches. Prevention includes avoiding exposure to contaminated water."
    },
    "tetanus": {
        "steps": "Seek immediate medical attention if you suspect tetanus, particularly after an injury. Treatment includes wound care, antibiotics, and tetanus immune globulin. Vaccination is the best prevention.",
        "content": "Tetanus is caused by bacteria found in soil, dust, and manure, which can enter the body through cuts or wounds. Symptoms include muscle stiffness, spasms, and difficulty swallowing. Vaccination is critical for prevention, especially for those in rural areas."
    },
    "conjunctivitis (pink eye)": {
        "steps": "Consult a healthcare provider for proper diagnosis and treatment, which may include antibiotics or antiviral eye drops depending on the cause. Practice good hygiene to prevent spreading the infection.",
        "content": "Conjunctivitis, or pink eye, is an inflammation of the conjunctiva, commonly caused by bacteria, viruses, or allergens. Symptoms include redness, itching, and discharge from the eyes. Prevention includes avoiding touching the eyes and maintaining good hand hygiene."
    },
    "scabies": {
        "steps": "Consult a healthcare provider for diagnosis and treatment with prescribed topical creams or oral medications. Wash bedding and clothing to prevent reinfection.",
        "content": "Scabies is a highly contagious skin infestation caused by tiny mites that burrow into the skin. It causes intense itching and a rash. It spreads through close physical contact, making prompt treatment and proper hygiene crucial for prevention."
    },
    "filariasis": {
        "steps": "Consult a healthcare provider for a blood test to confirm the presence of filarial worms. Treatment includes antiparasitic medications and managing symptoms like swelling.",
        "content": "Filariasis is a parasitic disease spread by mosquitoes and can lead to elephantiasis, causing severe swelling of the limbs. It is prevalent in tropical areas, including Uganda. Preventive measures include mosquito control and mass drug administration in endemic areas."
    },
    "anthrax": {
        "steps": "Seek immediate medical attention for diagnosis via blood tests or skin biopsy. Treatment involves antibiotics. Avoid contact with potentially infected livestock and consume only properly cooked meat.",
        "content": "Anthrax is a bacterial infection that can be contracted through contact with infected animals or consumption of contaminated meat. It can cause skin lesions, respiratory issues, or gastrointestinal symptoms depending on the form of infection. Vaccination is available for people at high risk."
    },
    "malnutrition": {
        "steps": "Consult a healthcare provider for nutritional assessment and intervention. Treatment may involve dietary changes, supplements, and managing any underlying conditions.",
        "content": "Malnutrition occurs when the body does not get enough nutrients, leading to stunted growth, weakened immune systems, and increased susceptibility to infections. It is common in areas of poverty, particularly among children in Uganda. Prevention includes ensuring access to a balanced diet."
    },
    "urinary tract infection (UTI)": {
        "steps": "Consult a healthcare provider for a urine test to diagnose the infection. Treatment typically involves antibiotics, and drinking plenty of fluids can help flush out the bacteria.",
        "content": "UTIs are bacterial infections affecting the urinary system, including the bladder and kidneys. Symptoms include painful urination, frequent urges to urinate, and lower abdominal pain. Maintaining good personal hygiene and staying hydrated can help prevent UTIs."
    },
    "brucellosis": {
        "steps": "Consult a healthcare provider for blood tests to diagnose brucellosis. Antibiotics are required for treatment, and recovery may take several weeks.",
        "content": "Brucellosis is a bacterial infection transmitted from animals to humans, often through unpasteurized dairy products or direct contact with infected animals. Symptoms include fever, joint pain, and fatigue. Preventive measures include proper food handling and vaccination of livestock."
    },
    "leprosy": {
        "steps": "Seek medical care for a skin biopsy and diagnostic tests. Early treatment with multidrug therapy can prevent complications.",
        "content": "Leprosy is a chronic bacterial infection affecting the skin, nerves, and eyes. It causes skin lesions, numbness, and muscle weakness. Though rare, it still occurs in some parts of Uganda. Early treatment prevents long-term disabilities."
    },
    "onchocerciasis (river blindness)": {
        "steps": "Visit a healthcare provider for diagnosis through a skin snip test. Treatment involves antiparasitic medication, typically ivermectin, taken annually to reduce symptoms.",
        "content": "Onchocerciasis is caused by the parasitic worm Onchocerca volvulus, transmitted by blackfly bites near rivers. It leads to skin rashes, eye lesions, and in severe cases, blindness. Prevention focuses on controlling the blackfly population and mass drug administration."
    },
    "schistosomiasis (bilharzia)": {
        "steps": "Consult a doctor for a stool or urine test to confirm infection. Treatment with praziquantel is effective in eliminating the parasites.",
        "content": "Schistosomiasis is a parasitic disease caused by flukes living in freshwater snails. Infection occurs through contact with contaminated water. Symptoms include abdominal pain, diarrhea, and blood in urine or stool. Prevention includes avoiding freshwater sources in endemic areas."
    },
    "yellow fever": {
        "steps": "Seek medical attention for blood tests to confirm yellow fever. Rest and supportive care are critical, but there is no specific treatment. Vaccination is the best preventive measure.",
        "content": "Yellow fever is a viral disease transmitted by mosquitoes, leading to fever, jaundice, and in severe cases, organ failure. Vaccination is required in Uganda, especially for travelers and residents in high-risk areas."
    },
    "hepatitis B": {
        "steps": "Consult a healthcare provider for blood tests to diagnose hepatitis B. Antiviral medications and monitoring are necessary for chronic cases. Vaccination prevents infection.",
        "content": "Hepatitis B is a viral infection that affects the liver, leading to chronic liver disease or liver cancer. It spreads through contact with infected blood or bodily fluids. Vaccination is the most effective preventive measure, particularly in endemic regions like Uganda."
    },
    "trachoma": {
        "steps": "Consult an eye specialist for proper diagnosis. Treatment includes antibiotics or, in severe cases, surgery to correct the eyelashes' inward growth.",
        "content": "Trachoma is an infectious eye disease caused by the bacterium Chlamydia trachomatis. Repeated infections can lead to scarring of the eyelids, which causes blindness if untreated. It spreads through direct contact and contaminated objects. Improved sanitation and antibiotics can prevent the disease."
    },
    "african sleeping sickness (trypanosomiasis)": {
        "steps": "Visit a healthcare provider for a blood test or lymph node biopsy to confirm the presence of trypanosomes. Treatment requires specialized medications, often administered in hospitals.",
        "content": "African sleeping sickness is caused by parasites transmitted through the bite of tsetse flies. Symptoms include fever, headaches, joint pain, and later, neurological issues such as confusion and sleep disturbances. Prevention includes avoiding tsetse fly bites in affected areas."
    },
    "hepatitis E": {
        "steps": "Seek medical care for blood tests to confirm the infection. Supportive care, including rest and hydration, is the primary treatment. Improved sanitation prevents transmission.",
        "content": "Hepatitis E is a viral liver disease spread through contaminated water, particularly in regions with poor sanitation. Symptoms include jaundice, fatigue, and nausea. Ensuring access to safe water and practicing good hygiene helps prevent outbreaks."
    },
    "guinea worm disease (dracunculiasis)": {
        "steps": "If suspected, consult a healthcare provider. Treatment includes slowly removing the worm and managing the wound. Prevention involves filtering drinking water to remove the larvae.",
        "content": "Guinea worm disease is caused by the parasitic Dracunculus medinensis, transmitted through contaminated water. It causes painful blisters, from which the worm emerges. Prevention focuses on providing safe drinking water and educating communities on water filtration techniques."
    },
    "kwashiorkor": {
        "steps": "Consult a healthcare provider for nutritional assessment and treatment. Nutritional rehabilitation, including protein supplements, is essential for recovery.",
        "content": "Kwashiorkor is a severe form of malnutrition caused by a lack of protein. It is common among children in poverty-stricken areas. Symptoms include swelling (edema), irritability, and a distended abdomen. Early intervention and proper nutrition can prevent complications."
    },
    "pellagra": {
        "steps": "Seek medical advice for diagnosis and treatment with niacin (Vitamin B3) supplements. Improving the diet is critical to preventing recurrence.",
        "content": "Pellagra is caused by a deficiency of niacin (Vitamin B3), leading to dermatitis, diarrhea, and dementia. It is linked to poor nutrition and is preventable by ensuring a balanced diet rich in niacin-containing foods, such as meat, fish, and grains."
    },
    "buruli ulcer": {
        "steps": "Seek medical attention for diagnosis and treatment with antibiotics. In severe cases, surgery may be required to remove damaged tissue.",
        "content": "Buruli ulcer is a chronic, necrotizing skin infection caused by the bacterium Mycobacterium ulcerans. It begins as a painless swelling and can lead to severe skin and bone damage if untreated. Prevention includes early detection and treatment."
    },
    "anthrax": {
        "steps": "Seek immediate medical attention for diagnosis and treatment, usually with antibiotics. Avoid handling potentially infected livestock and ensure proper food safety measures.",
        "content": "Anthrax is a serious bacterial infection that can be contracted through contact with infected animals or consumption of contaminated meat. It can cause skin sores, lung infections, or gastrointestinal issues, depending on the route of infection. Vaccination is available for high-risk groups."
    },
    "tuberculosis (TB)": {
        "steps": "Consult a healthcare provider for a chest X-ray and sputum test. Treatment involves a long course of antibiotics. Vaccination with the BCG vaccine is a preventive measure.",
        "content": "Tuberculosis is a bacterial infection that primarily affects the lungs but can spread to other parts of the body. Symptoms include persistent cough, weight loss, and night sweats. TB is a major public health issue in Uganda, and preventive measures include vaccination and prompt treatment."
    },
    "amoebiasis": {
        "steps": "Consult a healthcare provider for stool tests to diagnose the infection. Treatment includes antiparasitic medications. Prevent infection by practicing good hygiene and drinking safe water.",
        "content": "Amoebiasis is caused by the parasite Entamoeba histolytica, commonly transmitted through contaminated water and food. It leads to diarrhea, abdominal pain, and in severe cases, liver abscesses. Prevention focuses on improving sanitation and ensuring safe water supplies."
    },
    "cryptosporidiosis": {
        "steps": "Seek medical care for stool tests to confirm infection. Hydration and supportive care are crucial, and in some cases, antiparasitic treatment may be recommended.",
        "content": "Cryptosporidiosis is a parasitic infection caused by Cryptosporidium, typically spread through contaminated water. Symptoms include diarrhea, nausea, and stomach cramps. It is particularly dangerous for individuals with weakened immune systems. Ensuring access to clean water and improving sanitation are key preventive measures."
    }
};

// Function to calculate condition scores based on user symptoms
function calculateConditionScores(userSymptoms) {
    let conditionScores = {};

    userSymptoms.forEach(symptom => {
        if (symptomWeights[symptom]) {
            Object.keys(symptomWeights[symptom]).forEach(condition => {
                if (!conditionScores[condition]) {
                    conditionScores[condition] = 0;
                }
                conditionScores[condition] += symptomWeights[symptom][condition];
            });
        }
    });

    // Sort conditions by score in descending order and limit to top 5
    let sortedConditions = Object.entries(conditionScores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5) // Get only the top 5 conditions
        .map(entry => ({ condition: entry[0], score: entry[1] }));

    return sortedConditions;
}

// Function to check symptoms and display results
function checkSymptoms() {
    // Get user symptoms
    let symptoms = [
        document.getElementById('symptom1').value.trim().toLowerCase(),
        document.getElementById('symptom2').value.trim().toLowerCase(),
        document.getElementById('symptom3').value.trim().toLowerCase()
    ];

    // Validate input
    if (symptoms.filter(symptom => symptom).length < 2) {
        document.getElementById('symptomError').style.display = 'block';
        return false;
    } else {
        document.getElementById('symptomError').style.display = 'none';
    }

    // Calculate and display results
    let results = calculateConditionScores(symptoms);
    let diagnosisList = document.getElementById('diagnosisList');
    let nextSteps = document.getElementById('nextSteps');
    let educationalContent = document.getElementById('educationalContent');
    
    diagnosisList.innerHTML = '';
    nextSteps.innerHTML = '';
    educationalContent.innerHTML = '';

    if (results.length === 0) {
        diagnosisList.innerHTML = '<li>No matching conditions found.</li>';
    } else {
        results.forEach(result => {
            let listItem = document.createElement('li');
            listItem.textContent = `${result.condition}: Score ${result.score}`;
            diagnosisList.appendChild(listItem);

            // Provide guidance and educational content
            if (guidance[result.condition]) {
                let steps = document.createElement('p');
                steps.innerHTML = `<strong>Next Steps for ${result.condition}:</strong> ${guidance[result.condition].steps}`;
                nextSteps.appendChild(steps);

                let content = document.createElement('p');
                content.innerHTML = `<strong>Educational Content:</strong> ${guidance[result.condition].content}`;
                educationalContent.appendChild(content);
            }
        });
    }

    document.getElementById('results').style.display = 'block';
    return false; // Prevent form submission
}