"use client"

import { title } from "@/components/primitives";
import {Card, CardBody, CardFooter, Divider, Link} from "@nextui-org/react"

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About</h1>
      <Card className="my-8">
      <CardBody>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a eros gravida, rhoncus ipsum nec, convallis diam. Donec eget accumsan nisl, vitae sollicitudin purus. Quisque tempus laoreet massa, at imperdiet nisi volutpat vel. Ut et gravida diam. Donec vestibulum bibendum laoreet. Donec vitae arcu blandit nisi hendrerit dictum. Duis ultricies tristique nunc eu tincidunt. Nam nisi augue, accumsan sed luctus fermentum, tempus vitae mauris. Maecenas malesuada felis id scelerisque placerat. Sed blandit risus id pulvinar tempus. Nulla nec pretium risus.

Pellentesque ac dolor massa. Phasellus congue enim consequat hendrerit tincidunt. Sed bibendum, tortor sit amet convallis accumsan, felis augue eleifend odio, eget vulputate massa purus sit amet est. Aenean nisi risus, sollicitudin vel odio nec, dapibus pharetra orci. Fusce eros massa, pulvinar non faucibus in, fringilla eget urna. Maecenas et convallis purus. Nulla ultrices rhoncus pharetra. Vivamus enim purus, facilisis a ante sed, lobortis tempor libero. Aenean tristique nunc non mi efficitur accumsan. Pellentesque sodales, diam non aliquam pharetra, nibh lacus varius est, lacinia dapibus ligula ex at quam. Curabitur dignissim sapien sem, id pharetra neque pellentesque quis. Praesent in neque eu leo rutrum sollicitudin convallis eu lorem. Donec convallis risus et nisi lobortis, at finibus neque suscipit. Pellentesque posuere feugiat placerat. Vestibulum condimentum finibus lacus, id porta felis ultricies et.

Fusce fermentum quis diam eu vulputate. Praesent mauris tellus, posuere non finibus non, tincidunt ut massa. Praesent luctus mi sed nulla consectetur, ut dictum purus maximus. Ut ligula elit, pretium vitae augue eget, placerat laoreet diam. Suspendisse at malesuada velit, sit amet eleifend elit. Aliquam tempor tellus non dui mattis, posuere posuere dui euismod. Cras maximus vulputate augue, sollicitudin rutrum elit dapibus eu. Integer at ante molestie, tristique nisi vel, suscipit sem. Quisque sed posuere leo, nec fringilla ante. Donec porttitor sapien vel pellentesque dapibus. Fusce congue sagittis quam non malesuada. Praesent urna elit, ultrices ut elit eget, dictum hendrerit dui. Integer interdum quam sit amet rutrum congue. Pellentesque nec erat dapibus, imperdiet magna dignissim, viverra arcu. Donec ornare odio urna, et fringilla est tincidunt quis.

In tortor tortor, rhoncus eu aliquet eu, ultricies id justo. Cras et pellentesque nulla. Curabitur quis quam nibh. Cras rhoncus euismod ornare. Donec ac orci diam. Vivamus nisi magna, ornare nec neque in, facilisis auctor nisl. Phasellus nulla est, rutrum eu augue sit amet, rutrum ullamcorper diam. Sed magna mauris, convallis id ornare ac, convallis a libero. In accumsan dictum quam, a finibus turpis convallis non.

Nam id lectus sit amet est malesuada elementum nec et odio. Vivamus venenatis lacus id sapien pellentesque lacinia. Etiam fermentum arcu sit amet mauris sagittis volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nunc sapien, euismod eu tempor ut, posuere in massa. Pellentesque in molestie erat. Maecenas elit turpis, facilisis at nisl quis, pellentesque tristique velit. Vivamus non nunc malesuada, condimentum orci et, facilisis sem. Donec eu euismod risus, ut fermentum velit. Vestibulum scelerisque nulla eros, ac rutrum augue maximus ac. Quisque eros turpis, accumsan id semper sagittis, rhoncus fermentum metus.

Integer pellentesque massa condimentum risus aliquam egestas. Morbi feugiat eu massa ut congue. Mauris vitae interdum arcu. Quisque luctus felis diam, at viverra arcu pellentesque vel. Curabitur eget urna non nisi suscipit sodales ut et nisl. In rhoncus id sem vel molestie. Vestibulum condimentum convallis vehicula. Vestibulum interdum neque quis leo tincidunt auctor. Ut non nibh ut risus convallis tincidunt nec ac metus. Phasellus fermentum fermentum leo, vitae eleifend magna ullamcorper vel. In nec quam interdum risus porttitor molestie. Integer condimentum accumsan tincidunt. Cras orci est, semper a viverra at, feugiat vitae mi. Nulla non tellus sed augue sagittis blandit. Aliquam dapibus eros velit, vitae bibendum risus eleifend blandit. Vestibulum commodo aliquet venenatis.

Phasellus dignissim nulla at felis consequat, eget volutpat lacus bibendum. Morbi rutrum faucibus diam, at rutrum erat rhoncus sed. Curabitur porta a risus non dictum. Maecenas ultrices eleifend auctor. Integer lorem justo, lobortis eu hendrerit sed, dictum at neque. Cras orci orci, tincidunt nec rutrum sed, vehicula et dolor. In hac habitasse platea dictumst. Etiam aliquet pellentesque orci in sollicitudin. In purus urna, luctus ac feugiat mollis, euismod non nulla. Phasellus vel nibh et libero finibus laoreet. Nunc eu nisi varius, ultricies neque vel, condimentum ipsum. Nam rutrum risus vel porttitor tempor. Nulla urna lectus, cursus eu tincidunt vel, hendrerit ac diam.

Suspendisse tortor ante, finibus at bibendum et, auctor a lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur, mauris sit amet imperdiet dapibus, mauris nisi gravida dolor, ut euismod quam ex id nibh. Aenean lobortis sit amet dui at ultricies. Etiam placerat euismod metus, non sagittis dui auctor laoreet. Curabitur facilisis felis quis mauris ullamcorper, sed cursus enim rhoncus. Ut commodo, augue ut pellentesque fermentum, odio erat hendrerit diam, eu vulputate tellus augue ut velit. Vestibulum dignissim euismod odio, ultrices efficitur diam congue ac.</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          className="mr-4"
          href="https://modelai.net/terms-of-service"
        >
          Terms of service
        </Link>
        <Link
          isExternal
          showAnchorIcon
          className="mr-4"
          href="https://modelai.net/privacy-policy"
        >
          Privacy policy
        </Link>
        
      </CardFooter>
    </Card>
    </div>
    
  );
}
