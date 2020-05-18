package com.siyi.service.impl;

import com.siyi.NotFoundException;
import com.siyi.dao.TagRepository;
import com.siyi.pojo.Tag;
import com.siyi.service.TagService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class TagServiceImpl implements TagService {

    @Autowired
    private TagRepository tagRepository;

    @Override
    @Transactional
    public Tag saveTag(Tag type) {
        return tagRepository.save(type);
    }

    @Override
    public Tag getTag(Long id) {
        return tagRepository.findById(id).orElseThrow(()->new RuntimeException("getTag出现异常"));
    }

    @Override
    public Tag getTagByName(String name) {
        return tagRepository.findByName(name);
    }

    @Override
    @Transactional
    public Page<Tag> listTag(Pageable pageable) {
        return tagRepository.findAll(pageable);
    }

    @Override
    public List<Tag> listTag() {
        return tagRepository.findAll();
    }

    @Override
    public List<Tag> listTag(String ids) {
        return tagRepository.findAllById(convertroList(ids));
    }

    private List<Long> convertroList(String ids){
        List<Long> list = new ArrayList<>();
        if(!"".equals(ids) && ids!=null){
            String[] idarray = ids.split(",");
            for (int i=0;i<idarray.length;i++){
                list.add(new Long(idarray[i]));
            }
        }
        return list;
    }

    @Override
    @Transactional
    public Tag updateTag(Long id, Tag tag) {
        Tag t = tagRepository.findById(id).orElseThrow(() -> new RuntimeException("updateTag出现异常"));
        if(t == null){
            throw new NotFoundException("不存在该标签");
        }
        BeanUtils.copyProperties(tag,t);
        return tagRepository.save(t);
    }

    @Override
    @Transactional
    public void deleteTag(Long id) {
        tagRepository.deleteById(id);
    }

    @Override
    public List<Tag> listTagTop(Integer size) {
        Sort sort = Sort.by(Sort.Direction.DESC,"blogs.size");
        Pageable pageable = PageRequest.of(0,size,sort);
        return tagRepository.findTop(pageable);
    }
}
