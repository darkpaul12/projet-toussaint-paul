import { Component } from '@angular/core';
import { ConnectionState } from "../shared/states/connection-state";
import { Observable } from "rxjs";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {

  public characters = [
    {
      name: 'Goku', powerLevel: 13000, image: 'https://cdn.dashfight.com/efb4a3c1d645737c5574446c146cc921f13b4f04_224.png', description: 'Goku est un guerrier Saiyan passionné, toujours en quête de défis et de perfectionnement, cherchant constamment à protéger ses proches et à surpasser ses propres limites.' },
    { name: 'Vegeta', powerLevel: 12000, image: 'https://cdn.dashfight.com/91ea34c84b7dbe78b175f7381a2f254bfdc2878f_224.png', description: 'Un prince Saiyan fier et déterminé, rival de Goku, qui cherche constamment à prouver sa supériorité.'},
    { name: 'Piccolo', powerLevel: 8000, image: 'https://cdn.dashfight.com/b4f5d18fd06fa9b8b25e91e34f5762d4c76a0351_224.png', description: 'Un guerrier Namek avec une sagesse profonde, souvent considéré comme un mentor et protecteur de la Terre.'},
    { name: 'Gohan', powerLevel: 9000, image: 'https://cdn.dashfight.com/f20c2e82a5998150550841a65e37593fe7893996_224.png', description: 'Fils de Goku, un guerrier doux et studieux qui cache un potentiel incroyable sous sa nature pacifique.'},
    { name: 'Krillin', powerLevel: 3000, image: 'https://cdn.dashfight.com/78f956c565d608fdfa4cc7d996a3fa19377d4928_224.png', description: 'Meilleur ami de Goku, un courageux combattant humain aux côtés des guerriers Saiyans.'},
    { name: 'Trunks', powerLevel: 7500, image: 'https://cdn.dashfight.com/b8e4e41b5956b614e966475823b4ef44a0f21d01_224.png', description: 'Le fils de Vegeta et Bulma, un guerrier Saiyan venu du futur doté.'},
    { name: 'Frieza', powerLevel: 8500, image: 'https://cdn.dashfight.com/bbbf416c19d99eae27206b5654e79652e5b5f898_224.png', description: 'Un tyran impitoyable et cruel, ennemi juré de Goku, Végéta et de tous les Saiyans.'},
    { name: 'Cell', powerLevel: 9000, image: 'https://cdn.dashfight.com/f88ec0d89f743c6b6c4f52c06767922bd6acd87d_224.png', description: 'Une créature bio-ingénierie perfectionniste, créée pour devenir un être parfait en absorbant Android 18 et Android 17.'},
    { name: 'Majin Buu', powerLevel: 15000, image: 'https://cdn.dashfight.com/e41f071002a5a0e57cfd3397deb9bb2edf25b08b_224.png', description: ' Une entité magique imprévisible et insatiable, capable de destruction mais aussi de moments de pure innocence.'},
    { name: 'Gotenks', powerLevel: 5500, image: 'https://cdn.dashfight.com/5c619dfc7df10e028a0f507ad917dbe33f0f5e5c_224.png', description: 'La fusion de Goten et Trunks, un guerrier puissant mais parfois immature, connu pour son arrogance.'},
    { name: 'Android 18', powerLevel: 7000, image: 'https://cdn.dashfight.com/4545b4890489e87c70d044c45866ea8e48fde594_224.png', description: 'Une ancienne cybernétique, maintenant réhabilitée, qui a trouvé la paix et amour après avoir combattu pour la destruction.'},
    { name: 'Android 17', powerLevel: 7500, image: 'https://cdn.dashfight.com/afd2c7254f87b8a6748ebca3d2ab6518e803f810_224.png', description: 'Un ancien ennemi des Z Fighters et frère ainé de Android 18, désormais protecteur de la nature et de la faune.'},
    { name: 'Beerus', powerLevel: 20000, image: 'https://cdn.dashfight.com/00a81609276ccaa8d4ae71c5c6c37d9dc7ea044a_224.png', description: 'Le Dieu de la Destruction, un être capricieux mais extrêmement puissant, chargé de maintenir son univers.'},
    { name: 'Jiren', powerLevel: 25000, image: 'https://cdn.dashfight.com/defec7313c3d8205a7c1b88c5fd9f82dda1b0ac4_224.png', description: 'Un guerrier silencieux et mystérieux, possédant une force prodigieuse et une détermination inébranlable.'},
    { name: 'Kefla', powerLevel: 10000, image: 'https://cdn.dashfight.com/54279152b0bcb0d507fe9a3b64b90781f60267ec_224.png', description: 'La fusion de Caulifla et Kale, deux Saiyans, avec une puissance explosive et un esprit compétitif capable de rivaliser avec Goku et Végéta.'},
    { name: 'Super Baby', powerLevel: 6000, image: 'https://cdn.dashfight.com/97221e6ba6a5964fa284e0f812c84b41efddbf43_224.png', description: 'Une entité maléfique née de la haine des Tuffles envers les Saiyans, cherchant à se venger.'},
  ];
}
export interface Characters {
  name: string;
  image: string;
  powerLevel: number;
  description: string;
}
