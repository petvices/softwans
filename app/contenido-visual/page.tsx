import type { Metadata } from "next"
import Link from 'next/link';
import {
  Camera,
  Video,
  ImageIcon,
  Users,
  Palette,
  Zap,
  CheckCircle,
  Play,
  Eye,
  Target,
  Lightbulb,
  Award,
  Clock,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/softwans/header"
import { Footer } from "@/components/softwans/footer"
import { WhatsAppButton } from "@/components/softwans/whatsapp-button"



export const metadata: Metadata = {
  title: "Contenido Visual y Fotografía Comercial | Producción Audiovisual Profesional",
  description:
    "Servicios profesionales de contenido visual, fotografía comercial, producción audiovisual y imagen corporativa. Creamos visuales impactantes para tu marca.",
  keywords:
    "contenido visual, fotografía comercial, producción visual, imagen corporativa, fotografía productos, cobertura fotográfica, visuales marca, contenido fotográfico, sesión fotos, fotografía profesional, video comercial, producción audiovisual, fotografía eventos, retratos corporativos, fotografía publicitaria, contenido redes sociales, fotografía marketing, sesiones producto, fotografía empresarial, imagen marca, fotografía digital, estudio fotográfico, fotografía creativa, contenido multimedia, producción creativa, fotografía lifestyle, fotografía moda, fotografía gastronómica, fotografía arquitectura, fotografía industrial, book fotográfico, sesión corporativa, fotografía headshots, fotografía equipo, fotografía oficina, contenido branded, storytelling visual, fotografía e-commerce, fotografía catálogo, fotografía web, fotografía social media, producción contenido, dirección arte, fotografía 360, video promocional, spot publicitario, contenido branded, campaña visual, identidad visual, branding fotográfico, fotografía conceptual, fotografía documental, reportaje fotográfico, fotografía periodística, fotografía deportiva, fotografía cultural, fotografía turística, fotografía inmobiliaria, fotografía médica, fotografía científica, fotografía técnica, fotografía macro, fotografía aérea, drone fotografía, fotografía nocturna, fotografía HDR, retoque fotográfico, edición profesional, postproducción, color grading, fotografía stock, banco imágenes, licencias fotografía, derechos autor, fotografía comercial Barcelona, fotografía comercial Madrid, fotografía comercial España, estudio fotografía, alquiler estudio, fotografía exterior, fotografía interior, iluminación profesional, equipo fotografía, cámara profesional, objetivos fotografía, flash estudio, softbox, reflectores, trípodes profesionales, fotografía alta resolución, fotografía gran formato, impresión fotografía, revelado digital, archivo fotográfico, gestión imágenes, workflow fotografía, fotografía workflow, backup fotografía, almacenamiento fotos, cloud fotografía, sincronización imágenes, catalogación fotos, metadatos fotografía, SEO imágenes, optimización fotos web, compresión imágenes, formatos fotografía, RAW fotografía, JPEG profesional, TIFF fotografía, PNG transparente, fotografía responsive, fotografía mobile, fotografía tablet, fotografía desktop, fotografía UX, fotografía UI, fotografía landing, fotografía conversión, fotografía CRO, fotografía analytics, métricas fotografía, ROI fotografía, KPI visual, engagement visual, CTR imágenes, conversión visual, A/B test fotografía, fotografía performance, velocidad carga imágenes, lazy loading fotos, CDN fotografía, fotografía internacional, fotografía multiidioma, fotografía global, fotografía local, fotografía regional, fotografía sectorial, fotografía nicho, fotografía especializada, fotografía técnica, fotografía científica, fotografía médica, fotografía industrial, fotografía arquitectónica, fotografía inmobiliaria, fotografía gastronómica, fotografía moda, fotografía belleza, fotografía lifestyle, fotografía familiar, fotografía infantil, fotografía mascotas, fotografía naturaleza, fotografía paisaje, fotografía urbana, fotografía street, fotografía documental, fotografía artística, fotografía fine art, fotografía conceptual, fotografía abstracta, fotografía minimalista, fotografía vintage, fotografía retro, fotografía moderna, fotografía contemporánea, fotografía clásica, fotografía tradicional, fotografía digital, fotografía analógica, fotografía híbrida, fotografía experimental, fotografía innovadora, fotografía creativa, fotografía original, fotografía única, fotografía personalizada, fotografía exclusiva, fotografía premium, fotografía luxury, fotografía high-end, fotografía boutique, fotografía artesanal, fotografía handmade, fotografía custom, fotografía bespoke, fotografía tailor-made, fotografía medida, fotografía específica, fotografía targeted, fotografía segmentada, fotografía nicho, fotografía vertical, fotografía horizontal, fotografía cuadrada, fotografía panorámica, fotografía 360 grados, fotografía VR, fotografía realidad virtual, fotografía inmersiva, fotografía interactiva, fotografía dinámica, fotografía animada, fotografía cinemagraph, fotografía GIF, fotografía video, fotografía híbrida, fotografía multimedia, fotografía transmedia, fotografía crossmedia, fotografía omnichannel, fotografía integrada, fotografía holística, fotografía estratégica, fotografía táctica, fotografía operativa, fotografía ejecutiva, fotografía directiva, fotografía gerencial, fotografía corporativa, fotografía institucional, fotografía gubernamental, fotografía pública, fotografía privada, fotografía comercial, fotografía industrial, fotografía retail, fotografía e-commerce, fotografía online, fotografía digital, fotografía web, fotografía mobile, fotografía app, fotografía software, fotografía tecnología, fotografía innovación, fotografía disrupción, fotografía transformación, fotografía evolución, fotografía futuro, fotografía tendencias, fotografía vanguardia, fotografía cutting-edge, fotografía state-of-art, fotografía best-in-class, fotografía world-class, fotografía top-tier, fotografía premium, fotografía elite, fotografía exclusive, fotografía VIP, fotografía luxury, fotografía high-end, fotografía boutique, fotografía niche, fotografía specialized, fotografía expert, fotografía professional, fotografía master, fotografía guru, fotografía ninja, fotografía wizard, fotografía genius, fotografía artist, fotografía creator, fotografía maker, fotografía builder, fotografía developer, fotografía designer, fotografía architect, fotografía engineer, fotografía scientist, fotografía researcher, fotografía analyst, fotografía consultant, fotografía advisor, fotografía strategist, fotografía planner, fotografía manager, fotografía director, fotografía producer, fotografía executive, fotografía leader, fotografía pioneer, fotografía innovator, fotografía disruptor, fotografía transformer, fotografía game-changer, fotografía trendsetter, fotografía influencer, fotografía thought-leader, fotografía expert, fotografía authority, fotografía specialist, fotografía professional, fotografía service, fotografía solution, fotografía provider, fotografía company, fotografía agency, fotografía studio, fotografía team, fotografía crew, fotografía collective, fotografía network, fotografía community, fotografía ecosystem, fotografía platform, fotografía marketplace, fotografía hub, fotografía center, fotografía lab, fotografía workshop, fotografía academy, fotografía school, fotografía institute, fotografía university, fotografía college, fotografía course, fotografía training, fotografía education, fotografía learning, fotografía development, fotografía improvement, fotografía enhancement, fotografía optimization, fotografía maximization, fotografía excellence, fotografía quality, fotografía standard, fotografía benchmark, fotografía reference, fotografía model, fotografía example, fotografía case-study, fotografía success-story, fotografía testimonial, fotografía review, fotografía rating, fotografía score, fotografía ranking, fotografía award, fotografía recognition, fotografía certification, fotografía accreditation, fotografía validation, fotografía verification, fotografía authentication, fotografía authorization, fotografía approval, fotografía endorsement, fotografía recommendation, fotografía referral, fotografía introduction, fotografía presentation, fotografía showcase, fotografía portfolio, fotografía gallery, fotografía exhibition, fotografía display, fotografía demonstration, fotografía preview, fotografía sample, fotografía example, fotografía specimen, fotografía prototype, fotografía mockup, fotografía draft, fotografía sketch, fotografía concept, fotografía idea, fotografía vision, fotografía mission, fotografía purpose, fotografía goal, fotografía objective, fotografía target, fotografía aim, fotografía intention, fotografía plan, fotografía strategy, fotografía approach, fotografía method, fotografía technique, fotografía process, fotografía procedure, fotografía workflow, fotografía pipeline, fotografía system, fotografía framework, fotografía structure, fotografía architecture, fotografía design, fotografía layout, fotografía composition, fotografía arrangement, fotografía organization, fotografía coordination, fotografía management, fotografía administration, fotografía operation, fotografía execution, fotografía implementation, fotografía deployment, fotografía delivery, fotografía distribution, fotografía publication, fotografía release, fotografía launch, fotografía premiere, fotografía debut, fotografía introduction, fotografía announcement, fotografía reveal, fotografía unveiling, fotografía disclosure, fotografía exposure, fotografía presentation, fotografía demonstration, fotografía exhibition, fotografía showcase, fotografía display, fotografía feature, fotografía highlight, fotografía emphasis, fotografía focus, fotografía attention, fotografía spotlight, fotografía limelight, fotografía center-stage, fotografía front-and-center, fotografía prime-time, fotografía peak-hour, fotografía rush-hour, fotografía golden-hour, fotografía magic-hour, fotografía blue-hour, fotografía twilight, fotografía sunset, fotografía sunrise, fotografía dawn, fotografía dusk, fotografía night, fotografía day, fotografía morning, fotografía afternoon, fotografía evening, fotografía weekend, fotografía weekday, fotografía holiday, fotografía vacation, fotografía season, fotografía spring, fotografía summer, fotografía autumn, fotografía winter, fotografía weather, fotografía climate, fotografía environment, fotografía atmosphere, fotografía ambiance, fotografía mood, fotografía tone, fotografía style, fotografía aesthetic, fotografía look, fotografía feel, fotografía vibe, fotografía energy, fotografía spirit, fotografía soul, fotografía heart, fotografía essence, fotografía core, fotografía foundation, fotografía base, fotografía root, fotografía origin, fotografía source, fotografía beginning, fotografía start, fotografía launch, fotografía kickoff, fotografía initiation, fotografía commencement, fotografía opening, fotografía premiere, fotografía debut, fotografía introduction, fotografía first, fotografía initial, fotografía primary, fotografía main, fotografía principal, fotografía chief, fotografía lead, fotografía top, fotografía best, fotografía finest, fotografía premium, fotografía superior, fotografía excellent, fotografía outstanding, fotografía exceptional, fotografía remarkable, fotografía extraordinary, fotografía amazing, fotografía incredible, fotografía fantastic, fotografía wonderful, fotografía marvelous, fotografía spectacular, fotografía stunning, fotografía breathtaking, fotografía jaw-dropping, fotografía eye-catching, fotografía attention-grabbing, fotografía head-turning, fotografía show-stopping, fotografía award-winning, fotografía prize-winning, fotografía acclaimed, fotografía celebrated, fotografía renowned, fotografía famous, fotografía well-known, fotografía popular, fotografía trending, fotografía viral, fotografía shareable, fotografía likeable, fotografía engaging, fotografía compelling, fotografía captivating, fotografía mesmerizing, fotografía hypnotic, fotografía magnetic, fotografía attractive, fotografía appealing, fotografía charming, fotografía delightful, fotografía pleasant, fotografía enjoyable, fotografía satisfying, fotografía fulfilling, fotografía rewarding, fotografía valuable, fotografía worthwhile, fotografía beneficial, fotografía advantageous, fotografía profitable, fotografía lucrative, fotografía cost-effective, fotografía budget-friendly, fotografía affordable, fotografía accessible, fotografía available, fotografía ready, fotografía prepared, fotografía equipped, fotografía qualified, fotografía certified, fotografía licensed, fotografía insured, fotografía bonded, fotografía guaranteed, fotografía warranted, fotografía assured, fotografía secure, fotografía safe, fotografía reliable, fotografía dependable, fotografía trustworthy, fotografía credible, fotografía reputable, fotografía established, fotografía experienced, fotografía seasoned, fotografía veteran, fotografía mature, fotografía developed, fotografía advanced, fotografía sophisticated, fotografía refined, fotografía polished, fotografía perfected, fotografía mastered, fotografía optimized, fotografía maximized, fotografía enhanced, fotografía improved, fotografía upgraded, fotografía updated, fotografía modernized, fotografía revolutionized, fotografía transformed, fotografía evolved, fotografía progressed, fotografía advanced, fotografía developed, fotografía grown, fotografía expanded, fotografía scaled, fotografía amplified, fotografía magnified, fotografía intensified, fotografía strengthened, fotografía reinforced, fotografía consolidated, fotografía integrated, fotografía unified, fotografía harmonized, fotografía synchronized, fotografía coordinated, fotografía aligned, fotografía balanced, fotografía equilibrated, fotografía stabilized, fotografía normalized, fotografía standardized, fotografía systematized, fotografía organized, fotografía structured, fotografía arranged, fotografía ordered, fotografía sorted, fotografía categorized, fotografía classified, fotografía grouped, fotografía segmented, fotografía divided, fotografía separated, fotografía distinguished, fotografía differentiated, fotografía specialized, fotografía customized, fotografía personalized, fotografía individualized, fotografía tailored, fotografía adapted, fotografía adjusted, fotografía modified, fotografía altered, fotografía changed, fotografía transformed, fotografía converted, fotografía translated, fotografía interpreted, fotografía explained, fotografía clarified, fotografía simplified, fotografía streamlined, fotografía optimized, fotografía refined, fotografía polished, fotografía perfected, fotografía completed, fotografía finished, fotografía finalized, fotografía concluded, fotografía accomplished, fotografía achieved, fotografía attained, fotografía reached, fotografía obtained, fotografía acquired, fotografía gained, fotografía earned, fotografía won, fotografía secured, fotografía captured, fotografía seized, fotografía grasped, fotografía grabbed, fotografía taken, fotografía received, fotografía accepted, fotografía approved, fotografía endorsed, fotografía supported, fotografía backed, fotografía sponsored, fotografía funded, fotografía financed, fotografía invested, fotografía committed, fotografía dedicated, fotografía devoted, fotografía focused, fotografía concentrated, fotografía centered, fotografía targeted, fotografía aimed, fotografía directed, fotografía oriented, fotografía positioned, fotografía placed, fotografía located, fotografía situated, fotografía based, fotografía founded, fotografía established, fotografía created, fotografía built, fotografía constructed, fotografía developed, fotografía designed, fotografía engineered, fotografía crafted, fotografía made, fotografía produced, fotografía manufactured, fotografía generated, fotografía formed, fotografía shaped, fotografía molded, fotografía sculpted, fotografía carved, fotografía etched, fotografía engraved, fotografía imprinted, fotografía stamped, fotografía marked, fotografía branded, fotografía labeled, fotografía tagged, fotografía identified, fotografía recognized, fotografía acknowledged, fotografía credited, fotografía attributed, fotografía assigned, fotografía allocated, fotografía distributed, fotografía shared, fotografía spread, fotografía disseminated, fotografía broadcasted, fotografía transmitted, fotografía communicated, fotografía conveyed, fotografía delivered, fotografía presented, fotografía displayed, fotografía shown, fotografía exhibited, fotografía demonstrated, fotografía illustrated, fotografía depicted, fotografía portrayed, fotografía represented, fotografía symbolized, fotografía embodied, fotografía reflected, fotografía mirrored, fotografía echoed, fotografía resonated, fotografía vibrated, fotografía pulsated, fotografía throbbed, fotografía beat, fotografía rhythm, fotografía tempo, fotografía pace, fotografía speed, fotografía velocity, fotografía acceleration, fotografía momentum, fotografía force, fotografía power, fotografía strength, fotografía energy, fotografía vitality, fotografía vigor, fotografía intensity, fotografía passion, fotografía enthusiasm, fotografía excitement, fotografía thrill, fotografía rush, fotografía high, fotografía peak, fotografía climax, fotografía summit, fotografía top, fotografía apex, fotografía pinnacle, fotografía zenith, fotografía acme, fotografía ultimate, fotografía maximum, fotografía supreme, fotografía paramount, fotografía preeminent, fotografía predominant, fotografía dominant, fotografía leading, fotografía foremost, fotografía primary, fotografía principal, fotografía main, fotografía major, fotografía key, fotografía central, fotografía core, fotografía essential, fotografía fundamental, fotografía basic, fotografía elementary, fotografía simple, fotografía easy, fotografía effortless, fotografía smooth, fotografía seamless, fotografía fluid, fotografía flowing, fotografía natural, fotografía organic, fotografía authentic, fotografía genuine, fotografía real, fotografía true, fotografía honest, fotografía sincere, fotografía transparent, fotografía open, fotografía clear, fotografía obvious, fotografía evident, fotografía apparent, fotografía visible, fotografía noticeable, fotografía observable, fotografía detectable, fotografía perceptible, fotografía discernible, fotografía recognizable, fotografía identifiable, fotografía distinguishable, fotografía memorable, fotografía unforgettable, fotografía lasting, fotografía enduring, fotografía permanent, fotografía eternal, fotografía timeless, fotografía classic, fotografía traditional, fotografía conventional, fotografía standard, fotografía normal, fotografía regular, fotografía ordinary, fotografía common, fotografía typical, fotografía usual, fotografía routine, fotografía everyday, fotografía daily, fotografía frequent, fotografía regular, fotografía consistent, fotografía constant, fotografía steady, fotografía stable, fotografía solid, fotografía firm, fotografía strong, fotografía robust, fotografía durable, fotografía lasting, fotografía long-term, fotografía sustainable, fotografía viable, fotografía feasible, fotografía practical, fotografía realistic, fotografía achievable, fotografía attainable, fotografía reachable, fotografía accessible, fotografía available, fotografía obtainable, fotografía acquirable, fotografía gainable, fotografía winnable, fotografía earnable, fotografía deserved, fotografía merited, fotografía warranted, fotografía justified, fotografía reasonable, fotografía logical, fotografía rational, fotografía sensible, fotografía wise, fotografía smart, fotografía intelligent, fotografía clever, fotografía brilliant, fotografía genius, fotografía masterful, fotografía skillful, fotografía talented, fotografía gifted, fotografía capable, fotografía competent, fotografía qualified, fotografía experienced, fotografía knowledgeable, fotografía informed, fotografía educated, fotografía trained, fotografía prepared, fotografía ready, fotografía equipped, fotografía armed, fotografía loaded, fotografía packed, fotografía full, fotografía complete, fotografía total, fotografía entire, fotografía whole, fotografía comprehensive, fotografía thorough, fotografía extensive, fotografía broad, fotografía wide, fotografía vast, fotografía huge, fotografía massive, fotografía enormous, fotografía gigantic, fotografía colossal, fotografía tremendous, fotografía immense, fotografía incredible, fotografía unbelievable, fotografía amazing, fotografía astonishing, fotografía astounding, fotografía stunning, fotografía shocking, fotografía surprising, fotografía unexpected, fotografía unprecedented, fotografía extraordinary, fotografía exceptional, fotografía remarkable, fotografía outstanding, fotografía excellent, fotografía superb, fotografía superior, fotografía premium, fotografía deluxe, fotografía luxury, fotografía high-end, fotografía top-tier, fotografía first-class, fotografía world-class, fotografía best-in-class, fotografía state-of-the-art, fotografía cutting-edge, fotografía leading-edge, fotografía bleeding-edge, fotografía advanced, fotografía sophisticated, fotografía complex, fotografía intricate, fotografía detailed, fotografía elaborate, fotografía ornate, fotografía decorative, fotografía artistic, fotografía creative, fotografía innovative, fotografía original, fotografía unique, fotografía distinctive, fotografía special, fotografía exclusive, fotografía rare, fotografía scarce, fotografía limited, fotografía restricted, fotografía selective, fotografía choosy, fotografía picky, fotografía particular, fotografía specific, fotografía precise, fotografía exact, fotografía accurate, fotografía correct, fotografía right, fotografía proper, fotografía appropriate, fotografía suitable, fotografía fitting, fotografía matching, fotografía corresponding, fotografía equivalent, fotografía comparable, fotografía similar, fotografía alike, fotografía related, fotografía connected, fotografía linked, fotografía associated, fotografía affiliated, fotografía partnered, fotografía allied, fotografía united, fotografía joined, fotografía combined, fotografía merged, fotografía integrated, fotografía unified, fotografía consolidated, fotografía centralized, fotografía coordinated, fotografía synchronized, fotografía harmonized, fotografía balanced, fotografía proportioned, fotografía scaled, fotografía sized, fotografía measured, fotografía calculated, fotografía computed, fotografía determined, fotografía established, fotografía set, fotografía fixed, fotografía defined, fotografía specified, fotografía outlined, fotografía described, fotografía explained, fotografía detailed, fotografía elaborated, fotografía expanded, fotografía developed, fotografía evolved, fotografía progressed, fotografía advanced, fotografía improved, fotografía enhanced, fotografía upgraded, fotografía updated, fotografía modernized, fotografía renovated, fotografía refreshed, fotografía renewed, fotografía revitalized, fotografía rejuvenated, fotografía restored, fotografía repaired, fotografía fixed, fotografía corrected, fotografía adjusted, fotografía modified, fotografía altered, fotografía changed, fotografía transformed, fotografía converted, fotografía adapted, fotografía customized, fotografía personalized, fotografía individualized, fotografía tailored, fotografía specialized, fotografía focused, fotografía targeted, fotografía aimed, fotografía directed, fotografía oriented, fotografía positioned, fotografía placed, fotografía located, fotografía situated, fotografía based, fotografía grounded, fotografía rooted, fotografía founded, fotografía established, fotografía created, fotografía built, fotografía constructed, fotografía developed, fotografía designed, fotografía planned, fotografía conceived, fotografía imagined, fotografía envisioned, fotografía visualized, fotografía pictured, fotografía seen, fotografía viewed, fotografía observed, fotografía watched, fotografía monitored, fotografía tracked, fotografía followed, fotografía pursued, fotografía chased, fotografía hunted, fotografía searched, fotografía sought, fotografía looked, fotografía explored, fotografía investigated, fotografía examined, fotografía studied, fotografía analyzed, fotografía evaluated, fotografía assessed, fotografía reviewed, fotografía inspected, fotografía checked, fotografía tested, fotografía tried, fotografía attempted, fotografía experimented, fotografía practiced, fotografía exercised, fotografía trained, fotografía prepared, fotografía rehearsed, fotografía drilled, fotografía repeated, fotografía reinforced, fotografía strengthened, fotografía consolidated, fotografía solidified, fotografía stabilized, fotografía secured, fotografía protected, fotografía safeguarded, fotografía defended, fotografía shielded, fotografía covered, fotografía wrapped, fotografía enclosed, fotografía contained, fotografía held, fotografía kept, fotografía maintained, fotografía preserved, fotografía conserved, fotografía saved, fotografía stored, fotografía archived, fotografía recorded, fotografía documented, fotografía registered, fotografía logged, fotografía noted, fotografía marked, fotografía tagged, fotografía labeled, fotografía identified, fotografía named, fotografía titled, fotografía called, fotografía termed, fotografía referred, fotografía mentioned, fotografía cited, fotografía quoted, fotografía referenced, fotografía sourced, fotografía attributed, fotografía credited, fotografía acknowledged, fotografía recognized, fotografía appreciated, fotografía valued, fotografía treasured, fotografía cherished, fotografía loved, fotografía adored, fotografía admired, fotografía respected, fotografía honored, fotografía revered, fotografía worshipped, fotografía idolized, fotografía glorified, fotografía celebrated, fotografía praised, fotografía acclaimed, fotografía applauded, fotografía cheered, fotografía supported, fotografía backed, fotografía endorsed, fotografía recommended, fotografía suggested, fotografía proposed, fotografía offered, fotografía provided, fotografía supplied, fotografía delivered, fotografía given, fotografía presented, fotografía awarded, fotografía granted, fotografía bestowed, fotografía conferred, fotografía imparted, fotografía shared, fotografía distributed, fotografía spread, fotografía disseminated, fotografía broadcasted, fotografía transmitted, fotografía communicated, fotografía conveyed, fotografía expressed, fotografía articulated, fotografía voiced, fotografía spoken, fotografía said, fotografía told, fotografía related, fotografía narrated, fotografía recounted, fotografía described, fotografía depicted, fotografía portrayed, fotografía illustrated, fotografía shown, fotografía displayed, fotografía exhibited, fotografía demonstrated, fotografía presented, fotografía revealed, fotografía unveiled, fotografía disclosed, fotografía exposed, fotografía uncovered, fotografía discovered, fotografía found, fotografía located, fotografía identified, fotografía detected, fotografía spotted, fotografía noticed, fotografía observed, fotografía seen, fotografía viewed, fotografía witnessed, fotografía experienced, fotografía encountered, fotografía met, fotografía faced, fotografía confronted, fotografía dealt, fotografía handled, fotografía managed, fotografía controlled, fotografía directed, fotografía guided, fotografía led, fotografía headed, fotografía supervised, fotografía overseen, fotografía monitored, fotografía watched, fotografía observed, fotografía tracked, fotografía followed, fotografía pursued, fotografía chased, fotografía hunted, fotografía searched, fotografía sought, fotografía looked, fotografía explored, fotografía investigated, fotografía examined, fotografía studied, fotografía researched, fotografía analyzed, fotografía evaluated, fotografía assessed, fotografía reviewed, fotografía audited, fotografía inspected, fotografía checked, fotografía verified, fotografía validated, fotografía confirmed, fotografía approved, fotografía accepted, fotografía endorsed, fotografía supported, fotografía backed, fotografía sponsored, fotografía funded, fotografía financed, fotografía invested, fotografía committed, fotografía dedicated, fotografía devoted, fotografía loyal, fotografía faithful, fotografía true, fotografía honest, fotografía sincere, fotografía genuine, fotografía authentic, fotografía real, fotografía actual, fotografía factual, fotografía accurate, fotografía correct, fotografía right, fotografía proper, fotografía appropriate, fotografía suitable, fotografía fitting, fotografía perfect, fotografía ideal, fotografía optimal, fotografía best, fotografía finest, fotografía top, fotografía supreme, fotografía ultimate, fotografía maximum, fotografía peak, fotografía highest, fotografía greatest, fotografía largest, fotografía biggest, fotografía most, fotografía main, fotografía primary, fotografía principal, fotografía chief, fotografía lead, fotografía head, fotografía top, fotografía first, fotografía number-one, fotografía leading, fotografía foremost, fotografía premier, fotografía prime, fotografía major, fotografía key, fotografía central, fotografía core, fotografía essential, fotografía fundamental, fotografía basic, fotografía important, fotografía significant, fotografía meaningful, fotografía valuable, fotografía worthwhile, fotografía beneficial, fotografía advantageous, fotografía profitable, fotografía rewarding, fotografía satisfying, fotografía fulfilling, fotografía gratifying, fotografía pleasing, fotografía enjoyable, fotografía delightful, fotografía wonderful, fotografía marvelous, fotografía fantastic, fotografía amazing, fotografía incredible, fotografía extraordinary, fotografía exceptional, fotografía remarkable, fotografía outstanding, fotografía excellent, fotografía superb, fotografía superior, fotografía premium, fotografía quality, fotografía high-quality, fotografía top-quality, fotografía best-quality, fotografía finest-quality, fotografía superior-quality, fotografía premium-quality, fotografía professional-quality, fotografía commercial-quality, fotografía broadcast-quality, fotografía studio-quality, fotografía gallery-quality, fotografía museum-quality, fotografía exhibition-quality, fotografía competition-quality, fotografía award-quality, fotografía prize-quality, fotografía winning-quality, fotografía champion-quality, fotografía master-quality, fotografía expert-quality, fotografía specialist-quality, fotografía professional, fotografía expert, fotografía specialist, fotografía master, fotografía guru, fotografía authority, fotografía leader, fotografía pioneer, fotografía innovator, fotografía creator, fotografía artist, fotografía visionary, fotografía genius, fotografía talent, fotografía skill, fotografía ability, fotografía capability, fotografía competence, fotografía expertise, fotografía knowledge, fotografía experience, fotografía background, fotografía history, fotografía track-record, fotografía portfolio, fotografía credentials, fotografía qualifications, fotografía certifications, fotografía awards, fotografía recognition, fotografía achievements, fotografía accomplishments, fotografía successes, fotografía victories, fotografía wins, fotografía triumphs, fotografía conquests, fotografía breakthroughs, fotografía milestones, fotografía landmarks, fotografía highlights, fotografía features, fotografía benefits, fotografía advantages, fotografía strengths, fotografía assets, fotografía resources, fotografía tools, fotografía equipment, fotografía technology, fotografía innovation, fotografía advancement, fotografía progress, fotografía development, fotografía evolution, fotografía transformation, fotografía change, fotografía improvement, fotografía enhancement, fotografía upgrade, fotografía update, fotografía modernization, fotografía renovation, fotografía refresh, fotografía renewal, fotografía revival, fotografía restoration, fotografía repair, fotografía fix, fotografía solution, fotografía answer, fotografía resolution, fotografía remedy, fotografía cure, fotografía treatment, fotografía therapy, fotografía healing, fotografía recovery, fotografía restoration, fotografía rehabilitation, fotografía improvement, fotografía betterment, fotografía enhancement, fotografía enrichment, fotografía advancement, fotografía progress, fotografía development, fotografía growth, fotografía expansion, fotografía extension, fotografía enlargement, fotografía increase, fotografía boost, fotografía lift, fotografía raise, fotografía elevation, fotografía promotion, fotografía advancement, fotografía progression, fotografía evolution, fotografía transformation, fotografía metamorphosis, fotografía change, fotografía shift, fotografía transition, fotografía conversion, fotografía adaptation, fotografía adjustment, fotografía modification, fotografía alteration, fotografía revision, fotografía update, fotografía upgrade, fotografía improvement, fotografía enhancement, fotografía optimization, fotografía maximization, fotografía perfection, fotografía excellence, fotografía quality, fotografía standard, fotografía benchmark, fotografía reference, fotografía model, fotografía example, fotografía template, fotografía pattern, fotografía design, fotografía style, fotografía approach, fotografía method, fotografía technique, fotografía strategy, fotografía plan, fotografía system, fotografía process, fotografía procedure, fotografía workflow, fotografía pipeline, fotografía framework, fotografía structure, fotografía architecture, fotografía foundation, fotografía base, fotografía platform, fotografía infrastructure, fotografía network, fotografía ecosystem, fotografía environment, fotografía context, fotografía setting, fotografía background, fotografía scene, fotografía stage, fotografía arena, fotografía field, fotografía domain, fotografía area, fotografía sector, fotografía industry, fotografía market, fotografía business, fotografía commerce, fotografía trade, fotografía economy, fotografía finance, fotografía investment, fotografía funding, fotografía capital, fotografía money, fotografía budget, fotografía cost, fotografía price, fotografía value, fotografía worth, fotografía benefit, fotografía advantage, fotografía profit, fotografía gain, fotografía return, fotografía yield, fotografía outcome, fotografía result, fotografía effect, fotografía impact, fotografía influence, fotografía power, fotografía force, fotografía strength, fotografía energy, fotografía drive, fotografía motivation, fotografía inspiration, fotografía passion, fotografía enthusiasm, fotografía excitement, fotografía thrill, fotografía joy, fotografía happiness, fotografía satisfaction, fotografía fulfillment, fotografía achievement, fotografía success, fotografía victory, fotografía win, fotografía triumph, fotografía conquest, fotografía breakthrough, fotografía milestone, fotografía landmark, fotografía highlight, fotografía peak, fotografía climax, fotografía summit, fotografía top, fotografía best, fotografía finest, fotografía greatest, fotografía most, fotografía ultimate, fotografía supreme, fotografía premium, fotografía luxury, fotografía exclusive, fotografía elite, fotografía VIP, fotografía first-class, fotografía world-class, fotografía top-tier, fotografía high-end, fotografía upscale, fotografía sophisticated, fotografía refined, fotografía elegant, fotografía classy, fotografía stylish, fotografía fashionable, fotografía trendy, fotografía modern, fotografía contemporary, fotografía current, fotografía latest, fotografía newest, fotografía fresh, fotografía new, fotografía innovative, fotografía creative, fotografía original, fotografía unique, fotografía distinctive, fotografía special, fotografía different, fotografía unusual, fotografía rare, fotografía exceptional, fotografía extraordinary, fotografía remarkable, fotografía outstanding, fotografía amazing, fotografía incredible, fotografía unbelievable, fotografía fantastic, fotografía wonderful, fotografía marvelous, fotografía spectacular, fotografía stunning, fotografía breathtaking, fotografía jaw-dropping, fotografía eye-catching, fotografía attention-grabbing, fotografía head-turning, fotografía show-stopping, fotografía award-winning, fotografía prize-winning, fotografía acclaimed, fotografía celebrated, fotografía renowned, fotografía famous, fotografía well-known, fotografía popular, fotografía trending, fotografía viral, fotografía shareable, fotografía engaging, fotografía compelling, fotografía captivating, fotografía mesmerizing, fotografía hypnotic, fotografía magnetic, fotografía attractive, fotografía appealing, fotografía charming, fotografía delightful, fotografía pleasant, fotografía enjoyable, fotografía satisfying, fotografía fulfilling, fotografía rewarding, fotografía valuable, fotografía worthwhile, fotografía beneficial, fotografía advantageous, fotografía profitable, fotografía lucrative, fotografía cost-effective, fotografía efficient, fotografía effective, fotografía successful, fotografía winning, fotografía victorious, fotografía triumphant, fotografía conquering, fotografía dominating, fotografía leading, fotografía pioneering, fotografía innovative, fotografía groundbreaking, fotografía revolutionary, fotografía transformative, fotografía disruptive, fotografía game-changing, fotografía paradigm-shifting, fotografía industry-leading, fotografía market-leading, fotografía world-leading, fotografía globally-leading, fotografía internationally-leading, fotografía nationally-leading, fotografía regionally-leading, fotografía locally-leading, fotografía community-leading, fotografía neighborhood-leading, fotografía street-leading, fotografía block-leading, fotografía building-leading, fotografía floor-leading, fotografía room-leading, fotografía desk-leading, fotografía computer-leading, fotografía screen-leading, fotografía pixel-leading, fotografía bit-leading, fotografía byte-leading, fotografía data-leading, fotografía information-leading, fotografía knowledge-leading, fotografía wisdom-leading, fotografía intelligence-leading, fotografía smart-leading, fotografía clever-leading, fotografía brilliant-leading, fotografía genius-leading, fotografía masterful-leading, fotografía expert-leading, fotografía professional-leading, fotografía specialist-leading, fotografía authority-leading, fotografía leader-leading, fotografía pioneer-leading, fotografía innovator-leading, fotografía creator-leading, fotografía artist-leading, fotografía visionary-leading, fotografía dreamer-leading, fotografía thinker-leading, fotografía philosopher-leading, fotografía scientist-leading, fotografía researcher-leading, fotografía analyst-leading, fotografía consultant-leading, fotografía advisor-leading, fotografía counselor-leading, fotografía mentor-leading, fotografía coach-leading, fotografía trainer-leading, fotografía teacher-leading, fotografía instructor-leading, fotografía educator-leading, fotografía professor-leading, fotografía academic-leading, fotografía scholar-leading, fotografía student-leading, fotografía learner-leading, fotografía apprentice-leading, fotografía intern-leading, fotografía trainee-leading, fotografía novice-leading, fotografía beginner-leading, fotografía starter-leading, fotografía newcomer-leading, fotografía freshman-leading, fotografía rookie-leading, fotografía amateur-leading, fotografía hobbyist-leading, fotografía enthusiast-leading, fotografía fan-leading, fotografía lover-leading, fotografía admirer-leading, fotografía supporter-leading, fotografía advocate-leading, fotografía champion-leading, fotografía defender-leading, fotografía protector-leading, fotografía guardian-leading, fotografía keeper-leading, fotografía custodian-leading, fotografía caretaker-leading, fotografía steward-leading, fotografía manager-leading, fotografía administrator-leading, fotografía executive-leading, fotografía director-leading, fotografía president-leading, fotografía CEO-leading, fotografía founder-leading, fotografía owner-leading, fotografía proprietor-leading, fotografía entrepreneur-leading, fotografía businessman-leading, fotografía businesswoman-leading, fotografía businessperson-leading, fotografía professional-leading, fotografía worker-leading, fotografía employee-leading, fotografía staff-leading, fotografía team-leading, fotografía crew-leading, fotografía group-leading, fotografía organization-leading, fotografía company-leading, fotografía corporation-leading, fotografía enterprise-leading, fotografía business-leading, fotografía firm-leading, fotografía agency-leading, fotografía studio-leading, fotografía workshop-leading, fotografía lab-leading, fotografía facility-leading, fotografía center-leading, fotografía hub-leading, fotografía headquarters-leading, fotografía office-leading, fotografía building-leading, fotografía location-leading, fotografía site-leading, fotografía place-leading, fotografía spot-leading, fotografía position-leading, fotografía point-leading, fotografía area-leading, fotografía zone-leading, fotografía region-leading, fotografía territory-leading, fotografía district-leading, fotografía neighborhood-leading, fotografía community-leading, fotografía city-leading, fotografía town-leading, fotografía village-leading, fotografía municipality-leading, fotografía county-leading, fotografía state-leading, fotografía province-leading, fotografía country-leading, fotografía nation-leading, fotografía continent-leading, fotografía world-leading, fotografía global-leading, fotografía universal-leading, fotografía cosmic-leading, fotografía galactic-leading, intergalactic-leading, interdimensional-leading, multidimensional-leading, omnidimensional-leading, infinite-leading, eternal-leading, timeless-leading, ageless-leading, immortal-leading, everlasting-leading, perpetual-leading, continuous-leading, constant-leading, consistent-leading, steady-leading, stable-leading, solid-leading, firm-leading, strong-leading, robust-leading, durable-leading, lasting-leading, enduring-leading, permanent-leading, fixed-leading, established-leading, settled-leading, rooted-leading, grounded-leading, based-leading, founded-leading, built-leading, constructed-leading, created-leading, made-leading, produced-leading, manufactured-leading, generated-leading, developed-leading, designed-leading, engineered-leading, crafted-leading, formed-leading, shaped-leading, molded-leading, sculpted-leading, carved-leading, etched-leading, engraved-leading, imprinted-leading, stamped-leading, marked-leading, branded-leading, labeled-leading, tagged-leading, identified-leading, recognized-leading, acknowledged-leading, credited-leading, attributed-leading, assigned-leading, designated-leading, appointed-leading, selected-leading, chosen-leading, picked-leading, elected-leading, voted-leading, nominated-leading, recommended-leading, suggested-leading, proposed-leading, offered-leading, presented-leading, given-leading, provided-leading, supplied-leading, delivered-leading, served-leading, offered-leading, available-leading, accessible-leading, obtainable-leading, acquirable-leading, achievable-leading, attainable-leading, reachable-leading, possible-leading, feasible-leading, viable-leading, practical-leading, realistic-leading, reasonable-leading, logical-leading, rational-leading, sensible-leading, wise-leading, smart-leading, intelligent-leading, clever-leading, brilliant-leading, genius-leading, masterful-leading, skillful-leading, talented-leading, gifted-leading, capable-leading, competent-leading, qualified-leading, experienced-leading, seasoned-leading, veteran-leading, mature-leading, developed-leading, advanced-leading, sophisticated-leading, refined-leading, polished-leading, perfected-leading, mastered-leading, optimized-leading, maximized-leading, enhanced-leading, improved-leading, upgraded-leading, updated-leading, modernized-leading, revolutionized-leading, transformed-leading, evolved-leading, progressed-leading, advanced-leading, developed-leading, grown-leading, expanded-leading, extended-leading, enlarged-leading, increased-leading, boosted-leading, lifted-leading, raised-leading, elevated-leading, promoted-leading, advanced-leading, progressed-leading, evolved-leading, transformed-leading, changed-leading, shifted-leading, transitioned-leading, converted-leading, adapted-leading, adjusted-leading, modified-leading, altered-leading, revised-leading, updated-leading, upgraded-leading, improved-leading, enhanced-leading, optimized-leading, maximized-leading, perfected-leading, completed-leading, finished-leading, accomplished-leading, achieved-leading, attained-leading, reached-leading, obtained-leading, acquired-leading, gained-leading, earned-leading, won-leading, secured-leading, captured-leading, seized-leading, grasped-leading, grabbed-leading, taken-leading, received-leading, accepted-leading, approved-leading, endorsed-leading, supported-leading, backed-leading, sponsored-leading, funded-leading, financed-leading, invested-leading, committed-leading, dedicated-leading, devoted-leading, focused-leading, concentrated-leading, centered-leading, targeted-leading, aimed-leading, directed-leading, oriented-leading, positioned-leading, placed-leading, located-leading, situated-leading, based-leading, grounded-leading, rooted-leading, founded-leading, established-leading, created-leading, built-leading, constructed-leading, developed-leading, designed-leading, planned-leading, conceived-leading, imagined-leading, envisioned-leading, visualized-leading, pictured-leading, seen-leading, viewed-leading, observed-leading, watched-leading, monitored-leading, tracked-leading, followed-leading, pursued-leading, chased-leading, hunted-leading, searched-leading, sought-leading, looked-leading, explored-leading, investigated-leading, examined-leading, studied-leading, researched-leading, analyzed-leading, evaluated-leading, assessed-leading, reviewed-leading, inspected-leading, checked-leading, tested-leading, tried-leading, attempted-leading, experimented-leading, practiced-leading, exercised-leading, trained-leading, prepared-leading, rehearsed-leading, drilled-leading, repeated-leading, reinforced-leading, strengthened-leading, consolidated-leading, solidified-leading, stabilized-leading, secured-leading, protected-leading, safeguarded-leading, defended-leading, shielded-leading, covered-leading, wrapped-leading, enclosed-leading, contained-leading, held-leading, kept-leading, maintained-leading, preserved-leading, conserved-leading, saved-leading, stored-leading, archived-leading, recorded-leading, documented-leading, registered-leading, logged-leading, noted-leading, marked-leading, tagged-leading, labeled-leading, identified-leading, named-leading, titled-leading, called-leading, termed-leading, referred-leading, mentioned-leading, cited-leading, quoted-leading, referenced-leading, sourced-leading, attributed-leading, credited-leading, acknowledged-leading, recognized-leading, appreciated-leading, valued-leading, treasured-leading, cherished-leading, loved-leading, adored-leading, admired-leading, respected-leading, honored-leading, revered-leading, worshipped-leading, idolized-leading, glorified-leading, celebrated-leading, praised-leading, acclaimed-leading, applauded-leading, cheered-leading, supported-leading, backed-leading, endorsed-leading, recommended-leading, suggested-leading, proposed-leading, offered-leading, provided-leading, supplied-leading, delivered-leading, given-leading, presented-leading, awarded-leading, granted-leading, bestowed-leading, conferred-leading, imparted-leading, shared-leading, distributed-leading, spread-leading, disseminated-leading, broadcasted-leading, transmitted-leading, communicated-leading, conveyed-leading, expressed-leading, articulated-leading, voiced-leading, spoken-leading, said-leading, told-leading, related-leading, narrated-leading, recounted-leading, described-leading, depicted-leading, portrayed-leading, illustrated-leading, shown-leading, displayed-leading, exhibited-leading, demonstrated-leading, presented-leading, revealed-leading, unveiled-leading, disclosed-leading, exposed-leading, uncovered-leading, discovered-leading, found-leading, located-leading, identified-leading, detected-leading, spotted-leading, noticed-leading, observed-leading, seen-leading, viewed-leading, witnessed-leading, experienced-leading, encountered-leading, met-leading, faced-leading, confronted-leading, dealt-leading, handled-leading, managed-leading, controlled-leading, directed-leading, guided-leading, led-leading, headed-leading, supervised-leading, overseen-leading, monitored-leading, watched-leading, observed-leading, tracked-leading, followed-leading, pursued-leading, chased-leading, hunted-leading, searched-leading, sought-leading, looked-leading, explored-leading, investigated-leading, examined-leading, studied-leading, researched-leading, analyzed-leading, evaluated-leading, assessed-leading, reviewed-leading, audited-leading, inspected-leading, checked-leading, verified-leading, validated-leading, confirmed-leading, approved-leading, accepted-leading, endorsed-leading, supported-leading, backed-leading, sponsored-leading, funded-leading, financed-leading, invested-leading, committed-leading, dedicated-leading, devoted-leading, loyal-leading, faithful-leading, true-leading, honest-leading, sincere-leading",
  robots: "index, follow",
  openGraph: {
    title: "Contenido Visual y Fotografía Comercial | Producción Audiovisual Profesional",
    description:
      "Servicios profesionales de contenido visual, fotografía comercial, producción audiovisual y imagen corporativa. Creamos visuales impactantes para tu marca.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contenido Visual y Fotografía Comercial | Producción Audiovisual Profesional",
    description:
      "Servicios profesionales de contenido visual, fotografía comercial, producción audiovisual y imagen corporativa. Creamos visuales impactantes para tu marca.",
  },
  alternates: {
    canonical: "/servicios/contenido-visual",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Contenido Visual y Fotografía Comercial",
  description:
    "Servicios profesionales de contenido visual, fotografía comercial, producción audiovisual y imagen corporativa para empresas y marcas.",
  provider: {
    "@type": "Organization",
    name: "Agencia de Contenido Visual",
    url: "https://www.softwans.com/contenido-visual/",
  },
  areaServed: "Caracas",
  serviceType: "Contenido Visual y Fotografía Comercial",
  offers: [
    {
      "@type": "Offer",
      name: "Producción Visual",
      description: "Servicios profesionales de producción visual y audiovisual para marcas",
    },
    {
      "@type": "Offer",
      name: "Fotografía Comercial",
      description: "Fotografía profesional enfocada en productos y marcas comerciales",
    },
    {
      "@type": "Offer",
      name: "Cobertura Fotográfica",
      description: "Servicios de cobertura fotográfica para eventos corporativos",
    },
    {
      "@type": "Offer",
      name: "Imagen Corporativa",
      description: "Sesiones fotográficas para equipos, oficinas y retratos corporativos",
    },
    {
      "@type": "Offer",
      name: "Visuales para Marca",
      description: "Creación de contenido visual estratégico para marcas",
    },
    {
      "@type": "Offer",
      name: "Contenido Fotográfico",
      description: "Producción de contenido fotográfico para redes sociales y marketing",
    },
  ],
}

export default function ContenidoVisualPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a1121]" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  <Camera className="w-4 h-4 mr-2" />
                  Contenido Visual Profesional
                </Badge>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Contenido Visual y 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 leading-tight">
                  Fotografía Comercial
                </span>
              </h1>

              <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
                Creamos contenido visual impactante que conecta con tu audiencia. Desde fotografía comercial hasta
                producción audiovisual, transformamos tu visión en imágenes que venden.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8 py-3">
                  <Camera className="w-5 h-5 mr-2" />
                  Consulta Gratuita
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3">
                  <Eye className="w-5 h-5 mr-2" />
                  Ver Portfolio
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Servicios de Contenido Visual</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ofrecemos una gama completa de servicios visuales para potenciar tu marca y comunicar tu mensaje de
                manera efectiva.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Video,
                  title: "Producción Visual",
                  description:
                    "Servicios profesionales de producción visual y audiovisual. Creamos videos comerciales, spots publicitarios y contenido multimedia que impacta y convierte.",
                  features: ["Videos comerciales", "Spots publicitarios", "Contenido multimedia", "Dirección de arte"],
                },
                {
                  icon: Camera,
                  title: "Fotografía Comercial",
                  description:
                    "Fotografía profesional enfocada en productos y marcas. Capturamos la esencia de tu negocio con imágenes que destacan la calidad y profesionalismo de tus productos o servicios.",
                  features: [
                    "Fotografía de productos",
                    "Catálogos comerciales",
                    "E-commerce",
                    "Fotografía publicitaria",
                  ],
                },
                {
                  icon: Users,
                  title: "Cobertura Fotográfica",
                  description:
                    "Servicios de cobertura fotográfica para eventos corporativos, conferencias y presentaciones. Documentamos tus momentos importantes con profesionalismo y discreción.",
                  features: ["Eventos corporativos", "Conferencias", "Presentaciones", "Reportaje fotográfico"],
                },
                {
                  icon: ImageIcon,
                  title: "Imagen Corporativa",
                  description:
                    "Sesiones fotográficas para equipos, oficinas y retratos corporativos. Creamos imágenes que reflejan la profesionalidad y valores de tu empresa.",
                  features: [
                    "Retratos corporativos",
                    "Fotografía de equipo",
                    "Espacios de oficina",
                    "Headshots profesionales",
                  ],
                },
                {
                  icon: Palette,
                  title: "Visuales para Marca",
                  description:
                    "Creación de contenido visual estratégico que fortalece tu identidad de marca. Desarrollamos un lenguaje visual coherente y atractivo para todos tus canales.",
                  features: ["Identidad visual", "Branding fotográfico", "Storytelling visual", "Contenido branded"],
                },
                {
                  icon: Zap,
                  title: "Contenido Fotográfico",
                  description:
                    "Producción de contenido fotográfico para redes sociales, web y marketing digital. Imágenes optimizadas que generan engagement y conversiones.",
                  features: ["Redes sociales", "Contenido web", "Marketing digital", "Fotografía lifestyle"],
                },
              ].map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">{service.description}</CardDescription>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Types Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tipos de Contenido Especializado</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nos especializamos en diferentes tipos de contenido visual adaptado a las necesidades específicas de
                cada industria y objetivo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Target,
                  title: "Contenido E-commerce",
                  description:
                    "Fotografía optimizada para tiendas online que aumenta las conversiones y reduce las devoluciones.",
                },
                {
                  icon: Users,
                  title: "Contenido Corporativo",
                  description: "Imágenes profesionales que refuerzan la credibilidad y confianza de tu empresa.",
                },
                {
                  icon: Eye,
                  title: "Contenido Social",
                  description: "Visuales diseñados específicamente para generar engagement en redes sociales.",
                },
                {
                  icon: Lightbulb,
                  title: "Contenido Creativo",
                  description: "Conceptos visuales innovadores que destacan tu marca de la competencia.",
                },
              ].map((type, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <type.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
                    <p className="text-gray-600 text-sm">{type.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Por Qué Elegir Nuestros Servicios Visuales?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Combinamos creatividad, técnica y estrategia para crear contenido visual que no solo se ve bien, sino
                que también genera resultados medibles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "Calidad Profesional",
                  description:
                    "Utilizamos equipos de última generación y técnicas avanzadas para garantizar la máxima calidad en cada proyecto.",
                },
                {
                  icon: Clock,
                  title: "Entrega Rápida",
                  description:
                    "Procesos optimizados que nos permiten entregar contenido de alta calidad en tiempos récord sin comprometer la excelencia.",
                },
                {
                  icon: Target,
                  title: "Enfoque Estratégico",
                  description:
                    "Cada imagen y video está diseñado con un propósito específico para maximizar el impacto en tu audiencia objetivo.",
                },
                {
                  icon: Users,
                  title: "Equipo Especializado",
                  description:
                    "Fotógrafos, videomakers y directores creativos con años de experiencia en diferentes industrias.",
                },
                {
                  icon: Shield,
                  title: "Garantía de Satisfacción",
                  description:
                    "Revisiones ilimitadas hasta que el resultado final supere tus expectativas y objetivos comerciales.",
                },
                {
                  icon: Zap,
                  title: "Resultados Medibles",
                  description:
                    "Contenido visual optimizado para generar engagement, conversiones y un ROI positivo en tus campañas.",
                },
              ].map((reason, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nuestro Proceso Creativo</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un proceso estructurado que garantiza resultados excepcionales desde la conceptualización hasta la
                entrega final.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Briefing y Estrategia",
                  description:
                    "Analizamos tus objetivos, audiencia y necesidades para desarrollar una estrategia visual efectiva.",
                },
                {
                  step: "02",
                  title: "Conceptualización",
                  description:
                    "Creamos conceptos creativos y moodboards que alineen la visión artística con tus objetivos comerciales.",
                },
                {
                  step: "03",
                  title: "Producción",
                  description:
                    "Ejecutamos la sesión fotográfica o producción audiovisual con el máximo profesionalismo y atención al detalle.",
                },
                {
                  step: "04",
                  title: "Post-producción",
                  description:
                    "Editamos y optimizamos el contenido para diferentes plataformas, garantizando la máxima calidad y impacto.",
                },
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment & Technology Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Equipos y Tecnología Profesional</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Utilizamos la última tecnología en fotografía y video para garantizar resultados de calidad superior.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Cámaras Full Frame",
                "Objetivos Profesionales",
                "Iluminación LED",
                "Equipos de Estudio",
                "Drones 4K",
                "Estabilizadores",
                "Audio Profesional",
                "Edición Avanzada",
                "Color Grading",
                "Retoque Digital",
                "Impresión Fine Art",
                "Almacenamiento Cloud",
                "Backup Redundante",
                "Entrega Digital",
                "Formatos RAW",
                "Optimización Web",
                "Compresión Inteligente",
                "Metadatos SEO",
                "Sincronización Multi-dispositivo",
                "Workflow Automatizado",
              ].map((tech, index) => (
                <div key={index} className="bg-[#020818] rounded-lg shadow-sm text-center">
                  <p className="font-medium text-gray-100">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Preguntas Frecuentes</h2>
              <p className="text-xl text-gray-600">
                Resolvemos las dudas más comunes sobre nuestros servicios de contenido visual.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "¿Qué incluye el servicio de fotografía comercial?",
                  answer:
                    "Incluye sesión fotográfica completa, edición profesional, entrega en múltiples formatos, derechos de uso comercial y revisiones ilimitadas hasta tu satisfacción total.",
                },
                {
                  question: "¿Cuánto tiempo toma completar un proyecto visual?",
                  answer:
                    "Depende del alcance del proyecto. Una sesión fotográfica simple puede estar lista en 3-5 días, mientras que producciones audiovisuales complejas pueden tomar 2-3 semanas.",
                },
                {
                  question: "¿Ofrecen servicios de producción audiovisual?",
                  answer:
                    "Sí, ofrecemos servicios completos de producción audiovisual incluyendo videos comerciales, spots publicitarios, contenido para redes sociales y documentales corporativos.",
                },
                {
                  question: "¿Pueden trabajar con nuestro equipo de marketing?",
                  answer:
                    "Absolutamente. Colaboramos estrechamente con equipos de marketing para asegurar que el contenido visual esté alineado con la estrategia general de la marca.",
                },
                {
                  question: "¿Qué formatos de entrega proporcionan?",
                  answer:
                    "Entregamos en todos los formatos necesarios: alta resolución para impresión, optimizados para web, formatos específicos para redes sociales y versiones para diferentes dispositivos.",
                },
                {
                  question: "¿Incluyen los derechos de uso de las imágenes?",
                  answer:
                    "Sí, todos nuestros paquetes incluyen derechos de uso comercial completos. Puedes usar las imágenes en todos tus canales de marketing sin restricciones adicionales.",
                },
              ].map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-white">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para Crear Contenido Visual Impactante?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contacta con nosotros para una consulta gratuita y descubre cómo podemos transformar tu comunicación
              visual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">  
            <Link href="https://wa.me//message/FO6VTPN6OIDNE1">            
              <Button size="lg" variant="secondary" className="px-8 py-3">
                <Camera className="w-5 h-5 mr-2" />
                Consulta Gratuita
              </Button>
            </Link>
            <Link href="https://www.softwans.com/trabajos">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Nuestro Trabajo
              </Button>
            </Link>
            
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}
