import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksGalleryBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_gallery_blocks';
  info: {
    description: 'Multi-image gallery with layout choice.';
    displayName: 'Gallery Block';
    icon: 'images';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    layout: Schema.Attribute.Enumeration<['grid', 'carousel', 'masonry']> &
      Schema.Attribute.DefaultTo<'grid'>;
  };
}

export interface BlocksImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_image_blocks';
  info: {
    description: 'Single full-width image with optional caption.';
    displayName: 'Image Block';
    icon: 'picture';
  };
  attributes: {
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface BlocksQuoteBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_quote_blocks';
  info: {
    description: 'Pull quote with attribution.';
    displayName: 'Quote Block';
    icon: 'quote';
  };
  attributes: {
    attribution: Schema.Attribute.String;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface BlocksStatsBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_stats_blocks';
  info: {
    description: 'Match or season statistics. items: [{ label, value }].';
    displayName: 'Statistics Block';
    icon: 'chartBar';
  };
  attributes: {
    items: Schema.Attribute.JSON & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface BlocksTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_text_blocks';
  info: {
    description: 'Rich text paragraph for editorial story body.';
    displayName: 'Text Block';
    icon: 'align-left';
  };
  attributes: {
    body: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface BlocksVideoBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_video_blocks';
  info: {
    description: 'Embedded or hosted video with optional poster.';
    displayName: 'Video Block';
    icon: 'play';
  };
  attributes: {
    caption: Schema.Attribute.String;
    poster: Schema.Attribute.Media<'images'>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_infos';
  info: {
    description: 'Club contact details.';
    displayName: 'Contact Info';
    icon: 'phone';
  };
  attributes: {
    address: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    phone: Schema.Attribute.String;
  };
}

export interface SharedSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    description: 'Reusable set of social profile URLs.';
    displayName: 'Social Links';
    icon: 'link';
  };
  attributes: {
    facebook: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    tiktok: Schema.Attribute.String;
    twitter: Schema.Attribute.String;
    website: Schema.Attribute.String;
    youtube: Schema.Attribute.String;
  };
}

export interface SharedSponsor extends Struct.ComponentSchema {
  collectionName: 'components_shared_sponsors';
  info: {
    description: 'Club sponsor with logo and link.';
    displayName: 'Sponsor';
    icon: 'handshake';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.gallery-block': BlocksGalleryBlock;
      'blocks.image-block': BlocksImageBlock;
      'blocks.quote-block': BlocksQuoteBlock;
      'blocks.stats-block': BlocksStatsBlock;
      'blocks.text-block': BlocksTextBlock;
      'blocks.video-block': BlocksVideoBlock;
      'shared.contact-info': SharedContactInfo;
      'shared.social-links': SharedSocialLinks;
      'shared.sponsor': SharedSponsor;
    }
  }
}
