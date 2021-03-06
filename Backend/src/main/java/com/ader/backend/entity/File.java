package com.ader.backend.entity;

import lombok.*;

import javax.persistence.*;
import java.util.UUID;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "files")
@Data
@NoArgsConstructor
@AllArgsConstructor
@SequenceGenerator(name = "generic_gen", sequenceName = "files_seq", allocationSize = 1)
public class File extends BaseEntity {

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn
  @ToString.Exclude
  private Offer offer;

  @ManyToOne
  @JoinColumn
  @ToString.Exclude
  private User user;

  @Column(nullable = false)
  private UUID uuid;

  @Column(name = "name", nullable = false)
  private String name;

  @Column(name = "type", nullable = false)
  private String type;

  @Column(name = "bytes", length = 1000)
  private byte[] bytes;
}
