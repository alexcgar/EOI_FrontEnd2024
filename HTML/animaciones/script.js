// Definición de los efectos disponibles
const EFFECTS = [
    { icon: 'ban', color: 'light', name: 'none' },
    { icon: 'cloud-rain', color: 'dark', name: 'rain' },
    { icon: 'cloud-snow', color: 'dark', name: 'snow' },
    { icon: 'cloud-fog', color: 'dark', name: 'fog' },
    { icon: 'lightning-fill', color: 'dark', name: 'storm' },
    { icon: 'star-fill', color: 'dark', name: 'stars' },
    { icon: 'lightbulb', color: 'dark', name: 'fireflies' },
    { icon: 'lightbulb-fill', color: 'dark', name: 'glow' },
    { icon: 'droplet', color: 'dark', name: 'drops' },
    { icon: '0-circle', color: 'dark', name: 'bubbles' },
    { icon: 'fire', color: 'dark', name: 'meteors' },
    { icon: 'sun-fill', color:'dark', name: 'supernova' },
    { icon: 'record-circle', color:'dark', name: 'black hole' },
    { icon: 'broadcast', color:'dark', name: 'ripples' },
    { icon: 'broadcast', color:'dark', name: 'blurred ripples' },
    { icon: 'broadcast', color:'dark', name: 'quantum ripples' },
    { icon: 'slash-circle-fill', color:'dark', name: 'cracked glass' },
    { icon: 'star-fill', color:'dark', name: 'explosion' },
    { icon: 'rocket', color: 'dark', name: 'space travel' },
    { icon: 'sunrise', color: 'dark', name: 'aurora borealis' },
    { icon: 'water', color: 'dark', name: 'sea waves' },
    { icon: 'code-slash', color: 'dark', name: 'matrix' },
];

let interval; // Variable para almacenar el intervalo de tiempo
let canvas; // Variable para almacenar el elemento canvas
let animationFrame; // Variable para almacenar el frame de animación
let zIndex = -10; // Variable para almacenar el índice z

// Función para obtener un efecto aleatorio
function getRandomEffect() {
    return EFFECTS[Math.floor(Math.random() * EFFECTS.length)];
}

// Función para verificar si un efecto es válido
function isEffect(effect) {
    if (typeof effect === 'number') {
        return effect >= 0 && effect < EFFECTS.length;
    }
    return EFFECTS.some(e => e.name === effect);
}

// Función para establecer un efecto
function setEffect(effect, zIndex = -10) {
    // Limpiar cualquier intervalo de tiempo existente
    if (interval !== false) clearInterval(interval);
    interval = false;

    // Eliminar cualquier canvas existente
    if (canvas) canvas.remove();
    canvas = false;

    // Cancelar cualquier animación existente
    if (animationFrame) cancelAnimationFrame(animationFrame);
    animationFrame = false;

    let effectName;

    // Determinar el nombre del efecto
    if (typeof effect === 'number') {
        if (effect <= 0 || effect >= EFFECTS.length) return;
        effectName = EFFECTS[effect].name;
    } else if (typeof effect === 'string') {
        const foundEffect = EFFECTS.find(e => e.name === effect);
        if (!foundEffect) return;
        effectName = foundEffect.name;
    } else {
        return;
    }

    zIndex = zIndex;

    // Si el índice z es mayor que 0, establecer un temporizador para reiniciar el efecto
    if (zIndex > 0) {
        setTimeout(() => {
            setEffect(effect);
        }, 12500);
    }

    // Llamar a la función correspondiente al efecto
    window[getMethodName(effectName)]();
}

// Función para obtener el nombre del método correspondiente al efecto
function getMethodName(input) {
    return 'start' + input
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}

// Función para iniciar el efecto de lluvia
function startRain() {
    interval = setInterval(() => {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.zIndex = "" + zIndex;

        raindrop.style.left = Math.random() * window.innerWidth + 'px';

        const fallDuration = Math.random() * 1 + 1 + 's';
        raindrop.style.animationDuration = fallDuration;

        document.body.prepend(raindrop);

        setTimeout(() => {
            raindrop.remove();
        }, parseInt(fallDuration) * 1000);
    }, zIndex < 0 ? 50 : 5);
}

// Función para iniciar el efecto de nieve
function startSnow() {
    interval = setInterval(() => {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.zIndex = "" + zIndex;

        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        const size = Math.random() * 15 + 5 + 'px';
        snowflake.style.width = size;
        snowflake.style.height = size;

        const fallDuration = Math.random() * 10 + 5 + 's';
        snowflake.style.animationDuration = fallDuration;

        document.body.prepend(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, parseInt(fallDuration) * 1500);
    }, zIndex < 0 ? 150 : 15);
}

// Función para iniciar el efecto de burbujas
function startBubbles() {
    interval = setInterval(() => {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.zIndex = "" + zIndex;
        document.body.appendChild(bubble);

        const size = Math.random() * 60 + 20 + 'px';
        bubble.style.width = size;
        bubble.style.height = size;
        bubble.style.left = Math.random() * window.innerWidth + 'px';

        const duration = Math.random() * 3 + 3 + 's';
        bubble.style.animationDuration = duration;

        setTimeout(() => {
            bubble.remove();
        }, parseFloat(duration) * 1000);
    }, zIndex < 0 ? 300 : 30);
}

// Función para iniciar el efecto de estrellas
function startStars() {
    interval = setInterval(() => {
        const star = document.createElement('div');
        star.classList.add('star');

        star.style.left = Math.random() * (window.innerWidth - 5) + 'px';
        star.style.top = Math.random() * (window.innerHeight - 5) + 'px';
        star.style.zIndex = "" + zIndex;

        document.body.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 2500);
    }, zIndex < 0 ? 250 : 25);
}

// Función para iniciar el efecto de tormenta
function startStorm() {
    interval = setInterval(() => {
        let startX = Math.random() * window.innerWidth;
        let startY = 0;
        let segmentCount = Math.random() * 8 + 5;

        for (let j = 0; j < segmentCount; j++) {
            const segment = document.createElement('div');
            segment.classList.add('bolt');
            segment.style.zIndex = "" + zIndex;
            const length = Math.random() * 100 + 50;
            const angle = Math.random() * 60 - 30;

            segment.style.height = `${length}px`;
            segment.style.left = `${startX}px`;
            segment.style.top = `${startY}px`;
            segment.style.transform = `rotate(${angle}deg)`;

            document.body.appendChild(segment);

            const radians = (angle * Math.PI) / 180;
            startX += Math.sin(radians) * length;
            startY += Math.cos(radians) * length;
            setTimeout(() => {
                segment.remove();
            }, 3000);
        }
    }, zIndex < 0 ? 1000 : 100);
}

// Función para iniciar el efecto de luciérnagas
function startFireflies() {
    interval = setInterval(() => {
        const firefly = document.createElement('div');
        firefly.classList.add('firefly');
        firefly.style.zIndex = "" + zIndex;
        document.body.appendChild(firefly);

        const size = Math.random() * 5 + 2 + 'px';
        firefly.style.width = size;
        firefly.style.height = size;
        firefly.style.left = Math.random() * window.innerWidth + 'px';
        firefly.style.top = Math.random() * window.innerHeight + 'px';

        const duration = Math.random() * 3 + 2 + 's';
        firefly.style.animationDuration = duration;

        setTimeout(() => {
            firefly.remove();
        }, parseFloat(duration) * 1000);
    }, zIndex < 0 ? 250 : 25);
}

// Función para iniciar el efecto de brillo
function startGlow() {
    interval = setInterval(() => {
        const glow = document.createElement('div');
        glow.classList.add('glow');
        glow.style.zIndex = "" + zIndex;
        document.body.appendChild(glow);

        const size = Math.random() * 50 + 10;
        glow.style.width = size + 'px';
        glow.style.height = size + 'px';
        glow.style.left = Math.random() * window.innerWidth + 'px';
        glow.style.top = (Math.random() * window.innerHeight - size) + 'px';

        const duration = Math.random() * 5 + 3 + 's';
        glow.style.animationDuration = duration;

        setTimeout(() => {
            glow.remove();
        }, parseFloat(duration) * 1000);
    }, zIndex < 0 ? 200 : 20);
}

// Función para iniciar el efecto de gotas
function startDrops() {
    interval = setInterval(() => {
        const drop = document.createElement('div');
        drop.classList.add('drop');
        drop.style.zIndex = "" + zIndex;
        document.body.appendChild(drop);

        const size = Math.random() * 100 + 50;
        drop.style.width = size + 'px';
        drop.style.height = size + 'px';
        drop.style.left = Math.random() * window.innerWidth + 'px';
        drop.style.top = ((Math.random() * window.innerHeight) - size) * 0.95 + 'px';

        const duration = Math.random() * 4 + 2 + 's';
        drop.style.animationDuration = duration;

        setTimeout(() => {
            drop.remove();
        }, parseFloat(duration) * 1000);
    }, zIndex < 0 ? 300 : 30);
}

// Función para iniciar el efecto de niebla
function startFog() {
    interval = setInterval(() => {
        const fog = document.createElement('div');
        fog.classList.add('fog');
        fog.style.zIndex = "" + zIndex;
        document.body.appendChild(fog);

        const size = Math.random() * 500 + 300 + 'px'; // Tamaño más grande para áreas difusas
        fog.style.width = size;
        fog.style.height = size;
        fog.style.left = Math.random() * window.innerWidth + 'px';
        fog.style.top = Math.random() * window.innerHeight + 'px';

        const duration = Math.random() * 10 + 8 + 's'; // Movimientos más lentos
        fog.style.animationDuration = duration;

        setTimeout(() => {
            fog.remove();
        }, parseFloat(duration) * 1000);
    }, zIndex < 0 ? 2500 : 250); // Intervalo mayor para mayor dispersión de las nubes de niebla
}

// Función para iniciar el efecto de meteoros
function startMeteors() {
    interval = setInterval(() => {
        const meteor = document.createElement('div');
        meteor.classList.add('meteor');
        meteor.style.zIndex = "" + zIndex;
        document.body.appendChild(meteor);

        meteor.style.left = Math.random() * window.innerWidth * 1.5 + 'px';

        const duration = Math.random() * 5 + 2 + 's';
        meteor.style.animationDuration = duration;

        setTimeout(() => {
            meteor.remove();
        }, parseFloat(duration) * 1000);
    }, zIndex < 0 ? 1000 : 100);
}

// Función para iniciar el efecto de supernova
function startSupernova() {
    interval = setInterval(() => {
        const supernova = document.createElement('div');
        supernova.classList.add('supernova');
        supernova.style.zIndex = "" + zIndex;
        document.body.appendChild(supernova);

        const size = Math.random() * 100 + 50;
        supernova.style.width = size + 'px';
        supernova.style.height = size + 'px';
        supernova.style.left = Math.random() * window.innerWidth + 'px';
        supernova.style.top = (Math.random() * window.innerHeight - size) * 0.95 + 'px';

        const duration = Math.random() * 5 + 1 + 's';
        supernova.style.animationDuration = duration;

        setTimeout(() => {
            supernova.remove();
        }, parseFloat(duration) * 1000);
    }, zIndex < 0 ? 2500 : 250);
}

// Función para iniciar el efecto de ondas
function startRipples() {
    canvas = document.createElement('canvas');
    canvas.classList.add('ripplesCanvas');
    canvas.style.zIndex = "" + zIndex;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width = canvas.width;
    let height = canvas.height;

    // Manejar el cambio de tamaño de la ventana
    const onResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    // Almacenará las ondas activas
    const ripples = [];

    const createRipple = () => {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const maxRadius = Math.random() * 150 + 50; // Tamaño máximo variable
        ripples.push({ x, y, radius: 0, alpha: 1, maxRadius });
    };

    const drawWaves = () => {
        ctx.clearRect(0, 0, width, height);

        ripples.forEach((ripple, index) => {
            ripple.radius += 2; // Velocidad de expansión
            ripple.alpha = 1 - ripple.radius / ripple.maxRadius; // Desvanecimiento gradual

            if (ripple.radius > ripple.maxRadius) {
                ripples.splice(index, 1); // Eliminar onda cuando alcanza su tamaño máximo
                return;
            }

            // Configurar estilo de dibujo
            ctx.beginPath();
            ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(0, 127, 255, ${ripple.alpha})`; // Color azul para ondas
            ctx.lineWidth = 2;
            ctx.stroke();
        });

        animationFrame = requestAnimationFrame(drawWaves);
    };

    // Crear ondas periódicamente
    interval = setInterval(() => {
        createRipple();
    }, zIndex < 0 ? 500 : 50);

    drawWaves();
}

// Función para iniciar el efecto de ondas difusas
function startBlurredRipples() {
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.classList.add('blurredRipplesCanvas');
        canvas.style.zIndex = "" + zIndex;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.appendChild(canvas);
    }

    const ctx = canvas.getContext('2d');
    let width = canvas.width;
    let height = canvas.height;

    // Manejar el cambio de tamaño de la ventana
    const onResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    // Almacena las ondas activas
    const ripples = [];

    const createRipple = () => {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const maxRadius = Math.random() * 200 + 100; // Tamaño máximo variable
        ripples.push({ x, y, radius: 0, alpha: 1, maxRadius });
    };

    const drawRipples = () => {
        ctx.clearRect(0, 0, width, height);

        ripples.forEach((ripple, index) => {
            ripple.radius += 1.5; // Velocidad de expansión
            ripple.alpha = 1 - ripple.radius / ripple.maxRadius; // Desvanecimiento gradual

            if (ripple.radius > ripple.maxRadius) {
                ripples.splice(index, 1); // Eliminar onda cuando alcanza su tamaño máximo
                return;
            }

            // Dibujar la onda con un degradado radial para mayor realismo
            const gradient = ctx.createRadialGradient(
                ripple.x,
                ripple.y,
                ripple.radius * 0.7,
                ripple.x,
                ripple.y,
                ripple.radius
            );
            gradient.addColorStop(0, `rgba(0, 127, 255, ${ripple.alpha * 0.5})`);
            gradient.addColorStop(1, `rgba(0, 127, 255, 0)`);

            ctx.beginPath();
            ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
        });

        animationFrame = requestAnimationFrame(drawRipples);
    };

    // Crear ondas periódicamente
    interval = setInterval(() => {
        createRipple();
    }, zIndex < 0 ? 1500 : 150);

    drawRipples();
}

// Función para iniciar el efecto de ondas cuánticas
function startQuantumRipples() {
    interval = setInterval(() => {
        const ripple = document.createElement('div');
        ripple.classList.add('quantum-ripple');
        ripple.style.zIndex = "" + zIndex;
        document.body.appendChild(ripple);

        const size = Math.random() * 300 + 200; // Tamaño de la onda cuántica
        ripple.style.width = size + 'px';
        ripple.style.height = size + 'px';
        ripple.style.left = Math.random() * window.innerWidth + 'px';
        ripple.style.top = (Math.random() * window.innerHeight - size) + 'px';

        const duration = Math.random() * 5 + 1 + 's'; // Tiempo de vida del efecto
        ripple.style.animationDuration = duration;

        setTimeout(() => {
            ripple.remove();
        }, parseFloat(duration) * 1000);
    }, zIndex < 0 ? 2500 : 250); // Intervalo mayor para mayor dispersión de las ondas
}

// Función para iniciar el efecto de agujero negro
function startBlackHole() {
    interval = setInterval(() => {
        const blackHole = document.createElement('div');
        blackHole.classList.add('blackHole');
        blackHole.style.zIndex = "" + zIndex;
        document.body.appendChild(blackHole);

        const size = Math.random() * 300 + 100; // Tamaño del agujero negro
        blackHole.style.width = size + 'px';
        blackHole.style.height = size + 'px';
        blackHole.style.left = Math.random() * window.innerWidth + 'px';
        blackHole.style.top = (Math.random() * window.innerHeight - size) + 'px';

        const duration = Math.random() * 6 + 4 + 's'; // Tiempo de vida del efecto
        blackHole.style.animationDuration = duration;

        setTimeout(() => {
            blackHole.remove();
        }, parseFloat(duration) * 1000);
    }, zIndex < 0 ? 5000 : 500);
}

// Función para iniciar el efecto de vidrio roto
function startCrackedGlass() {
    canvas = document.createElement('canvas');
    canvas.classList.add('crackedCanvas');
    canvas.style.zIndex = "" + zIndex;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let allCracks = []; // Guardar todas las grietas generadas

    // Función para generar las grietas desde un punto de impacto
    const generateCrack = (x, y) => {
        const numCracks = Math.random() * 20 + 10; // Número de grietas
        const cracks = [];

        for (let i = 0; i < numCracks; i++) {
            const angle = Math.random() * Math.PI * 2; // Dirección aleatoria
            const length = Math.random() * 300 + 50; // Longitud de la grieta

            cracks.push({
                x1: x,
                y1: y,
                x2: x + length * Math.cos(angle),
                y2: y + length * Math.sin(angle),
                opacity: 1,
                lineWidth: 2 + Math.random(), // Ancho de la línea variable
            });
        }

        allCracks.push(cracks); // Añadir grietas generadas al conjunto de todas las grietas
    };

    // Dibujar todas las grietas en el canvas
    const drawAllCracks = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas

        allCracks.forEach(cracks => {
            cracks.forEach(crack => {
                ctx.beginPath();
                ctx.moveTo(crack.x1, crack.y1);
                ctx.lineTo(crack.x2, crack.y2);
                ctx.strokeStyle = `rgba(0, 122, 255, ${crack.opacity})`; // Color azul cristal
                ctx.lineWidth = crack.lineWidth;
                ctx.stroke();
            });
        });
    };

    // Reducir la opacidad de las grietas para que desaparezcan
    const fadeCracks = () => {
        allCracks = allCracks.filter(cracks => {
            cracks.forEach(crack => {
                crack.opacity -= 0.01; // Reducir la opacidad poco a poco
            });
            // Mantener solo las grietas que aún tienen opacidad
            return cracks.some(crack => crack.opacity > 0);
        });
    };

    // Simular un punto de impacto aleatorio y animar grietas que desaparecen
    interval = setInterval(() => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        generateCrack(x, y); // Generar nuevas grietas
    }, 1000); // Genera una nueva grieta cada segundo

    // Animación continua
    const animate = () => {
        drawAllCracks(); // Dibujar todas las grietas
        fadeCracks(); // Desvanecer grietas
        requestAnimationFrame(animate); // Animar continuamente
    };

    animate(); // Iniciar la animación
}

// Función para iniciar el efecto de explosión
function startExplosion() {
    interval = setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight * 0.80;

        const numParticles = 20 + Math.floor(Math.random() * 30); // Entre 20 y 50 partículas
        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement('div');
            particle.classList.add('explosionParticle');
            particle.style.zIndex = "" + zIndex;
            document.body.appendChild(particle);

            // Posición inicial
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';

            const angle = Math.random() * 2 * Math.PI;
            const distance = Math.random() * 200 + 100;
            const destX = Math.cos(angle) * distance;
            const destY = Math.sin(angle) * distance;

            particle.style.transform = 'translate(0, 0)';

            particle.style.setProperty('--translateX', destX + 'px');
            particle.style.setProperty('--translateY', destY + 'px');

            const size = Math.random() * 10 + 5;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';

            const colors = ['rgba(255, 69, 0, 0.9)', 'rgba(255, 140, 0, 0.9)', 'rgba(255, 215, 0, 0.9)']; // Diferentes tonos
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.boxShadow = '0 0 10px rgba(255, 69, 0, 0.9)';

            const duration = Math.random() * 1 + 0.5; // Duración entre 0.5s y 1.5s
            particle.style.animationDuration = duration + 's';

            setTimeout(() => {
                particle.remove();
            }, duration * 1000);
        }

    }, zIndex < 0 ? 1000 : 100);
}

// Función para iniciar el efecto de viaje espacial
function startSpaceTravel() {
    canvas = document.createElement('canvas');
    canvas.classList.add('spaceTravelCanvas');
    canvas.style.zIndex = "" + zIndex;
    if (zIndex > 0) {
        setTimeout(() => {
            canvas.style.animation = "spaceTravelFadeOut 8s ease-out forwards";
        }, 7500);
    }
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const numStars = 500;
    const stars = [];

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * width - width / 2,
            y: Math.random() * height - height / 2,
            z: Math.random() * width,
            o: Math.random() * 0.5 + 0.5, // Opacidad aleatoria para cada estrella
        });
    }

    const animate = () => {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, width, height);

        for (let i = 0; i < numStars; i++) {
            const star = stars[i];
            star.z -= 4; // Velocidad de las estrellas
            if (star.z <= 0) {
                star.z = width;
                star.x = Math.random() * width - width / 2;
                star.y = Math.random() * height - height / 2;
                star.o = Math.random() * 0.5 + 0.5;
            }

            const k = 128.0 / star.z;
            const sx = star.x * k + width / 2;
            const sy = star.y * k + height / 2;

            if (sx >= 0 && sx <= width && sy >= 0 && sy <= height) {
                const size = (1 - star.z / width) * 3;
                ctx.fillStyle = `rgba(255, 255, 255, ${star.o})`;
                ctx.beginPath();
                ctx.arc(sx, sy, size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        if (animationFrame) {
            animationFrame = requestAnimationFrame(animate);
        }
    };

    animationFrame = requestAnimationFrame(animate);
}

// Función para iniciar el efecto de aurora boreal
function startAuroraBorealis() {
    interval = setInterval(() => {
        const aurora = document.createElement('div');
        aurora.classList.add('aurora');
        aurora.style.zIndex = "" + zIndex;
        document.body.appendChild(aurora);

        // Establecer tamaño y posición
        const width = window.innerWidth;
        const height = Math.random() * window.innerHeight / 2;
        aurora.style.width = width + 'px';
        aurora.style.height = height + 'px';
        aurora.style.left = '0px';
        aurora.style.top = (Math.random() * window.innerHeight - height) + 'px'; // Aparece en la mitad superior de la pantalla

        const duration = Math.random() * 5 + 1;
        aurora.style.animationDuration = duration + 's';

        setTimeout(() => {
            aurora.remove();
        }, duration * 1000);
    }, zIndex < 0 ? 5000 : 500);
}

// Función para iniciar el efecto de olas del mar
function startSeaWaves() {
    canvas = document.createElement('canvas');
    canvas.classList.add('seaCanvas');
    canvas.style.zIndex = "" + zIndex;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.bottom = '0';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width = canvas.width;
    let height = canvas.height;

    let waveColors = [
        { start: 'rgba(0, 127, 255, 0.8)', end: 'rgba(0, 127, 255, 0.5)' },
        { start: 'rgba(0, 102, 204, 0.8)', end: 'rgba(0, 102, 204, 0.5)' },
        { start: 'rgba(0, 76, 153, 0.8)', end: 'rgba(0, 76, 153, 0.5)' },
    ];

    let offset = 0;

    const drawWaves = () => {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < waveColors.length; i++) {
            let gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, waveColors[i].start);
            gradient.addColorStop(1, waveColors[i].end);

            ctx.fillStyle = gradient;
            ctx.beginPath();

            let amplitude = window.innerHeight / 5 + i * window.innerHeight / 10; // Altura de las olas
            let frequency = 0.005 + i * 0.002; // Frecuencia de las olas

            ctx.moveTo(0, height);

            for (let x = 0; x <= width; x++) {
                let y =
                    Math.sin(x * frequency + offset + i) * amplitude +
                    (height / 2);
                ctx.lineTo(x, y);
            }

            ctx.lineTo(width, height);
            ctx.closePath();
            ctx.fill();
        }

        offset += 0.01; // Velocidad del movimiento de las olas
        animationFrame = requestAnimationFrame(drawWaves);
    };

    drawWaves();
}

// Función para iniciar el efecto de la matriz
function startMatrix() {
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.classList.add('matrixCanvas');
        canvas.style.zIndex = "" + zIndex;
        if (zIndex > 0) {
            setTimeout(() => {
                canvas.style.animation = "matrixFadeOut 7.5s ease-out forwards";
            }, 7500);
        }
        document.body.appendChild(canvas);
    }

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+';
    const fontSize = 16;
    const columns = Math.round(canvas.width / fontSize);
    const drops = Array(Math.floor(columns)).fill(0);

    interval = setInterval(() => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.025)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00FF00';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }, 50);
}

// Función para iniciar un efecto
function startEffect(effectName) {
    setEffect(effectName);
}
